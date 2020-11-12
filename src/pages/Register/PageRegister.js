import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory, HashRouter, Link } from "react-router-dom";
import { actAddUser } from "../../actions/registerAction";

function Register() {

    const dispatch = useDispatch();
    const listUser = useSelector( state => state.register.list );
    const { register, handleSubmit } = useForm();

    const onRegister = ( { username, password, confirPassword } ) => {
        if( password === confirPassword ){
            console.log(listUser);
            const lengthListUser = listUser.length;
            if( lengthListUser === 0 ){
                dispatch( actAddUser( username, password ) );
                console.log( "Dang ky thanh cong" );
            }else{
                for (let index = 0; index < lengthListUser; index++) {
                    const account = listUser[index];
                    if( account.username === username ){
                        console.log("Trung tai khoan");
                    }else{
                        if( index !== listUser.length-1 ){
                            continue;
                        }
                        dispatch( actAddUser( username, password ) );
                        console.log( "Dang ky thanh cong" );
                    }
                }
            }
        }else{
            console.log( 'Error' );
        }
    };

  return (
    <HashRouter>
        <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            Dang ky
                        </div>
                    </div>
                    <div class="d-flex justify-content-center form_container">
                        <form onSubmit={ handleSubmit( onRegister ) }>
                            <div class="input-group mb-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input required="true" className="form-control input_user" name="username" placeholder="username" ref={register} />
                            </div>
                            <div class="input-group mb-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" required="true" className="form-control input_pass" name="password" ref={register} placeholder="password" />
                            </div>
                            <div class="input-group mb-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" required="true" className="form-control input_pass" name="confirPassword" ref={register} placeholder="confir password" />
                            </div>
                            <div class="d-flex justify-content-center mt-3 login_container">
                                <input className="btn login_btn" type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
            
                    <div class="mt-4">
                        <div class="d-flex justify-content-center links">
                            <Link to="/" className="ml-2">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    </HashRouter>
  );
}

export default Register;