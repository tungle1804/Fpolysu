import ButtonService from '../../service/Button/ButtonService'
import MenuService from '../../service/Menu/MenuService'
import {
    FETCH_INPUT_DELETE,
    FETCH_INPUT_REQUEST,
    FETCH_INPUT_SUCCESS,
    VIEW_INPUT,
    FETCH_INPUT_ERROR,
    FETCH_INPUT_UPDATE,
    FETCH_SAVE_INPUT,
    SAVE_INPUT
} from '../constants/InputConstant'


export const fetchInputRequest = () => {
    return {
        type: FETCH_INPUT_REQUEST,
    }
}
export const fetchInputSuccess = data => {

    return {
        type: FETCH_INPUT_SUCCESS,
        data: data

    }
}
export const fetchInputFailed = error => {
    return {
        type: FETCH_INPUT_ERROR,
        data: {
            error
        }
    }
}
export const CreateInput = (data) => async dispatch => {
    try {

        dispatch({ type: FETCH_INPUT_REQUEST })
        dispatch({
            type: FETCH_INPUT_SUCCESS,
            data: data

        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_INPUT_ERROR,
            message: error
        })
    }
}

export const deleteInput = (id) => async dispatch => {

    try {

        dispatch({ type: FETCH_INPUT_REQUEST })
        // let email = localStorage.getItem('email')
        // MenuService.getMenuByEmail(email).then((res) => {
        dispatch({
            type: FETCH_INPUT_DELETE,
            data: id

            // })
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_INPUT_ERROR,
            message: error
        })
    }
}
export const updateInput = (data) => async dispatch => {

    try {

        dispatch({ type: FETCH_INPUT_REQUEST })
        // let email = localStorage.getItem('email')
        // MenuService.getMenuByEmail(email).then((res) => {
        dispatch({
            type: FETCH_INPUT_UPDATE,
            data: data

            // })
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_INPUT_ERROR,
            message: error
        })
    }
}
export const fetchSaveInput = payload => {
    return {
        type: FETCH_SAVE_INPUT,
        payload: payload,
    }

}
export const saveInput = payload => {
    return {
        type: SAVE_INPUT,
        payload: payload,
    }
}
