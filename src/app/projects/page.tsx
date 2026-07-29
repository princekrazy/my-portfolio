import { getProjects } from "@/lib/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = getProjects();

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold">Projects</h1>

      {/* FEATURED */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>

        <div className="grid gap-6 mt-6">
          {featured.map((p) => (
            <Link href={`/projects/${p.slug}`}>
              <div key={p.slug} className="border p-6 rounded-xl">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-600">{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Project Archive</h2>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {others.map((p) => (
            <Link href={`/projects/${p.slug}`}>
              <div key={p.slug} className="border p-4 rounded-lg">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
