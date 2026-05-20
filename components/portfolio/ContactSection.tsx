import { contact } from "@/data/portfolio";
import { ContactForm } from "./ContactForm";
import { SecondaryLink, Section } from "./ui";

export function ContactSection() {
  return (
    <Section id="start-conversation">
      <div className="rounded-[2rem] border border-orange-400/20 bg-orange-400/10 p-8 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
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
            <SecondaryLink href={`mailto:${contact.email}`}>Prefer email instead?</SecondaryLink>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
