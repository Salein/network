import React from "react"
import { NavLink } from "react-router-dom"
import s from './Dialogs.module.css'


export const DialogItem = () => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to='/dialogs/1'>awd</NavLink>
        </div>
    )
}

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem />
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>awdawawfd</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>wafawfae</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>yukyuk</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>ry6rur6</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>gi</div>
                <div className={s.message}>hi</div>
                <div className={s.message}>pe</div>
            </div>
        </div>
    )
}

export default Dialogs