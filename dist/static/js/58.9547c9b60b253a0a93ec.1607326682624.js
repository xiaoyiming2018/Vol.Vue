webpackJsonp([58],{"6xLs":function(t,e){},bXQr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"header"}),t._v(" "),n("div",{staticClass:"content"},[n("router-view")],1),t._v(" "),n("div",{staticClass:"footer"},t._l(t.menu,function(e,a){return n("a",{key:a,staticClass:"item",class:{active:t.activeIndex==a},on:{click:function(n){t.redirect(e,a)}}},[n("Icon",{attrs:{type:e.icon}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v(t._s(e.name))])],1)}),0)])},staticRenderFns:[]};var i=n("VU/8")({data:function(){return{activeIndex:0,menu:[{name:"首 页",path:"/app/home",icon:"ios-home"},{name:"话 题",path:"/app/topic",icon:"ios-cart"},{name:"社 圈",path:"/app/question",icon:"ios-globe-outline"},{name:"我 的",path:"/app/my",icon:"ios-contacts"}]}},methods:{redirect:function(t,e){this.activeIndex=e,this.$router.push({path:this.menu[this.activeIndex].path})}}},a,!1,function(t){n("6xLs")},"data-v-c044db96",null);e.default=i.exports}});