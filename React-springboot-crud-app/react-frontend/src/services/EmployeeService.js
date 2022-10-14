import axios from "axios";

const EMPLOYEE_API_BASE_API = "http://localhost:8081/api/v1/employees"

class EmployeeService{

    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_API); //axios 메서드 별칭
    }

    createEmployee(employee){ //axios에 의해 employee 값 포스트로 보내기
        return axios.post(EMPLOYEE_API_BASE_API, employee);
    }

    getEmployeeById(employeeId){
        console.log(employeeId);
        return axios.get(EMPLOYEE_API_BASE_API + '/' + employeeId);
        
    }

    updateEmployee(employee,employeeId){
        console.log(employee, employeeId);
        return axios.put(EMPLOYEE_API_BASE_API + '/' + employeeId, employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_API+ '/' + employeeId);
    }

}

export default new EmployeeService()