// this is the feed component that will be used by the feed page

// import the react library
import React from 'react';
import './feedComponent.scss';
import { useState } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';

function FeedComponent({feed}) 
{
    return(
        <div className="feedComponent container">
            <h1>Feed Component</h1>
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">Title: {feed.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Original Poster: {feed.originalPosterId}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Date: {feed.date}</h6>
            <p className="card-text">Post: {feed.post}</p>
            <h6 className="card-subtitle mb-2 text-muted">Likes: {feed.likes}</h6>
            <Link to={`/feed/${feed._id}`} className="btn btn-primary">View details</Link>
        </div>
        </div>
        </div>
    )
}

export default FeedComponent;