'use strict';

var TimeDelta = function() {
  this.secondsOffset = 0;
  this.minutesOffset = 0;
  this.hoursOffset = 0;
  this.daysOffset = 0;
  this.weeksOffset = 0;
  this.monthsOffset = 0;
  this.yearsOffset = 0;
}

TimeDelta.prototype.seconds = function(seconds) {
  this.secondsOffset = seconds;
  return this;
}

TimeDelta.prototype.minutes = function(minutes) {
  this.minutesOffset = minutes;
  return this;
}

TimeDelta.prototype.hours = function(hours) {
  this.hoursOffset = hours;
  return this;
}

TimeDelta.prototype.days = function(days) {
  this.daysOffset = days;
  return this;
}

TimeDelta.prototype.weeks = function(weeks) {
  this.weeksOffset = weeks;
  return this;
}

TimeDelta.prototype.months = function(months) {
  this.monthsOffset = months;
  return this;
}

TimeDelta.prototype.years = function(years) {
  this.yearsOffset = years;
  return this;
}

TimeDelta.prototype.printDate = function() {
  var date = new Date(this.currDateTime);

  console.log(
    (date.getMonth() + 1) + "/" +
    date.getDate() + "/" +
    date.getFullYear() + ' ' +
    date.getMinutes() + ':' +
    date.getSeconds()
  );
}

TimeDelta.prototype.fromNow = function() {
  this.currDateTime = +new Date();
  this.printDate();

  this.currDateTime += this.secondsOffset * 1000;
  this.currDateTime += this.minutesOffset * 60 * 1000;
  this.currDateTime += this.hoursOffset * 60 * 60 * 1000;
  this.currDateTime += this.daysOffset * 60 * 60 * 24 * 1000;
  this.currDateTime += this.weeksOffset * 60 * 60 * 24 * 7 * 1000;

  this.printDate();
  return new Date(this.currDateTime);
}

TimeDelta.prototype.ago = function() {
  this.currDateTime = +new Date();
  this.printDate();

  this.currDateTime -= this.secondsOffset * 1000;
  this.currDateTime -= this.minutesOffset * 60 * 1000;
  this.currDateTime -= this.hoursOffset * 60 * 60 * 1000;
  this.currDateTime -= this.daysOffset * 60 * 60 * 24 * 1000;
  this.currDateTime -= this.weeksOffset * 60 * 60 * 24 * 7 * 1000;

  this.printDate();
  return new Date(this.currDateTime);
}

module.exports = TimeDelta;
