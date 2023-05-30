// This is the page where all of the bidding will be done

// import the react library
import React from 'react';

// import the bidding component
import BidsComponent from '../components/bidsComponent';

// this is the bids page
function Bids() {
    return (
        <div className="bids container">
            <h1>Bids Page</h1>
            <BidsComponent />
        </div>
    )
}

export default Bids;
