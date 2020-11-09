//file: src/App.js
import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageLogin from "./pages/Login/PageLogin";

function App() {
  return (
    <div id="wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
