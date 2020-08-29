import { usersAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "PROFILE/ADD-POST";
const SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE";
const SET_STATUS = "PROFILE/SET_STATUS";
const DELETE_POST = "PROFILE/DELETE_POST";
const SAVE_PHOTOS_SUCCESS = "PROFILE/SAVE_PHOTOS_SUCCESS";
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
      post: "post",
      message: "lorem lorem lorem lorem",
      img: "https://novorossia.su/sites/default/files/trump.jpg",
      likecount: "33",
      dislikecount: "5",
    },
    {
      id: 2,
      post: "post",
      message: "lorem lorem lorem ",
      img: "",
      likecount: "20",
      dislikecount: "533",
    },
    {
      id: 3,
      post: "post",
      message: "lorem lorem ",
      img: "",
      likecount: "20",
      dislikecount: "5",
    },
    {
      id: 4,
      post: "post",
      message: "lorem ",
      img: "",
      likecount: "20",
      dislikecount: "5",
    },
  ],
  profile: null,
  status: "",
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
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
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        myPostInfo: state.myPostInfo.filter((p) => p.id != action.postId),
      };
    }
    case SAVE_PHOTOS_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (myPostText) => {
  return {
    type: ADD_POST,
    myPostText,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTOS_SUCCESS,
    photos,
  };
};

export const getUserProfile = (userId) => async (dispath) => {
  debugger;
  let response = await usersAPI.getProfile(userId);
  dispath(setUserProfile(response.data));
};
export const getUserStatus = (userId) => async (dispath) => {
  let response = await profileAPI.getStatus(userId);
  dispath(setStatus(response.data));
};
export const updateUserStatus = (status) => async (dispath) => {
  try {
    let response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0) {
      dispath(setStatus(status));
    }
  } catch (error) {}
};
export const savePhoto = (file) => async (dispath) => {
  let response = await profileAPI.saveProto(file);
  if (response.data.resultCode === 0) {
    dispath(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile = (Profile) => async (dispath, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(Profile);
  if (response.data.resultCode === 0) {
    dispath(getUserProfile(userId));
  } else {
    dispath(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profilePageReducer;
