import { call, put, takeEvery } from "redux-saga/effects";
import MenuService from "../../service/Menu/MenuService";
import {
  fetchListMenusFailed,
  fetchListMenusSuccess,
  loadMenus,
  fetchListMenusRequest,
  savelistMenus,
} from "../actions/menuAction";
import * as taskTypesMenus from "./../constants/menuConstant";
import * as taskTypesButtons from "./../constants/buttonConstant";
import * as taskTypesData from "./../constants/dataConstanst";
import * as taskTypesInput from "./../constants/InputConstant";
import { getApi, getApi1, getApi2 } from "./../../util/api";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailed,
  saveData,
  saveDataInfo,
} from "../actions/dataAction";
import {
  fetchListButtonsFailed,
  fetchListButtonsRequest,
  fetchListButtonsSuccess,
  saveDataButtons,
} from "../actions/buttonAction";
import {
  saveInput,
  fetchInputRequest,
  fetchInputSuccess,
  fetchInputFailed,
  fetchSaveValueInput,
} from "../actions/InputAction";

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
    console.log(data);
    // const menu = yield call(MenuService.getMenuByEmail(email))
    // yield put(loadMenus())
    yield put(fetchListMenusRequest());
    // const menu = yield call(getApi("http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com", 'GET'))\
    // const response = yield call(getApi, ['/getMenuByEmail/vuthanhnam@gmail.com']);
    const response = yield call(getApi, [`/getMenuByEmail/${data.email}`]);

    yield put(fetchListMenusSuccess());
    yield put(savelistMenus(response.data));
  } catch (error) {
    console.log("menusaga");
    yield put(fetchListMenusFailed(error));
  }
}
function* getButtonById({ payload }) {
  try {
    // let email = localStorage.getItem('email')
    // const menu = yield call(MenuService.getMenuByEmail(email))
    // yield put(loadMenus())
    yield put(fetchListButtonsRequest());

    // const menu = yield call(getApi("http://localhost:8080/api/v1/getMenuByEmail/nhan@gmail.com", 'GET'))\
    const response = yield call(getApi, [`/getButtonByIDMenu/${payload.id}`]);
    yield put(fetchListButtonsSuccess());
    yield put(saveDataButtons(response.data));
  } catch (error) {
    console.log(error);
    yield put(fetchListButtonsFailed(error));
  }
}
function* getDataByUsers({ payload }) {
  let email = localStorage.getItem("email");
  try {
    yield put(fetchDataRequest());
    const response = yield call(getApi, [`/dataofcustomerbyuser/${email}`]);
    yield put(fetchDataSuccess());
    yield put(saveData(response.data));
  } catch (error) {
    yield put(fetchDataFailed(error));
  }
}
function* getDataInfo({ payload }) {
  try {
    yield put(fetchDataRequest());
    const response = yield call(getApi, [
      `/datacustomerandmodal/${payload.id}`,
    ]);
    yield put(fetchDataSuccess());
    yield put(saveDataInfo(response.data));
  } catch (error) {
    yield put(fetchDataFailed(error));
  }
}
function* createData({ payload }) {
  try {
    yield put(fetchDataRequest());
    const response = yield call(getApi1, [`/dataofcustomer`, payload]);
    yield put(fetchDataSuccess());
  } catch (error) {
    yield put(fetchInputFailed(error));
  }
}
function* getLoadInput({ payload }) {
  try {
    yield put(fetchInputRequest());
    const response = yield call(getApi1, [`/getModalByButton/${payload}`]);
    yield put(fetchInputSuccess());
    yield put(fetchSaveValueInput(response.data));
  } catch (error) {
    yield put(fetchInputFailed(error));
  }
}
function* fetchUpdateMenu({ data }) {
 
  try {
    yield put(fetchListMenusRequest());
    const response = yield call(getApi2, [`/menu`, data.data.menu[0]]);
    yield put(fetchListMenusSuccess(response));
    yield put(fetchListMenusRequest());
    let response1;
    for (let i = 0; i < data.data.buttons.length; i++) {
      response1 = yield call(getApi2, [`/button`, data.data.buttons[i]]);
      yield put(fetchListMenusSuccess(response1));
    }
    if (response.status == 200 && response1.status == 200) {
      yield put(fetchListMenusSuccess());
      data.history.push("/admin/list-menu");
      data.Swal.fire({
        position: "center",
        icon: "success",
        title: "S???a Menu th??nh c??ng",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  } catch (error) {
    yield put(fetchListMenusFailed(error));
    yield put(fetchListMenusFailed(error));
    data.history.push("/admin/list-menu");
    data.Swal.fire({
      position: "center",
      icon: "error",
      title: "C?? l???i xin m???i b???n th??? l???i",
      showConfirmButton: false,
      timer: 1000,
    });
  }
}
function* checkTotalMenu({ data }) {
  console.log(data);
  let email = localStorage.getItem("email");
  try {
    yield put(fetchListMenusRequest());
    const response = yield call(getApi, [`/getBasicPro/${email}`]);
    if (response.data == "OK") {
      yield put(fetchListMenusSuccess());
      data.history.push("/admin/create-menu");
    } else {
      yield put(fetchListMenusFailed());
      data.Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "T??i kho???n n??y t???i ??a l?? 5 Menu, b???n ph???i n??ng c???p t??i kho???n ????? ???????c t???o m???i",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  } catch (error) {
    yield put(fetchListMenusFailed(error));
  }
}
function* createMenu({ data }) {
  try {
    yield put(fetchListMenusRequest());
    const response = yield call(getApi1, [`/button`, data.data]);
    console.log(response);
    if (response.status == 200) {
      yield put(fetchListMenusSuccess());
      data.history.push("/admin/list-menu");
      data.Swal.fire({
        position: "center",
        icon: "success",
        title: "T???o Menu th??nh c??ng",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      yield put(fetchListMenusFailed());
      data.history.push("/admin/list-menu");
      data.Swal.fire({
        position: "center",
        icon: "error",
        title: "T???o Menu kh??ng th??nh c??ng",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    // if (response.data == "OK") {
    //   yield put(fetchListMenusSuccess());
    //   data.history.push("/admin/create-menu");
    // } else {
    //   yield put(fetchListMenusFailed());
    //   data.Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "T??i kho???n n??y t???i ??a l?? 10 Menu, b???n ph???i n??ng c???p t??i kho???n ????? ???????c t???o m???i",
    //     footer: '<a href="">Why do I have this issue?</a>',
    //   });
    // }
  } catch (error) {
    yield put(fetchListMenusFailed(error));
    data.history.push("/admin/list-menu");
    data.Swal.fire({
      position: "center",
      icon: "error",
      title: "C?? l???i xin m???i b???n th??? l???i",
      showConfirmButton: false,
      timer: 1000,
    });
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
  yield takeEvery(taskTypesMenus.FETCH_MENUS, fetchMenus);
  yield takeEvery(taskTypesButtons.FETCH_BUTTONS, getButtonById);
  yield takeEvery(taskTypesData.FETCH_DATA, getDataByUsers);
  yield takeEvery(taskTypesData.FETCH_DATA_INFO, getDataInfo);
  yield takeEvery(taskTypesData.FETCH_CREATE_DATA, createData);
  yield takeEvery(taskTypesInput.FETCH_LOAD_INPUT, getLoadInput);
  yield takeEvery(taskTypesMenus.FETCH_UPDATE_MENU, fetchUpdateMenu);
  yield takeEvery(taskTypesMenus.CHECK_TOTAL_MENU, checkTotalMenu);
  yield takeEvery(taskTypesMenus.CREATE_MEMU, createMenu);
  // yield takeEvery(taskTypesInput.FETCH_SAVE_INPUT, createInput)
}
export default menuSaga;
