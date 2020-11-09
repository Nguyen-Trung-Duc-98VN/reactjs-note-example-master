import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { actSignIn } from "../../actions/userAction";

function PageLogin() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.register.username );

    const { register, handleSubmit } = useForm();
    const onSubmit = ( { username, password } ) => {
        
        console.log(user);
        // console.log(listUser);
        // if(username ===  && password === "pass")
        //     console.log("login ok");
        // else
        //     console.log("login false");
        dispatch( actSignIn( username, password ) );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h2 className="text-center">Login Form</h2>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label for="usr">Username:</label>
                            <input required="true" className="form-control" name="username" ref={register} />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" required="true" className="form-control" name="password" ref={register} />
                        </div>
                        <input className="btn btn-success" type="submit" value="Login" />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PageLogin;