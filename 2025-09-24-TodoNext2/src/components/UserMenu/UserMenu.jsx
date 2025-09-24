import { useTheme } from "../../context/ThemeContext";
import styles from "./UserMenu.module.css";

export function UserMenu() {
  const { theme } = useTheme();
  return (
    <div className={(styles.UserMenu, theme === "dark" && styles.dark)}>
      Welcome, Guest!
    </div>
  );
}
