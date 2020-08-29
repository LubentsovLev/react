import React, { useEffect } from "react";
import s from "./Photos.module.css";
import Preloader from "../common/preloader/preloader";
import Photo from "./Photo";

const Photos = (props) => {
  const click = () => {
    props.requestPixelsNew();
  };
  useEffect(() => {}, [props.pixels]);
  return (
    <div className="">
      <div className={s.photos__inner}>
        <Photo pixels={props.pixels} />
      </div>
      {props.isNextFetching ? <Preloader /> : null}
      <div className={s.btn__inner}>
        <a onClick={() => click()} className={s.btn}>
          load next page
        </a>
      </div>
    </div>
  );
};

export default Photos;
