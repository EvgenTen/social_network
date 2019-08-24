import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./redux/state";
import {rerenderEntireTree} from "./render"


rerenderEntireTree(state);
// state goes to props in APP & addPost function
//addPost("Samurai")
