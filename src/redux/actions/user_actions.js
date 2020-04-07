export const CREATE_USER = "CREATE_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_DELETE_USERS = "SET_DELETE_USERS";
export const DELETE_USERS = "DELETE_USERS";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const SEARCH_USERS = "SEARCH_USERS";


export function createUser({id, first_name, last_name, username}) {
    return{
        type: CREATE_USER,
        payload: {id, first_name, last_name, username}
    }
};

export function editUser({id, first_name, last_name, username}) {
    return{
        type: EDIT_USER,
        payload: {id, first_name, last_name, username}
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