import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import baseUrl from "./Constants";
import { toast } from "react-toastify";

export default function Delete(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = (data) => {
    toast.success(data);
  };

  const remove = () => {
    axios.delete(baseUrl + "/employees/" + props.id).then((response) => {
      notify(response.data.message);
    });
    handleClose();
    document.location.reload();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          To ensure that you are going to delete this employee please comfirm
          before !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={remove}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
