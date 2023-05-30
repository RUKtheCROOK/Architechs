// this will be the page that will display the messages using the messages component named MessagesComponent

// import the react library
import React from 'react';

// import the messages component
import MessagesComponent from '../components/messagesComponent';

// this is the messages page
function Messages() {
    return (
        <div className="messages container">
            <h1>Messages Page</h1>
            <MessagesComponent />
        </div>
    )
}

export default Messages;