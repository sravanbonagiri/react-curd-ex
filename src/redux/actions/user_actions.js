export const CREATE_USER = "CREATE_USER";
export const GET_USERS = "GET_USERS";
export const RECEIVE_GET_USERS = "RECEIVE_GET_USERS"
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_DELETE_USERS = "SET_DELETE_USERS";
export const DELETE_USERS = "DELETE_USERS";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const SEARCH_USERS = "SEARCH_USERS";
export const RECEIVE_UPDATE_USER = "RECEIVE_UPDATE_USER"
export const RECEIVE_CREATE_USER = "RECEIVE_CREATE_USER"


export function getUsers() {
    return{
        type: GET_USERS
    }
};

export function receiveGetUsers(payload) {
    return{
        type: RECEIVE_GET_USERS,
        payload: payload
    }
};

export function receiveUpdateUser(payload) {
    return{
        type: RECEIVE_UPDATE_USER,
        payload: payload
    }
};

export function receiveCreateUser(payload){
    return{
        type: RECEIVE_CREATE_USER,
        payload: payload
    }
}

export function createUser({id, name, salary, age}) {
    return{
        type: CREATE_USER,
        payload: {id, name, salary, age}
    }
};

export function editUser({id, employee_name, employee_salary, employee_age}) {
    return{
        type: EDIT_USER,
        payload: {id, employee_name, employee_salary, employee_age}
    }
};

export function deleteUser(id) {
    return{
        type: DELETE_USER,
        user_id: id
    }
};

export function setDeleteUsers(id) {
    return{
        type: SET_DELETE_USERS,
        user_id: id
    }
};

export function deleteUsers() {
    return{
        type: DELETE_USERS
    }
};

export function handleChange(text) {
    return{
        type: HANDLE_CHANGE,
        text: text
    }
};

export function searchUsers() {
    return{
        type: SEARCH_USERS
    }
};