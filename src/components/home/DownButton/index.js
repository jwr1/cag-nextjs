import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.scss';

export default function DownButton({ alt, href }) {
  return (
    <Link {...{ href }}>
      <a className={style.downButton}>
        <Image
          src="/static/icons/arrow-down-white.png"
          width="50"
          height="50"
          {...{ alt }}
        />
      </a>
    </Link>
  );
}
