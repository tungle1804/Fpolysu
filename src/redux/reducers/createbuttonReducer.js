import {
    FETCH_CREATE_BUTTON_REQUEST,
    FETCH_CREATE_BUTTON_SUCCESS,
    FETCH_CREATE_BUTTON_ERROR,
    FETCH_CREATE_BUTTON_DELETE,
    VIEW_BUTTON,
    UPDATE_BUTTON,
    FETCH_CLEAR
} from '../constants/createbuttonAction'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: []

}
function createbuttonReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_CREATE_BUTTON_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case FETCH_CREATE_BUTTON_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                // data: payload.data
                data: state.data.concat([payload.data])
            }
        case FETCH_CREATE_BUTTON_DELETE:
            const commentId = payload.data

            return {
                ...state,
                requesting: false,
                success: true,
                // data: payload.data

                data: state.data.filter(data => data.id_button !== commentId)

            }
        case VIEW_BUTTON:
            return {
                ...state,
                requesting: false,
                success: true,
                // data: payload.data
            }
        case UPDATE_BUTTON:
            return {
                ...state,
                requesting: false,
                success: true,
                data: state.data.map(item => {
                    return item.id_button === payload.data.id_button ? payload.data : item;
                })
            }
        case FETCH_CREATE_BUTTON_ERROR:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            };
        case FETCH_CLEAR:
            return {
                ...state,
                requesting: false,
                success: true,
                data: [],
            };
        default:
            return state;
    }

} export default createbuttonReducers