import React from "react";
import { connect } from "react-redux";

import ShowNote from "./ShowNote";
import AddNote from "./AddNote";

function TodoList(props) {

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "3%" }}>
          <AddNote />
          {props.note.map((note, index) => {
              return <ShowNote noteData = {note} key={note.id}/>
          })}
      </div>
    </div>
  );
}

// Lấy state từ store bằng mapStateToProps
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    note: state.note,
  };
};

export default connect(mapStateToProps, null)(TodoList);
