import React from "react"
import classes from "./Navbar.module.css"
import { NavLink, BrowserRouter, Route } from "react-router-dom"
import SiteBar from "./SiteBar/SiteBar"
import c from "./SiteBar/SiteBar.module.css"

const Navbar = props => {
  debugger
  let friendsList = props.friends.friends.map(friend => (
    <SiteBar name={friend.name} id={friend.id} imgUrl={friend.imgUrl} />
  ))
  return (
    <nav className={classes.navi}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
      {friendsList}
    </nav>
  )
}
export default Navbar
