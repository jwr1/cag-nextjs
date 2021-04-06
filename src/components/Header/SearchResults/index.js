import { useState } from 'react';
import clsx from 'clsx';
import useEventListener from '@use-it/event-listener';
import Link from 'next/link';

import firebase from '../../../firebase';

import style from './style.module.scss';

const stringInArray = (array, str) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].toUpperCase().indexOf(str) > -1) {
      return true;
    }
  }
  return false;
};

export default function SearchResults({ searchInput }) {
  const [resultsVisible, setResultsVisible] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEventListener(
    'focusin',
    () => {
      setResultsVisible(true);
      if (searchItems.length <= 0)
        firebase
          .firestore()
          .collection('website-search')
          .get()
          .then((querySnapshot) =>
            setSearchItems(querySnapshot.docs.map((doc) => doc.data()))
          );
    },
    searchInput
  );

  useEventListener(
    'keyup',
    () => setSearchQuery(searchInput.value),
    searchInput
  );

  useEventListener(
    'focusout',
    // Added a timeout because when clicking a link the results would disappear before the mouse down registered.
    // This allows the input to be recognized before closing.
    () => setTimeout(() => setResultsVisible(false), 100),
    searchInput
  );

  const searchQueryCap = searchQuery.toUpperCase();

  const searchQueryResults = [];

  for (let i = 0; i < searchItems.length; i += 1) {
    if (
      searchItems[i].title.toUpperCase().indexOf(searchQueryCap) > -1 ||
      stringInArray(searchItems[i].keywords, searchQueryCap)
    ) {
      searchQueryResults.push(searchItems[i]);
    }
  }

  return (
    <div
      className={clsx(style.siteSearchResult, {
        [style.siteSearchResultVisible]:
          resultsVisible && searchQuery.length > 0,
      })}
    >
      <ul>
        {searchQueryResults.map((v) => (
          <li key={v.title}>
            <Link href={v.action}>
              <a>
                <div className={style.itemTitle}>{v.title}</div>
                <div className={style.itemDescription}>{v.description}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>

      {searchQueryResults.length > 0 ? null : (
        <div className={style.noResultsError}>No results found</div>
      )}
    </div>
  );
}
