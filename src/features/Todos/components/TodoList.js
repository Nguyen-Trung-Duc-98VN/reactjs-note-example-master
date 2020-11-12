import React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from 'react-bootstrap';


import ShowNote from "./ShowNote";
import AddNote from "./AddNote";


function TodoList() {

  const listTodo = useSelector( (state) => state.todos);

  return (
    <Container>
      <Row style={{ marginTop: "3%" }}>
          <AddNote />       
          {
            listTodo.map((todos, index) => {
              return <ShowNote noteData = {todos} key={todos.id}/>
            })
          }
      </Row>
    </Container>
  );
}

export default TodoList;