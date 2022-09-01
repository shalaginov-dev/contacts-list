import s from "./Search.module.css";
import React, {ChangeEvent} from "react";

type SearchPropsType = {
    search: string
    blurHandler: () => void
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Search = (props: SearchPropsType) => {

    return (
        <div className={s.searchInput}>
            <input
                value={props.search}
                placeholder={'search'}
                onBlur={props.blurHandler}
                onChange={props.changeHandler}
            />
        </div>
    )
}