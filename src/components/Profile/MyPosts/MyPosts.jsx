import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
 
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
  }

  return (
    <div>
      MyPosts
      <form className={c.form}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />

        <img
          src="http://www.clker.com/cliparts/N/A/G/S/5/f/red-square-button-hi.png"
          onClick={addPost}
        />
      </form>
      <div className={c.posts}>
        <Post message={props.posts} />
      </div>
    </div>
  );
};
export default MyPosts;
