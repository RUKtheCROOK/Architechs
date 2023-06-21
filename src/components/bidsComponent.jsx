// this is the bids component

import React from 'react';
import './bidsComponent.scss';
import { useState } from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';
import { Link } from 'react-router-dom';

function BidsComponent({ bid }) {
  return (
    <div className="bidsComponent">
      <h1>Bids Component</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: {bid.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Description: {bid.description}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Current Bid Amount: {bid.bidAmount}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Original Poster: {bid.originalPosterId}</h6>
          <p className="card-text">BidID: {bid._id}</p>
          <Link to="/home" className="btn btn-primary">Cancel</Link>
        </div>
      </div>
    </div>
  );
}

export default BidsComponent;


