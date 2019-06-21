import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import state, { addPost } from "./redux/state"

// state goes to props in APP & addPost function
ReactDOM.render(
  <App state={state} addPost={addPost} />,
  document.getElementById("root")
)
