import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../base";
import {Link} from "react-router-dom";
import logoPasw from "../../images/signup.png";

import '../style/style.scss';

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className="view__signUp">
            <span className="form-logo">
                <img src={logoPasw} alt="login"/>
            </span>
            <h1 className="view__login-title">Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className="view__control-field field-email" data-validate="Enter userEmail">
                    <input className="input100" name="email" type="email" autoComplete="off" placeholder="Email"/>
                </div>
                <div className="view__control-field field-password" data-validate="Enter password">
                    <input className="input100" name="password" type="password" placeholder="Password"/>
                </div>
                <div className="container__block-btn">
                    <button className="btn view__login-btn" type="submit">Sign Up</button>
                </div>
            </form>

            <div className="container__block-signUp">
                <Link className="signUp-btn" to="login">Login</Link>
            </div>
        </div>
    );
};

export default withRouter(SignUp);