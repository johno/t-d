var assert = require('assert');
var TimeDelta = require('..');

describe('time-delta', function() {

  it('should properly calculate a date fromNow', function() {
    new TimeDelta().seconds(1).months(4).fromNow();
  });

  it('should properly calculate a date in the past', function() {
    new TimeDelta().seconds(1).months(4).ago();
  });
});
