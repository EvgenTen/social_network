import React from "react";
import c from "./Users.module.css";
import * as axios from "axios";
import boy from "../../assets/images/boy.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div className={c.pageNumbers}>
          {pages.map(p => {
            return (
              <span
                className={this.props.currentPage === p && c.selectedPage}
                onClick={e => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
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