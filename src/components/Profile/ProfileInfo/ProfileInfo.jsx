import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
     return (
    <div>
      <div>
           <img src="https://static.interestingengineering.com/images/APRIL/sizes/black_hole_resize_md.jpg" alt=":name"/>
		</div>
      <div className={c.descriptionBlock}>
      <div>ava + description</div>
    </div>
	</div>
  );
};
export default ProfileInfo;
