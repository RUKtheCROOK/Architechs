// this is going to be the page where the user creates a feed post

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataService from '../services/dataServices';
import DataContext from '../global/dataContext';
import './feedCreation.scss';

function FeedCreation() {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const { loggedInUser } = useContext(DataContext);
    const navigate = useNavigate();
    
    function validform() {
        return title.length > 0 && post.length > 0;
    }
    
    function handleSubmit(e) {
        if (validform()) {
        console.log('form is valid');
        createFeed();
        } else {
        console.log('form is not valid');
        }
    }
    
    function textChange(e) {
        let text = e.target.value;
        let name = e.target.name;
        if (name === 'title') {
        setTitle(text);
        } else if (name === 'post') {
        setPost(text);
        } 
    }
    
    async function createFeed() {
        let dataService = new DataService();
        let feed = {
        title: title,
        post: post,
        loggedInUser: loggedInUser
        };
        let createdFeed = await dataService.createFeed(feed);
        if (createdFeed) {
        console.log('feed created');
        navigate(`/feed/${createdFeed}`);
        } else {
        console.log('bid not created');
        }
    }
    
    return (
        <div className="feedCreation">
        <div className="card">
            <div className="card-body">
            <div className="feedCreation__form">
                <h1>Create a Feed</h1>
                <div className="feedCreation__form__input">
                <input
                    type="text"
                    className="feedCreation__form__input__name"
                    placeholder="Enter a title"
                    name="title"
                    value={title}
                    onChange={textChange}
                />
                <textarea
                    type="text"
                    className="feedCreation__form__input__description"
                    placeholder="Enter post content"
                    name="post"
                    value={post}
                    onChange={textChange}
                />
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}>
                Create Feed
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default FeedCreation;