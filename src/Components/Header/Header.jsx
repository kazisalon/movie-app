import React from "react";
import logo from "../../logo.svg";
import "./Header.css";

const Header = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="header">
    <img src={logo} className="header-logo" alt="logo" />
    <div className="search-wrapper">
      <form className="search-form">
        <input className="search-input" />
        <button type="submit" className="search-button">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  </div>
);

export default Header;
