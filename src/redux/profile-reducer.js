const ADD_POST = "ADD-POST";
const UPDATE_NEW_PSOT_TEXT = "UPDATE-NEW-PSOT-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "It's first", likesCount: 1 },
    { id: 1, message: "Two", likesCount: 5 },
  ],
  newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost)
      state.newPostText = ""
      return state
    case UPDATE_NEW_PSOT_TEXT:
            state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_PSOT_TEXT, newText: text })