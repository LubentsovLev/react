import React from "react";
import {
  addPostActionCreator,
  updateNewsPostActionCreator,
} from "../../../redux/profilePage_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    props.store.dispatch(updateNewsPostActionCreator(text));
  };
  return (
    <MyPosts
      updateNewsPostText={onPostChange}
      addPost={addPost}
      myPostInfo={state.profilePage.myPostInfo}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
