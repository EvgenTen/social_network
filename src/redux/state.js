const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 5, message: body });

      this._callSubscriber(this._state);
    }
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

export default store;
window.store = store;
