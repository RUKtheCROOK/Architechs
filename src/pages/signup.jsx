// this is the profile creation page
import './signup.scss' // import the stylesheet
import DataService from '../services/dataServices' //import the data services page
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const navigate = useNavigate();

function validform() {
    return email.length > 0 && password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;
}

function handleSubmit(e) {
    if (validform()) {
        console.log('form is valid');
        verifyUser();
    }
    else {
        console.log('form is not valid');
    }
}
 function textChange(e){
    let text = e.target.value;
    let name = e.target.name;
    if(name === 'email'){
        setEmail(text);
    }
    else if(name === 'password'){
        setPassword(text);
    }
    else if(name === 'confirmPassword'){
        setConfirmPassword(text);
    }
 }

 function verifyUser(){
    let dataService = new DataService();
    let userEmail = {
        email: email,
    }
    let verifyEmail = dataService.verifyEmail(userEmail.email);
    if(verifyEmail){
        console.log('user is already in the system');
        alert('user is already in the system, please login once redirected');
        navigate('/login')
    }
    else{
        console.log('user is not already in the system');
        saveUser();
    }
    }

    function saveUser(){
        let dataService = new DataService();
        let id = dataService.getTotalUsers() + 1;
        let user = {
            id: id,
            email: email,
            password: password
        }
        dataService.saveUser(user);
        alert('user has been saved');
        navigate('/login');
    }


    return (
        <div className="signup container">
            <img src="/images/pexels-photo-2908957.webp" alt="background"/>
            <h1>Signup Page</h1>
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
    <div className="form-group">
    <label for="formGroupExampleInput2">Confirm Password</label>
    <input onChange={textChange} name="confirmPassword" type="password" className="form-control" placeholder="Confirm Password"/>
    </div>
</form>
<button className='btn btn-dark' onClick={handleSubmit}>Signup</button>
<p>If you already have an account login below:</p>
            <Link to="/signup">Login</Link>
        </div></div>
    )
}

export default Signup;