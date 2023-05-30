// this is the login page

// import the stylesheet
import './login.scss'

// import the react library
import React from 'react';

import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login container">
            <h1>Login Page</h1>
            <p>If you cont have an account signup below:</p>
            <Link to="/signup">Signup</Link>
        </div>
    )
}

export default Login;