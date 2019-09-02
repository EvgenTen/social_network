import React from "react"
import ReactDOM from "react-dom"
import * as ServiceWorker from "./serviceWorker"
import "./index.css"
import App from "./App"
import { addPost, addNewMessage} from "./redux/state"
import { BrowserRouter } from "react-router-dom"

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addNewMessage={addNewMessage} />
    </BrowserRouter>,
    document.getElementById("root")
  )
}
