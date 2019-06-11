import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogsData = [
  { name: "Dima", id: 1 },
  { name: "Tanya", id: 2 },
  { name: "Kozel", id: 3 },
  { name: "Vasya", id: 4 }
];

let dialogsMessageArr = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Nigga" },
  { id: 3, message: "How r u today?" },
  { id: 4, message: "I am Crazyllo" },
  { id: 5, message: "JOb hunt" }
];

let dialogsElements = dialogsData.map(dialog => (
  <DialogItem name={dialog.name} id={dialog.id} />
));

let dialogsMessage = dialogsMessageArr.map(messages => (
  <Message message={messages.message} id={messages.id} />
));

const Dialogs = props => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>{dialogsMessage}</div>
    </div>
  );
};
export default Dialogs;
