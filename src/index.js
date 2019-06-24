import React from "react"
import ReactDOM from "react-dom"
import * as ServiceWorker from "./serviceWorker"
import "./index.css"
import App from "./App"
import state, { addPost } from "./redux/state"
import { BrowserRouter } from "react-router-dom"
import { reRenderEntireTree } from "./render"

// state goes to props in APP & addPost function
//addPost("Samurai")
reRenderEntireTree(state)
