// this is the component for like and unlike button

import React from 'react';
import './feedLikeUnlikeComponent.scss';
import { useState } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';

function FeedLikeUnlikeComponent({ feed, fetchFeedById }) {

    const dataService = new DataService();
    const { loggedInUser, fetchLoggedInUser } = useContext(DataContext);

    async function handleLike() {
        let like = await dataService.handleLike(feed, loggedInUser);
        if (like) {
            console.log("like is successful");
            fetchFeedById();
            fetchLoggedInUser();
        }
    }

    return (
        <div className="feedLikeUnlikeComponent">
            <div className="card">
                <div className="card-body">
                    <button className="btn btn-primary" onClick={handleLike}>Like</button>
                </div>
            </div>
        </div>
    );
}

export default FeedLikeUnlikeComponent;