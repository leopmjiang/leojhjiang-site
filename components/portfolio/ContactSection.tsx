import { contact } from "@/data/portfolio";
import { PrimaryLink, SecondaryLink, Section } from "./ui";

export function ContactSection() {
  return (
    <Section>
      <div className="rounded-[2rem] border border-orange-400/20 bg-orange-400/10 p-8 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Looking for a PM who can bring structure to complexity?
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-300">
              I’m interested in product roles focused on B2B SaaS,
              AI-enabled workflows, operational platforms, and complex user
              systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <PrimaryLink href={`mailto:${contact.email}`}>Contact me</PrimaryLink>
            <SecondaryLink href={contact.linkedin}>LinkedIn</SecondaryLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
