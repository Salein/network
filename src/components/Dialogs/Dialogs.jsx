import React from "react"
import { NavLink } from "react-router-dom"
import s from './Dialogs.module.css'


const DialogItem = (props) => {
    let path = '/dialogs/1' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} key={1}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Eugene' id='1' />
                <DialogItem name='awdawawfd' id='2' />
                <DialogItem name='wafawfae' id='3' />
                <DialogItem name='yukyukvv' id='4' />
                <DialogItem name='ry6rur6' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='hi' />
                <Message message='how' />
                <Message message='hey' />
                <Message message='hey' />
                <Message message='hey' />
            </div>
        </div>
    )
}

export default Dialogs