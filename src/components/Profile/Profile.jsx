import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from './Profile.module.css'



const Profile = () => {

    return(
      <div className={s.content}>
        <div>
        <img src='https://besthqwallpapers.com/Uploads/26-12-2020/148818/thumb2-3d-black-pillars-background-3d-elements-background-3d-creative-background-3d-art-background.jpg' alt=""/>
        </div>
        <div>
          ava
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile