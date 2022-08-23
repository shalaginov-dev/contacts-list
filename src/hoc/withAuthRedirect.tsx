import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../state/hooks";
import {authPage} from "../state/selectors";

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: T) {
        const {isAuth} = useAppSelector(authPage)

        return !isAuth
            ? <Navigate replace to={'/login'}/>
            : <Component {...props as T}/>
    }

    return RedirectComponent
}