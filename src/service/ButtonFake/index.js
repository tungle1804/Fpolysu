import axios from 'axios';
const Button_API_BASE_URL = "http://localhost:8080/api/v1/buttonfake";


class ButtonFake {
    getButtonFake() {
        return axios.get(Button_API_BASE_URL);
    }
    createButtonFake(buttons) {
        return axios.post(Button_API_BASE_URL, buttons)
    }
    deleteButtonFake(buttons) {
        return axios.delete(Button_API_BASE_URL + '/' + buttons)
    }
    updateButtonFake(buttons, id) {
        return axios.put(Button_API_BASE_URL + '/' + id, buttons)
    }

}
export default new ButtonFake()