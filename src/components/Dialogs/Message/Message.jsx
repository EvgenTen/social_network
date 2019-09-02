import React from "react";
import c from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import AddMessage from "../AddMessage/AddMessage";

//-----------------------------------------------------
const Message = props => {

  //---------------MAP for dialogs list
  let messagesList = props.messages.map(m => (
    <div className={c.messages}>{m.message}</div>
    
  ));

  return (<div>{messagesList}
  
  <AddMessage messages={props.messages}
  				newMessage={props.newMessage}
   			    addNewMessage={props.addNewMessage}
             />
  
  </div>
    
  );
};

export default Message;
