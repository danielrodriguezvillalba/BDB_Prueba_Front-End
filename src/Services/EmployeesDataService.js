import axios from 'axios';
const API_URL = 'http://localhost:8080'


const api = axios.create ({
    baseURL: `http://localhost:8080/employee/`

})
class EmployeesDataService {

    getAllEmployees() {

        return api.get(`/all`);
    }
    getEmployee(e){
        return api.get(`/ `+ e);
    }

    CreateEmployee(x) {
            return api.post(`/new`,x);

    }
}

export default new EmployeesDataService()