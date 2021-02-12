import Link from 'next/link';
import style from './style.module.scss';

export default function DownButton({ href }) {
  return (
    <Link {...{ href }}>
      <a className={style.downButton} />
    </Link>
  );
}
