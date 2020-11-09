import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { actAddUser } from "../../actions/registerAction";


function Register() {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const onSubmit = ( { username, password, confirPassword } ) => {
        if(password === confirPassword)
            dispatch( actAddUser( username, password ) );
        else{
            console.log('Error');
        }
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="text-center">Registation Form</h2>
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label for="usr">Username:</label>
                        <input required="true" className="form-control" name="username" ref={register} />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input required="true" type="password" className="form-control" name="password" ref={register}/>
                    </div>
                    <div className="form-group">
                        <label for="confirmation_pwd">Confirmation Password:</label>
                        <input required="true" type="password" className="form-control" name="confirPassword" ref={register} />
                    </div>
                    <input className="btn btn-success" type="submit" value="Register" />
                </div>
            </div>
        </div>
    </form>
  );
}

export default Register;