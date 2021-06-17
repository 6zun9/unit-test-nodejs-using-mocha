let order = require('./order');
let expect = require('chai').expect;

describe('order', () => {

  //asyc test
  // it.only('should call the call back with a true value', (done) => {
  //   let cart = {}
  //   let success;

  //   let cb = (p1) => {
  //     success = p1
  //     expect(success).to.be.true;
  //     done();
  //   }

  //   order(cart, cb)
  // })

  it('should deal with promises', () => {
    let cart = {};

    return order(cart).then(total => {
      expect(total).to.eq(500);
    })
  })
})
