import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


//-----------------for the links-----------------------------------

//----------------------------------------------------


//-----------------------------------------------------
const Dialogs = props => {
  //---------------MAP for dialogs list

 
  return (
    <div className={c.dialogs}>
      <DialogItem dialogs={props.state.dialogs} />
      <Message messages={props.state.messages} />

     
    </div>
  );
};

export default Dialogs;
