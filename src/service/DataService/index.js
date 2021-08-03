import axios from 'axios';
const Data_API_BASE_URL = "http://localhost:8080/api/v1/dataofcustomer";

class Data {

    createData(data) {
        return axios.post(Data_API_BASE_URL, data)
    }

}
export default new Data()