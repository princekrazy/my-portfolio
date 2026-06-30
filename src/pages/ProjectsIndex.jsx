import { useState } from "react";
import { featuredProjects, otherProjects } from "../lib/content";
import ProjectsFilter from "../components/ProjectsFilter";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function ProjectsIndex() {
  const allProjects = [...featuredProjects, ...otherProjects];

  const tags = [...new Set(allProjects.flatMap((p) => p.tech))];

  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? allProjects
      : allProjects.filter((p) => p.tech.includes(active));

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Filter by Technologies</h1>

        <ProjectsFilter tags={tags} active={active} setActive={setActive} />

        <div className="grid gap-3 mt-4">
          {filtered.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="border p-3 rounded hover:bg-gray-50"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
