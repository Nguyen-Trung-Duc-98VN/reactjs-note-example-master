import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, HashRouter, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { actSignIn } from "../../actions/userAction";
import "./page-login.css";
import logo from "../../images/logo_180x40.svg";

function PageLogin() {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const listUser = useSelector( state => state.register.list );

    const onSubmit = ( { username, password } ) => {
        const lengthListUser = listUser.length;

        if( lengthListUser !== 0 ){
            for (let index = 0; index < lengthListUser; index++) {
                const account = listUser[ index ];
                if( account.username === username && account.password === password ){
                    dispatch( actSignIn( username, password ) );
                    history.push({ pathname: '/page-home' });
                }else{
                    if( index !== lengthListUser -1 ){
                        continue;
                    }
                    console.log("Error");
                }
            }
        }else{
            console.log("Error");
        }
    };

    return (
    <HashRouter>
        <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            <img src={logo} class="brand_logo" alt="Logo"/>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center form_container">
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div class="input-group mb-3">
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
                            <div class="d-flex justify-content-center mt-3 login_container">
                                <input className="btn login_btn" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
            
                    <div class="mt-4">
                        <div class="d-flex justify-content-center links">
                            Don't have an account?
                            <Link to="/page-register" className="ml-2">Sign Up</Link>
                        </div>
                        {/* <div class="d-flex justify-content-center links">
                            <a href="#">Forgot your password?</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>`
    </HashRouter>
    );
}

export default PageLogin;