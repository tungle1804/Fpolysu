import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILED,
    FETCH_DATA,
    SAVE_DATA,
    FETCH_DATA_INFO,
    SAVE_DATA_INFO
} from '../constants/dataConstanst'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: [],
    dataInfo: []
}
function dataReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true
            }
        case FETCH_DATA_FAILED:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            }
        case SAVE_DATA:
            return {

                ...state,
                data: payload.data
            }
        case SAVE_DATA_INFO:
            return {
                ...state,
                dataInfo: payload.data
            }
        default:
            return state;
    }

} export default dataReducers