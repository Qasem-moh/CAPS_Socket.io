'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:8080';


const capsConnection = io.connect(host);
const pickup = io.connect(`${host}/pickup`);

const faker = require('faker');

setInterval(() => {
    setTimeout(() => {

        let customerOrder = {
            storeName: process.env.STORENAME || 'qasem',
            orderId: faker.datatype.uuid(),
            customerName: faker.name.findName(),
            address: faker.address.streetAddress()
        }
        capsConnection.emit('pickup', customerOrder)
        capsConnection.emit('in-trainst', customerOrder)
        capsConnection.emit('deliverd', customerOrder)
        capsConnection.emit('orderd', customerOrder.orderId)


    }, 3000)
}, 1500)
