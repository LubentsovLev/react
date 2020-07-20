import React from "react";
import s from "./DialogContact.module.css";
import { NavLink } from "react-router-dom";

const DialogContact = (props) => {
  let path = "/dialogs/" + props.id;
  let img = props.img;

  return (
    <div className={s.inner}>
      <p className={s.col_1_item + " " + s.active}>
        <span className={s.img}>
          <img
            className={s.img}
            src={img}
            alt=""
          />
        </span>
        <NavLink to={path}>{props.name}</NavLink>
      </p>
    </div>
  );
};

export default DialogContact;
