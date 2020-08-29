import React from "react";
import s from "./MyPost.module.css";
import logo from "../../../../assets/img/logo.svg";

const MyPost = (props) => {
  let img = props.img;
  return (
    <div className={s.item}>
      <div className={s.logo__inner}>
        <img src={img ? img : logo} alt="" />
        <h1>{props.post}</h1>
      </div>

      <p className={s.text}>{props.message}</p>
      <div className={s.like__inner}>
        <button className={s.like}>
          <span>Like</span>
          {props.likecount}
        </button>
        <button className={s.dislike}>
          <span>Dislike</span>
          {props.dislikecount}
        </button>
      </div>
    </div>
  );
};

export default MyPost;
