import React from "react";
import s from "./Dialogs.module.css";
import DialogMessage from "./DialogMessage/DialogMessage";
import { NavLink } from "react-router-dom";
import DialogContact from "./DialogContact/DialogContact";
import {
  addDialogActionCreator,
  updateNewsDialogActionCreator,
} from "../../redux/dialogsPage_reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

const state = props.store.getState();



  let addDialog = () => {
    props.store.dispatch(addDialogActionCreator());
  };
  let updateNewsDialogActionCreatorr = (text) => {
    props.store.dispatch(updateNewsDialogActionCreator(text));
  };

  return (
    <Dialogs
      updateNewsDialogActionCreator={updateNewsDialogActionCreatorr}
      addDialogActionCreator={addDialog}
      dialogsPage = {state}
      newDialogText={state.dialogsPage.newDialogText}
    />
  );
}

export default DialogsContainer;
