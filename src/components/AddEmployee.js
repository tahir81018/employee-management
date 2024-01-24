import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EmployeeForm from "./EmployeeForm";
import axios from "axios";
import baseUrl from "./Constants";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";

function AddEmployee(props) {
  const [show, setShow] = useState(false);
  const [employee, setEmployee] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = (data) => {
    toast.success(data);
  };

  const addEmployee = () => {
    axios
      .post(baseUrl + "/employees", employee)
      .then((response) => {
        notify(response.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Employee
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EmployeeForm setEmployee={setEmployee} employee={employee} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onSubmit={addEmployee} type="submit">
              Add Now
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddEmployee;
