import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Martin" },
        { id: 2, name: "Ira" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Seriy" }
      ],

      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are You?" },
        { id: 3, message: "I am fine" },
        { id: 4, message: "WTF" }
      ],
      newMessageBody: ""
    },

    profilePage: {
      posts: [
        { id: 1, message: "HI how are u?", likes: 11 },
        { id: 2, message: "i am fine", likes: 12 },
        { id: 3, message: "Hey", likes: 3 }
      ],
      newPostText: "Martusha"
    }
  },

  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //observer pattern
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    

    this._callSubscriber(this._state);
   
  }
};

export default store;
window.store = store;
