import { useContext, useState, useRef } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import headerThemeContext from '../../contexts/headerTheme';
import style from './style.module.scss';

import SearchResults from './SearchResults';

export default function Header() {
  const [headerTheme] = useContext(headerThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const searchInputRef = useRef();

  const children = (
    <>
      <li>
        <Link href="/services/">SERVICES</Link>
      </li>
      <li>
        <Link href="/about/">ABOUT</Link>
      </li>
      <li>
        <Link href="/ministries/">MINISTRIES</Link>
      </li>
      <li>
        <Link href="/events/">EVENTS</Link>
      </li>
      <li>
        <Link href="/missions/">MISSIONS</Link>
      </li>
      <li>
        <Link href="/prayer/">PRAYER</Link>
      </li>
      <li>
        <Link href="/media/">MEDIA</Link>
      </li>
      <li>
        <Link href="https://store.cag.org/">
          <a target="_blank" rel="noopener">
            STORE
            <span className={style.externalLink}>
              <Image
                width="10px"
                height="10px"
                src={
                  headerTheme === 'light'
                    ? '/static/icons/external_link_dark.png'
                    : '/static/icons/external_link_light.png'
                }
              />
            </span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/give/">GIVE</Link>
      </li>
    </>
  );

  let finalHeaderTheme;
  switch (headerTheme) {
    case 'transparent': {
      if (mobileOpen) {
        finalHeaderTheme = style.headerDark;
      } else {
        finalHeaderTheme = style.headerTransparent;
      }
      break;
    }
    case 'dark': {
      finalHeaderTheme = style.headerDark;
      break;
    }
    case 'light':
    default: {
      finalHeaderTheme = style.headerLight;
      break;
    }
  }

  return (
    <header className={classNames(style.header, finalHeaderTheme)}>
      <main className={style.headerContent}>
        <Link href="/">
          <a className={style.headerIcon}>
            <span className={style.headerIconInner}>
              <Image
                src={
                  headerTheme === 'light'
                    ? '/static/icons/cag-logo-left.png'
                    : '/static/icons/cag-logo-white.png'
                }
                alt="Home Page"
                width="180.5px"
                height="13px"
              />
            </span>
          </a>
        </Link>
        <nav className={style.desktopNav}>
          <ul className={style.headerText}>{children}</ul>
        </nav>
        <label className={style.searchBar}>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            ref={searchInputRef}
          />
          <span className={style.searchButton}>
            <Image
              src={
                headerTheme === 'light'
                  ? '/static/icons/search-dark.png'
                  : '/static/icons/search-white.png'
              }
              alt="Search CAG.org"
              width="20px"
              height="20px"
            />
          </span>
        </label>
        <nav
          className={classNames(style.mobileNavButton, {
            [style.mobileNavButtonIn]: mobileOpen,
          })}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </nav>
      </main>

      {/* Outside of the flex style */}
      <nav
        className={classNames(style.mobileNav, {
          [style.mobileNavIn]: mobileOpen,
        })}
      >
        <ul className={style.headerText}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          {children}
        </ul>
      </nav>

      <SearchResults searchInput={searchInputRef.current} />
    </header>
  );
}
