import ThemeToggle from "../ThemeToggle";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black dark:text-white flex flex-col">
      {/* HEADER */}
      <header className="grid grid-cols-3 items-center p-4 border-b font-bold">
        <div>SOFTWARE ENGINEER</div>

        <h1 className="justify-self-center font-bold text-3xl">
          PRINCE KUVENGA
        </h1>

        <div className="justify-self-end">
          <ThemeToggle />
        </div>
      </header>

      {/* BODY (SIDEBAR + MAIN) */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 border-r p-4 sticky top-0 h-screen">
          <Sidebar />
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
