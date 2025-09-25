import styles from "./Content.module.css";
import { useTheme } from "../../context/ThemeContext";

export function Content() {
  const { theme } = useTheme();
  return (
    <div className={styles.contentWrap}>
      <h2>{theme === "light" ? "라이트 모드 " : "다크모드"} 입니다.</h2>
      <p>
        this is the main content of the page.
        <br />
        Welcome to our website!
      </p>
    </div>
  );
}
