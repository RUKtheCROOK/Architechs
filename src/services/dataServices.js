
// this will be the temp page that holds all the data services until we can get them into the database
let users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@test.com',
        password: 'password'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bobwilliams@test.com',
        password: 'password'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannonjackson@test.com',
        password: 'password'
    }
];

let bids = [
    {
        originalPosterId: 1,
        name: 'hospital',
        description: 'I need a hospital built',
        bidAmount: 1000000,
        bidId: 1},
    {
        originalPosterId: 2,
        name: 'school',
        description: 'I need a school built',
        bidAmount: 2000000,
        bidId: 2},
    {
        originalPosterId: 3,
        name: 'mall',
        description: 'I need a mall built',
        bidAmount: 3000000,
        bidId: 3}
]

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



let loggedInUser = null;
let requestedUserId = null;
class DataService {
    getUsers() {
        return users;
    }
    getTotalUsers() {
        return users.length;
    }
    saveUser(user) {
        users.push(user);
        console.log(users);
        return users;
    }

    verifyEmail(email) {
        let verified = false;
        users.forEach((item) => {
            if (item.email === email) {
                verified = true
            }
        });
        return verified;
    }
    verifyUser(user) {
        let verified = false;
        users.forEach((item) => {
            if (item.email === user.email && item.password === user.password) {
                verified = true
                loggedInUser = item;
            }
        });
        return verified;
    }
    getLoggedInUser() {
        return loggedInUser;
    }
    logout() {
        loggedInUser = null;
        return loggedInUser;
    }
    findUserByName(name) {
        let user = null;
        users.forEach((item) => {
            if (item.name === name) {
                user = item;
            }
        });
        return user;
    }
    findUserById(id) {  
        let user = null;
        users.forEach((item) => {
            if (item.id === id) {
                user = item;
            }
        });
        return user;
    }

    changeRequestedUserId(id) {
        requestedUserId = id;
    }
    requestedUserId() {
        return requestedUserId;
    }
}

export default DataService;