import React from "react";
import {
  addDialogActionCreator,
} from "../../redux/dialogsPage_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addDialogActionCreator: (AddDialogField) => {
      dispatch(addDialogActionCreator(AddDialogField));
    },
  };
};



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
;
