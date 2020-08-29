import React, { useState } from "react";
import s from "./Music.module.css";

const Album = (props) => {
  let [showTracks, setShowTracks] = useState("");
  let [showName, setShowName] = useState("");
  return (
    <>
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
    </>
  );
};

export default Album;
