import {DataType} from "../state/types/auth-types";
import {v1} from "uuid";
import {ContactType} from "../state/types/contacts-types";

export const contactsAPI = {
    fetchContacts() {
        return new Promise<ContactType[]>(res => {
            res([
                {
                    id: v1(),
                    photo: 'https://cdn4.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.jpg',
                    name: 'Jim Carrey',
                    phone: '+1012433677',
                    editMode: false,
                },
                {
                    id: v1(),
                    photo: 'https://cdn4.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.jpg',
                    name: 'Gabe Newell',
                    phone: '+101217398',
                    editMode: false,
                },
                {
                    id: v1(),
                    photo: 'https://cdn4.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.jpg',
                    name: 'Sergey Brin',
                    phone: '+3440237482',
                    editMode: false,
                },
            ])
        })
    }
}

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean = false) {
        if (email === 'admin' && password === 'admin')
            return new Promise<DataType>(res => {
                res({
                    id: 2,
                    email: 'admin',
                    login: 'admin',
                })
            })
        else return new Promise<string>((res, rej) => {
            rej('Incorrect email or password')
        })
    },
    logout() {
        return new Promise<DataType>(res => {
            res({id: null, email: null, login: null})
        })
    },
}