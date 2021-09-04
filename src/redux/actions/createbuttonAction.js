import ButtonService from "../../service/Button/ButtonService";
import MenuService from "../../service/Menu/MenuService";
import {
  FETCH_CREATE_BUTTON_REQUEST,
  FETCH_CREATE_BUTTON_SUCCESS,
  FETCH_CREATE_BUTTON_ERROR,
  FETCH_CREATE_BUTTON_DELETE,
  VIEW_BUTTON,
  UPDATE_BUTTON,
  FETCH_CLEAR,
  UPDATE_BUTTON_EDIT,
} from "../constants/createbuttonAction";

export const createButton = (data) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CREATE_BUTTON_REQUEST });
    dispatch({
      type: FETCH_CREATE_BUTTON_SUCCESS,
      data: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CREATE_BUTTON_ERROR,
      message: error,
    });
  }
};
export const viewButton = () => (dispatch) => {
  try {
    dispatch({ type: FETCH_CREATE_BUTTON_REQUEST });
    let email = localStorage.getItem("email");
    MenuService.getMenuByEmail(email).then((res) => {
      dispatch({
        type: VIEW_BUTTON,
      });
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_CREATE_BUTTON_ERROR,
      message: error,
    });
  }
};
export const deleteButton = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CREATE_BUTTON_REQUEST });
    // let email = localStorage.getItem('email')
    // MenuService.getMenuByEmail(email).then((res) => {
    dispatch({
      type: FETCH_CREATE_BUTTON_DELETE,
      data: id,

      // })
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_CREATE_BUTTON_ERROR,
      message: error,
    });
  }
};
export const updateButton = (data) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CREATE_BUTTON_REQUEST });
    // let email = localStorage.getItem('email')
    // MenuService.getMenuByEmail(email).then((res) => {
    dispatch({
      type: UPDATE_BUTTON,
      data: data,

      // })
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_CREATE_BUTTON_ERROR,
      message: error,
    });
  }
};
export const updateButtonEdit = (data) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CREATE_BUTTON_REQUEST });
    // let email = localStorage.getItem('email')
    // MenuService.getMenuByEmail(email).then((res) => {
    dispatch({
      type: UPDATE_BUTTON_EDIT,
      data: data,

      // })
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_CREATE_BUTTON_ERROR,
      message: error,
    });
  }
};
export const loadButtonByIDMenu = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CREATE_BUTTON_REQUEST });
    ButtonService.getButtonByIDMenu(id).then((res) => {
      const button = res.data;
      if (button && button.length > 0) {
        for (let i = 0; i < button.length; i++) {
          dispatch({
            type: FETCH_CREATE_BUTTON_SUCCESS,
            data: button[i],
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_CREATE_BUTTON_ERROR,
      message: error,
    });
  }
};
export const fetchClear = (data) => {
  return {
    type: FETCH_CLEAR,
    data: data,
  };
};
