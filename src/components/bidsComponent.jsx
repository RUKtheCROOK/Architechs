// this is the bids component

import React from 'react';
import './bidsComponent.scss';
import { useState } from 'react';
import DataService from '../services/dataServices';
import { useContext, useEffect } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';
import BidderComponent from './bidderComponent';

function BidsComponent({ bid }) {
  const dataService = new DataService();
  const [user, setUser] = useState('');

  useEffect(() => {
    findUserById(bid.originalPosterId);
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

  return (
    <div className="bidsComponent">
      <div className="card">
        <div className="card-body">
          {/* add an image */}
          <img src={bid.image} alt="bid" />
          <h5 className="card-title">Name: {bid.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Description: {bid.description}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Current Bid Amount: {bid.bidAmount}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Original Poster: {user.name}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Original Poster ID: {user._id}</h6>
          <p className="card-text">BidID: {bid._id}</p>
          <h6 className="card-subtitle mb-2 text-muted">Current Lowest Bidder: {bid.bidderName +" "+ bid.bidderId}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Last Bid On: {bid.lastBidDate}</h6>
          <Link to={`/bid/${bid._id}`} className="btn btn-primary">View details</Link>
                  </div>
      </div>
    </div>
  );
}

export default BidsComponent;


