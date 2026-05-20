import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
  name?: string;
  email?: string;
  company?: string;
  conversationType?: string;
  opportunityLink?: string;
  message?: string;
  timeline?: string;
  preferredFollowUp?: string;
  linkedinProfile?: string;
  website?: string;
};

type SubmissionRecord = { count: number; resetAt: number };

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const submissionStore = new Map<string, SubmissionRecord>();

const requiredVars = [
  "JIRA_BASE_URL",
  "JIRA_EMAIL",
  "JIRA_API_TOKEN",
  "JIRA_SERVICE_DESK_ID",
  "JIRA_REQUEST_TYPE_ID",
] as const;

function cleanupStore(now: number) {
  for (const [key, record] of submissionStore.entries()) {
    if (record.resetAt < now) {
      submissionStore.delete(key);
    }
  }
}

function checkRateLimit(ip: string, now: number) {
  cleanupStore(now);

  const record = submissionStore.get(ip);

  if (!record || record.resetAt < now) {
    submissionStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  submissionStore.set(ip, { ...record, count: record.count + 1 });
  return true;
}

function validatePayload(payload: RequestBody) {
  if (!payload.name?.trim() || !payload.email?.trim() || !payload.conversationType || !payload.message?.trim()) {
    return "Please complete all required fields.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Please provide a valid email address.";
  }

  const urlFields = [payload.opportunityLink, payload.linkedinProfile].filter(Boolean) as string[];
  const urlIsValid = urlFields.every((value) => {
    try {
      const parsed = new URL(value);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  });

  if (!urlIsValid) {
    return "Please provide valid URLs.";
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as RequestBody;

    if (payload.website?.trim()) {
      return NextResponse.json({ ok: true }, { status: 202 });
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const withinLimit = checkRateLimit(ip, Date.now());

    if (!withinLimit) {
      return NextResponse.json(
        { message: "Too many submissions. Please wait a moment and try again." },
        { status: 429 },
      );
    }

    const validationError = validatePayload(payload);
    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    const missingVar = requiredVars.find((key) => !process.env[key]);
    if (missingVar) {
      console.error("Contact form configuration missing required environment variable.", { key: missingVar });
      return NextResponse.json({ message: "Unable to process this message right now." }, { status: 500 });
    }

    const summary = `Portfolio inquiry: ${payload.conversationType} from ${payload.name}`;
    const description = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company / Organization: ${payload.company || "Not provided"}`,
      `Conversation type: ${payload.conversationType}`,
      `Role or opportunity link: ${payload.opportunityLink || "Not provided"}`,
      `Message: ${payload.message}`,
      `Timeline: ${payload.timeline || "Not provided"}`,
      `Preferred follow-up method: ${payload.preferredFollowUp || "Not provided"}`,
      `LinkedIn profile: ${payload.linkedinProfile || "Not provided"}`,
    ].join("\n");

    const jiraResponse = await fetch(`${process.env.JIRA_BASE_URL}/rest/servicedeskapi/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${Buffer.from(`${process.env.JIRA_EMAIL}:${process.env.JIRA_API_TOKEN}`).toString("base64")}`,
      },
      body: JSON.stringify({
        serviceDeskId: process.env.JIRA_SERVICE_DESK_ID,
        requestTypeId: process.env.JIRA_REQUEST_TYPE_ID,
        requestFieldValues: {
          summary,
          description,
          email: payload.email,
        },
      }),
    });

    if (!jiraResponse.ok) {
      console.error("Jira request failed", { status: jiraResponse.status });
      return NextResponse.json({ message: "Unable to process this message right now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    console.error("Start conversation request failed.");
    return NextResponse.json(
      {
        message:
          "Something went wrong while sending your message. Please try again or contact me directly by email.",
      },
      { status: 500 },
    );
  }
}
