'use strict';

const EventEmitter = function() {
  // events callback collection — hash of function array
  this.events = {};
};

EventEmitter.prototype.on = function(name, fn) {
  // check if we already got callback collection for specific event
  const event = this.events[name];
  if (event) event.push(fn);
  else this.events[name] = [fn];
};

EventEmitter.prototype.emit = function(name, ...data) {
  const event = this.events[name];
  if (event) event.forEach(fn => fn(...data));
};

export default new EventEmitter();
