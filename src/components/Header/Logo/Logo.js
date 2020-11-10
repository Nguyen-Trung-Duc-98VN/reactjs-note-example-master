import React from "react";

import { HashRouter, Link } from "react-router-dom";
import logo from "../../../images/logo_180x40.svg";

function Logo() {

  return (
    <HashRouter>
      <Link to="/page-home" className="navbar-brand">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </HashRouter>
  );
}

export default Logo;
