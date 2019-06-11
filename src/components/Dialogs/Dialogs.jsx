import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <div className={c.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={c.message}>{props.message}</div>;
};

let dialogsData = [{ name: "Dima", id: 1 }, { name: "Vasya", id: 2 }];

const Dialogs = props => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name="Vasya" id="2" />
        <DialogItem name="Petya" id="3" />
        <DialogItem name="Sveta" id="4" />
        <DialogItem name="Roba" id="5" />
      </div>
      <div className={c.messages}>
        <Message message="HI" />
        <Message message="How are u?" />
        <Message message="WTF" />
      </div>
    </div>
  );
};
export default Dialogs;
