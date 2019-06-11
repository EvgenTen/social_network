import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
	  <div>
	  <div className={c.item}>
		 <textarea></textarea>
		 <button>Add post</button>
	  </div>
    <div className={c.posts}>
    <Post message="Hello world"/>
	<Post />
	<Post />
	<Post />
	<Post />
	 </div>
	 </div>
  );
};
export default MyPosts;
