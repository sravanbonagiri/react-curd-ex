import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, Button} from 'react-bootstrap';

const TableItem = ({id, first_name, last_name, username, setEditUser, showEditModal, deleteCurrentUser, setDeleteUsers}) => (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{username}</td>
      <td className="row">
        <Form.Check aria-label="option 1" onChange={() => setDeleteUsers(id)}/>
        <div className="col-sm-2">
          <Button variant="outline-primary"
            onClick={() => {setEditUser({id, first_name, last_name, username}); showEditModal(true); }}
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { users.USERS.map(user => <TableItem {...user} key={user.id}
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