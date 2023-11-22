import {types} from "./types";

const initialState = {
    users: [],
    det: {}
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USERS:
            return {...state, users: action.payload}
        default: return state
    }
}