import {
    AddContactAT,
    ChangeContactNameAT,
    ChangeEditModeAT, ContactType,
    DeleteContactAT,
    SetContactsAT,
    ThunkType
} from "../types/contacts-types";
import {ACTIONS_TYPE} from "../types/action-types";
import {contactsAPI} from "../../api/api";

export const SetContacts = (contacts: ContactType[]): SetContactsAT => {
    return {
        type: ACTIONS_TYPE.SET_CONTACTS,
        payload: {contacts}
    }
}


export const AddContactAction = (name: string, phone: string): AddContactAT => {
    return {
        type: ACTIONS_TYPE.ADD_CONTACT,
        payload: {name, phone}
    }
}

export const DeleteContactAction = (id: string): DeleteContactAT => {
    return {
        type: ACTIONS_TYPE.DELETE_CONTACT,
        payload: {id}
    }
}

export const ChangeEditModeAction = (id: string, editMode: boolean): ChangeEditModeAT => {
    return {
        type: ACTIONS_TYPE.CHANGE_EDIT_MODE,
        payload: {id, editMode}
    }
}
export const ChangeContactAction = (id: string, name: string, phone: string): ChangeContactNameAT => {
    return {
        type: ACTIONS_TYPE.CHANGE_CONTACT_NAME,
        payload: {id, name, phone}
    }
}


export const RequestContacts = (): ThunkType => {
    return async (dispatch) => {
        try {
            const data = await contactsAPI.fetchContacts()
            dispatch(SetContacts(data))
        } catch (e){

        }
    }
}