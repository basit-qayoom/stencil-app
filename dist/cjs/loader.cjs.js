'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71371003.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return undefined;
  return index.bootstrapLazy([["my-button.cjs",[[1,"my-button"]]],["my-form.cjs",[[1,"my-form",{"email":[32],"password":[32]}]]],["my-input.cjs",[[1,"my-input",{"inputText":[32]}]]],["my-timer.cjs",[[1,"my-timer",{"timerInSeconds":[32]}]]],["text-field.cjs",[[1,"text-field",{"text":[1]}]]],["my-app.cjs",[[1,"my-app"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
