let rerenderEntireTree = () => {
  console.log('state changed')
}

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state;
