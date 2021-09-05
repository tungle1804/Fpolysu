import ButtonService from "../../service/Button/ButtonService";
import {
  FETCH_BACKGROUNDCOLOR,
  FETCH_BACKGROUNDCOLOR_REQUEST,
  FETCH_BACKGROUNDCOLOR_SUCCESS,
  FETCH_BACKGROUNDCOLOR_FAILED,
  SAVE_BACKGROUNDCOLOR,
  SAVE_OPACITY,
  FETCH_CLEAR_COLOR_MENU,
} from "../constants/backgroungColorConstast";
export const loadButtons = (payload) => {
  return {
    type: FETCH_BACKGROUNDCOLOR,
    payload: payload,
  };
};
export const fetchBackgroundColorRequest = () => {
  return {
    type: FETCH_BACKGROUNDCOLOR_REQUEST,
  };
};
export const fetchBackgroundColorSuccess = (data) => {
  return {
    type: FETCH_BACKGROUNDCOLOR_SUCCESS,
    data: data,
  };
};
export const fetchBackgroundColorFailed = (error) => {
  return {
    type: FETCH_BACKGROUNDCOLOR_FAILED,
    data: {
      error,
    },
  };
};
export const saveBackgroundColor = (data) => {
  return {
    type: SAVE_BACKGROUNDCOLOR,
    data: data,
  };
};
export const saveOpacityMenu = (data) => {
  return {
    type: SAVE_OPACITY,
    data: data,
  };
};
export const fetchClearColorMenu = (data) => {
  return {
    type: FETCH_CLEAR_COLOR_MENU,
    data: data,
  };
};
