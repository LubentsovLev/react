import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, createField } from "../common/formsControls/formsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import s from "./login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser";
import { Redirect } from "react-router-dom";

let maxLength = maxLengthCreator(30);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.inner}>
      {createField("email", "email", [required, maxLength], Input)}
      {createField("password", "password", [required, maxLength], Input, {type: "password",})}
      {createField( null, "rememberMe", [], Input, {type: "checkbox"}, "rememberMe" )}
      {props.error && (
        <div>
          <span className={s.form_summary_error}>{props.error}</span>
        </div>
      )}
      <div className="">
        <button>Submit </button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className="">
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAutn,
});

export default connect(mapStateToProps, { login })(Login);
