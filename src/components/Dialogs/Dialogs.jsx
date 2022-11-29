import React from "react"
import { NavLink } from "react-router-dom"
import s from './Dialogs.module.css'


const DialogItem = (props) => {
    
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} key={props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'awd'},
        {id: 2, name: 'awdawd'},
        {id: 3, name: 'aagsegswd'},
        {id: 4, name: 'rtjj'},
        {id: 5, name: 'ryryrjrtjk'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />)

    let messages = [
        {id: 1, message: 'awd'},
        {id: 2, message: 'awgsg'},
        {id: 3, message: 'awdrhdrhd'},
        {id: 4, message: 'adrhdrhreewd'},
        {id: 5, message: 'awde4te4te4ye'}
    ]

    let messagesElements = messages.map( m => <Message message={m.message} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs