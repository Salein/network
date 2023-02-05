import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import { addPostActionCreator } from "../../../redux/state"
import { updateNewPostTextActionCreator } from "../../../redux/state"




const MyPosts = (props) => {

  let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

  let newPostElement = React.createRef()
  
  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={addPost} >Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElement }
      </div>
    </div>
  )
}

export default MyPosts