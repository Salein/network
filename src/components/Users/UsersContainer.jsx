import React from "react";
import { connect } from "react-redux";
import { follow, toggleIsFetching, setCurrentPage, setUsers, setTotalUsersCount, unfollow, toggleFollowingProgress } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { getUsersThunkCreator } from "../../redux/users-reducer";

class UsersAPI extends React.Component {
    componentDidMount() {
       this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps,
    {follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching,
        toggleFollowingProgress, getUsersThunkCreator} )(UsersAPI)
