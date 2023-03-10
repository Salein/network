import React, { useEffect } from "react"
import Profile from "./Profile"
import axios from "axios"
import { connect } from "react-redux"
import { setUsersProfile } from "../../redux/profile-reducer"
import { useParams } from "react-router-dom"


const ProfileAPIContainer = (props) => {

  let params = useParams()
  if (!params.userId) {
    params.userId = 2
  }
  
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
      .then(response => {
        props.setUsersProfile(response.data)
      })
  })
  return (
    <Profile profile={props.profile} />
  )
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})


export default connect(mapStateToProps, { setUsersProfile })(ProfileAPIContainer)