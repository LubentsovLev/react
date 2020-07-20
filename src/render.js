import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewsPostText, addDialog, updateNewsDialogText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewsPostText={updateNewsPostText} addDialog={addDialog} updateNewsDialogText={updateNewsDialogText} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
