const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_NEWS_DIALOG_TEXT = "UPDATE-NEWS-DIALOG-TEXT";

let initialState ={
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
}

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DIALOG":
      let newDialog = {
        id: 6,
        name: "Petua",
        message: state.newDialogText,
        img: "https://png-library.net/images/obama-face-png-6.png",
      };
      state.dialogsMessage.push(newDialog);
      state.newDialogText = "";
      return state;
    case "UPDATE_NEWS_DIALOG_TEXT":
      state.newDialogText = action.newDialogText;
      return state;
    default:
      return state;
  }
};

export const addDialogActionCreator = () => {
    return {
      type: "ADD_DIALOG",
    };
  };
  export const updateNewsDialogActionCreator = (text) => {
    return {
      type: "UPDATE_NEWS_DIALOG_TEXT",
      newDialogText: text,
    };
  };
  
export default dialogsPageReducer;
