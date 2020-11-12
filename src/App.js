//file: src/App.js
import React from "react";
import "./App.css";
import PageLogin from "./pages/Login/PageLogin";
import PageRegister from "./pages/Register/PageRegister";
import { HashRouter, Route } from "react-router-dom";
import PageHome from "./pages/Home/PageHome";

function App() {
  return (
    <div id="wrapper">
      <HashRouter>
        <Route exact path="/" component={PageLogin}/>
        <Route path="/page-home" component={PageHome}/>
        <Route path="/page-register" component={PageRegister}/>
      </HashRouter>
    </div>
  );
}

export default App;
