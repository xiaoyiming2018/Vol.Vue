webpackJsonp([95],{bT64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{url:"api/app_news/upload",fileInfo:[],model:!1}},components:{VolBox:function(){return n.e(71).then(n.bind(null,"mRGL"))},VolUpload:function(){return n.e(72).then(n.bind(null,"G2DF"))}},methods:{uploadAfter:function(e,t){var n=this;if(!e.status)return!0;var o={imageUrl:t.map(function(t){return e.data+t.name}).join(",")},l=void 0;return this.$emit("parentCall",function(e){l=e,o.Id=e.getSelectRows()[0].Id}),this.http.post("api/news/setCover",o,"正在设置图片封面").then(function(e){l.refresh(),n.model=!1}),!0}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("VolBox",{attrs:{icon:"ios-chatbubbles",model:e.model,title:"封面图片设置",height:220,width:520,padding:15},on:{"update:model":function(t){e.model=t}}},[n("VolUpload",{staticStyle:{"text-align":"center",border:"1px dotted #FF9800",padding:"20px"},attrs:{autoUpload:!1,multiple:!0,url:e.url,"max-file":3,img:!0,fileInfo:e.fileInfo,"upload-after":e.uploadAfter}},[n("div",[e._v("可自行设置上传的url或实现uploadBefore上传至第三方服务器存储")])])],1)],1)},staticRenderFns:[]},r=n("VU/8")(o,l,!1,null,null,null);t.default=r.exports}});