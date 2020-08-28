import React, { useState } from "react";
import s from "./Music.module.css";
import preaudio from "../../assets/G-Eazy_Free_Porn,_Cheap_Drugs_(Official Music Video).mp3"

const Music = (props) => {
  let pagesCount = Math.ceil(props.totalMusicCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let [showTracks, setShowTracks] = useState("");
  let [showName, setShowName] = useState("");
  //showTracks = preaudio
  return (
    <div className="">
      <div className={s.track_list} id="list">
        <div className={s.tr__inner}>
          {props.albumData.map((t) => (
            <div className="" key={t.id}>
              <div className="">
                <div
                  onClick={() => (
                    setShowTracks((showTracks = t.preview_url)),
                    setShowName((showName = t.name))
                  )}
                  className={s.tracks}
                >
                  <span>{t.name}</span>
                  <span>
                    {Math.floor(t.duration_ms / 1000 / 60)
                      .toString()
                      .padStart(2, "0")}
                    :
                    {Math.floor((t.duration_ms / 1000) % 60)
                      .toString()
                      .padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.photos__inner}>
        {props.music.map((u) => (
          <div className={s.photo__inner} key={u.id}>
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
                onClick={() => (props.requestAlbum(u.href), props.getAlbum())}
              >
                tracks
              </a>
            </div>
            <img className={s.photo__photo} src={u.images[0].url} alt="" />
          </div>
        ))}
      </div>
      <div className={s.track}>
        <span className={s.track_name}>{showName}</span>
        <audio src={showTracks} controls loop autoPlay></audio>
      </div>
    </div>
  );
};

export default Music;
