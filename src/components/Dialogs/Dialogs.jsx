import React from "react";
import s from "./Dialogs.module.css";
import DialogMessage from "./DialogMessage/DialogMessage";
import { NavLink } from "react-router-dom";
import DialogContact from "./DialogContact/DialogContact";


const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsDataElements = state.dialogsPage.dialogsData.map((dialog) => (
    <DialogContact name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let dialogsMessageElements = state.dialogsPage.dialogsMessage.map((message) => (
    <DialogMessage
      id={message.id}
      name={message.name}
      message={message.message}
      img={message.img}
    />
  ));

  let newMessageElement = React.createRef();
  let addDialog = () => {
    //props.dispatch(addDialogActionCreator());
    props.addDialogActionCreator()
  };
  let onDialogChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewsDialogActionCreator(text)
    //props.dispatch(updateNewsDialogActionCreator(text));
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.col_1}>
          <h1 className={s.title}>Dialogs</h1>
          <div>{dialogsDataElements}</div>
        </div>
        <div className={s.col_2}>
          {dialogsMessageElements}
          <div className={s.textarea__inner}>
            <textarea
              onChange={onDialogChange}
              ref={newMessageElement}
              value={props.newDialogText}
            />
            <button onClick={addDialog}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
