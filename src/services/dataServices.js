import axios from "axios";
import FeedCreation from './../pages/feedCreation';
// this will be the temp page that holds all the data services until we can get them into the database
// let users = [
//     {
//         id: 1,
//         name: 'John Doe',
//         email: 'johndoe@test.com',
//         password: 'password'
//     },
//     {
//         id: 2,
//         name: 'Bob Williams',
//         email: 'bobwilliams@test.com',
//         password: 'password'
//     },
//     {
//         id: 3,
//         name: 'Shannon Jackson',
//         email: 'shannonjackson@test.com',
//         password: 'password'
//     }
// ];

// let bids = [
//     {
//         originalPosterId: 1,
//         name: 'hospital',
//         description: 'I need a hospital built',
//         bidAmount: 1000000,
//         bidId: 1},
//     {
//         originalPosterId: 2,
//         name: 'school',
//         description: 'I need a school built',
//         bidAmount: 2000000,
//         bidId: 2},
//     {
//         originalPosterId: 3,
//         name: 'mall',
//         description: 'I need a mall built',
//         bidAmount: 3000000,
//         bidId: 3}
// ]

let bidders = [
    {
        bidderId: 1,
        bidId: 1,
        bidAmount: 1000000,
        bidDate: '2021-01-01'
    },
    {
        bidderId: 2,
        bidId: 1,
        bidAmount: 2000000,
        bidDate: '2021-01-02'
    },
    {
        bidderId: 3,
        bidId: 1,
        bidAmount: 3000000,
        bidDate: '2021-01-03'
    }]

let messages = [
    {
        messageId: 1,
        senderId: 1,
        receiverId: 2,
        message: 'Hello, I would like to bid on your project',
        date: '2021-01-01'
    },
    {
        messageId: 2,
        senderId: 2,
        receiverId: 1,
        message: 'Hello, I would like to bid on your project',
        date: '2021-01-02'
    },
    {
        messageId: 3,
        senderId: 3,
        receiverId: 1,
        message: 'Hello, I would like to bid on your project',
        date: '2021-01-03'
    }]



// let loggedInUser = null;
// let requestedUserId = null;
// class DataService {
//     getUsers() {
//         return users;
//     }
//     getTotalUsers() {
//         return users.length;
//     }
//     saveUser(user) {
//         users.push(user);
//         console.log(users);
//         return users;
//     }

//     verifyEmail(email) {
//         let verified = false;
//         users.forEach((item) => {
//             if (item.email === email) {
//                 verified = true
//             }
//         });
//         return verified;
//     }
//     verifyUser(user) {
//         let verified = false;
//         users.forEach((item) => {
//             if (item.email === user.email && item.password === user.password) {
//                 verified = true
//                 loggedInUser = item;
//             }
//         });
//         return verified;
//     }
//     getLoggedInUser() {
//         return loggedInUser;
//     }
//     logout() {
//         loggedInUser = null;
//         return loggedInUser;
//     }
//     findUserByName(name) {
//         let user = null;
//         users.forEach((item) => {
//             if (item.name === name) {
//                 user = item;
//             }
//         });
//         return user;
//     }
//     findUserById(id) {  
//         let user = null;
//         users.forEach((item) => {
//             if (item.id === id) {
//                 user = item;
//             }
//         });
//         return user;
//     }

//     changeRequestedUserId(id) {
//         requestedUserId = id;
//     }
//     requestedUserId() {
//         return requestedUserId;
//     }
// }

// Axios compatability
class DataService {
    async getUsers() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/users');
        return response.data;
      } catch (error) {
        console.error('Error getting users:', error);
        throw error;
      }
    }
  
    async getTotalUsers() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/users/total');
        return response.data;
      } catch (error) {
        console.error('Error getting total users:', error);
        throw error;
      }
    }
  
    async saveUser(user) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/saveUsers', {params: {name: user.name, email: user.email, password: user.password},  withCredentials: true });
        return response.data;
      } catch (error) {
        console.error('Error saving user:', error);
        throw error;
      }
    }
  
    async verifyEmail(email) {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/users/verifyEmail/${email}`);
        return response.data;
      } catch (error) {
        console.error('Error verifying email:', error);
        throw error;
      }
    }
  
    async verifyUser(user) {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/users/verifyUser', { params: { email: user.email, password: user.password }, withCredentials: true });
            console.log(response);
            return response.data;
        } catch (error) {
            console.error('Error verifying user:', error);
            throw error;
        }
    }
  
    async getLoggedInUser() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/users/loggedInUser', { withCredentials: true });
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error getting logged in user:', error);
        throw error;
      }
    }
  
    async logout() {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/users/logout', null, { withCredentials: true });
        return response.data;
      } catch (error) {
        console.error('Error logging out:', error);
        throw error;
      }
    }
  
    async findUserByName(name) {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/users/name/${name}`);
        return response.data;
      } catch (error) {
        console.error('Error finding user by name:', error);
        throw error;
      }
    }
  
    async findUserById(id) {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/users/id/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error finding user by ID:', error);
        throw error;
      }
    }
  
    async changeRequestedUserId(id) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/users/changeRequestedUserId', { id });
        return response.data;
      } catch (error) {
        console.error('Error changing requested user ID:', error);
        throw error;
      }
    }
  
    async getRequestedUserId() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/users/requestedUserId');
        return response.data;
      } catch (error) {
        console.error('Error getting requested user ID:', error);
        throw error;
      }
    }

    async getBids() {
        try {
          const response = await axios.get('http://127.0.0.1:5000/api/bids');
          console.log('bids have been retrieved')
          return response.data;
        } catch (error) {
          console.error('Error getting bids:', error);
          throw error;
        }
  }

  async getBid(id) {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/bids/bid/${id}`);
      console.log('bids have been retrieved by id')
      return response.data;
    } catch (error) {
      console.error('Error getting bid:', error);
      throw error;
    }
  }

  async getBidsHistory(id) {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/bids/bidsHistory/${id}`);
      console.log('bids history has been retrieved by id')
      return response.data;
    } catch (error) {
      console.error('Error getting bids history:', error);
      throw error;
    }
  }
  

    async totalBids() {
        try {
          const response = await axios.get('http://127.0.0.1:5000/api/bids/total');
          return response.data;
        } catch (error) {
          console.error('Error getting total bids:', error);
          throw error;
        }
  }

    async createBid(bid) {
        try {
          const response = await axios.post('http://127.0.0.1:5000/api/bids/createBids', {
            params: {
              name: bid.name,
              description: bid.description,
              bidAmount: bid.bidAmount,
              originalPosterId: bid.originalPosterId,
            }
          }, {
            withCredentials: true
          });
          return response.data;
        } catch (error) {
          console.error('Error creating bid:', error);
          throw error;
        }
  }

  async deleteBid(bid) {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/bids/deleteBid', {
        params: {
          bidId: bid._id}
      }, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error('Error deleting bid:', error);
      throw error;
    }
}

  async bidOnProject(bid, loggedInUser, bidAmount, currentBidAmount) {
    try {
      const parsedBidAmount = parseFloat(bidAmount);
      const parsedCurrentBidAmount = parseFloat(currentBidAmount);
      console.log('bidAmount:', parsedBidAmount);
      console.log('currentBidAmount:', parsedCurrentBidAmount);
      if (parsedBidAmount >= parsedCurrentBidAmount) {
        console.log('Bid amount is greater than or equal to current bid amount');
        alert('Bid amount is greater than or equal to current bid amount and will not be saved.');
      }
      if (parsedBidAmount === 0){
        console.log('Bid amount is zero');
        alert('Bid amount is zero and will not be saved. Please bid again.');
      }
      if (parsedBidAmount < parsedCurrentBidAmount && parsedBidAmount !== 0) {
      const response = await axios.post('http://127.0.0.1:5000/api/bids/bidOnProject', {
        params: {
          bidId: bid._id,
          bidderId: loggedInUser._id,
          bidderName: loggedInUser.name,
          bidAmount: bidAmount,
          currentBidAmount: currentBidAmount
        }
      }, {
        withCredentials: true
      });
      return response.data;}
    } catch (error) {
      console.error('Error bidding on project:', error);
      throw error;
    }
  }
  

    async getDateTime() {
        try {
          const response = await axios.get('http://127.0.0.1:5000/api/currentDateTime');
          return response.data;
        } catch (error) {
          console.error('Error getting date/time:', error);
          throw error;
        }
}

async getFeeds() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/feeds');
    return response.data;
  } catch (error) {
    console.error('Error getting feeds:', error);
    throw error;
  }
}

async getFeed(id) {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/api/feeds/feed/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting feed:', error);
    throw error;
  }
}

async handleLike(feed, loggedInUser) {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/feeds/likeFeed', {
      params: {
        feedId: feed._id,
        likerId: loggedInUser._id,
        likerName: loggedInUser.name
      }
    }, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error liking feed:', error);
    throw error;
  }
}

async createFeed(feed, loggedInUser) {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/feeds/createFeed', {
      params: {
        title: feed.title,
        post: feed.post,
        originalPosterId: feed.loggedInUser._id,
        originalPosterName: feed.loggedInUser.name}
    }, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error creating feed:', error);
    throw error;
  }
}

async deleteFeed(feed) {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/feeds/deleteFeed', {
      params: {
        feedId: feed._id}
    }, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting feed:', error);
    throw error;
  }
}

async sendMessage(message, messageSender, messageReceiver) {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/messages/sendMessage', {
      params: {
        senderId: messageSender._id,
        senderName: messageSender.name,
        receiverId: messageReceiver,
        message: message
}
    }, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

}
export default DataService;