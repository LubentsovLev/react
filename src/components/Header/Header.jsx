import React from "react";
import s from './Header.module.css'

const Header = () => {
  return <header className={s.header}>
      <img
        className={s.header__img}
        src="https://d1.awsstatic.com/logos/opensource%20logos/2000px-Intel-logo.svg.d1dcc6b4f80a031b55c0de9b150f6d7af5655afc.png"></img>
    </header>
}

export default Header;
