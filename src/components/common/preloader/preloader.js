import React from 'react';
import loader from "../../../assets/img/loader.svg";
import s from "./preloader.module.css"
let Preloader = (props) => {
  return <div className={s.preloader}>
      <img src={loader} />
  </div>;
};

export default Preloader;
