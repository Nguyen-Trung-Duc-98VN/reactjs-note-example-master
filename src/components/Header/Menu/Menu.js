import React from "react";
import { HashRouter, Link } from "react-router-dom";

import Logo from '../Logo/Logo';

function Menu(props) {

  return (
    <HashRouter>
    <nav className="navbar navbar-expand-md navbar-dark">
        {/* Brand */}
        <Logo/>        

        {/* Toggler/collapsibe Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
        </div>
    </nav>
    </HashRouter>
  );
}

export default Menu;
