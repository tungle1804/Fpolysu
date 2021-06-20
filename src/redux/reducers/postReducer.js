import {
    FETCH_MENUS_REQUEST,
    FETCH_MENUS_SUCCESS,
    FETCH_MENUS_FAILED,
    SAVE_DATA_MENUS,
} from '../constants/menuConstant'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: [],
    menusData: []
}
function postReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_MENUS_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case SAVE_DATA_MENUS:
            return {
                ...state,
                requesting: false,
                success: true,

            }
        case FETCH_MENUS_FAILED:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            }
        case SAVE_DATA_MENUS:
            return {

                ...state,
                data: payload.data
            }
        default:
            return state;
    }

} export default postReducers