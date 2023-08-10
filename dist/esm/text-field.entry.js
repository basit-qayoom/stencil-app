import { r as registerInstance, h } from './index-f984bf4c.js';

const TextField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (h("div", null, h("h2", null, "Text Field Element"), h("h1", null, this.text)));
  }
};

export { TextField as text_field };
