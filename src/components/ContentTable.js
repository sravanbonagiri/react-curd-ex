import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form } from 'react-bootstrap';

const TableItem = ({first_name, last_name, username}) => (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{username}</td>
      <td><Form.Check aria-label="option 1" /></td>
    </tr>
)

class ContentTable extends React.PureComponent {
    render() {
      const users = this.props.users;
      return (
        <div className="card-body">
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { users.map(user => <TableItem {...user} key={user.id} />) }
            </tbody>
          </Table>
        </div>
        )
    }
}

export default ContentTable;