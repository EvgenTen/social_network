import React from "react";
import c from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

//-----------------------------------------------------
const DialogItem = props => {
 

  //---------------MAP for dialogs list
  let dialogsList = props.dialogs.map(d => (
    <div>
      <br />
      <NavLink to={"/dialogs/" + d.id}>{d.name}</NavLink>
    </div>
  ));

  return <div>{dialogsList}</div>;
};

export default DialogItem;
