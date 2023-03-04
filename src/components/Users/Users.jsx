import React from "react";
import style from './Users.module.css'

let Users = (props) => {
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} alt="salma" className={style.userPhoto} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.follow(user.id) }}>Follow</button>
                            : <button onClick={() => { props.unfollow(user.id) }} >Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users