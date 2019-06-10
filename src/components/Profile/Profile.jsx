import React from "react";
import classes from '../../App.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img
          src="https://static.interestingengineering.com/images/APRIL/sizes/black_hole_resize_md.jpg"
          alt="New content"
        />
		</div>
		<div>ava + description</div>
    <MyPosts />
	</div>
  );
};
export default Profile;
