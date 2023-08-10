import { r as registerInstance, h } from './index-f984bf4c.js';

const MyTimer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timerInSeconds = 0;
    setInterval(() => {
      this.timerInSeconds++;
    }, 1000);
  }
  render() {
    return (h("p", null, "Here is running timer ", this.timerInSeconds, " Seconds"));
  }
};

export { MyTimer as my_timer };
