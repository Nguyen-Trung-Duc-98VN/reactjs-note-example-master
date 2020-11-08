import React from "react";
import { useDispatch, useSelector } from "react-redux";
//Import actions vào đây
import { signInAction } from '../../actions/index';

function Login(props) {
    const username = useSelector(state => state.login.username);
    const password = useSelector(state => state.login.password);

    const dispatch = useDispatch();

    const handleSignIn = ( { username, password } ) => {
        dispatch( signInAction( username, password ) );
    }

    return (
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="text-center">Login Form</h2>
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label for="usr">Username:</label>
                        <input required="true" type="text" value="" className="form-control" id="usr"/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input required="true" type="password" className="form-control" id="pwd"/>
                    </div>
                    <button className="btn btn-success" onClick={handleSignIn}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;