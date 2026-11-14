"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load the saved theme when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    // Update the HTML attribute
    document.documentElement.setAttribute("data-theme", newTheme);

    // Save the preference
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm hover:bg-[var(--surface)] transition-colors"
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}