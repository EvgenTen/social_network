import React from "react";
import c from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

//-----------------------------------------------------
const Message = props => {
 
  //---------------MAP for dialogs list
  let messagesList = props.messages.map(m => (
    <div className={c.messages}>{m.message}</div>
    
  ));

  return (<div>{messagesList}</div>
    
  );
};

export default Message;
