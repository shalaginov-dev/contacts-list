import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css'
import {LoginContainer} from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ContactsContainer from "./components/Contacts/ContactContainer";

export const App = () => {

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

