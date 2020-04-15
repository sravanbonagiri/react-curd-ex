import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Col } from 'react-bootstrap';

function EditUserModal(props) {
  const initialFormState = {id: null, employee_name: "", employee_salary: "", employee_age: ""};
  const [user, setUser] = useState(props.user);
  useEffect(() => {
    setUser(props.user);
  }, [props]);
  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Edit User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form
          onSubmit={event => {
            event.preventDefault();
            if (!user.employee_name || !user.employee_salary || !user.employee_age) return;
            props.edituser(user);
            props.onHide(true)
            setUser(initialFormState);
          }}
        >
          <Form.Group controlId="employee_name">
            <Form.Row>
              <Col>
                <Form.Label>Employee Name</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="employee_name"
                  value={user.employee_name}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="employee_salary">
            <Form.Row>
              <Col>
                <Form.Label>Employee Salary</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="employee_salary"
                  value={user.employee_salary}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId="employee_age">
            <Form.Row>
              <Col>
                <Form.Label>Employee Age</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="employee_age"
                  value={user.employee_age}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Form>
        
      </Modal.Body>
    </Modal>
  );
}

export default EditUserModal;