import { useState, useEffect } from 'react';
import clsx from 'clsx';
import PlayIcon from './PlayIcon';
import style from './style.module.scss';

export default function YouTubeEmbed({ className, id, isPlaylist, title }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [playlistThumbnail, setPlaylistThumbnail] = useState('');

  const videoUrl = isPlaylist
    ? `https://www.youtube.com/embed/videoseries?list=${id}&autoplay=1`
    : `https://www.youtube.com/embed/${id}/?autoplay=1`;

  useEffect(() => {
    if (isPlaylist) {
      fetch(
        `https://www.youtube.com/oembed?url=${encodeURIComponent(videoUrl)}`
      )
        .then((v) => v.json())
        .then((v) => setPlaylistThumbnail(v.thumbnail_url));
    } else {
      if (playlistThumbnail) setPlaylistThumbnail('');
    }
  }, [id, isPlaylist]);

  return (
    <div className={clsx(style.YouTubeEmbed, className)}>
      {iframeLoaded ? (
        <iframe
          src={videoUrl}
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
            style={{
              backgroundImage: isPlaylist
                ? `url(${playlistThumbnail})`
                : `url(https://i1.ytimg.com/vi/${id}/hqdefault.jpg)`,
            }}
          />
          <PlayIcon />
        </button>
      )}
    </div>
  );
}
