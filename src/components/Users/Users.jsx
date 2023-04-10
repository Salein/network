import React from "react";
import style from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";



let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p && style.selectedPage}
          onClick={() => { props.onPageChanged(p) }}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photo.small : userPhoto} className={style.userPhoto} alt='' />
            </NavLink>
          </div>
          <div>
            {u.followed
              //Here is bug, when user is followed and unfollowed, status is not updated
              //maybe bug is here because api free and bad working
              ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.followingInProgress(true, u.id)
                usersAPI.follow(u.id).then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id)
                    }
                    props.followingInProgress(false, u.id)
                  })
              }}>Follow</button>
              //Here is bug, when user is followed and unfollowed, status is not updated
              : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.followingInProgress(true, u.id)
                usersAPI.unfollow(u.id).then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                    props.followingInProgress(false, u.id)
                  })
              }}>Unfollow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users