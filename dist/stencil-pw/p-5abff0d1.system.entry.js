System.register(["./p-bbb29a6d.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var i=t("my_input",function(){function t(t){var n=this;e(this,t);this.handleInputChange=function(t){var e=t.target;n.inputText=e.value};this.inputText=""}t.prototype.render=function(){return n("div",null,n("label",{htmlFor:"inputField"},"Input:"),n("input",{type:"text",id:"inputField",value:this.inputText,onInput:this.handleInputChange,placeholder:"Write here"}),n("p",null,"Text: ",this.inputText))};return t}())}}}));