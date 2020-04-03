import {CREATE_USER, SET_MODAL_SHOW} from "../actions/user_actions"
import USERS from "../../Data"

const INITIAL_STATE = USERS

export default function userReducer(state = INITIAL_STATE, action) {
  console.log("-----------------------------")
  console.log(action)
  switch(action.type){
    case CREATE_USER: {
      const user = action.payload;
      const users = state
      user.id = users.length + 1
      const updatedUsers = [...users, user]

      return updatedUsers;
    }
  }
  return state;
};
