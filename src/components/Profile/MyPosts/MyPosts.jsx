import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"



const MyPosts = () => {

  return (
    <div className={s.posts}>
      <textarea></textarea>
      <button>Add post</button>
      <div>
        <Post message="It's first" likeCount="1" />
        <Post message="Two"  likeCount="2"/>
      </div>
    </div>
  )
}

export default MyPosts