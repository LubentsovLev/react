import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  profileInfo: [
    {
      name: "Post malone",
      img:
        "https://media.gq-magazine.co.uk/photos/5d13ad6a9fa6010874839e3a/16:9/w_1920,c_limit/post-malone-gq-11feb19_getty_b.jpg",
      imgLogo: "https://i.ytimg.com/vi/EH8mVPPtpkM/maxresdefault.jpg",
    },
  ],
  myPostInfo: [
    {
      id: 1,
      post: "lorem lorem post",
      message: "lorem lorem lorem lorem",
      img: "https://png-library.net/images/obama-face-png-6.png",
      likecount: "33",
      dislikecount: "5",
    },
    {
      id: 2,
      post: "lorem lorem post",
      message: "lorem lorem lorem ",
      img:
        "https://www.clipartmax.com/png/full/339-3393862_arnold-schwarzenegger-silhouette-clipart-arnold-schwarzenegger-arnold-schwarzenegger-face-drawing.png",
      likecount: "20",
      dislikecount: "533",
    },
    {
      id: 3,
      post: "lorem lorem post",
      message: "lorem lorem ",
      img:
        "https://img2.freepng.ru/20180701/ypf/kisspng-elvis-presley-stencil-silhouette-art-5b38fae058b3a5.1073563015304608963633.jpg",
      likecount: "20",
      dislikecount: "5",
    },
    {
      id: 4,
      post: "lorem lorem post",
      message: "lorem ",
      img: "https://data.whicdn.com/images/315945007/original.png",
      likecount: "20",
      dislikecount: "5",
    },
  ],
  profile: null,
  status: "",
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST": {
      let newPost = {
        id: 5,
        post: "lorem lorem post",
        message: action.myPostText,
        img: "https://png-library.net/images/obama-face-png-6.png",
        likecount: "20",
        dislikecount: "5",
      };
      let stateCopy = { ...state };
      stateCopy.myPostInfo = [...state.myPostInfo];
      stateCopy.myPostInfo.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    case "SET_STATUS": {
      return { ...state, status: action.status };
    }
    case "DELETE_POST": {
      return { ...state, myPostInfo: state.myPostInfo.filter( p => p.id != action.postId) };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (myPostText) => {
  return {
    type: "ADD_POST",
    myPostText
  };
};
export const setUserProfile = (profile) => {
  return {
    type: "SET_USER_PROFILE",
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: "SET_STATUS",
    status,
  };
};


export const deletePost = (postId) => {
  return {
    type: "DELETE_POST",
    postId,
  };
};


export const getUserProfile = (userId) => async (dispath) => {
  let response = await usersAPI.getProfile(userId);
  dispath(setUserProfile(response.data));
};
export const getUserStatus = (userId) => async (dispath) => {
  let response = await profileAPI.getStatus(userId);
  dispath(setStatus(response.data));
};
export const updateUserStatus = (status) => async (dispath) => {
  let response = await profileAPI.updateUserStatus(status);
  if (response.data.resultCode === 0) {
    dispath(setStatus(status));
  }
};

export default profilePageReducer;
