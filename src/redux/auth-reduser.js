import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "AUTH/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "AUTH/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAutn: false,
  isFetching: false,
  captchaUrl: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case  GET_CAPTCHA_URL_SUCCESS:
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
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAutn,
    },
  };
};
export const captchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl },
  };
};

export const getAuthUserData = () => async (dispath) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispath(setAuthUserData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe, captcha) => async (dispath) => {
  let response = await authAPI.login(email, password, rememberMe,captcha);
  if (response.data.resultCode === 0) {
    dispath(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispath(getCaptchaUrl())
    }
    let message = response.data.messages.length > 0
        ? response.data.messages[0]
        : "Something is wrong";
    dispath(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => async (
  dispath
) => {
  let response = await securityAPI.getCaptcha();
  const captchaUrl = response.data.url;
  dispath(captchaUrlSuccess(captchaUrl));
};

export const logOut = () => async (dispath) => {
  let response = await authAPI.logOut();
  if (response.data.resultCode === 0) {
    dispath(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;
