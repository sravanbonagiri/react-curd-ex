import {CREATE_USER, EDIT_USER, DELETE_USER, SET_DELETE_USERS,
        DELETE_USERS, HANDLE_CHANGE, SEARCH_USERS, RECEIVE_GET_USERS, 
        RECEIVE_UPDATE_USER, RECEIVE_CREATE_USER} from "../actions/user_actions"
import USERS from "../../Data"

const INITIAL_STATE = {
  USERS,
  employees: [],
  deleteUsers: [],
  searchText: ""
}

export default function userReducer(state = INITIAL_STATE, action) {

  switch(action.type){
    case RECEIVE_GET_USERS: {
      return {
        ...state,
        isLoading: false,
        employees: action.payload
      };
    }
    case RECEIVE_CREATE_USER: {
      const user = action.payload;
      const newUser = {id: user.id, employee_name: user.name, employee_salary: user.salary, employee_age: user.age}
      const users = state.employees
      const updatedUsers = [...users, newUser]

      return {
        ...state,
        isLoading: false,
        employees: updatedUsers
      };
      
    }
    case RECEIVE_UPDATE_USER: { 
      const user = action.payload;
      const users = [...state.employees]
      const userIndex  = findUserIndex(users, user.id)
      users[userIndex] = user
    
      return {
        ...state,
        isLoading: false,
        employees: users
      };
    }
    case DELETE_USER: {
      const user_id = action.user_id
      const users = [...state.employees]
      const userIndex  = findUserIndex(users, user_id)
      users.splice(userIndex, 1)

      return {
        ...state,
        employees: users
      }

      //return {USERS: users, employees: state.employees, deleteUsers: [], searchText: ""};
    }
    case DELETE_USERS: {
      const user_ids = state.deleteUsers
      const users = [...state.USERS]
      user_ids.map((userId) => {
        const userIndex  = findUserIndex(users, userId)
        users.splice(userIndex, 1)
        }
      );
      return {USERS: users, employees: state.employees, deleteUsers: [], searchText: ""};
    }

    case SET_DELETE_USERS: {
      const user_id = action.user_id
      const deleteUsers = [...state.deleteUsers]
      var updateDeleteUsers = []
      if(deleteUsers.length == 0){
        updateDeleteUsers = [...deleteUsers, user_id]
      }
      else{
        const userIndex  = deleteUsers.indexOf(user_id)
        if(userIndex == -1){
          updateDeleteUsers = [...deleteUsers, user_id]
        }
        else{
          deleteUsers.splice(userIndex, 1)
          updateDeleteUsers = deleteUsers
        }
      }

      return {USERS: state.USERS, employees: state.employees, deleteUsers: updateDeleteUsers, searchText: ""}
    }
    case SEARCH_USERS: {
      const searchText = state.searchText
      const users = state.employees
      if (searchText.length > 0) {
        var updatedUsers = findUsers(users, searchText)
      }
      else {
        var updatedUsers = users
      }
     return {
        ...state,
        isLoading: false,
        employees: updatedUsers
      };
    }
    case HANDLE_CHANGE: {
      const text = action.text
      return {
        ...state,
        isLoading: false,
        searchText: text
      };
    }
    default: {
      return state;
    }
  }
};

const findUserIndex = (users, userId) => {
  return users.findIndex(p => p.id === userId);
};

const findUsers = (users, text) => {
  return users.filter(p => p.employee_name.toLowerCase().includes(text.toLowerCase()))
};
