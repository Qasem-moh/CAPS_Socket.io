'use strict';

const io = require('socket.io-client');
const pickup = io.connect('http://localhost:4000');
const port = 7000 || 3000;
const ioo = require('socket.io')(port);
pickup.on('order', payload => {
    console.log('Thank you for delivering', payload)
});
module.exports = ioo