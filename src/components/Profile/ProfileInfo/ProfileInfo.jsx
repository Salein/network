import React from "react"
import s from '../ProfileInfo/ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader"


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/> }

    return(
      <div>
        <div>
        <img src='https://besthqwallpapers.com/Uploads/26-12-2020/148818/thumb2-3d-black-pillars-background-3d-elements-background-3d-creative-background-3d-art-background.jpg' alt=""/>
        </div>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.small} alt='' />
          ava
        </div>
      </div>
    )
}

export default ProfileInfo