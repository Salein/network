const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://parfumclub.org/images/celebrities/salma-hayek.jpg',
      followed: false,
      fullName: "Eugene",
      status: "I am a boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl: 'https://parfumclub.org/images/celebrities/salma-hayek.jpg',
      followed: true,
      fullName: "Dmitry",
      status: "I find my first job",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      photoUrl: 'https://parfumclub.org/images/celebrities/salma-hayek.jpg',
      followed: false,
      fullName: "Nikolay",
      status: "I am a lucky",
      location: { city: "Boston", country: "USA" },
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((users) => {
          if (users.id === action.userID) {
            return { ...users, followed: true };
          }
          return users;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((users) => {
          if (users.id === action.userID) {
            return { ...users, followed: false };
          }
          return users;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
