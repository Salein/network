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

    let dialogsData = [
        {id: 1, name: 'awd'},
        {id: 2, name: 'awdawd'},
        {id: 3, name: 'aagsegswd'},
        {id: 4, name: 'rtjj'},
        {id: 5, name: 'ryryrjrtjk'}
    ]

    let messagesData = [
        {id: 1, message: 'awd'},
        {id: 2, message: 'awgsg'},
        {id: 3, message: 'awdrhdrhd'},
        {id: 4, message: 'adrhdrhreewd'},
        {id: 5, message: 'awde4te4te4ye'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
                <Message message={messagesData[2].message} id={messagesData[2].id} />
                <Message message={messagesData[3].message} id={messagesData[3].id} />
                <Message message={messagesData[4].message} id={messagesData[4].id} />
            </div>
        </div>
    )
}

export default Dialogs