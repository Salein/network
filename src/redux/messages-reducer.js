const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "awd" },
    { id: 2, message: "awgsg" },
    { id: 3, message: "awdrhdrhd" },
    { id: 4, message: "adrhdrhreewd" },
    { id: 5, message: "awde4te4te4ye" },
  ],
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Eugene" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Alex" },
  ],
  newMessageBody: "",
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
