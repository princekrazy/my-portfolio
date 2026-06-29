import { featuredProjects } from "../lib/content";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 bg-white text-black dark:bg-black dark:text-white">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
