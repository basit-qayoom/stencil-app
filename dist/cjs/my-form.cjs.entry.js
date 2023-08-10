'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71371003.js');

const MyForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.handleSubmit = (event) => {
      event.preventDefault();
      alert(`Email: ${this.email}\nPassword: ${this.password}`);
    };
    this.handleEmailChange = (event) => {
      const inputElement = event.target;
      this.email = inputElement.value;
    };
    this.handlePasswordChange = (event) => {
      const inputElement = event.target;
      this.password = inputElement.value;
    };
    this.email = '';
    this.password = '';
  }
  render() {
    return (index.h("form", { onSubmit: this.handleSubmit }, index.h("div", null, index.h("label", { htmlFor: "email" }, "Email:"), index.h("input", { type: "email", id: "email", value: this.email, onInput: this.handleEmailChange, required: true })), index.h("div", null, index.h("label", { htmlFor: "password" }, "Password:"), index.h("input", { type: "password", id: "password", value: this.password, onInput: this.handlePasswordChange, required: true })), index.h("button", { type: "submit" }, "Submit")));
  }
};

exports.my_form = MyForm;
