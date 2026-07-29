import { getProject, getProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* TITLE */}
      <h1 className="text-4xl font-bold">{project.title}</h1>

      {/* SUMMARY */}
      <p className="mt-4 text-lg text-gray-600">{project.summary}</p>

      {/* LINKS */}
      <div className="flex gap-4 mt-6">
        {project.demo && (
          <a
            href={project.demo}
            className="px-4 py-2 border rounded-lg"
            target="_blank"
          >
            Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            className="px-4 py-2 border rounded-lg"
            target="_blank"
          >
            GitHub
          </a>
        )}
      </div>

      {/* CONTENT */}
      <article className="prose prose-gray mt-10 max-w-none">
        <MDXRemote source={project.content} />
      </article>
    </main>
  );
}
