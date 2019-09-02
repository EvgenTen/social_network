import React from "react";
import c from "./Post.module.css";

const Post = props => {
  
  let messages = props.message.posts.map(m => (
    <div>
      <br/>
     <img src="https://cdn2.iconfinder.com/data/icons/lil-faces/243/lil-face-5-512.png" />
      {m.message} <span>Likes   {m.likes}</span>
      <br/>
    </div>
  ));
  
  return (
    <div className={c.item}>
      <br/>
     {messages}
    
    </div>
  );
};
export default Post;
