import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form } from 'react-bootstrap';

class ContentTable extends React.PureComponent {
    render() {
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
              <tr>
                <td>Sravan</td>
                <td>Bonagiri</td>
                <td>sravan.bonagiri@imaginea.com</td>
                <td><Form.Check aria-label="option 1" /></td>
              </tr>
              <tr>
                <td>Siva</td>
                <td>Motamarri</td>
                <td>sivakrishna.motamarri@imaginea.com</td>
                <td><Form.Check aria-label="option 1" /></td>
              </tr>
              <tr>
                <td colSpan="2">No name</td>
                <td>@No id</td>
                <td><Form.Check aria-label="option 1" /></td>
              </tr>
            </tbody>
          </Table>
        </div>
        )
    }
}

export default ContentTable;