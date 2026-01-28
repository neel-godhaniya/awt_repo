const EventEmitter = require('events');
const eventemitter = new EventEmitter();

const eventcount = {
    login: 0,
    logout: 0,
    purchase: 0,
    prupdate: 0
};

const users = {};

eventemitter.on('login', (username) => {
    eventcount.login++;

    if (!users[username]) {
        users[username] = { purchase: {} };
    }

    console.log(`${username} have logged in`);
});

eventemitter.on('logout', (username) => {
    eventcount.logout++;
    console.log(`${username} have logged out`);
});

eventemitter.on('purchase', (username, item, quantity) => {
    eventcount.purchase++;

    if (!users[username]) {
        users[username] = { purchase: {} };
    }

    users[username].purchase[item] = quantity;
    console.log(`${username} have purchased ${item} ...${quantity}`);
});

eventemitter.on('update', (username, item, newQuantity) => {
    if (users[username] && users[username].purchase[item] !== undefined) {
        users[username].purchase[item] = newQuantity;
        console.log(`${username} updated ${item} quantity to ${newQuantity}`);
        eventcount.prupdate++;
    } else {
        console.log('Invalid user or item');
    }
});

eventemitter.on('summary', () => {
    console.log('EVENT SUMMARY');
    console.log(`number of logins - ${eventcount.login}`);
    console.log(`number of logouts - ${eventcount.logout}`);
    console.log(`number of purchases - ${eventcount.purchase}`);
    console.log(`number of profile updated - ${eventcount.prupdate}`);

    console.log('\nUSER DATA');
    console.log(users);
});

eventemitter.emit('login', 'Neel');
eventemitter.emit('login', 'aman');
eventemitter.emit('logout', 'Neel');
eventemitter.emit('purchase', 'aman', 'icecream', 5);
eventemitter.emit('update', 'aman', 'icecream', 10);
eventemitter.emit('summary');
