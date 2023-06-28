// this is the component that will generate a box when there is a user who sent you a message and once you click on the 'view messages' you will be redirected to a details page where you will see all the messages from that user.

import React from 'react';
import './recievedMessages.scss';
import { useState, useEffect } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';

function RecievedMessages() {
    const [senders, setSenders] = useState([]);
    const dataService = new DataService();
    const { loggedInUser, fetchLoggedInUser } = useContext(DataContext);
    
    useEffect(() => {
        fetchSenders();
    }, []);
    
    async function fetchSenders() {
        try {
        const response = await dataService.getUniqueSenders(loggedInUser._id);
        setSenders(response);
        } catch (error) {
        console.error('Error getting unique senders:', error);
        // Handle error
        }
    }
    
    if (!loggedInUser) {
        return (
        <div className="recievedMessages">
            <h1>Messages</h1>
            <h2>Please login to view and send messages.</h2>
        </div>
        );
    }
    
    if (loggedInUser) {
        return (
            <div className="recievedMessages container">
      <h1>Received Messages</h1>
      <div className="row">
        {senders.map((sender) => (
          <div key={sender.senderId} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{sender.senderName}</h5>
                <h5 className="card-title">{sender.senderId}</h5>
                <Link
                  to={`/messages/${sender.senderId}`}
                  className="btn btn-primary"
                >
                  View Messages
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        );
    }
    }

export default RecievedMessages;