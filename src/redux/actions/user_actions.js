export const CREATE_USER = "CREATE_USER";
export const SET_MODAL_SHOW = "SET_MODAL_SHOW";

export function createUser({id, first_name, last_name, username}) {
    return{
        type: CREATE_USER,
        payload: {id, first_name, last_name, username}
    }
};