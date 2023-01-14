let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "It's first", likesCount: 1 },
        { id: 1, message: "Two", likesCount: 5 },
      ],
      newPostText: 'as'
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
      ]
    }
  },
  getState () {
    return this._state
  },
  _callSubscriber () {
    console.log('state changed')
  },
  addPost () {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._callSubscriber(this._state)
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  subscribe (observer) {
    this._callSubscriber = observer
  }
}


export default store;
