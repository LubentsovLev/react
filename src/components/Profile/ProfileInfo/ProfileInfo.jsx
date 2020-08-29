import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatuWithHocks from "./ProfileStatuWithHocks";
import userPhoto from "../../../assets/img/logo.svg";
import savePhoto from "../../../assets/img/save-file.svg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, seteditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const MainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      seteditMode(false);
    });
  };

  return (
    <div className={s.info}>
      <div>
        <img
          className={s.content__img}
          src={props.profile.photos.large || userPhoto}
        ></img>
        {props.isOwner && (
          <div className={s.input__wrapper}>
            <input
              onChange={MainPhotoSelected}
              name="file"
              type="file"
              name="file"
              id="input__file"
              className={`${s.input} + " " + ${s.input__file}`}
              multiple
            />
            <label htmlFor="input__file" className={s.input__file_button}>
              <span className={s.input__file_icon_wrapper}>
                <img
                  className={s.input__file_icon}
                  src={savePhoto}
                  width="25"
                />
              </span>
              <span className={s.input__file_button_text}>Выберите файл</span>
            </label>
          </div>
        )}
      </div>
      {editMode ? (
        <ProfileDataForm
          initialValues={props.profile}
          profile={props.profile}
          props={props}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          props={props}
          goToEditMode={() => {
            seteditMode(true);
          }}
          isOwner={props.isOwner}
        />
      )}

      <ProfileStatuWithHocks
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />

      {/* <div className={s.info__inner}>
        <div className={s.logo__img}>
          <img
            className={s.logo__img_img}
            src={props.profile.photos.small || userPhoto}
            alt="logo"
          />
        </div>

        <div className={s.name__inner}>
          <h1 className={s.logo__descr}>{props.profile.fullName}</h1>
          <p className={s.logo__descr}>
            {props.profile.lookingForAJobDescription}
          </p>
        </div>
      </div> */}
    </div>
  );
};

const ProfileData = ({ props, goToEditMode }) => {
  return (
    <div className="">
      {props.isOwner && (
        <div className="" onClick={goToEditMode}>
          <button className={s.button_ed}>Edit</button>
        </div>
      )}
      <div className={s.edit_item}>
        <strong>Full Name</strong>:<span>{props.profile.fullName}</span>
      </div>

      <div className={s.edit_item}>
        <strong>lookingForAJob</strong>:
        <span>{props.profile.lookingForAJob ? "yep" : "no"}</span>
        {props.profile.lookingForAJob && (
          <div className={s.edit_item}>
            <strong>Professional skills</strong>:
            <span>{props.profile.lookingForAJobDescription}</span>
          </div>
        )}
      </div>

      <div className={s.edit_item}>
        <strong>About Me</strong>:<span>{props.profile.aboutMe}</span>
      </div>

      <div className={s.edit_item}>
        <strong>Contacts</strong>:
        <div>
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contact
                className={s.edit_item}
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className="">
      <div className={s.contact}>
        <b>{contactTitle}</b> : <span>{contactValue}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
