// the page that will have the detailed feed post
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataService from '../services/dataServices';
import './detailFeed.scss';
import DataContext from '../global/dataContext';
import FeedLikeUnlikeComponenet from '../components/feedLikeUnlikeComponent';
import { useNavigate } from 'react-router-dom';

function DetailFeed() {
  const { id } = useParams();
  const dataService = new DataService();
  const { loggedInUser } = useContext(DataContext);
  const [feed, setFeed] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  useEffect(() => {
    fetchBidAndUser();
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

  async function fetchFeedById() {
    try {
      const fetchedFeedById = await dataService.getFeed(id);
      setFeed(fetchedFeedById);
    } catch (error) {
      console.error('Error getting Feed:', error);
      // Handle error
    }
  }

  async function fetchBidAndUser() {
    try {
      const fetchedFeedById = await dataService.getFeed(id);
      setFeed(fetchedFeedById);
      await findUserById(fetchedFeedById.originalPosterId);
    } catch (error) {
      console.error('Error getting bid or user:', error);
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

  function deleteFeed() {
    dataService.deleteFeed(feed);
    navigate(`/feed`);
  }

  if (!loggedInUser) {
    return (
        <div className="feed">
            <h1>Feed</h1>
            <h2>Please login to view the feed details.</h2>
        </div>
    )
    }

    if (loggedInUser) {
  return (
    <div className="detailFeed">
      <h1><u>{feed._id}</u></h1>
        {feed && (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title title mb-2">{feed.title}</h5>
                <p className="card-subtitle mb-2 text-center">{feed.post}</p>
                <p className="card-subtitle mb-2"><b><u>Original Poster:</u></b> {user.name}</p>
                <p className="card-subtitle mb-2"><b><u>Original Poster ID:</u></b> {user._id}</p>
                <p className="card-subtitle mb-2"><b><u>Date:</u></b> {feed.date}</p>
                <p className="card-subtitle mb-2"><b><u>Likes:</u></b> {feed.likes}</p>
                <p className='card-subtitle'><b><u>Liked by:</u></b> {renderLikedBy(feed.likedBy)}</p>
                {loggedInUser && (<FeedLikeUnlikeComponenet feed={feed} fetchFeedById={fetchFeedById}/>)}
                {loggedInUser._id === feed.originalPosterId && (<button className="btn btn-dark" onClick={deleteFeed} >Delete</button>)}
    </div>
    </div>
    )}
    </div>
  );
}}

export default DetailFeed;