import React from "react";
import s from "./MyPosts.module.css";
import MyPost from "./MyPost/MyPost";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControls/formsControls";





const MyPosts = React.memo( (props) => {
  let myPostInfoElements = [...props.myPostInfo].reverse().map((info) => (
    <MyPost
      key={info.id}
      post={info.post}
      id={info.id}
      img={info.img}
      message={info.message}
      likecount={info.likecount}
      dislikecount={info.dislikecount}
    />
  ));


  let onAddPost = (values) => {
    props.addPost(values.myPostText);
  };

  return (
    <div className={s.MyPosts}>
      <h1 className={s.items__h1}> my posts </h1>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.items__inner}>{myPostInfoElements}</div>
    </div>
  );
});

let maxLength =  maxLengthCreator(10)

const addNewPostForm = (props) => {
  return (
    <form className={s.items__form__inner} onSubmit={props.handleSubmit}>
      <Field
        placeholder="write message"
        name={"myPostText"}
        component={Textarea}
        className={s.textarea}
        validate = {[required,maxLength ] }
      />
      <button  className={s.btn}>
        Add post
      </button>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({
  form: "myPostsForm",
})(addNewPostForm);




export default MyPosts;
