import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

let dialogsMessageArr = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Nigga" },
  { id: 3, message: "How r u today?" },
  { id: 4, message: "I am Crazyllo" },
  { id: 5, message: "JOb hunt" }
]

let dialogsData = [
  { name: "Dima", id: 1 },
  { name: "Tanya", id: 2 },
  { name: "Kozel", id: 3 },
  { name: "Vasya", id: 4 }
]

let dialogsArr = [
  { message: "Hello world", likesCount: 11 },
  { message: "Kukurudza", likesCount: 5 },
  { message: "Hello world2", likesCount: 32 },
  { message: "Hello world2", likesCount: 5 },
  { message: "Hello world3", likesCount: 77 }
]

ReactDOM.render(
  <App
    dialogsData={dialogsData}
    dialogsArr={dialogsArr}
    dialogsMessageArr={dialogsMessageArr}
  />,
  document.getElementById("root")
)
