import { r as registerInstance, h } from './index-f984bf4c.js';

const MyForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("form", { onSubmit: this.handleSubmit }, h("div", null, h("label", { htmlFor: "email" }, "Email:"), h("input", { type: "email", id: "email", value: this.email, onInput: this.handleEmailChange, required: true })), h("div", null, h("label", { htmlFor: "password" }, "Password:"), h("input", { type: "password", id: "password", value: this.password, onInput: this.handlePasswordChange, required: true })), h("button", { type: "submit" }, "Submit")));
  }
};

export { MyForm as my_form };
