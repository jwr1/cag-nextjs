import Link from "next/link";
import style from "./style.module.scss";

export default function DownButton({ children, href }) {
  return (
    <Link {...{ href }}>
      <a className={style.downButton}>{children}</a>
    </Link>
  );
}
