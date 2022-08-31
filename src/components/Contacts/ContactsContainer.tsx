import React, {useEffect, useState} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Contacts} from "./Contacts";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {contactsPage} from "../../state/selectors";
import s from "./Contacts.module.css";
import {AddContact} from "./AddContact";
import {RequestContacts} from "../../state/actions/contacts-actions";

const ContactsContainer = () => {
    const dispatch = useAppDispatch()
    const {
        contacts
    } = useAppSelector(contactsPage)
    useEffect(()=> {
        dispatch(RequestContacts())
    },[])

    const [search, setSearch] = useState('')
    const onBlurHandler = () => {
        setSearch('')
    }

    const filteredContacts = contacts.filter(c => c.name
        .toLowerCase()
        .split(' ')
        .join('')
        .search(search) >= 0
    )

    return (
        <div className={s.contactPageWrapper}>
            <h1>Contact list</h1>
            <div className={s.searchInput}>
                <input
                    value={search}
                    placeholder={'search'}
                    onBlur={onBlurHandler}
                    onChange={(e) => {
                        setSearch(e.currentTarget.value)
                    }}
                />
            </div>

            <AddContact/>
            {
                filteredContacts.map(c => <Contacts
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        phone={c.phone}
                        editMode={c.editMode}
                        photo={c.photo}
                    />
                )
            }
        </div>
    )
}

export default compose<React.ComponentType>(
    withAuthRedirect,
)(ContactsContainer)