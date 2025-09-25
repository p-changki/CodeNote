import { useTheme } from "../../context/ThemeContext";
import styles from "./userMenu.module.css";

export function UserMenu() {
  const { theme } = useTheme();
  return (
    <div className={(styles.useMenu, theme === "dark" && styles.dark)}>
      Welcome, Guest
    </div>
  );
}
