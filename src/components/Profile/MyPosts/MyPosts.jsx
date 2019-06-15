import React from "react"
import c from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = props => {
  let postsElements = props.posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
  ))
let newPostElement = React.createRef()

  let addPostClick = () => {
	 let text = newPostElement.current.value
	//  alert(text + " added")
	props.addPost(text)
  }
  return (
    <div className={c.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <button onClick={addPostClick}>Add post</button>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  )
}
export default MyPosts
