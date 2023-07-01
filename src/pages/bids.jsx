import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BidsComponent from '../components/bidsComponent';
import DataService from '../services/dataServices';
import './bids.scss';

function Bids() {
  const [bids, setBids] = useState([]);
  const dataService = new DataService();

  useEffect(() => {
    fetchBids();
  }, []);

  async function fetchBids() {
    try {
      const response = await dataService.getBids();
      setBids(response);
    } catch (error) {
      console.error('Error getting bids:', error);
      // Handle error
    }
  }

  return (
    <div className="bids">
      <h1>Projects avaliable for bidding:</h1>
      <div className="gridDisplay">{bids.map((bid) => (
        <BidsComponent key={bid._id} bid={bid} />
      ))}</div>
      
    </div>
  );
}

export default Bids;
