import { call, put, takeEvery } from 'redux-saga/effects'
import MenuService from '../../service/Menu/MenuService'
import { fetchListMenusFailed, fetchListMenusSuccess, loadMenus, fetchListMenusRequest, savelistMenus } from '../actions/menuAction'
import * as taskTypesMenus from './../constants/menuConstant'
import * as taskTypesButtons from './../constants/buttonConstant'
import * as taskTypesData from './../constants/dataConstanst'
import * as taskTypesInput from './../constants/InputConstant'
import { getApi, getApi1 } from './../../util/api'
import { fetchDataRequest, fetchDataSuccess, fetchDataFailed, saveData, saveDataInfo } from '../actions/dataAction'
import { fetchListButtonsFailed, fetchListButtonsRequest, fetchListButtonsSuccess, saveDataButtons } from '../actions/buttonAction'
import { saveInput, fetchInputRequest, fetchInputSuccess, fetchInputFailed } from '../actions/InputAction'
// let email = localStorage.getItem('email')
// const apiUrl = `http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com`
// const apiUrl1 = `http://localhost:8080/api/v1/getButtonByIDMenu/${id}`
// function getApi() {
//     return fetch("http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com", {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }).then(response => response.json())
//         .catch((error) => { throw error })
// }
// const api = "http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com"
// const method = 'GET'

// function apiall (data){
//     return new Promise(( ,method)=>{
//         return fetch(api),{
//             method: method,
//             headers:{
//                 'Content-Type': 'application/json',
//             }
//         }
//         }).then(response=>response.json()).catch((error)=>{throw error})
//     }

function* fetchMenus({ data }) {

    try {
        // let email = localStorage.getItem('email')
        console.log(data)
        // const menu = yield call(MenuService.getMenuByEmail(email))
        // yield put(loadMenus())
        yield put(fetchListMenusRequest())
        // const menu = yield call(getApi("http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com", 'GET'))\
        // const response = yield call(getApi, ['/getMenuByEmail/vuthanhnam@gmail.com']);
        const response = yield call(getApi, [`/getMenuByEmail/${data.email}`]);

        yield put(fetchListMenusSuccess())
        yield put(savelistMenus(response.data))

    } catch (error) {
        console.log('menusaga')
        yield put(fetchListMenusFailed(error))
    }
}
function* getButtonById({ payload }) {

    console.log(payload)
    try {
        // let email = localStorage.getItem('email')
        // const menu = yield call(MenuService.getMenuByEmail(email))
        // yield put(loadMenus())
        yield put(fetchListButtonsRequest())

        // const menu = yield call(getApi("http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com", 'GET'))\
        const response = yield call(getApi, [`/getButtonByIDMenu/${payload.id}`]);
        yield put(fetchListButtonsSuccess())
        yield put(saveDataButtons(response.data))

    } catch (error) {
        console.log(error)
        yield put(fetchListButtonsFailed(error))
    }
}
function* getDataByUsers({ payload }) {
    let email = localStorage.getItem('email')
    try {
        yield put(fetchDataRequest())
        const response = yield call(getApi, [`/dataofcustomerbyuser/${email}`]);
        yield put(fetchDataSuccess())
        yield put(saveData(response.data))
    } catch (error) {
        yield put(fetchDataFailed(error))
    }
}
function* getDataInfo({ payload }) {

    try {
        yield put(fetchDataRequest())
        const response = yield call(getApi, [`/dataofcustomerbyid/${payload.id}`]);
        yield put(fetchDataSuccess())
        yield put(saveDataInfo(response.data))
    } catch (error) {
        yield put(fetchDataFailed(error))
    }
}
function* createData({ payload }) {
    try {

        yield put(fetchDataRequest())
        const response = yield call(getApi1, [`/dataofcustomer`, payload])
        yield put(fetchDataSuccess())
    } catch (error) {

        yield put(fetchInputFailed(error))
    }
}

// function* createInput({ payload }) {

//     try {
//         yield put(fetchInputRequest())
//         const response = yield call(getApi1, [`/createModal`, payload])
//         yield put(saveInput(response.data))
//         yield put(fetchInputSuccess())
//     } catch (error) {

//         yield put(fetchDataFailed(error))
//     }

// }
function* menuSaga() {

    yield takeEvery(taskTypesMenus.FETCH_MENUS, fetchMenus)
    yield takeEvery(taskTypesButtons.FETCH_BUTTONS, getButtonById)
    yield takeEvery(taskTypesData.FETCH_DATA, getDataByUsers)
    yield takeEvery(taskTypesData.FETCH_DATA_INFO, getDataInfo)
    yield takeEvery(taskTypesData.FETCH_CREATE_DATA, createData)
    // yield takeEvery(taskTypesInput.FETCH_SAVE_INPUT, createInput)
}
export default menuSaga;
