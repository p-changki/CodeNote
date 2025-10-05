import { UserMenu } from "../UserMenu";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./Header.module.css";
import { useTheme } from "../../context/themeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <h1>My App</h1>
      <div className={styles.actionsContainer}>
        <UserMenu />
        <button className={styles.toggleButton} onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
}
