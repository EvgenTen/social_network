import React from "react"
import c from "../../App.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = () => {
  let dialogsArr = [
    { message: "Hello world", likesCount: 11 },
    { message: "Kukurudza", likesCount: 5 },
    { message: "Hello world2", likesCount: 32 },
    { message: "Hello world2", likesCount: 5 },
    { message: "Hello world3", likesCount: 77 }
  ]
  return (
    <div>
      <ProfileInfo />
      <MyPosts dialogsArr={dialogsArr} />
    </div>
  )
}
export default Profile
