import {ACTIONS_TYPE} from "../types/action-types";
import {AuthActionsType, InitialAuthType} from "../types/auth-types";

let initialState: InitialAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: true,
}

export const authReducer = (state: InitialAuthType = initialState, action: AuthActionsType): InitialAuthType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload.data,
                isAuth: action.payload.isAuth
            }
        default:
            return state
    }
}