// this is the bids component

import React from 'react';
import './bidsComponent.scss';
import { useState } from 'react';
import DataService from '../services/dataServices';
import { useContext, useEffect } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';

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
          <div className="flex-custom">
            <div className="flexChild"><img src={bid.image} alt="bid" /></div>
            <div className="flexChild text"><h5 className="card-title title">{bid.name}</h5>
          <p className="card-subtitle mb-2 "><b><u>Description:</u></b> {bid.description}</p>
          <p className="card-subtitle mb-2"><b><u>Current Bid:</u></b> ${bid.bidAmount}</p>
          {/* <h6 className="card-subtitle mb-2 text-muted">Original Poster: {user.name}</h6> */}
          {/* <h6 className="card-subtitle mb-2 text-muted">Original Poster ID: {user._id}</h6> */}
          {/* <p className="card-text">BidID: {bid._id}</p> */}
          {/* <h6 className="card-subtitle mb-2">Current Lowest Bidder: <br/>{bid.bidderName +" "+ bid.bidderId}</h6> */}
          <p className="card-subtitle mb-2"><b><u>Last Bid On:</u></b> {bid.lastBidDate}</p></div>
          <div className="flexChild"><Link to={`/bid/${bid._id}`} className="btn btn-dark">View details</Link></div>
          </div>
                  </div>
      </div>
    </div>
  );
}

export default BidsComponent;


