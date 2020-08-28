
import {updateObjectInArray} from "../utils/objext_helpers.js"
import { usersAPI } from "../api/api";

const FOLLOW = "USERS/FOLLOW";
const UNFOLLOW = "USERS/UNFOLLOW";
const SET_USER = "USERS/SET_USER";
const SET_CURRENT_PAGE = "USERS/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "USERS/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "USERS/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "USERS/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalItemsCount : 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
       users: updateObjectInArray(state.users , action.userId, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users , action.userId, "id", {followed: false})
      };
    case SET_USER:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalItemsCount : action.totalItemsCount  };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id != action.userId)],
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USER,
    users,
  };
};
export const settotalItemsCount  = (totalItemsCount ) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalItemsCount ,
  };
};
export const setCurrentPage = (currentPage ) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return async (dispath) => {
    dispath(toggleIsFetching(true));
    dispath(setCurrentPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispath(toggleIsFetching(false));
    dispath(setUsers(data.items));
    dispath(settotalItemsCount (data.totalCount));
  };
};

const followUnfollowFlow = async (dispath, userId, apiMethod, actionCreator) => {
  dispath(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode == 0) {
    dispath(actionCreator(userId));
  }
  dispath(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => {
  return async (dispath) => {
    followUnfollowFlow(dispath, userId, usersAPI.follow.bind(usersAPI), followSuccess)
  };
};
export const unfollow = (userId) => {
  return async (dispath) => {
    followUnfollowFlow(dispath, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
  };
};

export default usersPageReducer;
