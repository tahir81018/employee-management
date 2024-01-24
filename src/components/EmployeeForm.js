import { Col, Form, Row } from "react-bootstrap";

export default function EmployeeForm(props) {
  return (
    <>
        <Row className="mb-3">
          <Col>
            <Form.Control
              placeholder="First name"
              required
              onChange={(e) => {
                props.setEmployee({ ...props.employee, fname: e.target.value });
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              required
              onChange={(e) => {
                props.setEmployee({ ...props.employee, lname: e.target.value });
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Role"
              required
              onChange={(e) => {
                props.setEmployee({ ...props.employee, role: e.target.value });
              }}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="date"
              placeholder="Start Date"
              required
              onChange={(e) => {
                props.setEmployee({
                  ...props.employee,
                  startDate: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Months Worked"
              required
              onChange={(e) => {
                props.setEmployee({
                  ...props.employee,
                  monthsWorked: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Monthly Rate"
              required
              onChange={(e) => {
                props.setEmployee({
                  ...props.employee,
                  monthlyRate: e.target.value,
                });
              }}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="number"
              placeholder="Mobile"
              required
              onChange={(e) => {
                props.setEmployee({
                  ...props.employee,
                  mobile: e.target.value,
                });
              }}
            />
          </Col>
          <Col>
            <Form.Control
              type="gmail"
              placeholder="Gmail"
              required
              onChange={(e) => {
                props.setEmployee({ ...props.employee, gmail: e.target.value });
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Address"
              required
              onChange={(e) => {
                props.setEmployee({
                  ...props.employee,
                  address: e.target.value,
                });
              }}
            />
          </Col>
        </Row>
    </>
  );
}
