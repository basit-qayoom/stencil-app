import{r as registerInstance,h}from"./index-f984bf4c.js";var MyForm=function(){function t(t){var a=this;registerInstance(this,t);this.handleSubmit=function(t){t.preventDefault();alert("Email: ".concat(a.email,"\nPassword: ").concat(a.password))};this.handleEmailChange=function(t){var e=t.target;a.email=e.value};this.handlePasswordChange=function(t){var e=t.target;a.password=e.value};this.email="";this.password=""}t.prototype.render=function(){return h("form",{onSubmit:this.handleSubmit},h("div",null,h("label",{htmlFor:"email"},"Email:"),h("input",{type:"email",id:"email",value:this.email,onInput:this.handleEmailChange,required:true})),h("div",null,h("label",{htmlFor:"password"},"Password:"),h("input",{type:"password",id:"password",value:this.password,onInput:this.handlePasswordChange,required:true})),h("button",{type:"submit"},"Submit"))};return t}();export{MyForm as my_form};