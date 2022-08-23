import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './EditableSpan.module.css'

type PropsType = {
    id: string
    title: string
    name: string
    onChange: (value: string) => void
    editMode: boolean
    changeContactHandler: (e: ChangeEvent<HTMLInputElement>) => void
    keyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const EditableSpan = (props: PropsType) => {
    const [inputValue, setInputValue] = useState(props.title)

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.name === 'phone'){
            if (!isFinite(+e.currentTarget.value)) return
            else {
                setInputValue(e.currentTarget.value)
                props.changeContactHandler(e)
            }
        } else {
            setInputValue(e.currentTarget.value)
            props.changeContactHandler(e)
        }
    }


    return (
        props.editMode
            ?
            <input
                className={s.editInput}
                data-name={props.name}
                value={inputValue}
                onChange={onChangeTitleHandler}
                onKeyPress={props.keyPressHandler}
                autoFocus={props.name === 'name' && true}
            />
            : <span>{props.title}</span>
    )
}
