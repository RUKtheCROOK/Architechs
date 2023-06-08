// this is the profile page
import React from 'react';
function Profile() {
    return (
        <div className="profile container">
            <h1>Profile Page</h1>
            <p>the current logged in user is: {user.name}</p>
        </div>
    )
}

export default Profile;