import React from "react";
import { NavLink } from "react-router-dom";
import { logOut } from "../../actions/user";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <NavLink to="/">
              <span>Test</span>Task
            </NavLink>
          </div>
          <nav className="header__menu">
            <ul>
              <li>
                {!localStorage.token ? (
                  <NavLink to="/authorization">Вход</NavLink>
                ) : (
                  <NavLink to="/">Home</NavLink>
                )}
              </li>
              <li>
                {localStorage.token && <NavLink to="/profile">Профиль</NavLink>}
              </li>
              <li>
                {!localStorage.token ? (
                  <NavLink to="/registration">Регистрация</NavLink>
                ) : (
                  <div onClick={() => logOut()}>Log out</div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
