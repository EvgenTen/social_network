import React from "react";
import c from "./Users.module.css";

let Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://icon-library.net/images/face-icon-png/face-icon-png-17.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "I`m Boss",
        location: { city: "Moscow", country: "Russia" }
      },
      {
        id: 2,
        photoUrl:
          "https://icon-library.net/images/face-icon-png/face-icon-png-17.jpg",
        followed: true,
        fullName: "Oleg",
        status: "I`m lego",
        location: { city: "Vladivostok", country: "Russia" }
      },
      {
        id: 3,
        photoUrl:
          "https://icon-library.net/images/face-icon-png/face-icon-png-17.jpg",
        followed: false,
        fullName: "Kurva",
        status: "I`m Kurva",
        location: { city: "Porvan", country: "Romania" }
      }
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={c.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      ))}
    </div>

    // <div className={c.usersInfo}>
    // <div>
    //   	 <img src="https://icon-library.net/images/face-icon-png/face-icon-png-17.jpg" alt="face"/>
    // </div>
    // </div>
  );
};

export default Users;
