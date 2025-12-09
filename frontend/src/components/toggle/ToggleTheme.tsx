import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

import { Button } from "../ui/button";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <Button
      aria-label="Toggle Theme Button"
      className="bg-cat-base dark:text-ctp-green-200 text-cat-text dark:border-ctp-green-200 border-cat-text border hover:bg-gruv-bg-hard"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
