"use client";

import { useState } from "react";

import { contact } from "@/data/portfolio";
import { ContactForm } from "./ContactForm";
import { SecondaryLink, Section } from "./ui";

export function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Section id="start-conversation">
      <div className="rounded-[2rem] border border-orange-400/20 bg-orange-400/10 p-8 sm:p-10 lg:p-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Start a Conversation</h2>
            <p className="mt-4 max-w-2xl text-neutral-300">
              Share a role, product opportunity, collaboration idea, or question.
            </p>
            <p className="mt-6 max-w-2xl text-neutral-300">
              Have a product role, collaboration idea, or interesting problem worth discussing? Share a few details below and
              I’ll follow up directly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setIsFormOpen((current) => !current)}
              aria-expanded={isFormOpen}
              aria-controls="conversation-form-panel"
              className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
            >
              {isFormOpen ? "Hide Conversation Form" : "Start a Conversation"}
            </button>
            <SecondaryLink href={`mailto:${contact.email}`}>Prefer email instead?</SecondaryLink>
          </div>
        </div>

        {isFormOpen ? (
          <div id="conversation-form-panel">
            <ContactForm />
          </div>
        ) : null}
      </div>
    </Section>
  );
}
