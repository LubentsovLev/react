import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.nav__item}>
        <NavLink className={s.nav__link} to="/profile" activeClassName={s.active_ln}>
          Profile
        </NavLink>
      </div>
      <div className={s.nav__item}>
        <NavLink className={s.nav__link} to="/dialogs" activeClassName={s.active_ln}>
          Messages
        </NavLink>
      </div>
      <div className={s.nav__item}>
        <NavLink className={s.nav__link} to="news" activeClassName={s.active_ln}>
          News
        </NavLink>
      </div>
      <div className={s.nav__item}>
        <NavLink className={s.nav__link} to="music" activeClassName={s.active_ln}>
          Music
        </NavLink>
      </div>
      <div className={(s.nav__item +' ' +s.nav__item__last)}>
        <NavLink className={s.nav__link} to="Settings" activeClassName={s.active_ln}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
