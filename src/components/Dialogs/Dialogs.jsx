import React from "react";
import s from "./Dialogs.module.css";
import DialogMessage from "./DialogMessage/DialogMessage";
import { Redirect } from "react-router-dom";
import DialogContact from "./DialogContact/DialogContact";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/formsControls/formsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

let maxLength = maxLengthCreator(100);

const DialogsForm = (props) => {
  return (
    <form className={s.textarea__inner} onSubmit={props.handleSubmit}>
      <Field
        className={s.textarea}
        name={"AddDialogField"}
        placeholder="Write message"
        // onChange={onDialogChange}
        //ref={newMessageElement}
        component={Textarea}
        validate={[required, maxLength]}
      ></Field>
      <button className={s.textarea}> Send message</button>
    </form>
  );
};

const DialogsReduxForm = reduxForm({
  form: "AddDialog",
})(DialogsForm);
const Dialogs = (props) => {
  const addDialogField = (values) => {
    props.addDialogActionCreator(values.AddDialogField);
  };

  let dialogsDataElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogContact
      key={dialog.id}
      name={dialog.name}
      id={dialog.id}
      img={dialog.img}
    />
  ));

  let dialogsMessageElements = props.dialogsPage.dialogsMessage.map(
    (message) => (
      <DialogMessage
        key={message.id}
        id={message.id}
        name={message.name}
        message={message.message}
        img={message.img}
      />
    )
  );

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.col_1}>
          <h1 className={s.title}>Dialogs</h1>
          <div>{dialogsDataElements}</div>
        </div>
        <div className={s.col_2}>
          <DialogsReduxForm onSubmit={addDialogField} />
          {dialogsMessageElements}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
