import {types} from "./types";
const getUsersActions = (users) => {
    return {
        type: types.USERS,
        payload: users
    }
}

export const fetchUsersAction = () => {
    return async (dispatch) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        dispatch(getUsersActions(data));
    }
}

export const fetchOneUserInfo = (id) => {
    return async (dispatch) => {
       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
       const data = await response.json();
    }
}