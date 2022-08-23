import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {ACTIONS_TYPE} from "../types/action-types";
import {DataType, SetUserDataAT, ThunkType} from "../types/auth-types";


export const SetAuthUserData = (data: DataType, isAuth: boolean): SetUserDataAT => ({
    type: ACTIONS_TYPE.SET_USER_DATA,
    payload: {data, isAuth},
})


export const LogIn = (email: string, password: string, rememberMe: boolean = false): ThunkType => {
    return async (dispatch) => {
        try {
            const data = await authAPI.login(email, password, rememberMe)
            if (typeof data !== 'string') {
                dispatch(SetAuthUserData(data, true))
            }
        } catch (err) {
            dispatch(stopSubmit('login', {_error: err}))
        }
    }
}

export const LogOut = (): ThunkType => {
    return async (dispatch) => {
        try {
            const data = await authAPI.logout()
            dispatch(SetAuthUserData(data, false))
        } catch (e) {

        }
    }
}
