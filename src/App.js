import React from "react"

import "./App.css"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import { BrowserRouter, Route } from "react-router-dom"

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        {/* lists with friends to navbar */}
        <Navbar friends={props.state.friendsBar} />
        <div class="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                // lists to dialogs page
                dialogs={props.state.messagesPage.dialogs}
                messages={props.state.messagesPage.messages}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                //index -> post -> profile -> myPosts
                posts={props.state.profilePage.posts}
                addPost={props.addPost}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
