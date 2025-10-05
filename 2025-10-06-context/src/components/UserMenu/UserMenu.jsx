import { useTheme } from "../../context/themeContext";
import styles from "./UserMenu.module.css";
import clsx from "clsx";

export function UserMenu() {
  const { theme } = useTheme();
  return (
    <div className={clsx(styles.userMenu, theme === "dark" && styles.dark)}>
      Welcome, Guest!
    </div>
  );
}
