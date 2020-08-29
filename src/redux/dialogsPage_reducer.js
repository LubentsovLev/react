const ADD_DIALOG = "DIALOG/ADD-DIALOG";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Alex",
      img: "",
    },
    {
      id: 2,
      name: "Trump",
      img:
        "https://krot.info/uploads/posts/2019-09/1569321074_donald-tramp-20.jpg",
    },
    {
      id: 3,
      name: "Obama",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg",
    },
    {
      id: 4,
      name: "Simon",
      img: "",
    },
    {
      id: 5,
      name: "George",
      img: "",
    },
    {
      id: 6,
      name: "The Weeknd",
      img:
        "https://lastfm.freetls.fastly.net/i/u/ar0/954aa276b464770ffc4e3c125f6bd934.jpg",
    },
  ],
  dialogsMessage: [
    {
      id: 1,
      name: "Alex",
      message: "Hey i'm Alex",
      img: "https://image.flaticon.com/icons/svg/3135/3135715.svg",
    },
    {
      id: 2,
      name: "Trump",
      img:
        "https://krot.info/uploads/posts/2019-09/1569321074_donald-tramp-20.jpg",
      message: "Hey i'm Trump",
    },
    {
      id: 3,
      name: "Obama",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg",
      message: "Hey i'm Obama ",
    },
    {
      id: 4,
      name: "Simon",
      img: "",
    },
    {
      id: 5,
      name: "George",
      img: "",
      message: "Hey i'm Simon",
    },
    {
      id: 6,
      name: "The Weeknd",
      img:
        "https://lastfm.freetls.fastly.net/i/u/ar0/954aa276b464770ffc4e3c125f6bd934.jpg",
      message: "Hey i'm The Weeknd",
    },
  ],
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      return {
        ...state,
        dialogsData: [...state.dialogsData],
        dialogsMessage: [
          ...state.dialogsMessage,
          {
            id: 6,
            name: "Petua",
            message: action.AddDialogField,
            img: "https://png-library.net/images/obama-face-png-6.png",
          },
        ],
      };

    default:
      return state;
  }
};

export const addDialogActionCreator = (AddDialogField) => {
  return {
    type: ADD_DIALOG,
    AddDialogField,
  };
};

export default dialogsPageReducer;
