const EventEmitter = require('events');
const eventemitter = new EventEmitter();

const eventcount = {
    login:0,
    logout:0,
    purchase:0,
    prupdate:0
};

eventemitter.on('login',(username) => {
    eventcount.login++;
    console.log(`${username} have logged in`);
});

eventemitter.on('logout',(username) => {
    eventcount.logout++;
    console.log(`${username} have logged out`);
});

eventemitter.on('purchase',(username,item) => {
    eventcount.purchase++;
    console.log(`${username} have purchased ${item}`);
});

eventemitter.on('update',(username) => {
    eventcount.prupdate++;
    console.log(`${username} have updated profile`);
});

eventemitter.on('summary',() => {
    console.log('EVENT SUMMARY');
    console.log(`number of logins - ${eventcount.login}`);
    console.log(`number of logouts - ${eventcount.logout}`);
    console.log(`number of purchases - ${eventcount.purchase}`);
    console.log(`number of profile updated - ${eventcount.prupdate}`);
});
eventemitter.emit('login','Neel');
eventemitter.emit('login','aman');
eventemitter.emit('logout','Neel');
eventemitter.emit('purchase','aman','icecream');
eventemitter.emit('update','aman');
eventemitter.emit('summary');

