const chai = require('chai');
const expect = chai.expect;
const sum = require('../sum');

describe('sum', () => {
  it('should sum up two number', () => {
    // try to break the test to test github actions
    expect(sum(1, 2)).to.equal(3);
  });
});
