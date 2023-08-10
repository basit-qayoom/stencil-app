import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const MyForm = /*@__PURE__*/ proxyCustomElement(class MyForm extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
}, [1, "my-form", {
    "email": [32],
    "password": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-form"];
  components.forEach(tagName => { switch (tagName) {
    case "my-form":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyForm);
      }
      break;
  } });
}
defineCustomElement();

export { MyForm as M, defineCustomElement as d };
