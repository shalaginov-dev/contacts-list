import {stopSubmit} from "redux-form";
import {ACTIONS_TYPE} from "./action-types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";

export type InitialAuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type StopSubmitType = ReturnType<typeof stopSubmit>
export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}
export type SetAuthUserDataAT = {
    type: ACTIONS_TYPE.SET_AUTH_USER_DATA
    payload: { data: DataType, isAuth: boolean }
}

export type AuthActionsType = SetAuthUserDataAT | StopSubmitType
export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, AuthActionsType>
