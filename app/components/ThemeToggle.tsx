// components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setTheme("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      className="w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1 bg-light text-dark"
      aria-label="theme-switcher"
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="w-full h-auto fill-dark"
      >
        <circle cx="12" cy="12" r="10" fill="currentColor" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
