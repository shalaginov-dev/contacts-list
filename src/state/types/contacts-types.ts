import {ACTIONS_TYPE} from "./action-types";

export type ContactType = {
    id: string
    photo: string
    name: string
    phone: string
    editMode: boolean
}
export type InitialContactsType = {
    contacts: Array<ContactType>
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


export type ContactsActionsType =
    AddContactAT | ChangeContactNameAT | ChangeEditModeAT | DeleteContactAT

