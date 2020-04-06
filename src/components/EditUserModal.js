import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Col } from 'react-bootstrap';

function EditUserModal(props) {
  const initialFormState = {id: null, first_name: "", last_name: "", username: ""};
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
         Create User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form
          onSubmit={event => {
            event.preventDefault();
            if (!user.first_name || !user.last_name || !user.username) return;
            props.edituser(user);
            props.onHide(true)
            setUser(initialFormState);
          }}
        >
          <Form.Group controlId="first_name">
            <Form.Row>
              <Col>
                <Form.Label>First Name</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="first_name"
                  value={user.first_name}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="last_name">
            <Form.Row>
              <Col>
                <Form.Label>Last Name</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="last_name"
                  value={user.last_name}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Row>
              <Col>
                <Form.Label>Username</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="username"
                  value={user.username}
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