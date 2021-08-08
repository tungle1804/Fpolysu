import axios from "axios";
const baseApiUrl = 'http://localhost:8080/api/v1'
const baseInstance = axios.create({
    baseURL: baseApiUrl,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
    }
})
export default baseInstance