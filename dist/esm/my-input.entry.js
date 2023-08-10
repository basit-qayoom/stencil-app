import { r as registerInstance, h } from './index-f984bf4c.js';

const MyInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleInputChange = (event) => {
      const inputElement = event.target;
      this.inputText = inputElement.value;
    };
    this.inputText = '';
  }
  render() {
    return (h("div", null, h("label", { htmlFor: "inputField" }, "Input:"), h("input", { type: "text", id: "inputField", value: this.inputText, onInput: this.handleInputChange, placeholder: 'Write here' }), h("p", null, "Text: ", this.inputText)));
  }
};

export { MyInput as my_input };
