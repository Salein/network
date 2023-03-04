import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID))
        },
        setUser: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer