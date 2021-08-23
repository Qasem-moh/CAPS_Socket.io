'use strict';

const io = require('socket.io-client');
const faker = require('faker');

const capsConnection = io.connect('http://localhost:4000');

setInterval(() => {
    setTimeout(() => {

        let customerOrder = {
            storeName: process.env.STORENAME || 'samah',
            orderId: faker.datatype.uuid(),
            customerName: faker.name.findName(),
            address: faker.address.streetAddress()
        }
        capsConnection.emit('pickup', customerOrder)
        capsConnection.emit('in-trainst', customerOrder)
        capsConnection.emit('deliverd', customerOrder)
        capsConnection.emit('orderd', customerOrder.orderId)


    }, 3000)
}, 3000)
