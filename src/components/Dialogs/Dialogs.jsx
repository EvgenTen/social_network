import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={classes.message}>{props.message}</div>;
};
const Dialogs = props => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Vasya" id="2" />
        <DialogItem name="Petya" id="3" />
        <DialogItem name="Sveta" id="4" />
        <DialogItem name="Roba" id="5" />
      </div>
      <div className={classes.messages}>
        <Message message="HI" />
        <Message message="How are u?" />
        <Message message="WTF" />
      </div>
    </div>
  );
};
export default Dialogs;
