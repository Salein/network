import { profileReducer } from "./profile-reducer"
import { messagesReducer } from './messages-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "It's first", likesCount: 1 },
        { id: 1, message: "Two", likesCount: 5 },
      ],
      newPostText: ""
    },
    messagesPage: {
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
      newMessageBody: ""
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._callSubscriber(this._state)
  }
}





export default store;
