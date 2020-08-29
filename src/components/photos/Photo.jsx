import React from "react";
import s from "./Photos.module.css";
const Photo = (props) => {
  return (
    <>
      {props.pixels.map((u) => (
        <div key={u.id} className={s.photo__inner} key={u.id}>
          <div className={s.photographer}>
            <a href={u.photographer_url}>{u.photographer}</a>
            <a href={u.url}> original </a>
          </div>
          <img className={s.photo__photo} src={u.src.portrait} alt="" />
        </div>
      ))}
    </>
  );
};

export default Photo;
