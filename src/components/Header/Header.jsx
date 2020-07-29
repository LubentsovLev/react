import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className={s.header__img}
        src="https://d1.awsstatic.com/logos/opensource%20logos/2000px-Intel-logo.svg.d1dcc6b4f80a031b55c0de9b150f6d7af5655afc.png"
      ></img>
      <div className={s.auth__inner}>
        {props.isAutn ? (
          <div className={s.name__inner}>
            <div className={s.name}>{props.login}</div>
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
