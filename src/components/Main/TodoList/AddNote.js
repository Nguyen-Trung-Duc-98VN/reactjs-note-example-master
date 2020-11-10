//file AddNote.js

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actAddNote } from "../../../actions/noteAction";

function AddNote() {
  const [content, setContent] = useState();
  // const contentHook = useSelector(state => state.note.list);

  const dispatch = useDispatch();


  //Refs: Giúp chúng ta tương tác với DOM thật

  const noteInput = useRef(null);

  //Khi click vào nút thêm sẽ gọi hàm này,
  const handleAdd = () => {
    // console.log("content Hook: "+contentHook);
    // console.log("content: "+content);
    dispatch(actAddNote(content));

    //Gán giá trị cho input thành rỗng
    noteInput.current.value = ''

    //Cập nhật lại state content
    setContent('')
  };
  
  return (
    <div className="col-md-12" style={{ marginBottom: 15 }}>
      <div className="input-group mb-8">
        <input
          type="text"
          className="form-control"
          placeholder="Nội dung ghi chú"
          
          onChange={(e) => {
            setContent(e.target.value)
          }}
          ref={noteInput}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleAdd}>
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNote;