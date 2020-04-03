import React , { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import USERS from "../Data"
import ActionBar from '../components/ActionBar';
import ContentTable from '../components/ContentTable';
import { bindActionCreators } from "redux"
import {createUser} from '../redux/actions/user_actions'

class App extends Component{
  render(){
    const {users, createUser} = this.props;
    console.log(this.props)
    console.log(users)
    console.log(createUser)
    return (
      <div className="App">
        <div className="row mt-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-12 grid-margin">
              <div className="card h-100">
                <ActionBar createuser={createUser}/>
                <ContentTable users={users} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps =({users}) => {
  return{
    users
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
    createUser
  }, dispatch )
}

export default connect(mapStateToProps, mapActionsToProps)(App);