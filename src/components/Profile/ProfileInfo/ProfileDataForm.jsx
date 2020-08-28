import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import { createField,Input, Textarea } from "../../common/formsControls/formsControls";
import { reduxForm } from "redux-form";
import d from "../../common/formsControls/formsControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error }) => {
  return (
    <form  className={s.forms__info} onSubmit={handleSubmit}  >
        <div className="" onClick={() => {} }>
          <button className={s.button_sv} >save</button>
        </div>
        {error && (
        <div>
          <span className={d.form_summary_error}>{error}</span>
        </div>
      )}
      <div className="">
        <h2>
          {createField("Full name","fullName", [], Input)}
        </h2>
      </div>

      <div className="">
        <strong >lookingForAJob</strong>:
        <span>{createField("","lookingForAJob", [], Input, {type :"checkbox"})}</span>
        <div className="">
            <strong >Professional skills</strong>:
            <span>{createField("Professional skills","lookingForAJobDescription", [], Textarea)}</span>
          </div>
      </div>

      <div className="">
        <strong >About Me</strong>:
        <span>{ createField("About me","aboutMe", [], Textarea)}</span>
      </div>

      { <div className="">
        <strong >Contacts</strong>:
        <span>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key = {key} className={s.contact}>
                  <b>{key} : {createField(key,"contacts." + key, [], Input)} </b>
              </div>
            );
          })}
        </span>
      </div> }
    </form>
  );
};
const ProfileDataFormReduxForm = reduxForm ( {form :'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;
