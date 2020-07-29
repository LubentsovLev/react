import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatuWithHocks from "./ProfileStatuWithHocks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.info}>
      <div>
        <img className={s.content__img} src={props.profile.photos.large}></img>
      </div>
      <ProfileStatuWithHocks status={props.status} updateUserStatus={props.updateUserStatus} />
      <div className={s.info__inner}>
        <div className={s.logo__img}>
          <img
            className={s.logo__img_img}
            src={props.profile.photos.small}
            alt="logo"
          />
        </div>

        <div className={s.name__inner}>
          <h1 className={s.logo__descr}>{props.profile.fullName}</h1>
          <p className={s.logo__descr}>
            {props.profile.lookingForAJobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
