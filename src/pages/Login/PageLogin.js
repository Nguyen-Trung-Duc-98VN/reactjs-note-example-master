import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, HashRouter, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { actSignIn } from "../../actions/userAction";
import "./page-login.css";
import { Container, Col, Row, Form, InputGroup } from 'react-bootstrap';

function PageLogin() {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const listUser = useSelector( state => state.register.list );

    const onSubmit = ( user ) => {
        dispatch( actSignIn( user ) );
        // const lengthListUser = listUser.length;

        // if( lengthListUser !== 0 ){
        //     for (let index = 0; index < lengthListUser; index++) {
        //         const account = listUser[ index ];
        //         if( account.username === username && account.password === password ){
        //             dispatch( actSignIn( username, password ) );
        //             history.push({ pathname: '/page-home' });
        //         }else{
        //             if( index !== lengthListUser -1 ){
        //                 continue;
        //             }
        //             console.log("Error");
        //         }
        //     }
        // }else{
        //     console.log("Error");
        // }
    };

    return (
    <HashRouter>
        <Container className="h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <span>Login</span>
                    </div>
                    <div class="d-flex justify-content-center form_container">
                        <form onSubmit={ handleSubmit(onSubmit) }>
                        
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text><i class="fas fa-user"></i></InputGroup.Text>
                                </InputGroup.Append>
                                <input required="true" className="form-control input_user" name="username" placeholder="username" ref={register} />
                            </InputGroup>

                            <InputGroup className="mb-2">
                                <InputGroup.Append>
                                    <InputGroup.Text><i class="fas fa-key"></i></InputGroup.Text>
                                </InputGroup.Append>
                                <input type="password" required="true" className="form-control input_pass" name="password" ref={register} placeholder="password" />
                            </InputGroup>

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
                    </div>
                </div>
            </div>
        </Container>
    </HashRouter>
    );
}

export default PageLogin;