import axios from 'axios';
const Button_API_BASE_URL = "http://localhost:8080/api/v1/button";
const Create_Button_API_BASE_URL = "http://localhost:8080/api/v1/createbutton"
const ButtonByIDMenu_API_BASE_URL = "http://localhost:8080/api/v1/getButtonByIDMenu"

class Button {

    createButton(buttons) {
        return axios.post(Button_API_BASE_URL, buttons)
    }
    createButtons(buttons) {
        return axios.post(Create_Button_API_BASE_URL, buttons)
    }
    getButtonByIDMenu(idmenu) {
        return axios.get(ButtonByIDMenu_API_BASE_URL + '/' + idmenu)
    }
    updateButton(buttons, id) {
        return axios.put(Button_API_BASE_URL + '/' + id, buttons)
    }
}
export default new Button()