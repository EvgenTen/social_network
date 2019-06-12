import React from "react"

import "./App.css"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import { BrowserRouter, Route } from "react-router-dom"

const App = props => {
  debugger
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.dialogsData}
                dialogsMessageArr={props.dialogsMessageArr}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile dialogsArr={props.dialogsArr} />}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
