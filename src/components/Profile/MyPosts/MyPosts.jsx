import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"



const MyPosts = () => {

  let postData = [
    {id: 1, message: 'It\'s first', likesCount: 1},
    {id: 1, message: 'Two', likesCount: 5}
  ]

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likeCount={postData[0].likesCount} />
        <Post message={postData[1].message} likeCount={postData[1].likesCount} />
      </div>
    </div>
  )
}

export default MyPosts