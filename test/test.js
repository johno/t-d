var assert = require('assert');
var td = require('..');

describe('t-d', function() {

  it('should properly calculate a date fromNow', function() {
    td().seconds(1).days(4).fromNow();
    td().weeks(2).fromNow();
  });

  it('should properly calculate a date in the past', function() {
    td().seconds(1).months(4).ago();
  });
});
