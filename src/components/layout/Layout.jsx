import ThemeToggle from "../ThemeToggle";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black dark:text-white flex flex-col">
      {/* HEADER */}
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="font-bold">Portfolio</h1>
        <ThemeToggle />
      </header>

      {/* BODY (SIDEBAR + MAIN) */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 border-r p-4">
          <Sidebar />
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
