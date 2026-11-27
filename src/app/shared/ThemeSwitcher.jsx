"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => (
    typeof document !== "undefined" && document.documentElement.classList.contains("light")
      ? "light"
      : "dark"
  ));
  const [hovered, setHovered] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    root.classList.remove("light", "dark");
    root.classList.add(next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const isDark = theme === "dark";
  const colors = isDark
    ? "border-[#4a5b75] bg-[#27354a] text-[#b4bfd1] hover:bg-[#33445e] hover:text-[#f7f9fd]"
    : "border-[#dfe4ed] bg-white text-[#68738a] hover:bg-[#f7f9fc] hover:text-[#172033]";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`grid size-10 shrink-0 cursor-pointer place-items-center rounded-xl border p-0 font-normal outline-none transition-all duration-250 ${colors} ${hovered ? "-translate-y-px" : ""}`}
      aria-label="Toggle color theme"
      title="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
