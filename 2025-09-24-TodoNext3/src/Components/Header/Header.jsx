import { useTheme } from "../../context/ThemeContext";
import styles from "./Header.module.css";
import { MdDarkMode } from "react-icons/md";
import { UserMenu } from "../UserMenu";
import { FaRegLightbulb } from "react-icons/fa";
export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.HeaderWrap}>
      <h1>My App</h1>
      <div className={styles.actionsContainer}>
        <UserMenu />
        <button className={styles.toggleButton} onClick={toggleTheme}>
          {theme === "light" ? <MdDarkMode /> : <FaRegLightbulb />}
        </button>
      </div>
    </div>
  );
}
