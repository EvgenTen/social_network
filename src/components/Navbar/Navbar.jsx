import React from "react";
import classes from './Navbar.module.css'
import {NavLink, BrowserRouter, Route} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navi}>
      <div className ={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
      </div>
	  <div className ={classes.item}>
	  <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
      </div>
	  <div className ={classes.item}>
        <a>News</a>
      </div>
	  <div className ={classes.item}>
        <a>Music</a>
      </div>
	  <div className ={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};
export default Navbar;
