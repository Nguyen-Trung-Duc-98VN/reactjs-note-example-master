import React from "react";

import { HashRouter, Route } from "react-router-dom";
import "./Main.css";
import PageHome from "../../pages/Home/PageHome";
import PageRegister from "../../pages/Register/PageRegister";
import PageLogin from "../../pages/Login/PageLogin";

function Main(props) {

  return (
    
    <HashRouter>
        <main>
            <Route exact path="/" component={PageHome} />
            <Route path="/page-register" component={PageRegister} />
            <Route path="/page-login" component={PageLogin} />
        </main>
    </HashRouter>
  );
}

export default Main;
