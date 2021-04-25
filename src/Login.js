import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

function Login() {
    return (
        <div className="login" >
            <Link to="/">
                <img className="login__logo" src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" />
            </Link>
            <div className="login__container" >
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>
                    <button className="login__signInButton" >Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's
                    Conditions of Use & Sale.Please see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>
                <button className="login__registerButton" >Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login
