import {ContactsActionsType, InitialContactsType} from "../types/contacts-types";
import {ACTIONS_TYPE} from "../types/action-types";
import {v1} from "uuid";

const initialState: InitialContactsType = {
    contacts: [
        {
            id: v1(),
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5RUg-hoCXA0WT4IHdHIwCmj9PgXmBoAqEA&usqp=CAU',
            name: 'Jim Carrey',
            phone: '+1012433677',
            editMode: false,
        },
        {
            id: v1(),
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5RUg-hoCXA0WT4IHdHIwCmj9PgXmBoAqEA&usqp=CAU',
            name: 'Gabe Newell',
            phone: '+101217398',
            editMode: false,
        },
        {
            id: v1(),
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5RUg-hoCXA0WT4IHdHIwCmj9PgXmBoAqEA&usqp=CAU',
            name: 'Sergey Brin',
            phone: '+3440237482',
            editMode: false,
        },
    ]
}

export const contactsReducer = (state: InitialContactsType = initialState, action: ContactsActionsType): InitialContactsType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_CONTACT:
            return {
                ...state, contacts: [...state.contacts, {
                    id: v1(),
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5RUg-hoCXA0WT4IHdHIwCmj9PgXmBoAqEA&usqp=CAU',
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
