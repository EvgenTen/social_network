import React from "react";
import c from "./FeatFriends.module.css";

const FeatFriends = props => {
  return (
    <div className={c.friendBar}>
      <div className={c.box}>
        <a href="google.com">
          <img src="https://media.allure.com/photos/5771a6713b5256713da4b853/1:1/w_800%2Cc_limit/hair-ideas-2012-05-square-face-hairstyles-rosario-dawson.jpg" />
          Hello
        </a>
      </div>
      <div className={c.box}>
        <a href="google.com">
          <img src="https://media1.popsugar-assets.com/files/thumbor/WIaayQQjT9gZaWM616WWsy74_4Y/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2012/03/11/0/498/4981324/486e5a1281396b2e_140019304/i/Square-Faces.jpg" />
          Hello
        </a>
      </div>
      <div className={c.box}>
        <a href="google.com">
          <img src="https://media.allure.com/photos/5893b5c8a08420c838db66c6/1:1/w_800%2Cc_limit/pinnable-6-Best-Cuts-Square-Faces.jpg" />
          Hello
        </a>
      </div>
    </div>
  );
};
export default FeatFriends;
