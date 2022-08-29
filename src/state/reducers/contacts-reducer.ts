import {ContactsActionsType, InitialContactsType} from "../types/contacts-types";
import {ACTIONS_TYPE} from "../types/action-types";
import {v1} from "uuid";

const initialState: InitialContactsType = {
    contacts: []
}

export const contactsReducer = (state: InitialContactsType = initialState, action: ContactsActionsType): InitialContactsType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_CONTACTS:
            return {
                ...state, contacts: action.payload.contacts
            }
        case ACTIONS_TYPE.ADD_CONTACT:
            return {
                ...state, contacts: [...state.contacts, {
                    id: v1(),
                    photo: 'https://cdn4.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.jpg',
                    name: action.payload.name,
                    phone: action.payload.phone,
                    editMode: false
                }]
            }
        case ACTIONS_TYPE.DELETE_CONTACT:
            return {
                ...state, contacts: [...state.contacts.filter(c => c.id !== action.payload.id)]
            }
        case ACTIONS_TYPE.CHANGE_CONTACT_NAME:
            return {
                ...state, contacts: [...state.contacts
                    .map(c => c.id === action.payload.id
                        ? {
                            ...c,
                            name: action.payload.name,
                            phone: action.payload.phone
                        }
                        : c)]
            }
        case ACTIONS_TYPE.CHANGE_EDIT_MODE:
            return {
                ...state, contacts: [...state.contacts
                    .map(c => c.id === action.payload.id
                        ? {...c, editMode: action.payload.editMode}
                        : c)]
            }
        default:
            return state
    }
}
