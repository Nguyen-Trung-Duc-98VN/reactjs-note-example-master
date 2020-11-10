import React from "react";

import { HashRouter, Route } from "react-router-dom";
import "./Main.css";
import PageHome from "../../pages/Home/PageHome";
import PageRegister from "../../pages/Register/PageRegister";
import PageLogin from "../../pages/Login/PageLogin";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main(props) {

  return (
    
    <HashRouter>
      <Header/>
        <main>
            {/* <Route exact path="/" component={PageLogin} /> */}
            {/* <Route path="/" component={PageHome} /> */}
            {/* <Route path="/page-register" component={PageRegister} /> */}
        </main>
      <Footer/>
    </HashRouter>
  );
}

export default Main;
