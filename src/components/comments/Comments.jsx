import React from "react";
import s from "./Comments.module.css";
import { reduxForm, Field } from "redux-form";
import { Textarea, Input } from "../common/formsControls/formsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { sendComments } from "../../redux/comment-reduser";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

let maxLength = maxLengthCreator(100);

const CommentsForm = (props) => {
  return (
    <form className={s.inner} onSubmit={props.handleSubmit}>
      <Field
        className={s.textarea}
        name={"fullName"}
        placeholder="Write message"
        component={Textarea}
        validate={[maxLength]}
      ></Field>
      <button className={s.textarea}> Send comment</button>
    </form>
  );
};
const CommentsReduxForm = reduxForm({
  form: "AddCommentField",
})(CommentsForm);

const Comments = (props) => {
  const addCommentField = (values) => {
    props.sendComments(values.fullName);
  };
  return (
    <div className="">
      <CommentsReduxForm onSubmit={addCommentField} />
    </div>
  );
};

const mapStateToProps = (state) => ({});
export default compose(
  connect(mapStateToProps, { sendComments }),
  WithAuthRedirect
)(Comments);
