import { useEffect, useState } from "react";
import { getTheme, setTheme } from "../lib/theme";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState("light");

  useEffect(() => {
    const t = getTheme();
    setThemeState(t);
    setTheme(t);
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setThemeState(next);
    setTheme(next);
  }

  return (
    <button onClick={toggle} className="px-3 py-1 border rounded">
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
