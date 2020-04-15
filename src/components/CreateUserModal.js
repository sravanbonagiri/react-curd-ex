import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Col } from 'react-bootstrap';

function CreateUserModal(props) {
  const initialFormState = { id: null, name: "", salary: "", age: "" };
  const [user, setUser] = React.useState(initialFormState);

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
            if (!user.name || !user.salary || !user.age) return;
            props.createuser(user);
            props.onHide(true)
            setUser(initialFormState);
          }}
        >
          <Form.Group controlId="name">
            <Form.Row>
              <Col>
                <Form.Label>Employee Name</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="salary">
            <Form.Row>
              <Col>
                <Form.Label>Employee Salary</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="salary"
                  value={user.salary}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Row>
              <Col>
                <Form.Label>Employee Age</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="age"
                  value={user.age}
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

export default CreateUserModal;