// src/components/Skills.jsx

const skills = {
  Frontend: ["React", "Next.js", "React Native", "TypeScript", "Tauri"],
  Backend: ["Node.js", "Laravel", "FastAPI", "REST APIs"],
  Languages: ["Java", "Python", "Rust", "TypeScript", "Javascript", "C++"],
  Database: ["MySQL"],
};

export default function Skills() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border p-6 bg-white dark:bg-neutral-900"
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>

            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-black dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
