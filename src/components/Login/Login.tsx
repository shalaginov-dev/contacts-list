import React from "react";
import {Navigate} from "react-router-dom";
import {LogIn} from "../../state/actions/auth-actions";
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {useAppDispatch} from "../../state/hooks";
import s from './LoginForm.module.css'

type LoginPropsType = {
    isAuth: boolean
}

export const Login = (props: LoginPropsType) => {
    const dispatch = useAppDispatch()
    const onSubmit = (formData: FormDataType) => {
        dispatch(LogIn(formData.email, formData.password, formData.rememberMe))
    }

    return (
        props.isAuth
            ? <Navigate replace to={'/contacts'}/>
            : <div className={s.loginBlock}>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
    )
}