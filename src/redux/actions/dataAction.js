import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILED,
    FETCH_DATA,
    SAVE_DATA,
    FETCH_DATA_INFO,
    SAVE_DATA_INFO,
    CREATE_DATA,
    FETCH_CREATE_DATA
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
export const fetchCreateData = payload => {
    return {
        type: FETCH_CREATE_DATA,
        payload: payload,
    }

}
export const createData = data => {
    return {
        type: CREATE_DATA,
        data: data
    }
}