import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"


const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messagesPage.messages.map( m => <Message message={m.message} /> )
    let newMessageBody = props.messagesPage.newMessageBody

    let onSendMessage = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea
                    onChange={ onNewMessageChange }
                    value={ newMessageBody }
                    placeholder="Enter your message"></textarea></div>
                    <div><button onClick={ onSendMessage }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs