import s from "./AddContact.module.css";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {useAppDispatch} from "../../state/hooks";
import {AddContactAction} from "../../state/actions/contacts-actions";

export const AddContact = () => {
    const dispatch = useAppDispatch()

    const [addContactMode, setAddContactMode] = useState(false)
    const [validationError, setValidationError] = useState(false)
    const [addName, setAddName] = useState('')
    const [addPhone, setAddPhone] = useState('')

    const addContactNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAddName(e.currentTarget.value)
    }
    const addContactPhoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isFinite(+e.currentTarget.value)) return
        else setAddPhone(e.currentTarget.value)
    }
    const addContactHandler = () => {
        if (addName.length > 18 || addPhone.length > 18) {
            setValidationError(true)
        } else {
            setValidationError(false)
            if (addName || addPhone !== '') {
                if (addPhone === '') {
                    dispatch(AddContactAction(addName, addPhone))
                    setAddContactMode(false)
                    setAddName('')
                    setAddPhone('')
                } else {
                    dispatch(AddContactAction(addName, `+${addPhone}`))
                    setAddContactMode(false)
                    setAddName('')
                    setAddPhone('')
                }
            }
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            if (addName.length > 18 || addPhone.length > 18) {
                setValidationError(true)
            } else {
                setValidationError(false)
                if (addName || addPhone !== '') {
                    dispatch(AddContactAction(addName, addPhone))
                    setAddContactMode(false)
                    setAddName('')
                    setAddPhone('')
                }
            }
        }
    }

    return (
        <div className={addContactMode ? s.addContactWrapper : s.addContactWrapperWOBorder}>
            {
                !addContactMode
                    ? <div className={s.addContactButtonWrapper}>
                        <button onClick={() => {
                            setAddContactMode(true)
                        }}>Add contact
                        </button>
                    </div>
                    : <div className={s.addFormWrapper}>
                        <div>
                            {
                                validationError && <span className={s.validationError}>max length 18 symbols</span>
                            }
                            <input
                                placeholder={'name'}
                                onChange={addContactNameHandler}
                                onKeyPress={onKeyPressHandler}
                                value={addName}
                                autoFocus
                            />
                            <input
                                placeholder={'phone'}
                                onChange={addContactPhoneHandler}
                                onKeyPress={onKeyPressHandler}
                                value={addPhone}
                            />
                        </div>
                        <div>
                            <button onClick={addContactHandler}>add</button>
                        </div>
                    </div>
            }
        </div>
    )
}