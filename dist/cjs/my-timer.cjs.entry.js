'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71371003.js');

const MyTimer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.timerInSeconds = 0;
    setInterval(() => {
      this.timerInSeconds++;
    }, 1000);
  }
  render() {
    return (index.h("p", null, "Here is running timer ", this.timerInSeconds, " Seconds"));
  }
};

exports.my_timer = MyTimer;
