import style from "./style.module.scss";

export default function CenterText({ children }) {
  return <div className={style.centerText}>{children}</div>;
}
