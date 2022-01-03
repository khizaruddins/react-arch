import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/logo.component";
import "./header.component.scss";
function Header() {
  return (
    <header className="header-wrapper">
      <div className="content">
        <Link to="/">
          <Logo />
        </Link>
        <div className="nav">
          <Link to="contact">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
