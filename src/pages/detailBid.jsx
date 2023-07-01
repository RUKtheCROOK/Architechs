// this is the page that shows the details of a bid

// import the react library
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataService from '../services/dataServices';
import './detailBid.scss';
import BidderComponent from '../components/bidderComponent';
import DataContext from '../global/dataContext';
import { useNavigate } from 'react-router-dom';
import BiddingHistoryComponent from '../components/biddingHistoryComponent';

function DetailBid() {
  const { id } = useParams();
  const dataService = new DataService();
  const { loggedInUser } = useContext(DataContext);
  const navigate = useNavigate();
  const [bid, setBid] = useState('');
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

  async function fetchBidById() {
    try {
      const fetchedBidById = await dataService.getBid(id);
      setBid(fetchedBidById);
    } catch (error) {
      console.error('Error getting bid:', error);
      // Handle error
    }
  }
  async function fetchBidAndUser() {
    try {
      const fetchedBidById = await dataService.getBid(id);
      setBid(fetchedBidById);
      await findUserById(fetchedBidById.originalPosterId);
    } catch (error) {
      console.error('Error getting bid or user:', error);
      // Handle error
    }
  }
  function deleteBid() {
    dataService.deleteBid(bid);
    navigate(`/bids`);
  }

  if (!loggedInUser) {
    return (
      <div className="detailBid">
        <h1><u>{bid._id}</u></h1>
        {bid && (
          <div className="card">
            <div className="card-body">
              <img src={`${bid.image}`} alt="bid" />
              <h5 className="card-title title">{bid.name}</h5>
              <h6 className="card-subtitle mb-2">
                <b><u>Description:</u></b> {bid.description}
              </h6>
              <h6 className="card-subtitle mb-2">
              <b><u>Current Bid Amount:</u></b> {bid.bidAmount}
              </h6>
              <h6 className="card-subtitle mb-2">
              <b><u>Original Poster:</u></b> {user.name}
              </h6>
              <h6 className="card-subtitle mb-2">
              <b><u>Original Poster ID:</u></b> {user._id}
              </h6>
              {/* <h6 className="card-subtitle mb-2">BidID: {bid._id}</h6> */}
              <h6 className="card-subtitle mb-2">
              <b><u>Current Lowest Bidder:</u></b> {bid.bidderName} {bid.bidderId}
              </h6>
              <h6 className="card-subtitle mb-2">
              <b><u>Last Bid On:</u></b> {bid.lastBidDate}
              </h6>
              {loggedInUser && (<BidderComponent bid={bid} fetchBidById={fetchBidById}/>)}
            </div>
          </div>
        )}
        <div className="bidHistory">
          {bid && (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text">Bidding History</h4>
                <BiddingHistoryComponent bid={bid} />
              </div>
            </div>
          )}
        </div>
      </div>
    );}

    if (loggedInUser) {
  return (
    <div className="detailBid">
      <h1><u>{bid._id}</u></h1>
      {bid && (
        <div className="card">
          <div className="card-body">
            <img src={`${bid.image}`} alt="bid" />
            <div className="text"><h5 className="card-title title">{bid.name}</h5>
              <p className="card-subtitle mb-2">
                <b><u>Description:</u></b> {bid.description}
              </p>
              <p className="card-subtitle mb-2">
              <b><u>Current Bid Amount:</u></b> {bid.bidAmount}
              </p>
              <p className="card-subtitle mb-2">
              <b><u>Original Poster:</u></b> {user.name}
              </p>
              <p className="card-subtitle mb-2">
              <b><u>Original Poster ID:</u></b> {user._id}
              </p>
              {/* <h6 className="card-subtitle mb-2">BidID: {bid._id}</h6> */}
              <p className="card-subtitle mb-2">
              <b><u>Current Lowest Bidder:</u></b> {bid.bidderName} {bid.bidderId}
              </p>
              <p className="card-subtitle mb-2">
              <b><u>Last Bid On:</u></b> {bid.lastBidDate}
              </p></div>
            
            {loggedInUser && (<BidderComponent bid={bid} fetchBidById={fetchBidById}/>)}
            {loggedInUser._id === bid.originalPosterId && (<button className="btn btn-primary" onClick={deleteBid} >Delete</button>)}
          </div>
        </div>
      )}
      <div className="bidHistory">
          {bid && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text">Bidding History</h5>
                <BiddingHistoryComponent bid={bid} />
              </div>
            </div>
          )}
        </div>
    </div>
  );}
}

export default DetailBid;
