System.register(["./p-bbb29a6d.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var r=t("my_timer",function(){function t(t){var n=this;e(this,t);this.timerInSeconds=0;setInterval((function(){n.timerInSeconds++}),1e3)}t.prototype.render=function(){return n("p",null,"Here is running timer ",this.timerInSeconds," Seconds")};return t}())}}}));