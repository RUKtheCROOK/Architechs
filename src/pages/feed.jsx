// this is the feed page that will use a feed component named FeedComponent to simulate a feed
// import the react library
import React from 'react';
import './feed.scss';
import { useState, useEffect } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';

// import the feed component
import FeedComponent from '../components/feedComponent';

function Feed(){
    const [feeds, setFeeds] = useState([]);
    const dataService = new DataService();
    const { loggedInUser, fetchLoggedInUser } = useContext(DataContext);

  useEffect(() => {
    fetchFeeds();
  }, []);

  async function fetchFeeds() {
    try {
      const response = await dataService.getFeeds();
      setFeeds(response);
    } catch (error) {
      console.error('Error getting feeds:', error);
      // Handle error
    }
  }

  if (!loggedInUser) {
    return (
        <div className="feed">
            <h1>Feed</h1>
            <h2>Please login to view the feed</h2>
        </div>
    )
    }

    if (loggedInUser) {
    return(
        <div className="feed">
            <h1>Feed</h1>
            <div className="gridDisplay">{feeds.map((feed) => (
        <FeedComponent key={feed._id} feed={feed} />
      ))}</div>
        </div>
    )
}}

export default Feed;
