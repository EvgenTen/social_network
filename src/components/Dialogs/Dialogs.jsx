import React from "react"
import c from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = props => {
  let dialogsElements = props.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ))

  let dialogsMessage = props.messages.map(messages => (
    <Message message={messages.message} id={messages.id} />
  ))

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>{dialogsMessage}</div>
    </div>
  )
}
export default Dialogs
