import Container from "@/app/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <section className="py-24">
          <h1 className="text-4xl font-bold tracking-tight">
            Hi, I'm Simon.
          </h1>

          <h2 className="mt-4 text-2xl text-[var(--muted)]">
            I build software and explore AI.
          </h2>

          <p className="mt-6 max-w-2xl text-[var(--muted)]">
            I'm an Artificial Intelligence student interested in machine
            learning, software engineering, and building useful technology.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/#projects"
              className="rounded-lg bg-[var(--accent)] px-5 py-3 text-white transition-colors hover:opacity-90"
            >
              View projects
            </Link>

            <Link
              href="/#contact"
              className="rounded-lg border border-[var(--border)] px-5 py-3 transition-colors hover:bg-[var(--surface)]"
            >
              Contact me
            </Link>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Projects
            </h2>

            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              Here are some of the things I've been working on.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--border)] p-6">
              <h3 className="text-xl font-semibold">
                Project One
              </h3>

              <p className="mt-3 text-[var(--muted)]">
                A short description of the project will go here.
              </p>

              <p className="mt-4 text-sm text-[var(--accent)]">
                Python · Machine Learning · AI
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border)] p-6">
              <h3 className="text-xl font-semibold">
                Project Two
              </h3>

              <p className="mt-3 text-[var(--muted)]">
                A short description of the project will go here.
              </p>

              <p className="mt-4 text-sm text-[var(--accent)]">
                TypeScript · React · Next.js
              </p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}