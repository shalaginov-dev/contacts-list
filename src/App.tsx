import React, {useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css'
import {LoginContainer} from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ContactsContainer from "./components/Contacts/ContactsContainer";

export const App = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/login')
    }, [])

    return (
        <div>
            <HeaderContainer/>
            <div className={'appWrapper'}>
                <div className="app">
                    <Routes>
                        <Route path='/login' element={<LoginContainer/>}/>
                        <Route path='/contacts' element={<ContactsContainer/>}/>
                    </Routes>
                </div>
            </div>
        </div>

    )
}

