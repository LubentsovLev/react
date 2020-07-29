import React from "react";
import s from "./DialogMessage.module.css";

const DialogMessage = (props) => {
  let img = props.img;

 

  return (
    <div className={s.col_2_item}>
      <div className={s.item__inner}>
        <div className={s.col_2_item_logo_inner}>
          <img className={s.col_2_item_logo} src={img} alt="" />
          <p className={s.col_2_item_name}>{props.name}</p>
        </div>
        <div className={s.col_2_item_text}>
          <p>
          {props.message}
          </p>
          </div>
      </div>
    </div>
  );
};

export default DialogMessage;
