export default function ProjectsFilter({ tags, active, setActive }) {
  return (
    <div className="flex gap-2 flex-wrap mb-4 bg-white text-black dark:bg-black dark:text-white">
      <button
        onClick={() => setActive("all")}
        className={`px-3 py-1 border rounded ${
          active === "all" ? "bg-black text-white" : ""
        }`}
      >
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setActive(tag)}
          className={`px-3 py-1 border rounded ${
            active === tag ? "bg-black text-white" : ""
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
