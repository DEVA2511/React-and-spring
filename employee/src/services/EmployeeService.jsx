import axios from "axios";
const EMPLOYEE_BSE_URL = "http://localhost:8080/api/employees";
class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BSE_URL);
  }
  createEmployee(employee) {
    return axios.post(EMPLOYEE_BSE_URL, employee);
  }

  // get employe by id
  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_BSE_URL + "/" + employeeId);
  }

  // update Employee
  updateEmployee(employeeId, employee) {
    return axios.put(EMPLOYEE_BSE_URL + "/" + employeeId, employee);
  }

  // delete EMployee
  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_BSE_URL + "/" + employeeId);
  }
}

export default new EmployeeService();
