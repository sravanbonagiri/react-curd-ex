import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, Button} from 'react-bootstrap';

const TableItem = ({id, employee_name, employee_salary, employee_age, setEditUser, showEditModal, deleteCurrentUser, setDeleteUsers}) => (
    <tr>
      <td>{employee_name}</td>
      <td>{employee_salary}</td>
      <td>{employee_age}</td>
      <td className="row">
        <Form.Check aria-label="option 1" onChange={() => setDeleteUsers(id)}/>
        <div className="col-sm-2">
          <Button variant="outline-primary"
            onClick={() => {setEditUser({id, employee_name, employee_salary, employee_age}); showEditModal(true); }}
            size="sm" >
          Edit
          </Button>
        </div>
        <div className="col-sm-2">
          <Button variant="outline-danger"
            onClick={() => deleteCurrentUser(id)}
            size="sm" >
          Delete
          </Button>
        </div>
      </td>
    </tr>
)

class ContentTable extends React.PureComponent {
    render() {
      const users = this.props.users;
      const setEditUser = this.props.setEditUser;
      const showEditModalShow = this.props.setEditModalShow;
      const deleteCurrentUser = this.props.deleteCurrentUser;
      const setDeleteUsers = this.props.setDeleteUsers;
      return (
        <div className="card-body">
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Salary</th>
                <th>Employee Age</th>
                <th>Actions </th>
              </tr>
            </thead>
            <tbody>
              { users.employees.map(user => <TableItem {...user} key={user.id}
                                              setEditUser={setEditUser}
                                              showEditModal={showEditModalShow}
                                              deleteCurrentUser={deleteCurrentUser}
                                              setDeleteUsers = {setDeleteUsers} />) }
            </tbody>
          </Table>
        </div>
        )
    }
}

export default ContentTable;