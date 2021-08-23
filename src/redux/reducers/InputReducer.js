import {
    FETCH_INPUT_REQUEST,
    FETCH_INPUT_DELETE,
    FETCH_INPUT_SUCCESS,
    FETCH_INPUT_ERROR,
    VIEW_INPUT,
    FETCH_INPUT_UPDATE
} from '../constants/InputConstant'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: []

}
function InputReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_INPUT_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case FETCH_INPUT_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                // data: payload.data
                data: state.data.concat([payload.data])
            }
        case FETCH_INPUT_DELETE:
            const commentId = payload.data

            return {
                ...state,
                requesting: false,
                success: true,
                // data: payload.data

                data: state.data.filter(data => data.id_input !== commentId)

            }
        case FETCH_INPUT_UPDATE:
            return {
                ...state,
                requesting: false,
                success: true,
                data: state.data.map(item => {
                    return item.id_input === payload.data.id_input ? payload.data : item;
                })
            }

        case FETCH_INPUT_ERROR:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            };
        default:
            return state;
    }

} export default InputReducers