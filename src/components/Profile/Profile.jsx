import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = props => {
  return (
    <div>
      <Profileinfo />
      <MyPosts state={props.state.posts} addPost={props.addPost} />
    </div>
  );
};
export default Profile;
