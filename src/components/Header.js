import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  // const { loggedIn, onSignOut } = props;
  if (props.loggedIn) {
    return (
      <header className="header">
      <img className="header__logo" src={logo} alt="Around The World" />
        <ul className="header__links">
          <li className="header__menu-item">{props.email}</li>
          <li className="header__menu-link" onClick={props.onLogOut}>Log out</li>
        </ul>
      </header>
    )
  } else {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Around The World" />
        <div>
          <Link className="header__link" to={props.link}>{props.linkText}</Link>
        </div>
      </header>
    )
  }
}

export default Header;