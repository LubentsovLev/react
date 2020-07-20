import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  let img = props.img;
  let imgLogo = props.imgLogo;
  return (
    <div className={s.info}>
      <div>
        <img
          className={s.content__img}
          src={props.img}
        ></img>
      </div>
      <div className={s.info__inner}>
        <div className={s.logo__img}>
          <img
            className={s.logo__img_img}
            src={props.imgLogo}
            alt="logo"
          />
        </div>
        <p className={s.logo__descr}>{props.name}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
