import { otherProjects } from "../lib/content";
import ProjectCard from "./ProjectCard";

export default function OtherProjects() {
  return (
    <section className="mt-10 bg-white text-black dark:bg-black dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Other Projects</h2>

      <div className="space-y-3">
        {otherProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
