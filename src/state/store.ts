import { combineReducers} from 'redux'
import {authReducer} from "./reducers/auth-reducer"
import {reducer as formReducer} from 'redux-form'
import {configureStore} from "@reduxjs/toolkit";
import {contactsReducer} from "./reducers/contacts-reducer";


const rootReducer = combineReducers({
    authPage: authReducer,
    contactsPage: contactsReducer,
    form: formReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch


