import React from "react"
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/messages-reducer"
import Dialogs from "./Dialogs"

const DialogsContainer = (props) => {

    let state = props.store.getState()

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body)
        props.store.dispatch(action)
    }

    return (<Dialogs
    updateNewMessageBody={onNewMessageChange}
    sendMessage={onSendMessageClick}
    dialogsPage={state.messagesPage} />)
}

export default DialogsContainer