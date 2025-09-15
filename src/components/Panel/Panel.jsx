import style from "./Panel.module.css";

export function Panel({ children }) {
  return <section className={style.Panel}>{children}</section>;
}
