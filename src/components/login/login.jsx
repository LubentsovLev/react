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
      {createField("password", "password", [required, maxLength], Input, {
        type: "password",
      })}
      {/* {createField( null, "rememberMe", [], Input, {type: "checkbox"}, "", "rememberMe" )} */}
      <Field
        className={s.textarea}
        name={"rememberMe"}
        placeholder="Write message"
        component={"Input"}
        type={"checkbox"}
      ></Field>
      <span className={s.textarea}> Remember Me </span>

      {props.captchaUrl && <img src={props.captchaUrl} />}
      {props.captchaUrl &&
        createField("Symbols from image", "captcha", [required], Input)}

      {props.error && (
        <div>
          <span className={s.form_summary_error}>{props.error}</span>
        </div>
      )}
      {/* <div className={s.sign__inner}>
        <h6>Do not have account?</h6>
        <a
          className={s.sign}
          href="https://social-network.samuraijs.com/signUp"
        >
          sign up
        </a>
      </div> */}
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
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={s.main__inner}>
      <div className={s.inn}>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAutn,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
