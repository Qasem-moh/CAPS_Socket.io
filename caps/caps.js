
'use strict';

const io = require('socket.io-client');
const port = 3000 || 6000;
const ioo = require('socket.io')(port);
const driverConnection = io.connect('http://localhost:4000');

let date = new Date();
let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
let time = date.toLocaleTimeString();

driverConnection.on('pickupConnection', payload => {
    console.log("pickup Connection")
    console.log('EVENT:', {
        event: 'pickup',
        time: `${year}-${month}-${day} T ${time}`,
        payload: payload,
    });

    console.log('EVENT:', {
        event: 'in-trainst',
        time: `${year}-${month}-${day} T ${time}`,
        payload: payload,
    });

    console.log('EVENT:', {
        event: 'deliverd',
        time: `${year}-${month}-${day} T ${time}`,
        payload: payload,
    });


})
module.exports = ioo