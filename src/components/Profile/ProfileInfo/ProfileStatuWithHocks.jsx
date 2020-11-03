import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatuWithHocks = (props) => {
  let [editMode, seteditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status)
  },[props.status])

  let activateEditMode = () => {
    seteditMode(true);

  };

  let deActivateEditMode = () => {
    seteditMode(false);
    props.updateUserStatus(status);
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value,);
  };

  return (
    <div className={s.input__inner}>
      {!editMode && (
        <div className={s.im__text} onDoubleClick={activateEditMode}>
          <strong>Status</strong>
          <span >{props.status || "no"}</span>
        </div>
      )}
      {editMode && (
        <div className={s.im__text}>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deActivateEditMode}
            value={status}
            className={s.prof_input}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatuWithHocks;
