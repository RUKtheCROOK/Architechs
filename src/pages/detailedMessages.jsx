// this will be the detailed message page

import React from 'react';
import './detailedMessages.scss';
import { useState, useEffect } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DetailedMessages(){
    const [messages, setMessages] = useState([]);
    const dataService = new DataService();
    const { loggedInUser, fetchLoggedInUser } = useContext(DataContext);
    const { id } = useParams();
    const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
    fetchMessages();
  }, []);

    async function fetchUser() {
        try {
            const response = await dataService.findUserById(id);
            console.log('the response is', response);
            setUser(response);
        } catch (error) {
            console.error('Error getting user:', error);
            // Handle error
        }
    }
  async function fetchMessages() {
    try {
      const response = await dataService.getMessagesBySenderId(id);
      setMessages(response);
    } catch (error) {
      console.error('Error getting messages:', error);
      // Handle error
    }
  }

  if (!loggedInUser) {
    return (
        <div className="detailedMessages">
            <h1>Messages</h1>
            <h2>Please login to view and send messages.</h2>
        </div>
    )
    }


    if (loggedInUser) {
    return(
        <div className="detailedMessages container">
            <div className="card">
                <div className="card-body">
                    {user &&(<h5 className="card-title">Messages from {user.name}</h5>)}
                    {messages.map((message) => (
                        <div className="card" key={message._id}>
                            <h3>Sent on:{message.date}</h3>
                            <p>{message.message}</p>
                        </div>
                    ))}
                    <Link className='btn btn-dark' to="/messages">Back to Messages</Link>
                </div>
            </div>
        </div>
    )
}
}

export default DetailedMessages;