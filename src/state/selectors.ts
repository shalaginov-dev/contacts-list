import {RootStateType} from "./store";
import {InitialAuthType} from "./types/auth-types";
import {InitialContactsType} from "./types/contacts-types";

export const authPage = (state: RootStateType): InitialAuthType => state.authPage

export const contactsPage = (state: RootStateType): InitialContactsType => state.contactsPage

