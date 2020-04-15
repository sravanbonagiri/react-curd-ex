import { put, takeLatest, all } from 'redux-saga/effects';
import {GET_USERS, RECEIVE_GET_USERS, RECEIVE_UPDATE_USER, EDIT_USER,
        CREATE_USER, RECEIVE_CREATE_USER } from '../../actions/user_actions';
import getUserDataApi, {createUserApi, updateUserApi} from './api';


function* fetchUsers(action) {
  try {
    const users = yield getUserDataApi();
    yield put({type: RECEIVE_GET_USERS, payload: users});  
  } catch (e) { 
    yield put({type: GET_USERS, error: e.message});
  }
}

function* updateUser(user) {
  try {
    const users = yield updateUserApi(user.payload);
    yield put({type: RECEIVE_UPDATE_USER, payload: users});  
  } catch (e) { 
    yield put({type: EDIT_USER, error: e.message});
  }
}

function* createUser(user) {
  try {
    const data = yield createUserApi(user.payload);
    yield put({type: RECEIVE_CREATE_USER, payload: data});  
  } catch (e) { 
    yield put({type: EDIT_USER, error: e.message});
  }
}

export function* usersSaga() {
  console.log("From SAGA -------")
  yield takeLatest(GET_USERS, fetchUsers);
}

export function* editUserSaga() {
  console.log("From SAGA -------")
  yield takeLatest(EDIT_USER, updateUser);
}

export function* createUserSaga() {
  console.log("Fron SAGA Create User --------")
   yield takeLatest(CREATE_USER, createUser);
}


export default {
  usersSaga,
  editUserSaga,
  createUserSaga
}
