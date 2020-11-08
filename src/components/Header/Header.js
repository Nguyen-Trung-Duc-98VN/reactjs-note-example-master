import React from "react";

import Menu from "./Menu/Menu";
import "./Header.css";

function Header(props) {

  return (
    <header className="bg-primary">
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Menu/>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
