import { call, put, takeEvery } from 'redux-saga/effects'
import MenuService from '../../service/Menu/MenuService'
import { fetchListMenusFailed, fetchListMenusSuccess, loadMenus, fetchListMenusRequest, savelistMenus } from '../actions/menuAction'
import * as taskTypes from './../constants/menuConstant'

let email = localStorage.getItem('email')
const apiUrl = `http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com`
// const apiUrl1 = `http://localhost:8080/api/v1/getButtonByIDMenu/${id}`
function getApi() {
    return fetch("http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}
function* fetchMenus() {

    try {
        // let email = localStorage.getItem('email')
        // const menu = yield call(MenuService.getMenuByEmail(email))
        // yield put(loadMenus())
        yield put(fetchListMenusRequest())
        const menu = yield call(getApi)
        console.log(menu)
        yield put(fetchListMenusSuccess())
        yield put(savelistMenus(menu))

    } catch (error) {
        console.log('menusaga')
        yield put(fetchListMenusFailed(error))
    }
}
function* menuSaga() {

    yield takeEvery(taskTypes.FETCH_MENUS, fetchMenus)
}
export default menuSaga;