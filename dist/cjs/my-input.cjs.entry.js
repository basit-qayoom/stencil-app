'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71371003.js');

const MyInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.handleInputChange = (event) => {
      const inputElement = event.target;
      this.inputText = inputElement.value;
    };
    this.inputText = '';
  }
  render() {
    return (index.h("div", null, index.h("label", { htmlFor: "inputField" }, "Input:"), index.h("input", { type: "text", id: "inputField", value: this.inputText, onInput: this.handleInputChange, placeholder: 'Write here' }), index.h("p", null, "Text: ", this.inputText)));
  }
};

exports.my_input = MyInput;
