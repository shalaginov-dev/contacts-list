import React from "react"
import {compose} from "redux"
import {Login} from "./Login"
import {authPage} from "../../state/selectors"
import {useAppSelector} from "../../state/hooks";

export const LoginContainer = () => {

    const {
        isAuth
    } = useAppSelector(authPage)

    return (
        <Login isAuth={isAuth}/>
    )
}

export default compose<React.ComponentType>(
)(LoginContainer)