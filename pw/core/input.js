import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const MyInput = /*@__PURE__*/ proxyCustomElement(class MyInput extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.handleInputChange = (event) => {
      const inputElement = event.target;
      this.inputText = inputElement.value;
    };
    this.inputText = '';
  }
  render() {
    return (h("div", null, h("label", { htmlFor: "inputField" }, "Input:"), h("input", { type: "text", id: "inputField", value: this.inputText, onInput: this.handleInputChange, placeholder: 'Write here' }), h("p", null, "Text: ", this.inputText)));
  }
}, [1, "my-input", {
    "inputText": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-input"];
  components.forEach(tagName => { switch (tagName) {
    case "my-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyInput);
      }
      break;
  } });
}
defineCustomElement();

export { MyInput as M, defineCustomElement as d };
