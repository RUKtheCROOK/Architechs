// this will be the page that will display the messages using the messages component named MessagesComponent

// import the react library
import React from 'react';
import './messages.scss';
import { useState, useEffect } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';

// import the messages component
import MessagesComponent from '../components/messagesComponent';
import RecievedMessages from '../components/recievedMessages';

function Messages(){
    const [messages, setMessages] = useState([]);
    const dataService = new DataService();
    const { loggedInUser, fetchLoggedInUser } = useContext(DataContext);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      const response = await dataService.getMessages();
      setMessages(response);
    } catch (error) {
      console.error('Error getting messages:', error);
      // Handle error
    }
  }

  if (!loggedInUser) {
    return (
        <div className="messages">
            <h1>Messages</h1>
            <h2>Please login to view and send messages.</h2>
        </div>
    )
    }

    if (loggedInUser) {
    return(
        <div className="messages">
            <RecievedMessages />
            <MessagesComponent />
        </div>
    )
}
}


export default Messages;