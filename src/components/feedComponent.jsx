// this is the feed component that will be used by the feed page

// import the react library
import React from 'react';
import './feedComponent.scss';
import { useState } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';
import FeedLikeUnlikeComponent from './feedLikeUnlikeComponent';

function FeedComponent({feed}) 
{
    function renderLikedBy(likedBy) {
        if (!likedBy || likedBy.length === 0) {
          return 'None';
        }
      
        const likerNames = likedBy.map(liker => liker.likerName);
        const totalLikes = likedBy.length;
      
        if (totalLikes === 1) {
          return `${likerNames[0]} likes this`;
        } else if (totalLikes === 2) {
          return likerNames.join(' and ') + ' like this';
        } else if (totalLikes === 3) {
          return likerNames.join(', ') + ' like this';
        } else {
          const remainingLikes = totalLikes - 3;
          const otherLikesText = `${remainingLikes} other${remainingLikes > 1 ? 's' : ''}`;
          const displayedLikers = likerNames.slice(0, 3).join(', ');
      
          return `${displayedLikers}, ${otherLikesText} like this`;
        }
      }
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
            <p>Liked by: {renderLikedBy(feed.likedBy)}</p>
            <Link to={`/feed/${feed._id}`} className="btn btn-primary">View details</Link>
        </div>
        </div>
        </div>
    )
}

export default FeedComponent;