import React from "react";

function Register(props) {

  return (
    <div className="container">
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h2 className="text-center">Registation Form</h2>
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label for="usr">Username:</label>
                    <input required="true" type="text" className="form-control" id="usr"/>
                </div>
                {/* <div className="form-group">
                    <label for="birthday">Birthday:</label>
                    <input type="date" className="form-control" id="birthday"/>
                </div> */}
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input required="true" type="password" className="form-control" id="pwd"/>
                </div>
                <div className="form-group">
                    <label for="confirmation_pwd">Confirmation Password:</label>
                    <input required="true" type="password" className="form-control" id="confirmation_pwd"/>
                </div>
                <button className="btn btn-success">Register</button>
            </div>
        </div>
    </div>
  );
}

export default Register;