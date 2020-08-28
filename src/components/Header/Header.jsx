import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/twitter.svg";
import menu from "../../assets/img/menu.svg"
import { useEffect } from "react";

const Header = (props) => {
  useEffect(() => {
  }, [props.photo]);
  return (
    <header className={s.header}>
      <NavLink to="/profile">
        <img className={s.header__img} src={logo}></img>
      </NavLink>
      <div className={s.auth__inner}>
        {props.isAutn ? (
          <div className={s.name__inner}>
            <NavLink to="/profile">
              <div className={s.name}>
                <img
                  className={s.logo}
                  src={props.photo ? props.photo.photos.small : null}
                  alt=""
                />
                <p>{props.login}</p>
              </div>
            </NavLink>
            <button onClick={props.logOut}>logOut</button>
          </div>
        ) : (
          <NavLink to={"/login"}>
            {" "}
            <span className={s.login}>login</span>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
