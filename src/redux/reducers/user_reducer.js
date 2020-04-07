import {CREATE_USER, EDIT_USER, DELETE_USER, SET_DELETE_USERS,
        DELETE_USERS, HANDLE_CHANGE, SEARCH_USERS} from "../actions/user_actions"
import USERS from "../../Data"

const INITIAL_STATE = {
  USERS,
  deleteUsers: [],
  searchText: ""
}
export default function userReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case CREATE_USER: {
      const user = action.payload;
      const users = state.USERS
      user.id = users.length + 1
      const updatedUsers = [...users, user]

      return {USERS: updatedUsers, deleteUsers: [], searchText: ""};
    }
    case EDIT_USER: {
      const user = action.payload;
      const users = [...state.USERS]
      const userIndex  = findUserIndex(users, user.id)
      users[userIndex] = user

      return {USERS: users, deleteUsers: [], searchText: ""};
    }
    case DELETE_USER: {
      const user_id = action.user_id
      const users = [...state.USERS]
      const userIndex  = findUserIndex(users, user_id)
      users.splice(userIndex, 1)

      return {USERS: users, deleteUsers: [], searchText: ""};
    }
    case DELETE_USERS: {
      const user_ids = state.deleteUsers
      const users = [...state.USERS]
      user_ids.map((userId) => {
        const userIndex  = findUserIndex(users, userId)
        users.splice(userIndex, 1)
        }
      );
      return {USERS: users, deleteUsers: [], searchText: ""};
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

      return {USERS: state.USERS, deleteUsers: updateDeleteUsers, searchText: ""}
    }
    case SEARCH_USERS: {
      const searchText = state.searchText
      const users = USERS
      if (searchText.length > 0) {
        var updatedUsers = findUsers(users, searchText)
      }
      else {
        var updatedUsers = users
      }
      return {USERS: updatedUsers, deleteUsers: state.deleteUsers, searchText: state.searchText}
    }
    case HANDLE_CHANGE: {
      const text = action.text
      return {USERS: state.USERS, deleteUsers: state.deleteUsers, searchText: text}
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
  return users.filter(p => p.first_name.toLowerCase().includes(text.toLowerCase()) || p.first_name.toLowerCase().includes(text.toLowerCase()) )
};
