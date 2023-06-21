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

  return (
    <div className="profile container">
      <h1>Profile Page</h1>
      {loggedInUser ? (
        <p>The current logged in user is: {loggedInUser.name}</p>
      ) : (
        <p>Loading...</p>
      )}
      <p>The ID for the profile you are wanting to view is {}</p>
    </div>
  );
}

export default Profile;



