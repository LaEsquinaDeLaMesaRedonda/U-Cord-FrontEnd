import { types } from "../types/types";

// el reducer es una funcion pura

export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}