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

  let addPost = () => {
    alert("Post added")
  }
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems} activeClassName={c.active}>
        {dialogsElements}
      </div>
      <div className={c.message}>
        {dialogsMessage}
        <div>
          <div>
            <textarea />
          </div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs
