import ButtonService from '../../service/Button/ButtonService'
import {
    FETCH_POSTS_REQUEST1,
    FETCH_POSTS_SUCCESS1,
    FETCH_POSTS_ERROR1
} from '../constants/buttonConstant'
export const viewButtonByIDMenu = (id) => async dispatch => {
    try {
        dispatch({ type: FETCH_POSTS_REQUEST1 })
        ButtonService.getButtonByIDMenu(id).then(res => {
            const button = res.data
            dispatch({
                type: FETCH_POSTS_SUCCESS1,
                data: button
            })
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: FETCH_POSTS_ERROR1,
            message: error
        })
    }
}
