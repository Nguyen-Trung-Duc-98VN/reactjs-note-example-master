import React from "react";

import { HashRouter, Route } from "react-router-dom";
import "./Main.css";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";

function Main(props) {

  return (
    
    <HashRouter>
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </main>
    </HashRouter>
  );
}

export default Main;
