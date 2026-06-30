import { Link } from "react-router-dom";
import { getSidebarNav } from "../../lib/navigation";

export default function Sidebar() {
  const nav = getSidebarNav();

  return (
    <aside className="w-64 p-4 border-r min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="mb-4 font-bold">Menu</div>

      <nav className="flex flex-col gap-2 mb-6">
        {nav.main.map((item) =>
          item.path.includes("#") ? (
            <a key={item.path} href={item.path}>
              {item.label}
            </a>
          ) : (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ),
        )}
      </nav>
      <div className="text-sm font-semibold mb-2">Projects</div>

      <nav className="flex flex-col gap-1">
        {nav.projects.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-sm text-gray-600 hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
