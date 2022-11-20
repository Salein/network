import React from "react"
import s from './Post.module.css'



const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://avatarfiles.alphacoders.com/922/92251.jpg" alt="" />
      {props.message}
      <div>
        <span>Like{props.count}</span>
      </div>
    </div>
  )
}

export default Post