import React from 'react'
import {Header} from "./Header"
import {compose} from "redux";
import {authPage} from "../../state/selectors";
import {useAppSelector} from "../../state/hooks";

const HeaderContainer = () => {
    const {
        isAuth,
        login
    } = useAppSelector(authPage)


    return (
        <div>
            <Header isAuth={isAuth} login={login}/>
        </div>
    )
}

export default compose<React.ComponentType>(
)(HeaderContainer)