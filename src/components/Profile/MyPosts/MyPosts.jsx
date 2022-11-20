import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"



const MyPosts = () => {

  return (
    <div className={s.posts}>
      <textarea></textarea>
      <button>Add post</button>
      <div>
        <Post message="It's first" count="1" />
        <Post message="Two"  count="2"/>
        <Post count="3"/>
        <Post count="4"/>
        <Post count="5"/>
      </div>
    </div>
  )
}

export default MyPosts