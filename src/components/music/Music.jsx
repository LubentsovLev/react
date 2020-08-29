import React, { useState } from "react";
import s from "./Music.module.css";
import preaudio from "../../assets/G-Eazy_Free_Porn,_Cheap_Drugs_(Official Music Video).mp3";
import Track from "./Track";

const Music = (props) => {
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
      <div className={s.tracks__inner}>
        <Track music={props.music} getAlbum={props.getAlbum} />
      </div>
      <div className={s.track}>
        <span className={s.track_name}>{showName}</span>
        <audio src={showTracks} controls loop autoPlay></audio>
      </div>
    </div>
  );
};

export default Music;
