import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = props => {
  let postsElements =
		props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />);
	
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div>
      MyPosts
      <form className={c.form}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />

        <img src="http://www.clker.com/cliparts/N/A/G/S/5/f/red-square-button-hi.png" onClick= {addPost} />
      </form>
      <div className={c.posts}>
        <Post message={props.posts} />
      </div>
    </div>
  );
};
export default MyPosts;
