import React, { useEffect } from "react";
import s from "./Photos.module.css";

const Photos = (props) => {
  const click = () => {
    props.requestPixelsNew();
  };
  useEffect(() => {}, [props.pixels]);
  return (
    <div id="up" className="">
      <div className={s.photos__inner}>
        {props.pixels.map((u) => (
          <div key={u.id} className={s.photo__inner} key={u.id}>
            <div className={s.photographer}>
              <a href={u.photographer_url}>{u.photographer}</a>
              <a href={u.url}> original </a>
            </div>
            <img className={s.photo__photo} src={u.src.portrait} alt="" />
          </div>
        ))}
      </div>
      <div className={s.btn__inner}>
        <a  onClick={() => click()} className={s.btn}>
          load next page
        </a>
      </div>
    </div>
  );
};

export default Photos;
