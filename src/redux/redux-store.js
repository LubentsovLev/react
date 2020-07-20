

import profilePageReducer from "./profilePage_reducer";
import dialogsPageReducer from "./dialogsPage_reducer";
import sidebar_reducer from "./sidebar_reducer";
import { createStore, combineReducers } from "redux";



let reducers = combineReducers ({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebar_reducer
    
});


let store = createStore(reducers);

export default store;