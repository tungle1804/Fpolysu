import { call, put, takeEvery } from 'redux-saga/effects'
import MenuService from '../../service/Menu/MenuService'
import { fetchListMenusFailed, fetchListMenusSuccess, loadMenus, fetchListMenusRequest, savelistMenus } from '../actions/menuAction'
import * as taskTypesMenus from './../constants/menuConstant'
import * as taskTypesButtons from './../constants/buttonConstant'
import { getApi } from './../../util/api'
import { fetchListButtonsFailed, fetchListButtonsRequest, fetchListButtonsSuccess, saveDataButtons } from '../actions/buttonAction'
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

function* fetchMenus() {

    try {
        // let email = localStorage.getItem('email')
        // const menu = yield call(MenuService.getMenuByEmail(email))
        // yield put(loadMenus())
        yield put(fetchListMenusRequest())
        // const menu = yield call(getApi("http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com", 'GET'))\
        const response = yield call(getApi, ['/getMenuByEmail/abc@gmail.com']);
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
function* menuSaga() {

    yield takeEvery(taskTypesMenus.FETCH_MENUS, fetchMenus)
    yield takeEvery(taskTypesButtons.FETCH_BUTTONS, getButtonById)
}
export default menuSaga;