import React, {ChangeEvent, KeyboardEvent, useState} from "react"
import s from './Contacts.module.css'
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {useAppDispatch} from "../../state/hooks";
import {
    ChangeContactAction,
    ChangeEditModeAction,
    DeleteContactAction
} from "../../state/actions/contacts-actions";

type ContactsPropsType = {
    id: string
    name: string
    phone: string
    editMode: boolean
    photo: string
}

export const Contacts = (props: ContactsPropsType) => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState(props.name)
    const [phone, setPhone] = useState(props.phone)
    const [validationError, setValidationError] = useState(false)


    const changeContactHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.dataset.name === 'name') {
            setName(e.currentTarget.value)
        } else setPhone(e.currentTarget.value)
    }

    const confirmHandler = () => {
        if (name.length > 18 || phone.length > 18) {
            setValidationError(true)
        } else {
            setValidationError(false)
            if (name || phone !== '') {
                dispatch(ChangeContactAction(props.id, name, phone))
                dispatch(ChangeEditModeAction(props.id, false))
            }
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            if (name.length > 18 || phone.length > 18) {
                setValidationError(true)
            } else {
                setValidationError(false)
                if (name || phone !== '') {
                    dispatch(ChangeContactAction(props.id, name, phone))
                    dispatch(ChangeEditModeAction(props.id, false))
                }
            }
        }
    }

    return (
        <div className={s.contactWrapper}>
            <div className={s.userPhotoWrapper}>
                <img alt={'ava'} src={props.photo}/>
            </div>
            <div className={s.contactData}>
                {
                    validationError && <span className={s.validationErrorEdit}>max length 18 symbols</span>
                }
                <div>
                    <EditableSpan name={'name'}
                                  id={props.id}
                                  title={props.name}
                                  editMode={props.editMode}
                                  changeContactHandler={changeContactHandler}
                                  keyPressHandler={onKeyPressHandler}
                                  onChange={() => {
                                  }}/>
                </div>
                <div>
                    <EditableSpan name={'phone'}
                                  id={props.id}
                                  title={props.phone}
                                  editMode={props.editMode}
                                  changeContactHandler={changeContactHandler}
                                  keyPressHandler={onKeyPressHandler}
                                  onChange={() => {
                                  }}/>
                </div>
            </div>
            <div className={s.editDeleteWrapper}>
                {
                    props.editMode ?
                        <button className={s.confirmContactButton} onClick={() => {
                            confirmHandler()
                        }}>confirm</button>
                        :
                        <button className={s.editContactButton} onClick={() => {
                            dispatch(ChangeEditModeAction(props.id, true))
                        }}>edit
                        </button>
                }
                <button
                    className={`${s.deleteContactButton} ${props.editMode && s.deleteButtonOpacity}`}
                    onClick={() => {dispatch(DeleteContactAction(props.id))}
                    }>delete
                </button>
            </div>
        </div>
    )
}