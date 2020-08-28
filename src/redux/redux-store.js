import profilePageReducer from "./profilePage_reducer";
import dialogsPageReducer from "./dialogsPage_reducer";
import sidebar_reducer from "./sidebar_reducer";
import usersPageReducer from "./usersPage_reducer";
import authReduser from "./auth-reduser";
import appReduser from "./app-reduser";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import musicPageReducer from "./musicPage_reducer";
import commentreduser from "./comment-reduser";
import photosPageReducer from "./PhotosPage_reducer";
let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sidebar: sidebar_reducer,
  usersPage: usersPageReducer,
  musicPage: musicPageReducer,
  photosPage: photosPageReducer,
  auth: authReduser,
  app: appReduser,
  form: formReducer,
  comments: commentreduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;

export default store;
