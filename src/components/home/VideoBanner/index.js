import style from './style.module.scss';

import Button from '../../shared/Button';
import DownButton from '../DownButton';

export default function VideoBanner() {
  return (
    <div className={style.videoBanner}>
      <video
        playsInline
        muted
        className={style.videoBannerVideo}
        autoPlay
        loop
        muted
      >
        <source src="/static/home/home_loop-20031001.mp4" />
      </video>
      <div>
        <div className={style.videoBannerText}>
          <h2>Welcome to</h2>
          <h1>Cornerstone Church</h1>
        </div>
        <div className={style.bannerButtons}>
          <div className={style.bannerButtonsWatchLiveWrapper}>
            <div className={style.bannerButtonsWatchLiveWrapperToolTip}>
              NOW LIVE | 12:00pm Prayer
            </div>
            <Button white href="/live/">
              Watch Live
            </Button>
          </div>
          <Button white href="/media/">
            View Sermons
          </Button>
        </div>
        <DownButton className={style.bannerDownButton} href="#series-section" />
      </div>

      {/* NOTIFICATION CODE */}
      <div className={style.alert}>
        <a href="#">Something</a>
        <img src="/static/icons/arrow_white.png" />
      </div>
    </div>
  );
}
