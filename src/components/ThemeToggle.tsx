"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="btn-theme-switcher"
      aria-label="Toggle theme"
    >
      <Moon className="h-5 w-5 block dark:hidden" />
      <Sun className="h-5 w-5 hidden dark:block" />
    </button>
  );
}
