const ADD_POST = 'ADD-POST'
const UPDATE_NEW_PSOT_TEXT = 'UPDATE-NEW-PSOT-TEXT'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "It's first", likesCount: 1 },
        { id: 1, message: "Two", likesCount: 5 },
      ],
      newPostText: "as",
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
        { id: 1, name: "awd" },
        { id: 2, name: "awdawd" },
        { id: 3, name: "aagsegswd" },
        { id: 4, name: "rtjj" },
        { id: 5, name: "ryryrjrtjk" },
      ],
    },
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_PSOT_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_PSOT_TEXT,
    newText: text
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export default store;
