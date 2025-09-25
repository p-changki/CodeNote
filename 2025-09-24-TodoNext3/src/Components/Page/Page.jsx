import styles from "./Page.module.css";

import { Header } from "../Header";
import { Content } from "../Content";

export function Page() {
  return (
    <div className={styles.page}>
      <Header />
      <Content />
    </div>
  );
}
