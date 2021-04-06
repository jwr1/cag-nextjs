import Head from 'next/head';

import style from './style.module.scss';
import CenterText from '../shared/CenterText';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Oops | Cornerstone Church</title>
      </Head>
      <section className={style.root}>
        <CenterText>
          <h1 className={style.errorCode}>404</h1>
          <h1>Oh no! It doesn't look like what you're looking for exists.</h1>
          <h2 className={style.errorDescription}>
            The page you are looking for is either missing or has moved. Try
            using a different link.
          </h2>
        </CenterText>
      </section>
    </>
  );
}
