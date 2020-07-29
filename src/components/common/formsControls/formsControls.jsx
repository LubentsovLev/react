import React from "react";
import s from "./formsControls.module.css";
import { Field } from "redux-form";
import { required } from "../../../utils/validators/validators";

const FormsControl = ({ input, meta:{touched,error}, child, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={s.inner}>
      <div className={s.forms + " " + (hasError ? s.error : " ")}>
        {props.children}
      </div>
      <div className="">{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export let Textarea = (props) => {
  const { input, meta, child, ...restprops } = props;
  return (
    <FormsControl {...props}>
      <textarea {...input} {...restprops}></textarea>
    </FormsControl>
  );
};
export let Input = (props) => {
  const { input, meta, child, ...restprops } = props;
  return (
    <FormsControl {...props}>
      <input {...input} {...restprops}></input>
    </FormsControl>
  );
};

export const createField = (
  
  placeholder,
  name,
  validate,
  component,
  props = {},
  text =""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validate}
      {...props}
    />
    <span>{text}</span>
  </div>
);
