import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <section>
      <ProfileInfo
        isOwner = {props.isOwner}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        saveProfile={props.saveProfile}
        savePhoto={props.savePhoto} 
      />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;
