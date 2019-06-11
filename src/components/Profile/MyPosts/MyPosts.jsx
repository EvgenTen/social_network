import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let dialogsArr = [
    { message: "Hello world", likesCount: 11 },
    { message: "Kukurudza", likesCount: 5 },
    { message: "Hello world2", likesCount: 32 },
    { message: "Hello world2", likesCount: 5 },
    { message: "Hello world3", likesCount: 77 }
  ];

  let postsElements = dialogsArr.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

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
  );
};
export default MyPosts;
