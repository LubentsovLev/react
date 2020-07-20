import React from "react";
import s from "./MyPosts.module.css";
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
  let myPostInfoElements = props.myPostInfo.map((info) => (
    <MyPost
      post={info.post}
      id={info.id}
      img={info.img}
      message={info.message}
      likecount={info.likecount}
      dislikecount={info.dislikecount}
    />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewsPostText(text)
  };

  return (
    <div className={s.MyPosts}>
      <h1 className={s.items__h1}> my posts </h1>
      <div className={s.items__form__inner}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={onAddPost} className={s.btn}>
          Add post
        </button>
      </div>
      <div className={s.items__inner}>{myPostInfoElements}</div>
    </div>
  );
};

export default MyPosts;
