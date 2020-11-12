//file AddNote.js

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from '../todosSlice';
import { Col, Form, Button, InputGroup } from 'react-bootstrap';

function AddNote() {
  const [content, setContent] = useState();

  const dispatch = useDispatch();

  const noteInput = useRef(null);   //Refs: Giúp chúng ta tương tác với DOM thật

  const handleSubmit = () => {
    console.log("content: "+content);
    dispatch( addNote(content) );

    noteInput.current.value = '';     //Gán giá trị cho input thành rỗng

    setContent('');     //Cập nhật lại state content
  };

  return (
    <Col md={12} style={{ marginBottom: 15 }}>
      <Form onSubmit={ handleSubmit }>
        <InputGroup className="mb-8">
          <input
            type="text"
            className="form-control"
            placeholder="Nội dung ghi chú"
            
            onChange={(e) => {
              setContent(e.target.value)
            }}
            ref={noteInput}
          />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              Thêm
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Col>
  );
}

export default AddNote;