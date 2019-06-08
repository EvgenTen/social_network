import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.item}>
      <img
        src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
        alt="ava"
      />
      Message
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
export default Post;
