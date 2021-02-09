import Image from 'next/image';

import style from './style.module.scss';
import CenterText from '../../shared/CenterText';
import Button from '../../shared/Button';

export default function SeriesSection() {
  return (
    <div id="series-section">
      <section className="parallax_base">
        <CenterText>
          <div className={`${style.homeDivide} ${style.ministryOnlineDiv}`}>
            <h3>
              Ministries Online
              <br />
              <span style={{ color: 'rgb(112, 132, 153)', fontSize: '.7em' }}>
                Ministries you can join from your home
              </span>
            </h3>
            <br />
            <br />
            <Button href="/services/">Service Registration</Button>
            <br />
            <br />
            <Button href="/ministries/alive/">Kids</Button>
            <br />
            <br />
            <Button href="/ministries/thelink/">Youth</Button>
            <br />
            <br />
            <Button href="/ministries/doulos/">Young Adults</Button>
            <br />
            <br />
            <Button href="/ministries/adults/">Adults</Button>
            <br />
            <br />
            <Button href="/ministries/community/">Get Connected</Button>
            <br />
            <br />
            {/* <Button href="https://www.youtube.com/playlist?list=PL-l7Wgw0EmCHY9QrJzPXe2iA17zuX8Qtn" target="_blank">Conversations with Pastor Mark</Button><br/><br/> */}
          </div>
          <br />
          <div className={style.homeDivide}>
            <h3>
              Local Church &bull; Global Outreach <br />
              <span style={{ color: 'rgb(112, 132, 153)' }}>
                Over 70 nations Represented
              </span>
            </h3>
          </div>
          {/* Sermon video Section */}
          <div className={style.sermonVideoWrapper}>
            <Image
              src="/static/sermon_series/background_20123101.jpg"
              layout="fill"
              objectFit="cover"
            />
            <div className={style.sermonVideoForeground}>
              {/* LOGO Code */}
              <img
                src="/static/sermon_series/logo_20123101.png"
                className={style.seriesLogo}
              />

              <br />
              <br />
              {/* Sub Text code */}
              <h1 className={style.seriesText}></h1>
              <div className={style.sermonVideoForegroundResizeWrapper}>
                <iframe
                  className="drop-shadow"
                  id="series-video"
                  src="https://www.youtube.com/embed?listType=playlist&list=PL-l7Wgw0EmCHjBzGbH_f-BxyqWIm4DCjV"
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <br />
              <br />
              {/* <a className="button--white" href="/seriesmatterial/">Daily Videos</a> */}
              <Button white href="/seriesmatterial/notes/">
                Sermon Notes
              </Button>
            </div>
          </div>
        </CenterText>
      </section>
    </div>
  );
}
