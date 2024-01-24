import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import EmployeeForm from "./EmployeeForm";
import axios from "axios";
import baseUrl from "./Constants";
import { toast } from "react-toastify";

export default function Edit(props) {
  const [employee, setEmployee] = useState({
    id: props.id,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const update = () => {
    axios.put(baseUrl + "/employees", employee).then((response) => {
      toast.success(response.data.message);
    });
    handleClose();
  };

  return (
    <>
      <Button
        variant="warning"
        onClick={handleShow}
        className={props.className}
      >
        Edit
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployeeForm setEmployee={setEmployee} employee={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onSubmit={update} type="submit">
            Update
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
