import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button, Modal, Form, Col } from 'react-bootstrap';
import CreateUserModal from './CreateUserModal'

function ActionBar(props){
  const [modalShow, setModalShow] = React.useState(false);
  console.log("------88888888888888>>>>>>>>>>>>>>>>>>>")
  console.log(props)
  return(
    <div className="row card-body">
      <InputGroup className="col-sm-6">
        <FormControl
          placeholder="Search"
        />
        <InputGroup.Append>
          <Button variant="info">Search</Button>
        </InputGroup.Append>
      </InputGroup>

      <div className="col-sm-6">
        <Button variant="danger" style={{float: 'right'}} className="mr-2">Delete</Button>
        <Button variant="primary" onClick={() => setModalShow(true)} style={{float: 'right'}} className="mr-2">Create</Button>
        <CreateUserModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          createuser={props.createuser}
        />
      </div>
    </div>
  ) 
}

  export default ActionBar;