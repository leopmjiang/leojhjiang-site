export default function Home() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        Leo Jiang
      </h1>

      <p className="text-lg mb-6">
        Senior Product Manager with 8+ years building enterprise SaaS platforms.
        Focused on complex, data-driven systems and operational workflows.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>Led AI simulation platform for mining operations</li>
          <li>Owned roadmap across engineering, data science, and customer teams</li>
          <li>Reduced backlog from 2000+ to under 100 prioritized items</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: your-email@example.com</p>
      </section>
    </main>
  );
}