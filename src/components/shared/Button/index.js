import classNames from 'classnames';
import Link from 'next/link';

import style from './style.module.scss';

export default function Button({
  children,
  className,
  href,
  small,
  white,
  ...props
}) {
  const classes = classNames(style.button, {
    [style.buttonSmall]: small,
    [style.buttonWhite]: white,
    [className]: className,
  });

  return href ? (
    <Link {...{ href }}>
      <a className={classes} {...props}>
        {children}
      </a>
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
