import { commentsAPI, usersAPI } from "../api/api";

const ADD_COMMENT = "COMMENT/SET_COMMENT";

let initialState = {
  Comment: "",
  isFetching: false,
};

const commentreduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return { ...state, Comment: action.Comment };
    }
    default:
      return state;
  }
};
export const addComments = (Comment) => {
  return {
    type: ADD_COMMENT,
    Comment,
  };
};
export const sendComments = (comment) => async (dispath) => {
  let response = commentsAPI.sendComment(comment);
};

export default commentreduser;
