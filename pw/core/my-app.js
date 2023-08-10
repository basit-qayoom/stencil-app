import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './button.js';
import { d as defineCustomElement$5 } from './form.js';
import { d as defineCustomElement$4 } from './input.js';
import { d as defineCustomElement$3 } from './timer.js';
import { d as defineCustomElement$2 } from './text-field2.js';

const MyApp$1 = /*@__PURE__*/ proxyCustomElement(class MyApp extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return h("div", null, h("hr", null), h("my-timer", null), h("hr", null), h("my-button", null), h("hr", null), h("my-form", null), h("hr", null), h("my-input", null), h("hr", null), h("text-field", { text: 'Hello from text stencil component--- hey basit' }));
  }
}, [1, "my-app"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-app", "my-button", "my-form", "my-input", "my-timer", "text-field"];
  components.forEach(tagName => { switch (tagName) {
    case "my-app":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyApp$1);
      }
      break;
    case "my-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "my-form":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "my-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "my-timer":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "text-field":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const MyApp = MyApp$1;
const defineCustomElement = defineCustomElement$1;

export { MyApp, defineCustomElement };
