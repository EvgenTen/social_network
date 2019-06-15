import React from "react"
import c from "./SideBar.module.css"
import { NavLink } from "react-router-dom"

const SideBar = props => {
  return (
    <div>
      <img className={c.img} src={props.imgUrl} alt="ava" />

      <div className={c.itemName}>{props.name}</div>
    </div>
  )
}
export default SideBar
