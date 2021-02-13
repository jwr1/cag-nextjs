import { useState } from 'react';
import classNames from 'classnames';
import PlayIcon from './PlayIcon';
import style from './style.module.scss';

export default function YouTubeEmbed({ className, id, isPlaylist, title }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className={classNames(style.YouTubeEmbed, className)}>
      {iframeLoaded ? (
        <iframe
          src={
            isPlaylist
              ? `https://www.youtube.com/embed?listType=playlist&list=${id}&autoplay=1`
              : `https://www.youtube.com/embed/${id}/?autoplay=1`
          }
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          {...{ title }}
        ></iframe>
      ) : (
        <button
          onClick={() => setIframeLoaded(true)}
          className={style.YouTubeEmbedImg}
          aria-label={title}
        >
          <div
            style={
              isPlaylist
                ? undefined
                : {
                    backgroundImage: `url(https://i1.ytimg.com/vi/${id}/hqdefault.jpg)`,
                  }
            }
          />
          <PlayIcon />
        </button>
      )}
    </div>
  );
}
