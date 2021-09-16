import React from "react";
import useravatar from "../../assets/useravatar.svg";
import "./style.scss";

const Profile = () => {
  return (
    <div className="container">
      <div className="profile">
        <div className="profile_info">
          <div className="profile_info_wrapper">
            <div className="profile_info_row">
              <span>Username:</span>
              <span>TestUser123</span>
            </div>
            <hr />
            <div className="profile_info_row">
              <span>Full Name:</span>
              <span>Test User</span>
            </div>
            <hr />
            <div className="profile_info_row">
              <span>Email:</span>
              <span>TestUser123@gmail.com</span>
            </div>
            <hr />
            <div className="profile_info_row">
              <span>Phone:</span>
              <span>0993892743</span>
            </div>
            <hr />
            <div className="profile_info_row">
              <span>Address:</span>
              <span>Donesk 12 / 2</span>
            </div>
            <hr />
          </div>
        </div>
        <div className="profile__avatar">
          <span className="avatar__inner">
            <img src={useravatar} alt="avatar_svg" />
          </span>
          <button className="profile__avatar-button">Изменить</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
