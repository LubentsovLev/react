import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAutn: false,
  isFetching: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAutn) => {
  return {
    type: "SET_USER_DATA",
    payload: {
      userId,
      email,
      login,
      isAutn,
    },
  };
};
export const getAuthUserData = () => async (dispath) => {
  let response = await authAPI.me()
     if (response.data.resultCode === 0) {
       let { id, login, email } = response.data.data;
       dispath(setAuthUserData(id, email, login, true));
     }
 };
 export const login = (email, password, rememberMe) => async (dispath) => {
 
   let response = await authAPI.login(email, password, rememberMe)
     if (response.data.resultCode === 0) {
       dispath(getAuthUserData());
     } else {
       let message = response.data.messages.length > 0 ? response.data.messages[0] : "Something is wrong"
       dispath(stopSubmit("login", { _error: message }));
     }
 };
 export const logOut = () => async (dispath) => {
   let response = await authAPI.logOut()
     if (response.data.resultCode === 0) {
       dispath(setAuthUserData(null, null, null, false));
     }
 };
 

export default authReduser;
