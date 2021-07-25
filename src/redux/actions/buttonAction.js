import ButtonService from '../../service/Button/ButtonService'
import {
    FETCH_BUTTONS_SUCCESS,
    SAVE_DATA_BUTTONS,
    FETCH_BUTTONS_FAILED,
    FETCH_BUTTONS_REQUEST,
    FETCH_BUTTONS
} from '../constants/buttonConstant'
// export const viewButtonByIDMenu = (id) => async dispatch => {
//     try {
//         dispatch({ type: FETCH_POSTS_REQUEST1 })
//         ButtonService.getButtonByIDMenu(id).then(res => {
//             const button = res.data
//             dispatch({
//                 type: FETCH_POSTS_SUCCESS1,
//                 data: button
//             })
//         })

//     } catch (error) {
//         console.log(error)
//         dispatch({
//             type: FETCH_POSTS_ERROR1,
//             message: error
//         })
//     }
// }
export const loadButtons = (payload) => {
    return {
        type: FETCH_BUTTONS,
        payload: payload
    }
}
export const fetchListButtonsRequest = () => {
    return {
        type: FETCH_BUTTONS_REQUEST,
    }

    // try {

    //     dispatch({ type: FETCH_POSTS_REQUEST })
    //     let email = localStorage.getItem('email')
    //     MenuService.getMenuByEmail(email).then((res) => {
    //         const menu = res.data
    //         dispatch({
    //             type: FETCH_POSTS_SUCCESS,
    //             data: menu

    //         })
    //     })

    // } catch (error) {
    //     console.log(error)
    //     dispatch({
    //         type: FETCH_POSTS_ERROR,
    //         message: error
    //     })
    // }
}
export const fetchListButtonsSuccess = data => {

    return {
        type: FETCH_BUTTONS_SUCCESS,
        data: data

    }
}
export const fetchListButtonsFailed = error => {
    return {
        type: FETCH_BUTTONS_FAILED,
        data: {
            error
        }
    }
}
export const saveDataButtons = data => {
    return {
        type: SAVE_DATA_BUTTONS,
        data: data

    }
}