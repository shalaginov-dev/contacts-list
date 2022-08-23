import {ACTIONS_TYPE} from "./action-types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";

export type ContactType = {
    id: string
    photo: string
    name: string
    phone: string
    editMode: boolean
}
export type InitialContactsType = {
    contacts: ContactType[]
}


export type AddContactAT = {
    type: ACTIONS_TYPE.ADD_CONTACT
    payload: {
        name: string
        phone: string
    }
}
export type DeleteContactAT = {
    type: ACTIONS_TYPE.DELETE_CONTACT
    payload: {
        id: string
    }
}
export type ChangeContactNameAT = {
    type: ACTIONS_TYPE.CHANGE_CONTACT_NAME
    payload: {
        id: string
        name: string
        phone: string
    }
}
export type ChangeEditModeAT = {
    type: ACTIONS_TYPE.CHANGE_EDIT_MODE
    payload: {
        id: string
        editMode: boolean
    }
}
export type SetContactsAT = {
    type: ACTIONS_TYPE.SET_CONTACTS
    payload: {
        contacts: ContactType[]
    }
}


export type ContactsActionsType =
    AddContactAT | ChangeContactNameAT | ChangeEditModeAT | DeleteContactAT | SetContactsAT

export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ContactsActionsType>
