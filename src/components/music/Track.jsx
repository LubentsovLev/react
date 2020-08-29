import React from "react";
import s from "./Music.module.css";
const Track = (props) => {
  return (
    <>
      {props.music.map((u) => (
        <div className={s.music__inner} key={u.id}>
          <div className={s.info}>
            <a href={u.external_urls.spotify} className={s.album}>
              {u.name}
            </a>
            <div className={s.artist__inner}>
              {u.artists.map((a) => (
                <a
                  key={a.id}
                  className={s.artist}
                  href={a.external_urls.spotify}
                >
                  {a.name}
                </a>
              ))}
            </div>
            <a
              className={s.btn}
              onClick={() => ( props.getAlbum(u.href))}
            >
              tracks
            </a>
          </div>
          <img className={s.music__music} src={u.images[0].url} alt="" />
        </div>
      ))}
    </>
  );
};

export default Track