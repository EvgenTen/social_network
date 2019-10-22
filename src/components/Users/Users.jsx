import React from "react";
import c from "./Users.module.css";
import * as axios from "axios";
import boy from "../../assets/images/boy.png";

class Users extends React.Component {

  componentDidMount() {
    axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => {
      this.props.setUsers(response.data.items);
    })
  }

  render() {
    return (
      <div>
        {this.props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small == null ? boy : u.photos.small}
                  className={c.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
              <div>{u.followed}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
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
  }
}

export default Users;
