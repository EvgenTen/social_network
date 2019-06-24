import React from "react"
import c from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = props => {
  let postsElements = props.posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
  ))

  // method create link to some element in React
  let newPostElement = React.createRef()

  let addPostClick = () => {
    let text = newPostElement.current.value
    //alert(text + " added")
    props.addPost(text)
    newPostElement.current.value = ""
  }
  return (
    <div className={c.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          {/* ref connected to text area */}
          <textarea ref={newPostElement} />
        </div>
        <button onClick={addPostClick}>Add post</button>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  )
}
export default MyPosts
