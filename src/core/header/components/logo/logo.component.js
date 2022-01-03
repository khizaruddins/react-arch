import React from "react";
import LogoImg from "../../../../assets/images/logo.jpg";
import "./logo.component.scss";

function Logo() {
  return (
    <div className="logo-wrapper">
      <img src={LogoImg} alt="my logo" />
    </div>
  );
}

export default Logo;
