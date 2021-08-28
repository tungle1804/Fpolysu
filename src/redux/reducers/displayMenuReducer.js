
import {
    FETCH_DISPLAY_MENU,
    FETCH_DISPLAY_MENU_FAILED,
    FETCH_DISPLAY_MENU_REQUEST,
    FETCH_DISPLAY_MENU_SUCCESS,
    SAVE_DISPLAY_MENU,
    SAVE_DISPLAY_MENU_V2
} from '../constants/displayMenuConstant'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    displayMenu: "1",
    dislayMenuV2: "1",

}
function displayMenuReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_DISPLAY_MENU_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case FETCH_DISPLAY_MENU_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true
            }
        case FETCH_DISPLAY_MENU_FAILED:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            }
        case SAVE_DISPLAY_MENU:
            return {
                ...state,
                displayMenu: payload.payload
            }
        case SAVE_DISPLAY_MENU_V2:
            return {
                ...state,
                dislayMenuV2: payload.payload
            }
        default:
            return state;
    }

} export default displayMenuReducers