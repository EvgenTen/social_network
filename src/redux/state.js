import { rerenderEntireTree } from "../render";

let state = {
  dialogPage: {
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
	newMessage: "New message from me"
  },

  profilePage: {
    posts: [
      { id: 1, message: "HI how are u?", likes: 11 },
      { id: 2, message: "i am fine", likes: 12 },
      { id: 3, message: "Hey", likes: 3 }
    ],
    newPostText: "Martusha"
  }
};

export let addPost = postMessage => {
  let newPost = {
    id: 5,
    message: postMessage
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let addNewMessage = newMessage => {
	let messages = {
	  id: 4,
	  message: newMessage,
	  likes: 0
	};
	state.dialogPage.messages.push(messages);
	rerenderEntireTree(state);
  }; 
export default state;
