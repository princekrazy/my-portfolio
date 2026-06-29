import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-bold">{project.title}</h3>

      <p className="text-gray-600 text-sm mt-1">{project.description}</p>

      <div className="flex gap-2 mt-2 flex-wrap">
        {project.tech.map((t) => (
          <span key={t} className="text-xs bg-gray-200 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-3 text-sm">
        <Link to={`/projects/${project.id}`} className="text-blue-600">
          View
        </Link>

        {project.github && <a href={project.github}>GitHub</a>}

        {project.live && <a href={project.live}>Live</a>}
      </div>
    </div>
  );
}
