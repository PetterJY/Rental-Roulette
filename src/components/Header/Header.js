import React from 'react';
import './Header.css';
import logo from '../../resources/images/logo.png';
import loginImage from '../../resources/images/login.png';

const Header = () => {
  return (
    <header className="header">
      <header className="top-header">
        <img src={logo} id="logo-image" alt="Logo" />
        <nav className="nav-bar">
          <img src={loginImage} id="login-image" alt="Login" />
          <button id="login-create">Login|Register</button>
        </nav>
      </header>
    </header>
  );
};

export default Header;