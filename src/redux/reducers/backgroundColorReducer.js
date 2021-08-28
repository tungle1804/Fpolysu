
import {
    FETCH_BACKGROUNDCOLOR,
    FETCH_BACKGROUNDCOLOR_FAILED,
    FETCH_BACKGROUNDCOLOR_REQUEST,
    FETCH_BACKGROUNDCOLOR_SUCCESS,
    SAVE_BACKGROUNDCOLOR
} from '../constants/backgroungColorConstast'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    dataColorMenu: [],

}
function backgroundcolorReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_BACKGROUNDCOLOR:
            return {
                ...state,
                requesting: true
            }
        case FETCH_BACKGROUNDCOLOR_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true
            }
        case FETCH_BACKGROUNDCOLOR_FAILED:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            }
        case SAVE_BACKGROUNDCOLOR:
            return {

                ...state,
                dataColorMenu: payload.data

            }
        default:
            return state;
    }

} export default backgroundcolorReducers