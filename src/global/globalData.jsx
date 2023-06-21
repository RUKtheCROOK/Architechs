import DataContext from "./dataContext";
import React, { createContext, useState, useEffect } from "react";
import DataService from "../services/dataServices";

function GlobalData(properties) {
  // for logged in users
  const dataService = new DataService();
  const [loggedInUser, setLoggedInUser] = useState(null);

  async function fetchLoggedInUser() {
    try {
      const user = await dataService.getLoggedInUser();
      setLoggedInUser(user);
    } catch (error) {
      console.error("Error retrieving logged in user:", error);
    }
  }

  // Fetch the logged-in user when the component mounts
  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  // for bids
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetchBids();
  }, []);

  async function fetchBids() {
    try {
      const bids = await dataService.getBids();
      setBids(bids);
    } catch (error) {
      console.error("Error retrieving bids:", error);
    }
  }

  return (
    <DataContext.Provider
      value={{ loggedInUser, fetchLoggedInUser, bids, fetchBids }}
    >
      {properties.children}
    </DataContext.Provider>
  );
}

export default GlobalData;
