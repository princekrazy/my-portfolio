import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      {/* CLICKABLE AREA */}
      <Link to={`/projects/${project.id}`} className="block">
        <h3 className="text-xl font-bold hover:underline">{project.title}</h3>

        <p className="text-gray-600 text-sm mt-1">{project.description}</p>

        <div className="flex gap-2 mt-2 flex-wrap">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-gray-200 text-black px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </Link>

      {/* EXTERNAL LINKS (NOT PART OF ROUTE CLICK) */}
      <div className="flex gap-4 mt-3 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            GitHub
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-green-600"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
