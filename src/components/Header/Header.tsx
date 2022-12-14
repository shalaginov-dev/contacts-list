import React from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"
import {LogOut} from "../../state/actions/auth-actions"
import {useAppDispatch} from "../../state/hooks";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    const dispatch = useAppDispatch()
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.loginBlock}>
                    {
                        props.isAuth
                            ? <div>
                                {`${props.login} - `}
                                <button onClick={() => {dispatch(LogOut())}}>log out</button>
                            </div>
                            : <NavLink to={'/login'}>Sign in</NavLink>
                    }
                </div>
            </div>
        </header>
    )
}


