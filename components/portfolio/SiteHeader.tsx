import { contact } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="text-sm font-semibold tracking-wide text-white">
          Leo Jiang
        </a>

        <div className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          <a href="#case-studies" className="transition hover:text-orange-300">
            Work
          </a>
          <a href="#experience" className="transition hover:text-orange-300">
            Experience
          </a>
          <a href="#skills" className="transition hover:text-orange-300">
            Skills
          </a>
          <a href={contact.linkedin} className="transition hover:text-orange-300">
            LinkedIn
          </a>
          <ContactButton />
        </div>

        <ContactButton className="md:hidden" />
      </nav>
    </header>
  );
}

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`mailto:${contact.email}`}
      className={`rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400 ${className}`}
    >
      Contact
    </a>
  );
}
