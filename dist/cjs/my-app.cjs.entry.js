'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71371003.js');

const MyApp = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("div", null, index.h("hr", null), index.h("my-timer", null), index.h("hr", null), index.h("my-button", null), index.h("hr", null), index.h("my-form", null), index.h("hr", null), index.h("my-input", null), index.h("hr", null), index.h("text-field", { text: 'Hello from text stencil component--- hey basit' }));
  }
};

exports.my_app = MyApp;
