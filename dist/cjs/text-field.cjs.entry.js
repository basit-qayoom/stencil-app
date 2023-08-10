'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71371003.js');

const TextField = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (index.h("div", null, index.h("h2", null, "Text Field Element"), index.h("h1", null, this.text)));
  }
};

exports.text_field = TextField;
