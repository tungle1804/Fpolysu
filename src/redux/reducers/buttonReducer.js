
import {
    FETCH_BUTTONS_REQUEST,
    FETCH_BUTTONS_SUCCESS,
    FETCH_BUTTONS_FAILED,
    SAVE_DATA_BUTTONS,
    FETCH_BUTTONS
} from '../constants/buttonConstant'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    dataButton: [],

}
function buttonReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_BUTTONS_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case FETCH_BUTTONS_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true
            }
        case FETCH_BUTTONS_FAILED:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            }
        case SAVE_DATA_BUTTONS:
            return {

                ...state,
                dataButton: payload.data

            }
        default:
            return state;
    }

} export default buttonReducers