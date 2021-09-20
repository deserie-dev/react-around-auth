import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  if (props.loggedIn) {
    return (
      <header className="header">
      <img className="header__logo" src={logo} alt="Around The World" />
        <ul className="header__menu">
          <li className="header__menu-item">{props.userEmail}</li>
          <li className="header__menu-item" onClick={props.onLogOut}>Log out</li>
        </ul>
      </header>
    )
  } else {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Around The World" />
        <div className="header__menu">
          <Link className="header__menu-item" to={props.link}>{props.linkText}</Link>
        </div>
      </header>
    )
  }
}

export default Header;