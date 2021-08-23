'use strict';
require('dotenv').config();

const faker = require('faker');

const io = require('socket.io-client');
let host = 'http://localhost:8080';
const pickup = io.connect(host);

pickup.on('order', payload => {
    console.log('Thank you for delivering', payload)
});