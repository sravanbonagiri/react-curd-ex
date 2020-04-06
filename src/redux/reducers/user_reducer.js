import {CREATE_USER, EDIT_USER, DELETE_USER, SET_DELETE_USERS, DELETE_USERS} from "../actions/user_actions"
import USERS from "../../Data"

const INITIAL_STATE = {
  USERS,
  deleteUsers: []
}
export default function userReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case CREATE_USER: {
      const user = action.payload;
      const users = state.USERS
      user.id = users.length + 1
      const updatedUsers = [...users, user]

      return {USERS: updatedUsers, deleteUsers: []};
    }
    case EDIT_USER: {
      const user = action.payload;
      const users = [...state.USERS]
      const userIndex  = findUserIndex(users, user.id)
      users[userIndex] = user

      return {USERS: users, deleteUsers: []};
    }
    case DELETE_USER: {
      const user_id = action.user_id
      const users = [...state.USERS]
      const userIndex  = findUserIndex(users, user_id)
      users.splice(userIndex, 1)

      return {USERS: users, deleteUsers: []};
    }
    case DELETE_USERS: {
      const user_ids = state.deleteUsers
      const users = [...state.USERS]
      user_ids.map((userId) => {
        const userIndex  = findUserIndex(users, userId)
        users.splice(userIndex, 1)
        }
      );
      return {USERS: users, deleteUsers: []};
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

      return {USERS: state.USERS, deleteUsers: updateDeleteUsers}
    }
    default: {
      return state;
    }

  }
};

const findUserIndex = (users, userId) => {
  return users.findIndex(p => p.id === userId);
};
