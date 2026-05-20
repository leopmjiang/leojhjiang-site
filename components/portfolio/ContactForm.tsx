"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  conversationType: string;
  opportunityLink: string;
  message: string;
  timeline: string;
  preferredFollowUp: string;
  linkedinProfile: string;
  website: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const CONVERSATION_OPTIONS = [
  "Product role / hiring opportunity",
  "Contract or consulting opportunity",
  "Product collaboration",
  "Portfolio / case study question",
  "Speaking, mentoring, or networking",
  "Other",
];

const TIMELINE_OPTIONS = ["ASAP", "This week", "This month", "Flexible / no rush"];
const FOLLOW_UP_OPTIONS = ["Email", "LinkedIn", "Phone / video call"];

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  company: "",
  conversationType: "",
  opportunityLink: "",
  message: "",
  timeline: "",
  preferredFollowUp: "",
  linkedinProfile: "",
  website: "",
};

function isValidUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function validate(values: FormState): Errors {
    const nextErrors: Errors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.conversationType) {
      nextErrors.conversationType = "Please choose a conversation type.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please add a message.";
    }

    if (values.opportunityLink && !isValidUrl(values.opportunityLink)) {
      nextErrors.opportunityLink = "Please enter a valid URL.";
    }

    if (values.linkedinProfile && !isValidUrl(values.linkedinProfile)) {
      nextErrors.linkedinProfile = "Please enter a valid URL.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setStatus("idle");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/start-conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setForm(INITIAL_STATE);
      setStatus("success");
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5" aria-describedby="contact-form-feedback">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          value={form.website}
          onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
        />
      </div>

      <Field label="Your name" required error={errors.name} htmlFor="name">
        <input
          id="name"
          className="field"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
      </Field>

      <Field label="Email" required error={errors.email} htmlFor="email">
        <input
          id="email"
          type="email"
          className="field"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
      </Field>

      <Field label="Company / Organization" htmlFor="company">
        <input
          id="company"
          className="field"
          value={form.company}
          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
        />
      </Field>

      <Field label="What would you like to discuss?" required error={errors.conversationType} htmlFor="conversationType">
        <select
          id="conversationType"
          className="field"
          value={form.conversationType}
          onChange={(event) => setForm((prev) => ({ ...prev, conversationType: event.target.value }))}
          aria-invalid={Boolean(errors.conversationType)}
          aria-describedby={errors.conversationType ? "conversationType-error" : undefined}
        >
          <option value="">Select an option</option>
          {CONVERSATION_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Role or opportunity link" error={errors.opportunityLink} htmlFor="opportunityLink">
        <input
          id="opportunityLink"
          type="url"
          className="field"
          value={form.opportunityLink}
          onChange={(event) => setForm((prev) => ({ ...prev, opportunityLink: event.target.value }))}
          aria-invalid={Boolean(errors.opportunityLink)}
          aria-describedby={errors.opportunityLink ? "opportunityLink-error" : undefined}
        />
      </Field>

      <Field
        label="Message"
        required
        helperText="Share the context, opportunity, problem, or question."
        error={errors.message}
        htmlFor="message"
      >
        <textarea
          id="message"
          rows={5}
          className="field"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      <Field label="Timeline" htmlFor="timeline">
        <select
          id="timeline"
          className="field"
          value={form.timeline}
          onChange={(event) => setForm((prev) => ({ ...prev, timeline: event.target.value }))}
        >
          <option value="">Select a timeline</option>
          {TIMELINE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Preferred follow-up method" htmlFor="preferredFollowUp">
        <select
          id="preferredFollowUp"
          className="field"
          value={form.preferredFollowUp}
          onChange={(event) => setForm((prev) => ({ ...prev, preferredFollowUp: event.target.value }))}
        >
          <option value="">Select a method</option>
          {FOLLOW_UP_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="LinkedIn profile" error={errors.linkedinProfile} htmlFor="linkedinProfile">
        <input
          id="linkedinProfile"
          type="url"
          className="field"
          value={form.linkedinProfile}
          onChange={(event) => setForm((prev) => ({ ...prev, linkedinProfile: event.target.value }))}
          aria-invalid={Boolean(errors.linkedinProfile)}
          aria-describedby={errors.linkedinProfile ? "linkedinProfile-error" : undefined}
        />
      </Field>

      <p className="text-sm text-neutral-400">Your information will only be used to review and respond to your message.</p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <div id="contact-form-feedback" aria-live="polite" className="min-h-6 text-sm">
        {status === "success" && (
          <p className="text-emerald-300">
            Thanks for reaching out. Your message has been received and I’ll follow up directly if there’s a relevant fit or next step.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-300">
            Something went wrong while sending your message. Please try again or contact me directly by email.
          </p>
        )}
        {hasErrors && status === "idle" && <p className="text-red-300">Please review the highlighted fields and try again.</p>}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  required,
  helperText,
  error,
}: {
  label: string;
  htmlFor: keyof FormState;
  children: ReactNode;
  required?: boolean;
  helperText?: string;
  error?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-neutral-200">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      {children}
      {helperText ? <p className="text-xs text-neutral-400">{helperText}</p> : null}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
