import {
  FETCH_MENUS_REQUEST,
  FETCH_MENUS_SUCCESS,
  FETCH_MENUS_FAILED,
  FETCH_MENUS,
  SAVE_DATA_MENUS,
  SAVE_DATA_MENU,
  FETCH_UPDATE_MENU,
} from "../constants/menuConstant";
import MenuService from "../../service/Menu/MenuService";

export const loadMenus = (data) => {
  return {
    type: FETCH_MENUS,
    data: data,
  };
};
export const fetchListMenusRequest = () => {
  return {
    type: FETCH_MENUS_REQUEST,
  };

  // try {

  //     dispatch({ type: FETCH_POSTS_REQUEST })
  //     let email = localStorage.getItem('email')
  //     MenuService.getMenuByEmail(email).then((res) => {
  //         const menu = res.data
  //         dispatch({
  //             type: FETCH_POSTS_SUCCESS,
  //             data: menu

  //         })
  //     })

  // } catch (error) {
  //     console.log(error)
  //     dispatch({
  //         type: FETCH_POSTS_ERROR,
  //         message: error
  //     })
  // }
};
export const fetchListMenusSuccess = (data) => {
  return {
    type: FETCH_MENUS_SUCCESS,
    data: data,
  };
};
export const fetchUpdateMenu = (data) => {
  return {
    type: FETCH_UPDATE_MENU,
    data: data,
  };
};
export const fetchListMenusFailed = (error) => {
  return {
    type: FETCH_MENUS_FAILED,
    data: {
      error,
    },
  };
};
export const savelistMenus = (data) => {
  return {
    type: SAVE_DATA_MENUS,
    data: data,
  };
};
export const viewPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MENUS_REQUEST });
    MenuService.getMenuByID(id).then((res) => {
      const menu = res.data;
      dispatch({
        type: SAVE_DATA_MENU,
        data: menu,
      });
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_MENUS_FAILED,
      message: error,
    });
  }
};
