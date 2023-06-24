// this is the page that shows the details of a bid

// import the react library
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataService from '../services/dataServices';
import './detailBid.scss';
import BidderComponent from '../components/bidderComponent';
import DataContext from '../global/dataContext';

function DetailBid() {
  const { id } = useParams();
  const dataService = new DataService();
  const { loggedInUser } = useContext(DataContext);

  const [bid, setBid] = useState(null);

  useEffect(() => {
    fetchBidById();
  }, []);

  async function fetchBidById() {
    try {
      const fetchedBidById = await dataService.getBid(id);
      setBid(fetchedBidById);
    } catch (error) {
      console.error('Error getting bid:', error);
      // Handle error
    }
  }

  return (
    <div className="detailBid">
      {bid && (
        <div className="card">
          <div className="card-body">
            <img src={`${bid.image}`} alt="bid" />
            <h5 className="card-title">Name: {bid.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Description: {bid.description}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Current Bid Amount: {bid.bidAmount}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Original Poster: {bid.originalPosterId}
            </h6>
            <p className="card-text">BidID: {bid._id}</p>
            <h6 className="card-subtitle mb-2 text-muted">
              Current Lowest Bidder: {bid.bidderName} {bid.bidderId}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Last Bid On: {bid.lastBidDate}
            </h6>
            {loggedInUser && (<BidderComponent bid={bid} fetchBidById={fetchBidById}/>)}
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailBid;
