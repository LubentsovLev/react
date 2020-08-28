import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import menu from "../../assets/img/menu.svg";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.Navig = React.createRef();
  }
  render() {
    return (
      <div className={s.nav__inner} >
        <div
          className={s.img_menu_inner}
          onClick={() => this.Navig.current.classList.toggle("nav__active")}
        >
          <img className={s.img_menu} src={menu}></img>
        </div>
        <nav className={s.nav} ref={this.Navig}>
          <div  className={s.nav__items}>
            <div className={s.nav__item}>
              <NavLink
                className={s.nav__link}
                to="/profile"
                activeClassName={s.active_ln}
              >
                Profile
              </NavLink>
            </div>
            <div className={s.nav__item}>
              <NavLink
                className={s.nav__link}
                to="/dialogs"
                activeClassName={s.active_ln}
              >
                Messages
              </NavLink>
            </div>
            <div className={s.nav__item}>
              <NavLink
                className={s.nav__link}
                to={"/music"}
                activeClassName={s.active_ln}
              >
                Music
              </NavLink>
            </div>
            <div className={s.nav__item}>
              <NavLink
                className={s.nav__link}
                to="/photos"
                activeClassName={s.active_ln}
              >
                Photos
              </NavLink>
            </div>
            <div className={s.nav__item}>
              <NavLink
                className={s.nav__link}
                to="/comments"
                activeClassName={s.active_ln}
              >
                Comment
              </NavLink>
            </div>
            <div className={s.nav__item + " " + s.nav__item__last}>
              <NavLink
                className={s.nav__link}
                to="/users"
                activeClassName={s.active_ln}
              >
                Users
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
