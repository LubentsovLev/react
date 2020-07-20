const ADD_POST = "ADD-POST";
const UPDATE_NEWS_POST_TEXT = "UPDATE-NEWS-POST-TEXT";

let initialState = {
  profileInfo: [
    {
      name: "Post malone",
      img:
        "https://media.gq-magazine.co.uk/photos/5d13ad6a9fa6010874839e3a/16:9/w_1920,c_limit/post-malone-gq-11feb19_getty_b.jpg",
      imgLogo: "https://i.ytimg.com/vi/EH8mVPPtpkM/maxresdefault.jpg",
    },
  ],
  myPostInfo: [
    {
      id: 1,
      post: "lorem lorem post",
      message: "lorem lorem lorem lorem",
      img: "https://png-library.net/images/obama-face-png-6.png",
      likecount: "33",
      dislikecount: "5",
    },
    {
      id: 2,
      post: "lorem lorem post",
      message: "lorem lorem lorem ",
      img:
        "https://www.clipartmax.com/png/full/339-3393862_arnold-schwarzenegger-silhouette-clipart-arnold-schwarzenegger-arnold-schwarzenegger-face-drawing.png",
      likecount: "20",
      dislikecount: "533",
    },
    {
      id: 3,
      post: "lorem lorem post",
      message: "lorem lorem ",
      img:
        "https://img2.freepng.ru/20180701/ypf/kisspng-elvis-presley-stencil-silhouette-art-5b38fae058b3a5.1073563015304608963633.jpg",
      likecount: "20",
      dislikecount: "5",
    },
    {
      id: 4,
      post: "lorem lorem post",
      message: "lorem ",
      img: "https://data.whicdn.com/images/315945007/original.png",
      likecount: "20",
      dislikecount: "5",
    },
  ],
  newPostText: "",
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      let newPost = {
        id: 5,
        post: "lorem lorem post",
        message: state.newPostText,
        img: "https://png-library.net/images/obama-face-png-6.png",
        likecount: "20",
        dislikecount: "5",
      };
      state.myPostInfo.push(newPost);
      state.newPostText = "";
      return state;
    case "UPDATE_NEWS_POST_TEXT":
      state.newPostText = action.newPostText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: "ADD_POST",
  };
};
export const updateNewsPostActionCreator = (text) => {
  return {
    type: "UPDATE_NEWS_POST_TEXT",
    newPostText: text,
  };
};

export default profilePageReducer;
