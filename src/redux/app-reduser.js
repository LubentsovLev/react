import { getAuthUserData } from "./auth-reduser";

const SET_INITIALIZED_SUCCESS = "APP/SET_INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeApp = () => (dispath) => {
  let promise = dispath(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispath(initializedSuccess());
  });
};

export default appReduser;
