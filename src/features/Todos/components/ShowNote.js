import React, { useState } from "react";
import "./ShowNote.css";
import { connect } from "react-redux";
import { editNote, removeNote } from '../../../features/Todos/todosSlice';
import { Col, Card, Button, Form } from 'react-bootstrap';

function ShowNote(props) {
  const [noteContent, setNoteContent] = useState(props.noteData.content)

  //Lấy ID của ghi chú 
  const noteID = props.noteData.id


  // Được gọi mỗi khi thay đổi giá trị
  // của ghi chú.
  const handleChange = (e) => {
    setNoteContent(e.target.value)
    props.editNote(noteID, e.target.value)
  }

  const handleRemoveNote = () => {    //Được gọi khi click vào xóa ghi chú.
    props.removeNote(noteID)
  }
  return (
    <Col md={4} style={{marginTop: 10}}>
      <Card bg="warning">

        <Card.Body>
          <textarea value= {noteContent} onChange = {handleChange}></textarea>
          {/* <Form.Control as="textarea"></Form.Control> */}
        </Card.Body>

        <Card.Footer>
          <Button
            variant="danger" 
            size="sm" 
            className="float-right" 
            onClick={ handleRemoveNote }
          >
            Xóa
          </Button>
        </Card.Footer>

      </Card>
    </Col>
  );
}

// chuyển dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    editNote: (id, content) => {
      dispatch(editNote(id, content));
    },
    removeNote: id => {
      dispatch(removeNote(id));
    }
  };
};

// chuyển state từ store thành props
// của component
const mapStateToProps = (state, ownProps) => {
  return {
    note: state.note,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNote);
