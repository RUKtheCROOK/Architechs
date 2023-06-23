// this will contain all the buttons to allow a logged-in user to bid on a project
import React, { useState, useContext, useEffect } from 'react';
import './bidderComponent.scss';
import DataService from '../services/dataServices';
import DataContext from '../global/dataContext';

function BidderComponent({ bid, fetchBidById}) {
  const [bidAmount, setBidAmount] = useState(0);
  const dataService = new DataService();
  const { loggedInUser, fetchLoggedInUser } = useContext(DataContext);
  const {fetchBids} = useContext(DataContext);

    useEffect(() => {
    fetchLoggedInUser();
    }, []);
  async function handleBid() {
    try {
      const updatedBid = await dataService.bidOnProject(
        bid,
        loggedInUser,
        bidAmount
      );
        await fetchLoggedInUser();
        await fetchBids();
        await fetchBidById();
    } catch (error) {
      console.error('Error bidding on project:', error);
      // Handle error
    }
  }

  return (
    <div className="bidderComponent">
      <h1>Bidder Component</h1>
      <div className="card">
        <div className="card-body">
          <div className="bidderComponent__bid">
            <input
              type="number"
              className="bidderComponent__bid__input"
              placeholder="Enter your bid"
              value={bidAmount}
              onChange={(event) => setBidAmount(event.target.value)}
            />
            <button className="btn btn-primary" onClick={handleBid}>
              Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidderComponent;
