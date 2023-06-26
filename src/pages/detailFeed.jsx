// the page that will have the detailed feed post
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataService from '../services/dataServices';
import './detailBid.scss';
import DataContext from '../global/dataContext';
import FeedLikeUnlikeComponenet from '../components/feedLikeUnlikeComponent';

function DetailFeed() {
  const { id } = useParams();
  const dataService = new DataService();
  const { loggedInUser } = useContext(DataContext);
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    fetchFeedById();
  }, []);

  async function fetchFeedById() {
    try {
      const fetchedFeedById = await dataService.getFeed(id);
      setFeed(fetchedFeedById);
    } catch (error) {
      console.error('Error getting Feed:', error);
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
        {feed && (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Title: {feed.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Original Poster: {feed.originalPosterId}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Date: {feed.date}</h6>
                <p className="card-text">Post: {feed.post}</p>
                <h6 className="card-subtitle mb-2 text-muted">Likes: {feed.likes}</h6>
                <p>Liked by: {renderLikedBy(feed.likedBy)}</p>
                {loggedInUser && (<FeedLikeUnlikeComponenet feed={feed} fetchFeedById={fetchFeedById}/>)}
    </div>
    </div>
    )}
    </div>
  );
}}

export default DetailFeed;