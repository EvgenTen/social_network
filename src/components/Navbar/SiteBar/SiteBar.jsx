import React from "react"
import c from "./SiteBar.module.css"
import { NavLink } from "react-router-dom"

const SiteBar = props => {
  return (
    <div className={c.item}>
      <img src={props.imgUrl} alt="ava" />
      {props.name}
    </div>
  )
}
export default SiteBar
