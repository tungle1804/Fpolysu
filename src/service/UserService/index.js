import axios from 'axios';
const User_API_BASE_URL = "http://localhost:8080/api/v1/user";


class User {
    getUser() {
        return axios.get(User_API_BASE_URL);
    }
    createUser(user) {
        return axios.post(User_API_BASE_URL, user)
    }
    deleteUser(user) {
        return axios.delete(User_API_BASE_URL + '/' + user)
    }
    loginUser(email) {
        return axios.get(User_API_BASE_URL + '/' + email)
    }
}
export default new User()