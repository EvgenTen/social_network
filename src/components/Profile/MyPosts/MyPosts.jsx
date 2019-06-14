import React from "react"
import c from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = props => {
  let postsElements = props.posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
  ))

  return (
    <div className={c.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <button>Add post</button>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  )
}
export default MyPosts
