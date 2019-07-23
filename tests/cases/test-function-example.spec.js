import testingTesting from '@js/testingImports/testingfunction';

var expect = require('chai').expect;
var assert = require('assert');

describe('testingTesting', function() {
  let testFunction;

  it('should return a value of two', function() {
    testFunction = testingTesting(1);
    expect(testFunction).to.be.equal(2);
  });
});

