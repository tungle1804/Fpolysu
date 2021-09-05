import {
  FETCH_UPDATE_BUTTON_REQUEST,
  FETCH_UPDATE_BUTTON_VIEW,
  FETCH_UPDATE_BUTTON_ERROR,
  FETCH_UPDATE_BUTTON_UPDATE,
  FETCH_UPDATE_BUTTON_CREATE,
  FETCH_CLEAR_UPDATE_BUTTON,
} from "../constants/updatebuttonConstant";

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: [],
};
function updatebuttonReducers(state = initialState, payload) {
  switch (payload.type) {
    case FETCH_UPDATE_BUTTON_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_UPDATE_BUTTON_VIEW:
      if (payload.data.length == 0) {
        return {
          ...state,
          requesting: false,
          success: true,
          // data: state.data
          // data: state.data.concat([payload.data])
        };
      } else {
        return {
          ...state,
          requesting: false,
          success: true,

          data: payload.data,
          // data: state.data.concat([payload.data])
        };
      }
    case FETCH_UPDATE_BUTTON_UPDATE:
      return {
        ...state,
        requesting: false,
        success: true,
        data: state.data.map((item) => {
          return item.id_button === payload.data.id_button
            ? payload.data
            : item;
        }),
      };
    case FETCH_UPDATE_BUTTON_CREATE:
      return {
        ...state,
        requesting: false,
        success: true,
        // data: payload.data
        data: state.data.concat([payload.data]),
      };
    case FETCH_UPDATE_BUTTON_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: payload.message,
      };
    case FETCH_CLEAR_UPDATE_BUTTON:
      return {
        ...state,
        requesting: false,
        success: true,
        data: [],
      };
    default:
      return state;
  }
}
export default updatebuttonReducers;
