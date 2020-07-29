import profilePageReducer from "./profilePage_reducer";
import dialogsPageReducer from "./dialogsPage_reducer";
import sidebar_reducer from "./sidebar_reducer";
import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import usersPageReducer from "./usersPage_reduser";
import authReduser from "./auth-reduser";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReduser from "./app-reduser";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sidebar: sidebar_reducer,
  usersPage: usersPageReducer,
  auth: authReduser,
  app:appReduser,
  form: formReducer,
 });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)
));


window.__store__ = store;

export default store;
