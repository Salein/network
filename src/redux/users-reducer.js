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
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
