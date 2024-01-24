import { Container } from "react-bootstrap";
import AddEmployee from "./AddEmployee";
import Edit from "./Edit";
import Delete from "./Delete";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "./Constants";

export default function Employees(props) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl + "/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container>
      <script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script>

      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="d-flex flex-row justify-content-between p-2">
              <h3>Employee List</h3>
              <AddEmployee setEmployees={setEmployees} />
            </div>
            <div className="panel-body">
              <table className="table table-hover" id="employee-table">
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Role</th>
                    <th>Start Date</th>
                    <th>Months Worked</th>
                    <th>Monthly Rate ($)</th>
                    <th>Total Billed ($)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => {
                    let date = new Date(employee.startDate);
                    let dateFormat=date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();

                    return (
                      <tr key={employee.id}>
                        <td>{employee.fname + " " + employee.lname}</td>
                        <td>{employee.role}</td>
                        <td>{dateFormat}</td>
                        <td>{employee.monthsWorked}</td>
                        <td>{employee.monthlyRate}</td>
                        <td>{employee.totalBilled}</td>
                        <td>
                          <Edit className="me-2" id={employee.id} />
                          <Delete id={employee.id} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" id="images"></div>
        </div>
      </div>

      <script src="https://momentjs.com/downloads/moment-with-locales.js"></script>
      <script src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"></script>
    </Container>
  );
}
