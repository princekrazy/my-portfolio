import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <main className="max-w-5xl mx-auto px-6">
      <section className="py-24">
        <h1 className="text-5xl font-bold">Your Name</h1>

        <p className="mt-4 text-xl text-gray-600">
          Full-Stack Developer building practical web applications.
        </p>
      </section>

      <section className="py-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>

        <div className="grid gap-6 mt-6">
          {featured.map((project) => (
            <div key={project.slug} className="border p-6 rounded-xl">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-gray-600 mt-2">{project.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
