import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={c.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <button>Add post</button>
      </div>
      <div className={c.posts}>
        <Post message="Hello world" likesCount="11" />
        <Post message="Wassap Nigga" likesCount="20" />
      </div>
    </div>
  );
};
export default MyPosts;
