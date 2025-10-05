import { ThemeContext } from "../context/themeContext";
import { useEffect, useState } from "react";

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
  } catch (error) {
    console.error("failed to access localStorage", error);
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

export function ThemeProviders({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("failed to access localStorage", error);
    }
  }, [theme]);
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
