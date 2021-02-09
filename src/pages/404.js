import Head from 'next/head';

import CenterText from '../components/shared/CenterText';

export default function custom404() {
  return (
    <>
      <Head>
        <title>Oops | Cornerstone Church</title>
      </Head>
      <section className="header_padding">
        <CenterText>
          <h1
            style={{
              fontSize: '200px',
              fontWeight: 'bold',
              marginTop: '10vh',
              padding: '0px',
            }}
          >
            404
          </h1>
          <h1>Oh no! It doesn't look like what you're looking for exists.</h1>
          <h2 style={{ marginBottom: '40vh' }}>
            The page you are looking for is either missing or has moved. Try
            using a different link.
          </h2>
        </CenterText>
      </section>
    </>
  );
}
