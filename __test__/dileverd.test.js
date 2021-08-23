'use strict';
const Events = require('../events')

let payload = {
  store: '1-206-flowers',
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customer: 'Jamal Braun',
  address: 'Schmittfort, LA',
};

jest.useFakeTimers();

describe('caps test', () => {

  it('pickup', () => {
    const caps = require('../driver/driver');
    caps.emit('pickup', payload);
    expect(caps.emit('pickup', payload)).toEqual(true);
  });

  it('in-trainst', () => {
    const caps = require('../driver/driver');
    caps.emit('in-trainst', payload);
    expect(caps.emit('in-trainst', payload)).toEqual(true);
  });

  it('deliverd', () => {
    const caps = require('../driver/driver');
    caps.emit('deliverd', payload);
    expect(caps.emit('deliverd', payload)).toEqual(true);
  });
  it('orderd', () => {
    const caps = require('../driver/driver');
    caps.emit('orderd', payload);
    expect(caps.emit('orderd', payload)).toEqual(true);
  });
  it('pickupConnection', () => {
    const caps = require('../caps/caps');
    caps.emit('pickupConnection', payload);
    expect(caps.emit('pickupConnection', payload)).toEqual(true);
  });
  it('order', () => {
    const caps = require('../vendor/vendor');
    caps.emit('order', payload);
    expect(caps.emit('order', payload)).toEqual(true);
  });


});