import ButtonService from '../../service/Button/ButtonService'
import {
    FETCH_DISPLAY_MENU_REQUEST,
    FETCH_DISPLAY_MENU_SUCCESS,
    FETCH_DISPLAY_MENU_FAILED,
    SAVE_DISPLAY_MENU,
    SAVE_DISPLAY_MENU_V2

} from '../constants/displayMenuConstant'

export const fetchDisplayMenuRequest = () => {
    return {
        type: FETCH_DISPLAY_MENU_REQUEST,
    }

}
export const fetchDisplayMenuSuccess = payload => {

    return {
        type: FETCH_DISPLAY_MENU_SUCCESS,
        payload: payload

    }
}
export const fetchDisplayMenuFailed = error => {
    return {
        type: FETCH_DISPLAY_MENU_FAILED,
        payload: {
            error
        }
    }
}
export const saveDisplayMenu = payload => {
    return {
        type: SAVE_DISPLAY_MENU,
        payload: payload

    }

}
export const saveDisplayMenuV2 = payload => {
    return {
        type: SAVE_DISPLAY_MENU_V2,
        payload: payload
    }
}