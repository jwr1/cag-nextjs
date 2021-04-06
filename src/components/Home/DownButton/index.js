import Link from 'next/link';
import style from './style.module.scss';
import { ArrowDownIcon } from '../../icons';

export default function DownButton({ alt, href }) {
  return (
    <Link {...{ href }}>
      <a className={style.downButton}>
        <ArrowDownIcon width="50" height="50" {...{ alt }} />
      </a>
    </Link>
  );
}
