webpackJsonp([45],{kR8L:function(e,t){},lmfZ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{loading:!1,codeImgSrc:"",userInfo:{userName:"",passWord:"",verificationCode:""}}},directives:{focus:{inserted:function(e){e.focus()}}},created:function(){this.getVierificationCode()},methods:{getVierificationCode:function(){var e=this;this.http.get("/api/User/getVierificationCode").then(function(t){e.codeImgSrc="data:image/png;base64,"+t.img,e.userInfo.UUID=t.uuid})},toGitHub:function(){window.open("https://github.com/cq-panda/Vue.NetCore")},loginPress:function(e){13==event.keyCode&&this.login()},login:function(){var e=this;return""==this.userInfo.userName||""==this.userInfo.userName.trim()?this.$Message.error("请输入用户名"):""==this.userInfo.passWord||""==this.userInfo.passWord.trim()?this.$Message.error("请输入密码"):""==this.userInfo.verificationCode||""==this.userInfo.verificationCode.trim()?this.$Message.error("请输入验证码"):(this.loading=!0,void this.http.post("/api/user/login",this.userInfo,"正在登陆....").then(function(t){if(!t.status)return e.loading=!1,e.getVierificationCode(),e.$Message.error(t.message);e.$Message.info("登陆成功,正在跳转!"),e.$store.commit("setUserInfo",t.data),e.$router.push({path:"/"})}))}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bg"},[s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("div",{staticClass:"login"},[s("div",{staticClass:"login-contianer"},[s("div",{staticClass:"login-form"},[s("Menu",{staticStyle:{"margin-bottom":"30px"},attrs:{mode:"horizontal","active-name":"1"}},[s("MenuItem",{attrs:{name:"1"}},[s("Icon",{attrs:{type:"md-contacts"}}),e._v("帐号登陆\n            ")],1),e._v(" "),s("MenuItem",{attrs:{name:"2"}},[s("Icon",{attrs:{type:"ios-mail"}}),e._v("短信登陆\n            ")],1)],1),e._v(" "),s("div",{staticClass:"form-user",on:{keypress:e.loginPress}},[s("div",{staticClass:"item"},[s("div",{staticClass:"f-text"},[s("label",[s("Icon",{attrs:{type:"ios-people",size:20}}),e._v("用户名：\n                ")],1)]),e._v(" "),s("div",{staticClass:"f-input"},[s("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.userInfo.userName,expression:"userInfo.userName"}],attrs:{type:"text",placeholder:"输入用户"},domProps:{value:e.userInfo.userName},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"userName",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"f-remove",on:{click:function(t){e.userInfo.userName=""}}},[s("Icon",{attrs:{type:"ios-close-circle"}})],1)]),e._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"f-text"},[s("label",[s("Icon",{attrs:{type:"ios-lock",size:20}}),e._v("密   码：\n                ")],1)]),e._v(" "),s("div",{staticClass:"f-input"},[s("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.userInfo.passWord,expression:"userInfo.passWord"}],attrs:{type:"password",placeholder:"输入密码"},domProps:{value:e.userInfo.passWord},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"passWord",t.target.value)}}})]),e._v(" "),s("div",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"f-remove",on:{click:function(t){e.userInfo.passWord=""}}},[s("Icon",{attrs:{type:"ios-close-circle"}})],1)]),e._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"f-text"},[s("label",[s("Icon",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"md-images",size:20}}),e._v("验证码：\n                ")],1)]),e._v(" "),s("div",{staticClass:"f-input"},[s("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.userInfo.verificationCode,expression:"userInfo.verificationCode"}],attrs:{type:"text",placeholder:"输入验证码"},domProps:{value:e.userInfo.verificationCode},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"verificationCode",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"code",on:{click:function(){e.getVierificationCode()}}},[s("img",{directives:[{name:"show",rawName:"v-show",value:""!=e.codeImgSrc,expression:"codeImgSrc!=''"}],attrs:{src:e.codeImgSrc}})])])]),e._v(" "),s("div",{staticStyle:{}},[s("Button",{attrs:{size:"large",loading:e.loading,type:"info",long:""},on:{click:e.login}},[e.loading?s("span",[e._v("正在登陆...")]):s("span",[e._v("登陆")])])],1),e._v(" "),s("div",{staticClass:"action"},[s("a",{on:{click:function(){}}},[e._v("注册")]),e._v(" "),s("a",{on:{click:function(){}}},[e._v("忘记密码")])])],1)])])]),e._v(" "),s("div",{staticClass:"l-bg"}),e._v(" "),s("div",{staticClass:"r-bg"}),e._v(" "),s("div",{staticClass:"login-footer"},[s("a",{on:{click:e.toGitHub}},[s("Icon",{attrs:{type:"logo-github"}}),e._v("GitHub\n    ")],1),e._v(" "),s("a",[e._v("QQ群：45221949")]),e._v(" "),s("a",{attrs:{href:"http://www.beian.miit.gov.cn/",target:"_blank"}},[e._v("京ICP备19056538号-1")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[e._v("vol.vue")]),e._v(" "),s("p",[e._v("前后端分离")]),e._v(" "),s("p",[e._v("全自动代码生成")]),e._v(" "),s("p",[e._v("支持前端、后台扩展的快速开发框架")]),e._v(" "),s("p",[e._v("后台.NetCore 3.1、EntityFrameWorkCore 3.1、Dapper")]),e._v(" "),s("p",[e._v("前端Vue、Promise、Vuex、Axios、Iview、Element-UI")]),e._v(" "),s("p",[e._v("帐号admin666,密码123456(本地帐号admin,密码123456)")])])}]};var a=s("VU/8")(i,o,!1,function(e){s("zTVY"),s("zRrH"),s("zoC/"),s("kR8L")},"data-v-4d2436a8",null);t.default=a.exports},zRrH:function(e,t){},zTVY:function(e,t){},"zoC/":function(e,t){}});