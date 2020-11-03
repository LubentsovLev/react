import React, { useEffect } from "react";
import s from "./Photos.module.css";
import Preloader from "../common/preloader/preloader";
import Photo from "./Photo";

const Photos = (props) => {
  const click = () => {
    props.requestPixelsNew();
      window.scrollTo({
        top: 100000000,
        behavior: "smooth"
    });
  };
  useEffect(() => {}, [props.pixels]);
  return (
    <div className="">
      <div className={s.photos__inner}>
        <Photo pixels={props.pixels} />
      </div>
      {props.isFetching ? null : props.isNextFetching ? (
        <div className={s.prel}>
          <Preloader />
        </div>
      ) : (
        <div className={s.btn__inner}>
          <a onClick={() => click()} className={s.btn}>
            load next page
          </a>
        </div>
      )}
    </div>
  );
};

export default Photos;
