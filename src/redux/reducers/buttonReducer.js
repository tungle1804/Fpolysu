import {
    FETCH_POSTS_REQUEST1,
    FETCH_POSTS_SUCCESS1,
    FETCH_POSTS_ERROR1
} from '../constants/buttonConstant'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: []

}
function buttonReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_POSTS_REQUEST1:
            return {
                ...state,
                requesting: true
            }
        case FETCH_POSTS_SUCCESS1:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            }
        case FETCH_POSTS_ERROR1:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            };
        default:
            return state;
    }

} export default buttonReducers