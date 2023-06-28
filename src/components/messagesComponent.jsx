// this is the messages component

import React from 'react';
import './messagesComponent.scss';
import { useState } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';

function MessagesComponent({}){
    const [message, setMessage] = useState('');
    const [messageReciever, setMessageReciever] = useState('');
    const dataService = new DataService();
    const { loggedInUser, fetchLoggedInUser } = useContext(DataContext);

    function validform() {
        return message.length > 0 && messageReciever.length > 0;
    }

    function handleSubmit(e) {
        if (validform()) {
        console.log('form is valid');
        sendMessage();
        } else {
        console.log('form is not valid');
        }
    }

    function textChange(e) {
        let text = e.target.value;
        let name = e.target.name;
        if (name === 'message') {
        setMessage(text);
        }
        if (name === 'messageReciever') {
        setMessageReciever(text);
        }
    }

    async function sendMessage() {
        let newMessage = {
        message: message,
        messageReciever: messageReciever,
        loggedInUser
        };
        let createdMessage = await dataService.sendMessage(newMessage);
        if (createdMessage) {
        console.log('message sent');
        fetchLoggedInUser();
        } else {
        console.log('message not created');
        }
    }

    return (
        <div className="messagesComponent">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="messageReciever">Send message to:</label>
                            <input type="text" className="form-control" name="messageReciever" value={messageReciever} onChange={textChange} />
                            <label htmlFor="message">Message:</label>
                            <input type="text" className="form-control" name="message" value={message} onChange={textChange} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}   

export default MessagesComponent;
