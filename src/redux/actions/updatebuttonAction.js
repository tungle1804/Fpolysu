import ButtonService from '../../service/Button/ButtonService'
import MenuService from '../../service/Menu/MenuService'
import {
    FETCH_UPDATE_BUTTON_REQUEST,
    FETCH_UPDATE_BUTTON_VIEW,
    FETCH_UPDATE_BUTTON_ERROR,
    FETCH_UPDATE_BUTTON_UPDATE,
    FETCH_UPDATE_BUTTON_CREATE
} from '../constants/updatebuttonConstant'
export const loadButtonByIDMenu = (id) => async dispatch => {
    try {
        dispatch({ type: FETCH_UPDATE_BUTTON_REQUEST })
        ButtonService.getButtonByIDMenu(id).then(res => {
            const button = res.data
            dispatch({
                type: FETCH_UPDATE_BUTTON_VIEW,
                data: button
            })
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_UPDATE_BUTTON_ERROR,
            message: error
        })
    }
}
export const updateButton = (data) => async dispatch => {
    try {
        dispatch({ type: FETCH_UPDATE_BUTTON_REQUEST })
        let email = localStorage.getItem('email')
        MenuService.getMenuByEmail(email).then((res) => {
            dispatch({
                type: FETCH_UPDATE_BUTTON_UPDATE,
                data: data
            })
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_UPDATE_BUTTON_ERROR,
            message: error
        })
    }
}
export const viewButton = () => async dispatch => {
    try {
        dispatch({ type: FETCH_UPDATE_BUTTON_REQUEST })


        dispatch({
            type: FETCH_UPDATE_BUTTON_VIEW,
            data: []

        })


    } catch (error) {
        dispatch({
            type: FETCH_UPDATE_BUTTON_ERROR,
            message: error
        })
    }
}
//this line is test
export const createButton = (data) => async dispatch => {
    try {

        dispatch({ type: FETCH_UPDATE_BUTTON_REQUEST })
        let email = localStorage.getItem('email')
        MenuService.getMenuByEmail(email).then((res) => {
            dispatch({
                type: FETCH_UPDATE_BUTTON_CREATE,
                data: data

            })
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_UPDATE_BUTTON_ERROR,
            message: error
        })
    }
}