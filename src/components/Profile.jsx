import React from "react"
import s from './Profile.module.css'



const Profile = () => {

    return(
        <div className={s.content}>
        <div>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt=""/>
        </div>
        <div>
          ava
        </div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            Posts 1
          </div>
          <div>
            Post 2
          </div>
        </div>
      </div>
    )
}

export default Profile