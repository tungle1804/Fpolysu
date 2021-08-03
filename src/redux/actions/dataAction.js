import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILED,
    FETCH_DATA,
    SAVE_DATA,
    FETCH_DATA_INFO,
    SAVE_DATA_INFO
} from '../constants/dataConstanst'

export const loadData = () => {
    return {
        type: FETCH_DATA
    }
}
export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST,
    }
}
export const fetchDataSuccess = data => {

    return {
        type: FETCH_DATA_SUCCESS,
        data: data

    }
}
export const fetchDataFailed = error => {
    return {
        type: FETCH_DATA_FAILED,
        data: {
            error
        }
    }
}
export const saveData = data => {
    return {
        type: SAVE_DATA,

        data: data

    }
}
export const loadDataInfo = (payload) => {
    return {
        type: FETCH_DATA_INFO,
        payload: payload,
    }
}
export const saveDataInfo = data => {
    return {
        type: SAVE_DATA_INFO,
        data: data
    }
}