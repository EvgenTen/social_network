import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { addNewMesage } from './redux/state';

//----------------DATA--------------------------------Comment

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
		  render={() => <Dialogs state={props.state.dialogPage}
		  						 addNewMessage={props.addNewMessage}
		   />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
