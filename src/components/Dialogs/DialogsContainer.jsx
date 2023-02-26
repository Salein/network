import React from "react"
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/messages-reducer"
import Dialogs from "./Dialogs"
import StoreContext from "../../StoreContext"

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().messagesPage

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                let onNewMessageChange = (body) => {
                    let action = updateNewMessageBodyCreator(body)
                    store.dispatch(action)
                }

                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    messagesPage={state} />
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer