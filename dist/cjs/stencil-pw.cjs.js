'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71371003.js');

/*
 Stencil Client Patch Browser v4.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-pw.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-button.cjs",[[1,"my-button"]]],["my-form.cjs",[[1,"my-form",{"email":[32],"password":[32]}]]],["my-input.cjs",[[1,"my-input",{"inputText":[32]}]]],["my-timer.cjs",[[1,"my-timer",{"timerInSeconds":[32]}]]],["text-field.cjs",[[1,"text-field",{"text":[1]}]]],["my-app.cjs",[[1,"my-app"]]]], options);
});

exports.setNonce = index.setNonce;
