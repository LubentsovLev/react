import profilePageReducer from "./profilePage_reducer";
import dialogsPageReducer from "./dialogsPage_reducer";
import sidebar_reducer from "./sidebar_reducer";




let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Petua",
          img: "https://png-library.net/images/obama-face-png-6.png",
        },
        {
          id: 2,
          name: "Tramp",
          img:
            "https://www.clipartmax.com/png/full/339-3393862_arnold-schwarzenegger-silhouette-clipart-arnold-schwarzenegger-arnold-schwarzenegger-face-drawing.png",
        },
        {
          id: 3,
          name: "Obama",
          img:
            "https://img2.freepng.ru/20180701/ypf/kisspng-elvis-presley-stencil-silhouette-art-5b38fae058b3a5.1073563015304608963633.jpg",
        },
        {
          id: 4,
          name: "Eminem",
          img: "https://data.whicdn.com/images/315945007/original.png",
        },
        {
          id: 5,
          name: "Eminem",
          img: "https://data.whicdn.com/images/315945007/original.png",
        },
        {
          id: 6,
          name: "Eminem",
          img: "https://data.whicdn.com/images/315945007/original.png",
        },
      ],
      dialogsMessage: [
        {
          id: 1,
          name: "Petua",
          message: "lorem lorem lorem lorem",
          img: "https://png-library.net/images/obama-face-png-6.png",
        },
        {
          id: 2,
          name: "Tramp",
          message: "lorem lorem lorem ",
          img:
            "https://www.clipartmax.com/png/full/339-3393862_arnold-schwarzenegger-silhouette-clipart-arnold-schwarzenegger-arnold-schwarzenegger-face-drawing.png",
        },
        {
          id: 3,
          name: "Obama",
          message: "lorem lorem ",
          img:
            "https://img2.freepng.ru/20180701/ypf/kisspng-elvis-presley-stencil-silhouette-art-5b38fae058b3a5.1073563015304608963633.jpg",
        },
        {
          id: 4,
          name: "Eminem",
          message: "lorem ",
          img: "https://data.whicdn.com/images/315945007/original.png",
        },
      ],
      newDialogText: "",
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("lol");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage  = dialogsPageReducer(this._state.dialogsPage, action);
    this._state.sidebar  = sidebar_reducer(this._state.sidebar ,action);

    this._callSubscriber(this._state);


   
  },
};



export default store;
