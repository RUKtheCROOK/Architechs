// this is the profile page
import React from 'react';
import DataService from '../services/dataServices';

function Profile() {
    let dataService = new DataService();
    let loggedInUser = dataService.getLoggedInUser();
    return (
        <div className="profile container">
            <h1>Profile Page</h1>
            <p>the current logged in user is: {loggedInUser.name}</p>
            <p>the id for the profile you are wanting to view is {}</p>
        </div>
    )
}

export default Profile;