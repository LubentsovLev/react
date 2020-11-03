import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import MainApp from "./App";

let renderEntireTree = (state) => {
  ReactDOM.render(<MainApp />, document.getElementById("root"));
};

let g = store.getState()


renderEntireTree(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
