

import React from "react"
import c from "./Navbar.module.css"
import { NavLink, BrowserRouter, Route } from "react-router-dom"
import FeatFriends from "./FeatFriends/FeatFriends";



const Navbar = props => {


  return (
    <nav className={c.navbar}>
      <div className={c.item}>
        <NavLink to="/profile"  activeClassName={c.active}>
          Profile
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/dialogs" activeClassName={c.active}>
          Messages
        </NavLink>
      </div>
      <div className={c.item}>
      <NavLink to="/users" activeClassName={c.active}>
          Users
        </NavLink>
      </div>
      <div className={c.item}>
        <a>Music</a>
      </div>
      <div className={c.item}>
        <a>Settings</a>
      </div>
      <h2>Friend`s online</h2>
     <FeatFriends />
    </nav>
  )
}
export default Navbar
