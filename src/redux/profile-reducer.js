const ADD_POST = "ADD-POST";
const UPDATE_NEW_PSOT_TEXT = "UPDATE-NEW-PSOT-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "It's first", likesCount: 1 },
    { id: 2, message: "Two", likesCount: 5 },
  ],
  newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ""
      return stateCopy
    }
    case UPDATE_NEW_PSOT_TEXT: {
      let stateCopy = {...state}
      stateCopy.newPostText = action.newText
      return stateCopy
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_PSOT_TEXT, newText: text })