import { r as registerInstance, h } from './index-f984bf4c.js';

const MyApp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", null, h("hr", null), h("my-timer", null), h("hr", null), h("my-button", null), h("hr", null), h("my-form", null), h("hr", null), h("my-input", null), h("hr", null), h("text-field", { text: 'Hello from text stencil component--- hey basit' }));
  }
};

export { MyApp as my_app };
