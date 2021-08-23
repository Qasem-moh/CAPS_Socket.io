'use strict';

const Events = require('events')

const events = new Events();

describe('module Node', () => {
    it('events', () => {
        expect(events).toBeInstanceOf(Events)
    })
})

















