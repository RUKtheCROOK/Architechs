import DataContext from "./dataContext";
import React, { createContext, useState, useEffect } from 'react';
import DataService from '../services/dataServices';

function GlobalData(properties) {
  const dataService = new DataService();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [bids, setBids] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(null);

  async function fetchLoggedInUser() {
    try {
      const user = await dataService.getLoggedInUser();
      setLoggedInUser(user);
    } catch (error) {
      console.error('Error retrieving logged in user:', error);
    }
  }

  async function fetchBids() {
    try {
      const fetchedBids = await dataService.getBids();
      console.log('fetchedBids:', fetchedBids);
      setBids(fetchedBids);
    } catch (error) {
      console.error('Error retrieving bids:', error);
    }
  }

  async function recallBids() {
    try {
      const fetchedBids = await dataService.getBids();
      setBids(fetchedBids);
    } catch (error) {
      console.error('Error retrieving bids:', error);
    }
  }

  // for current date time
  async function getCurrentDateTime() {
    try {
      const time = await dataService.getDateTime();
      return time;
    } catch (error) {
      console.error('Error retrieving current date and time:', error);
    }
  }


  useEffect(() => {
    fetchLoggedInUser();
    fetchBids();
    getCurrentDateTime();
  }, []);

  return (
    <DataContext.Provider
      value={{ loggedInUser, fetchLoggedInUser, bids, fetchBids, recallBids, getCurrentDateTime}}
    >
      {properties.children}
    </DataContext.Provider>
  );
}

export default GlobalData;
