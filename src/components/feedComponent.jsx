// this is the feed component that will be used by the feed page

// import the react library
import React from 'react';
import './feedComponent.scss';
import { useState, useEffect } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';
import FeedLikeUnlikeComponent from './feedLikeUnlikeComponent';

function FeedComponent({feed}) 
{
  const [user, setUser] = useState('');
  const dataService = new DataService();

  useEffect(() => {
    findUserById(feed.originalPosterId);
  }, []);

  async function findUserById(id)
  {
    try {
      const response = await dataService.findUserById(id);
      console.log('the response is', response);
      setUser(response);
      return response;
    } catch (error) {
      console.error('Error getting user:', error);
      // Handle error
    }
  }

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
            <div className="card">
            <div className="card-body">
            <h5 className="card-title title mb-2">{feed.title}</h5>
                <p className="card-subtitle mb-2 text-center">{feed.post}</p>
                <p className="card-subtitle mb-2"><b><u>Original Poster:</u></b> {user.name}</p>
                <p className="card-subtitle mb-2"><b><u>Original Poster ID:</u></b> {user._id}</p>
                <p className="card-subtitle mb-2"><b><u>Date:</u></b> {feed.date}</p>
                <p className="card-subtitle mb-2"><b><u>Likes:</u></b> {feed.likes}</p>
                <p className='card-subtitle'><b><u>Liked by:</u></b> {renderLikedBy(feed.likedBy)}</p>
            <Link to={`/feed/${feed._id}`} className="btn btn-dark button">View details</Link>
        </div>
        </div>
        </div>
    )
}

export default FeedComponent;