import { pixelsAPI } from "../api/api";
import * as axios from "axios";
import store from "./redux-store";

const TOGGLE_IS_FETCHING = "MTOGGLE_IS_FETCHING";
const SET_PIXELS = "PHOTOS/SET_PIXELS";
const SET_PIXELS_NEXT = "PHOTOS/SET_PIXELS_NEXT";
const SET_PIXELS_NEW = "PHOTOS/SET_PIXELS_NEW";
const TOGGLE_NEXT_IS_FETCHING = "TOGGLE_NEXT_IS_FETCHING"

let initialState = {
  pixels: [],
  pixelsNext: [],
  isFetching: true,
  isNextFetching:false,
};

const photosPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIXELS: {
      return { ...state, pixels: action.pixels };
    }

    case SET_PIXELS_NEW: {
      //return { ...state, pixels: [...action.pixelsNew] };
      return { ...state, pixels: [...state.pixels, ...action.pixelsNew] };
    }
    case SET_PIXELS_NEXT: {
      return { ...state, pixelsNext: action.pixelsNext };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_NEXT_IS_FETCHING: {
      return { ...state, isNextFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setPixels = (pixels) => ({ type: SET_PIXELS, pixels });
export const setPixelsNext = (pixelsNext) => ({
  type: SET_PIXELS_NEXT,
  pixelsNext,
});
export const setPixelsNew = (pixelsNew) => ({
  type: SET_PIXELS_NEW,
  pixelsNew,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleNextIsFetching = (isFetching) => ({
  type: TOGGLE_NEXT_IS_FETCHING,
  isFetching,
});


export const requestPixels = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await pixelsAPI.getPixelsAPI();
    dispatch(toggleIsFetching(false));
    dispatch(setPixels(response.data.photos));
    dispatch(setPixelsNext(response.data.next_page));
  };
};
export const requestPixelsNew = () => {
  return async (dispatch) => {
    dispatch(toggleNextIsFetching(true));
    let responseNextPage = await pixelsAPI.getPixelsAPINext();
    dispatch(toggleNextIsFetching(false));
    dispatch(setPixelsNew(responseNextPage.data.photos));
    dispatch(setPixelsNext(responseNextPage.data.next_page));
  };
};

export default photosPageReducer;
