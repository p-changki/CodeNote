import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
  } catch (error) {
    console.error("Fail", error);
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.error("Failed to access localStorage", e);
    }
  }, [theme]);

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
