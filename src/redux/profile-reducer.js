const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-PSOT-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "It's first", likesCount: 1 },
    { id: 2, message: "Two", likesCount: 5 },
  ],
  newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          { id: 3, message: state.newPostText, likesCount: 9 },
        ],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
