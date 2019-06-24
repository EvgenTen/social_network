import { reRenderEntireTree } from "../render"
let state = {
  // list for profile messages
  profilePage: {
    posts: [
      { id: 1, message: "HelloVasya", likesCount: 2 },
      { id: 2, message: "Kukurudza", likesCount: 50 },
      { id: 3, message: "Hello world2", likesCount: 33 },
      { id: 4, message: "Hello world2", likesCount: 51 },
      { id: 5, message: "Hello world3", likesCount: 717 }
    ]
  },
  //_____________________________________________
  //dialogs names and messages
  messagesPage: {
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Nigga" },
      { id: 3, message: "How r u today?" },
      { id: 4, message: "I am Crazyllo" },
      { id: 5, message: "JOb hunt" }
    ],

    dialogs: [
      { name: "Dima", id: 1 },
      { name: "Tanya", id: 2 },
      { name: "Kozel", id: 3 },
      { name: "Vasya", id: 4 }
    ]
  },
  //____________________________________________________
  // featured friends list to display in navbar
  friendsBar: {
    friends: [
      {
        id: 1,
        name: "Vasya",
        imgUrl:
          "https://png2.kisspng.com/sh/483edc69fdc2ed2e9b246d294497a803/L0KzQYm3UsA0N6NxiZH0aYP2gLBuTfZia5YyeehqdHH1Pb7ojr1kdJp1RdN7dD32hbBujPF0e5Z4RdhqY3Wwc73wkPFzfKQyTdMCNXTmQoW4hPY3bWUzSqcEMUa6Rom4VcE4Pmg4TaIDMUK1R3B3jvc=/kisspng-face-avatar-man-clip-art-sunglasses-face-cliparts-5a75dc241df6e4.2591676815176735081227.png"
      },
      {
        id: 2,
        name: "Masha",
        imgUrl:
          "https://png2.kisspng.com/sh/483edc69fdc2ed2e9b246d294497a803/L0KzQYm3UsA0N6NxiZH0aYP2gLBuTfZia5YyeehqdHH1Pb7ojr1kdJp1RdN7dD32hbBujPF0e5Z4RdhqY3Wwc73wkPFzfKQyTdMCNXTmQoW4hPY3bWUzSqcEMUa6Rom4VcE4Pmg4TaIDMUK1R3B3jvc=/kisspng-face-avatar-man-clip-art-sunglasses-face-cliparts-5a75dc241df6e4.2591676815176735081227.png"
      },
      {
        id: 3,
        name: "Nigga",
        imgUrl:
          "https://png2.kisspng.com/sh/483edc69fdc2ed2e9b246d294497a803/L0KzQYm3UsA0N6NxiZH0aYP2gLBuTfZia5YyeehqdHH1Pb7ojr1kdJp1RdN7dD32hbBujPF0e5Z4RdhqY3Wwc73wkPFzfKQyTdMCNXTmQoW4hPY3bWUzSqcEMUa6Rom4VcE4Pmg4TaIDMUK1R3B3jvc=/kisspng-face-avatar-man-clip-art-sunglasses-face-cliparts-5a75dc241df6e4.2591676815176735081227.png"
      }
    ]
  }
}

// The function will push the "postMessage" from text field in profile page

export let addPost = postMessage => {
  debugger
  let newPost = {
    id: 6,
    message: postMessage,
    likesCount: 10
  }

  state.profilePage.posts.unshift(newPost)
  reRenderEntireTree(state)
}

export default state
