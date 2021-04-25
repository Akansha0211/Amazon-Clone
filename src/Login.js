import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

function Login() {
    return (
        <div className="Login" >
            <Link to="/">
                <img className="login__logo" src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" />
            </Link>
            
        </div>
    )
}

export default Login
