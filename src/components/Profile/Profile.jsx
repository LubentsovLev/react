import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

  const state = props.store.getState();

  let ProfileInfoElements = state.profilePage.profileInfo.map((f) => (
    <ProfileInfo
      name={f.name}
      message={f.message}
      img={f.img}
      imgLogo={f.imgLogo}
    />
  ));



  return (
    <section>
      <h1 className={s.h1}>main content</h1>
      {ProfileInfoElements}
      <MyPostsContainer
        store={props.store}
      />
    </section>
  );
};

export default Profile;
