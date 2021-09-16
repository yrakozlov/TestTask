import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../reducers/userReducer";
import "./style.scss";

const Header = () => {
  console.log(!localStorage.token);
  const dispatch = useDispatch();

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
                  <div onClick={() => dispatch(logOut())}>Log out</div>
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
