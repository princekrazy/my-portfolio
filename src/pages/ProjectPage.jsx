import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { getProjectById } from "../lib/content";

export default function ProjectPage() {
  const { id } = useParams();
  const project = getProjectById(id);
  console.log("Route ID:", id);

  if (!project) {
    return (
      <Layout>
        <div className="p-6">Project not found</div>
      </Layout>
    );
  }

  const Content = project.content;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        {/* HEADER */}
        <h1 className="text-3xl font-bold">{project.title}</h1>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* LINKS */}
        <div className="flex gap-4 mb-6 text-blue-500">
          {project.github && <a href={project.github}>GitHub</a>}
          {project.live && <a href={project.live}>Live</a>}
        </div>

        {/* 🚨 THIS IS WHAT WAS MISSING */}
        <article className="prose dark:prose-invert max-w-none">
          <Content />
        </article>
      </div>
    </Layout>
  );
}
