
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

let loggedInUser = null;
class DataService {
    getUsers() {
        return users;
    }

    saveUser(user) {
        users.push(user);
        return users;
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
}

export default DataService;