import React from 'react';
import logo from '../../resources/images/logo.png';
import loginImage from '../../resources/images/login.png';
import './Header.css';

const Header = () => {
  return (
    <header className="top-header">
      <img src={logo} id="logo-image" alt="Logo" />
      <nav className="nav-bar">
        <img src={loginImage} id="login-image" alt="Login" />
        <button id="login-create">Login|Register</button>
      </nav>
    </header>
  );
};

export default Header;