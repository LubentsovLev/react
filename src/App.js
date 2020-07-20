import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app__wrapper__content">
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
              dialogsData={props.state.dialogsPage.dialogsData}
              dialogsMessage={props.state.dialogsPage.dialogsMessage}
              newDialogText={props.state.dialogsPage.newDialogText}
              store = {props.store}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              store = {props.store}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
