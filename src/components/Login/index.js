import React, {useCallback, useContext} from "react";
import {withRouter, Redirect} from "react-router";
import app from "../../base.js";
import {AuthContext} from "../../Auth.js";
import {Link} from "react-router-dom";
import logoLogin from "../../images/login.jpg"


import '../style/style.scss';

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                email.value = password.value = "";
                let borderField = document.querySelectorAll('.view__control-field');
                borderField.forEach(item => {
                    item.classList.add('error')
                })
                let errField = document.querySelector('.error-field');
                errField.classList.add('active')
            }
        },
        [history]
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"/>;
    }

    return (
        <div className="view__login">
            <span className="form-logo">
                <img src={logoLogin} alt="login"/>
            </span>
            <h1 className="view__login-title">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="view__control-field field-email" data-validate="Enter userEmail">
                    <input className="input100" name="email" type="email" autoComplete="off" placeholder="Email"/>
                </div>
                <div className="view__control-field field-password" data-validate="Enter password">
                    <input className="input100" name="password" type="password" placeholder="Password"/>
                </div>
                <p className="error-field">
                    Your data was not found, please check again
                </p>
                <div className="container__block-btn">
                    <button className="btn view__login-btn" type="submit">Login</button>
                </div>
            </form>

            <div className="container__block-signUp">
                <Link className="signUp-btn" to="signup">SignUp</Link>
            </div>
        </div>
    );
};

export default withRouter(Login);