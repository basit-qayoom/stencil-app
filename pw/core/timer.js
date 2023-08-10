import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const MyTimer = /*@__PURE__*/ proxyCustomElement(class MyTimer extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.timerInSeconds = 0;
    setInterval(() => {
      this.timerInSeconds++;
    }, 1000);
  }
  render() {
    return (h("p", null, "Here is running timer ", this.timerInSeconds, " Seconds"));
  }
}, [1, "my-timer", {
    "timerInSeconds": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-timer"];
  components.forEach(tagName => { switch (tagName) {
    case "my-timer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyTimer);
      }
      break;
  } });
}
defineCustomElement();

export { MyTimer as M, defineCustomElement as d };
