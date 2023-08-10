import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const MyButton = /*@__PURE__*/ proxyCustomElement(class MyButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("button", null, "Button"));
  }
}, [1, "my-button"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-button"];
  components.forEach(tagName => { switch (tagName) {
    case "my-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyButton);
      }
      break;
  } });
}
defineCustomElement();

export { MyButton as M, defineCustomElement as d };
