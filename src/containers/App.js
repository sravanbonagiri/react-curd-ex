import React , { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import CreateUserModal from "../components/CreateUserModal"
import EditUserModal from "../components/EditUserModal"
import ActionBar from '../components/ActionBar';
import ContentTable from '../components/ContentTable';
import { bindActionCreators } from "redux"
import { createUser, editUser, deleteUser, setDeleteUsers, deleteUsers, handleChange, searchUsers } from '../redux/actions/user_actions'

function App (props){
  const {users, createUser, editUser, deleteUser, setDeleteUsers, deleteUsers, handleChange, searchUsers} = props;
  const [newModalShow, setNewModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [currentUser, setCurrentUser] = useState({id: null, first_name: "", last_name: "", username: ""})

  const setNewModal = modal => {
    setNewModalShow(modal);
  };
  const setEditModal = modal => {
    setEditModalShow(modal);
  };
  const setUser = user => {
    setCurrentUser(user);
  }

  return (
    <div className="App">
      <div className="row mt-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
              <ActionBar createuser={createUser}
                         setModalShow={setNewModal}
                         deleteUsers={deleteUsers}
                         handleChange={handleChange}
                         searchUsers={searchUsers}/>
              <ContentTable users={users}
                            setEditUser={setUser}
                            setEditModalShow={setEditModal}
                            deleteCurrentUser={deleteUser}
                            setDeleteUsers={setDeleteUsers}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateUserModal
      show={newModalShow}
      onHide={() => setNewModal(false)}
      createuser={createUser}
    />
    <EditUserModal
      show={editModalShow}
      onHide={() => setEditModal(false)}
      edituser={editUser}
      user={currentUser}
    />
  </div>
  );
}

const mapStateToProps =({users}) => {
  return{
    users
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
    createUser,
    editUser,
    deleteUser,
    setDeleteUsers,
    deleteUsers,
    handleChange,
    searchUsers
  }, dispatch )
}

export default connect(mapStateToProps, mapActionsToProps)(App);