import { b as bootstrapLazy } from './index-f984bf4c.js';
export { s as setNonce } from './index-f984bf4c.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return undefined;
  return bootstrapLazy([["my-button",[[1,"my-button"]]],["my-form",[[1,"my-form",{"email":[32],"password":[32]}]]],["my-input",[[1,"my-input",{"inputText":[32]}]]],["my-timer",[[1,"my-timer",{"timerInSeconds":[32]}]]],["text-field",[[1,"text-field",{"text":[1]}]]],["my-app",[[1,"my-app"]]]], options);
};

export { defineCustomElements };
