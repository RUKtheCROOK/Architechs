import './logout.scss'

import DataService from '../services/dataServices'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    function handleLogout(e) {
        console.log('user is logging out');
        let dataService = new DataService();
        dataService.logout();
        navigate('/login');
    }

    return (
        <div className="logout">
            <h1>Are you sure you want to log out?</h1>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            <Link to="/home" className="btn btn-primary">Cancel</Link>
        </div>
    );
}

export default Logout;