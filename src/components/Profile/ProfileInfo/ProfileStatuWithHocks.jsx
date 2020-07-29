import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";

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
    <div className="">
      {!editMode && (
        <div className="">
          <span onDoubleClick={activateEditMode}>{props.status || "no"}</span>
        </div>
      )}
      {editMode && (
        <div className="">
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deActivateEditMode}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatuWithHocks;
