import React from "react";
import {
  addPostActionCreator,
} from "../../../redux/profilePage_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
  return {
    myPostInfo : state.profilePage.myPostInfo,
    newPostText : state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch) => {
 return {
  addPost : (myPostText) => {
    dispatch(addPostActionCreator(myPostText));
  }
 }
}

const MyPostsContainer = connect(mapStateToProps ,mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
