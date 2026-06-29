import { getFeaturedProjects } from "../../lib/content";
import ProjectCard from "../ProjectCard";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
