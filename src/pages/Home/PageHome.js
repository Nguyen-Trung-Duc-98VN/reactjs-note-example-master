import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TodoList from "../../components/Main/TodoList/TodoList";


function PageHome() {

  const username = useSelector( state => state.login.username );
  const history = useHistory();

  // if( username === "" ){
  //   history.push({ pathname: '/' });
  // }


  return (
    <>
      <Header/>
      <h1>Hello { username }</h1>
      <TodoList/>
      <Footer/>
    </>
  );
}

export default PageHome;
