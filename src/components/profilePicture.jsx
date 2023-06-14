import './profilePicture.scss'

import DataService from '../services/dataServices'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function ProfilePicture() {
    let dataService = new DataService();
    let profile = dataService.findUserById({});
    let profilePicture = profile.profilePicture;
    return (
        <div className="profilePicture">
            <h1>Profile Picture</h1>
            <img src={profilePicture} alt="profile picture" />
            <Link to="/profile" className="btn btn-primary">Back to Profile</Link>
        </div>
    );
}
