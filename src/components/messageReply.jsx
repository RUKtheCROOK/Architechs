// this is going to be a reply box inside the detailed message component

import React from 'react';
import './messageReply.scss';
import { useState, useEffect } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';

function MessageReply({ id }) {
    const [message, setMessage] = useState('');
    const dataService = new DataService();
    const { loggedInUser, fetchLoggedInUser } = useContext(DataContext);
    
    useEffect(() => {
        fetchLoggedInUser();
    }, []);
    
    async function handleReply() {
        try {
            let newMessage = {
                message: message,
                messageReciever: id,
                senderId: loggedInUser._id,
                senderName: loggedInUser.name,};
        const response = await dataService.sendMessage(newMessage);
        setMessage('');
        } catch (error) {
        console.error('Error sending message:', error);
        // Handle error
        }
    }
    
    function textChange(event) {
        setMessage(event.target.value);
    }
    
    return (
        <div className="messageReply">
        <h1>Message Reply</h1>
        <div className="card">
            <div className="card-body">
            <div className="messageReply__message">
                <input
                type="text"
                className="messageReply__message__input"
                placeholder="Enter your message"
                value={message}
                onChange={textChange}
                />
                <button className="btn btn-primary" onClick={handleReply}>
                Send
                </button>
            </div>
            </div>
        </div>
        </div>
    );
    }

export default MessageReply;