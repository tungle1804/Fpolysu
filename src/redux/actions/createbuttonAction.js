import ButtonService from '../../service/Button/ButtonService'
import MenuService from '../../service/Menu/MenuService'
import {
    FETCH_CREATE_BUTTON_REQUEST,
    FETCH_CREATE_BUTTON_SUCCESS,
    FETCH_CREATE_BUTTON_ERROR,
    FETCH_CREATE_BUTTON_DELETE,
    VIEW_BUTTON,
    UPDATE_BUTTON
} from '../constants/createbuttonAction'

export const createButton = (data) => async dispatch => {
    try {

        dispatch({ type: FETCH_CREATE_BUTTON_REQUEST })
        dispatch({
            type: FETCH_CREATE_BUTTON_SUCCESS,
            data: data

        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_CREATE_BUTTON_ERROR,
            message: error
        })
    }
}
export const viewButton = () => dispatch => {
    try {

        dispatch({ type: FETCH_CREATE_BUTTON_REQUEST })
        let email = localStorage.getItem('email')
        MenuService.getMenuByEmail(email).then((res) => {

            dispatch({
                type: VIEW_BUTTON


            })
        })





    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_CREATE_BUTTON_ERROR,
            message: error
        })
    }
}
export const deleteButton = (id) => async dispatch => {

    try {

        dispatch({ type: FETCH_CREATE_BUTTON_REQUEST })
        // let email = localStorage.getItem('email')
        // MenuService.getMenuByEmail(email).then((res) => {
        dispatch({
            type: FETCH_CREATE_BUTTON_DELETE,
            data: id

            // })
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_CREATE_BUTTON_ERROR,
            message: error
        })
    }
}
export const updateButton = (data) => async dispatch => {

    try {

        dispatch({ type: FETCH_CREATE_BUTTON_REQUEST })
        // let email = localStorage.getItem('email')
        // MenuService.getMenuByEmail(email).then((res) => {
        dispatch({
            type: UPDATE_BUTTON,
            data: data

            // })
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_CREATE_BUTTON_ERROR,
            message: error
        })
    }
}