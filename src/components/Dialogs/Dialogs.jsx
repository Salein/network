import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { updateNewMessageBodyCreator } from "../../redux/state"
import { sendMessageCreator } from "../../redux/state"

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map( m => <Message message={m.message} /> )

    let onSendMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
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
                    value={ props.newMessageBody }
                    placeholder="Enter your message"></textarea></div>
                    <div><button onClick={ onSendMessage }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs