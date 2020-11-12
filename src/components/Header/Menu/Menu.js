import React from "react";
import { HashRouter, Link } from "react-router-dom";
import { 
    Navbar, 
    Nav,
} from 'react-bootstrap';

import Logo from '../Logo/Logo';

function Menu(props) {

  return (
    <HashRouter>
    <Navbar bg="light" expand="lg">
        <Logo/> 
        <Navbar.Toggle as="button" aria-controls="#collapsibleNavbar" />
        <Navbar.Collapse id="collapsibleNavbar">
            <Nav className="mr-auto">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/page-home" className="active">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/">Logout</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    {/* <nav className="navbar navbar-expand-md navbar-dark">
        <Logo/>        

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/page-home" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Logout</Link>
                </li>
            </ul>
        </div>
    </nav> */}
    </HashRouter>
  );
}

export default Menu;
