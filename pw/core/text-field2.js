import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const TextField = /*@__PURE__*/ proxyCustomElement(class TextField extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.text = undefined;
  }
  render() {
    return (h("div", null, h("h2", null, "Text Field Element"), h("h1", null, this.text)));
  }
}, [1, "text-field", {
    "text": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["text-field"];
  components.forEach(tagName => { switch (tagName) {
    case "text-field":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TextField);
      }
      break;
  } });
}
defineCustomElement();

export { TextField as T, defineCustomElement as d };
