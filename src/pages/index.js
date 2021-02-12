import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import useEventListener from '@use-it/event-listener';

import headerThemeContext from '../contexts/headerTheme';
import VideoBanner from '../components/home/VideoBanner';
import SeriesSection from '../components/home/SeriesSection';

const scrollTransitionHeight = 200;

export default function Home() {
  const [headerTheme, setHeaderTheme] = useContext(headerThemeContext);
  const [alert, setAlert] = useState('');

  const calcTheme = () => {
    // If the scroll position is greater than the set height
    if (alert || window.scrollY >= scrollTransitionHeight) {
      // Make sure we only execute once when scrolling
      if (headerTheme !== 'light') {
        setHeaderTheme('light');
      }
    } else {
      if (headerTheme !== 'transparent') {
        setHeaderTheme('transparent');
      }
    }
  };

  // initially calculate and set theme
  useEffect(() => {
    calcTheme();

    // return theme to default state
    return () => {
      setHeaderTheme('light');
    };
  }, []);

  // calculate and set theme on scroll event
  useEventListener('scroll', calcTheme, { passive: true });

  return (
    <>
      <Head>
        <title>
          Cornerstone Church - Bowie MD | Building an Authentic Community,
          Lifting up Jesus, Growing in Him, Touching our World.
        </title>

        {/* Search Engine Information */}
        <meta name="title" content="Cornerstone Church | Bowie MD" />
        <meta
          name="description"
          content="Building an Authentic Community, Lifting up Jesus, Growing in Him, and Touching our World. Cornerstone Church is located in Bowie, Maryland. Experience God through services and activities on Saturday, Sunday, and throughout the week."
        />
      </Head>

      {/* Welcome Video Layer */}
      <VideoBanner />

      {/* Sermon Section */}
      <SeriesSection />
    </>
  );
}
