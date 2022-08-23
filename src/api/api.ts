import {DataType} from "../state/types/auth-types";

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean = false) {
        if (email === 'admin' && password === 'admin')
            return new Promise<DataType>((res, rej) => {
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