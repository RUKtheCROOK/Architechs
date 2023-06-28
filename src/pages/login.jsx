// this is the login page

// import the stylesheet
import "./login.scss";

//import the data services page
import DataService from "../services/dataServices";

// import the react library

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import DataContext from "../global/dataContext";
// import "src/styles/background.scss";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loggedInUser, fetchLoggedInUser } = useContext(DataContext);

  const navigate = useNavigate();

  function validform() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    if (validform()) {
      console.log("form is valid");
      verifyUser();
    } else {
      console.log("form is not valid");
    }
  }
  function textChange(e) {
    let text = e.target.value;
    let name = e.target.name;
    if (name === "email") {
      setEmail(text);
    } else if (name === "password") {
      setPassword(text);
    }
  }

  async function verifyUser() {
    let dataService = new DataService();
    let user = {
      email: email,
      password: password,
    };
    let verify = await dataService.verifyUser(user);
    if (verify) {
      console.log("user is valid");
      // if the user is valid then we need to redirect them to the home page using a react router
      navigate("/home");
      await fetchLoggedInUser();
    } else {
      let verifyEmail = await dataService.verifyEmail(user.email);
      if (verifyEmail && !verify) {
        console.log("user is recognized, password is incorrect");
        alert("user is recognized, password is incorrect, please try again");
      }
      if (!verifyEmail) {
        console.log("user is not valid");
        alert("user is not valid, please signup");
        navigate("/signup");
      }
    }
  }


    return (
       
      
        <div className="login">
            {/* <img src="/images/pexels-photo-2908957.webp" alt="background" className="backgroundImage"/>   */}
            <h1>Login Page</h1>
            <div>
            
            <form>
  <div className="form-group">
    <label for="formGroupExampleInput">Email</label>
    <input onChange={textChange} name="email" type="text" className="form-control" placeholder="Enter Email"/>
  </div>
  
  <div className="form-group">
    <label for="formGroupExampleInput2">Password</label>
    <input onChange={textChange} name="password" type="password" className="form-control" placeholder="Enter Password"/>
  </div>
</form>
<button className='btn btn-dark' onClick={handleSubmit}>Login</button>
            <p>If you dont have an account signup below:</p>
            <Link to="/signup">Signup</Link>
        </div>
        </div>
        
    )
}

export default Login;
