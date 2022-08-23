import {AddContactAT, ChangeContactNameAT, ChangeEditModeAT, DeleteContactAT} from "../types/contacts-types";
import {ACTIONS_TYPE} from "../types/action-types";

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


