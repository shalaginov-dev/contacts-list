import React, {ChangeEvent, useEffect, useState} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Contact} from "./Contact/Contact";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {contactsPage} from "../../state/selectors";
import s from "./ContactContainer.module.css";
import {AddContact} from "./AddContact/AddContact";
import {RequestContacts} from "../../state/actions/contacts-actions";
import {Search} from "./Search/Search";

const ContactContainer = () => {
    const dispatch = useAppDispatch()
    const {contacts} = useAppSelector(contactsPage)
    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(RequestContacts())
    }, [])

    const searchInputOnBlurHandler = () => {
        setSearch('')
    }
    const searchInputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
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
            <Search search={search} blurHandler={searchInputOnBlurHandler} changeHandler={searchInputOnChangeHandler}/>
            <AddContact/>
            {
                filteredContacts.map(c => <Contact
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
)(ContactContainer)