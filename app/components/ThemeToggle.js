"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="  flex items-center justify-center   px-2 py-1.5 text-slate-300 hover:scale-125"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span
        className={`transition-transform duration-300 ${
          theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      >
        <FiSun size={24} />
      </span>
      <span
        className={`absolute transition-transform duration-300 ${
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      >
        <FiMoon size={24} />
      </span>
      <span className="z-50 invisible absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-slate-600 px-1.5 py-1 text-xs font-medium text-white group-hover:visible whitespace-nowrap">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}

/* return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      <span
        className={`transition-transform ${
          resolvedTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      >
        <FiSun size={24} color="#95979b" />
      </span>
      <span
        className={`absolute transition-transform ${
          resolvedTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      >
        <FiMoon size={24} color="#95979b" />
      </span>
      <span className="z-50 invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-slate-600 px-1.5 py-1 text-xs font-medium text-white group-hover:visible whitespace-nowrap">
        {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  ); */
