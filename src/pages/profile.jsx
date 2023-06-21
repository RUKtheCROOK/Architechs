import React, { useEffect, useState } from 'react';
import DataService from '../services/dataServices';

function Profile() {
  const dataService = new DataService();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await dataService.getLoggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error('Error retrieving logged in user:', error);
      }
    }

    fetchLoggedInUser();
  }, []);

  console.log('loggedInUser:', loggedInUser);
  
  if (!loggedInUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: {loggedInUser.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Email: {loggedInUser.email}</h6>
          <p className="card-text">UserID: {loggedInUser._id}</p>
        
        </div>
      </div>
    </div>
  );
}

export default Profile;



