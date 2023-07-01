// this is the history of bidding component

import React from 'react';
import './biddingHistoryComponent.scss';
import { useState, useEffect} from 'react';
import DataService from '../services/dataServices';
import { useContext } from 'react';
import DataContext from '../global/dataContext';

function BiddingHistoryComponent({ bid }) {
    const [history, setHistory] = useState([]);
    const dataService = new DataService();

    useEffect(() => {
        fetchHistory();
    }, [bid]);

    async function fetchHistory() {
        try {
            const response = await dataService.getBidsHistory(bid._id);
            console.log(response);
            setHistory(response);
        } catch (error) {
            console.error('Error getting history:', error);
            // Handle error
        }
    }

    if (history.length === 0) {
        return null;
    }

    if (history.length > 0) {
    return (
        // for each bid history, display the bidder name and the bid amount
        <div className="biddingHistoryComponent">
                    {history.map((history) => (
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2">
                                    <b><u>Bidder Name:</u></b> {history.bidderName}
                                </h6>
                                <h6 className="card-subtitle mb-2">
                                    <b><u>Bid Amount:</u></b> {history.bidAmount}
                                </h6>
                                <h6 className="card-subtitle mb-2">
                                    <b><u>Bid Date:</u></b> {history.bidDate}
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
    );}

}


export default BiddingHistoryComponent;