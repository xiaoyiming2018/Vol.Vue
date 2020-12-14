webpackJsonp([72,85],{G2DF:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Gu7T"),s=i.n(n),a={components:{},props:{desc:{type:Boolean,default:!1},fileInfo:{type:Array,default:function(){return[]}},downLoad:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},maxFile:{type:Number,default:5},maxSize:{type:Number,default:3},autoUpload:{type:Boolean,default:!0},img:{type:Boolean,default:!1},excel:{type:Boolean,default:!1},fileTypes:{type:Array,default:function(){return[]}},url:{type:String,default:""},uploadBefore:{type:Function,default:function(e){return!0}},uploadAfter:{type:Function,default:function(e,t){return!0}},onChange:{type:Function,default:function(e){return!0}},fileList:{type:Boolean,default:!0},fileClick:{type:Function,default:function(e,t,i){return!0}},removeBefore:{type:Function,default:function(e,t,i){return!0}},append:{type:Boolean,default:!1}},data:function(){return{errorImg:'this.src="'+i("ScXB")+'"',changed:!1,model:!0,files:[],bigImg:"",loadingStatus:!1,loadText:"上传文件"}},created:function(){this.fileInfo&&(this.changed=!0)},methods:{previewImg:function(e){this.base.previewImg(this.getImgSrc((this.files.length>0?this.files:this.fileInfo)[e]))},getSelector:function(){return this.autoUpload?"auto-selector":"submit-selector"},getImgSrc:function(e){return e.hasOwnProperty("path")?this.base.isUrl(e.path)?e.path:("/"==e.path.substr(0,1)&&(e.path=e.path.substr(1)),this.http.ipAddress+e.path):window.URL.createObjectURL(e)},fileOnClick:function(e,t){this.fileClick(e,t,this.files)&&this.downLoad&&(t.path?this.base.dowloadFile(t.path,t.name,{Authorization:this.$store.getters.getToken()},this.http.ipAddress):this.$Message.error("请先上传文件"))},getText:function(){return this.img?"只能上传图片,":this.excel?"只能上传excel文件,":void 0},handleClick:function(){this.$refs.input.click()},handleChange:function(e){var t;this.clearFiles();var i=this.checkFile(e.target.files);i&&(this.changed=!1,this.onChange(e.target.files)&&((t=this.files).push.apply(t,s()(e.target.files)),this.$refs.input.value=null,this.autoUpload&&i&&this.upload()))},removeFile:function(e){var t=this.fileInfo.length>0?this.fileInfo[e]:this.files[e];this.fileInfo.length?this.fileInfo.splice(e,1):this.files.splice(e,1),this.removeBefore(e,t,this.fileInfo)},clearFiles:function(){this.files.splice(0)},getFiles:function(){return this.files},upload:function(){var e=this;if(!this.checkFile())return!1;if(!this.url)return this.$Message.error({duration:5,content:"没有配置好Url"});if(!this.files||0==this.files.length)return this.$Message.error({duration:5,content:"请选择文件"});if(this.uploadBefore(this.files)){var t=new FormData;this.files.forEach(function(e){t.append("fileInput",e,e.name)}),this.loadingStatus=!0,this.loadText="上传中..",this.http.post(this.url,t,this.autoUpload?"正在上传文件":"").then(function(t){e.loadingStatus=!1,e.loadText="上传文件",e.uploadAfter(t,e.files)?(e.changed=!0,e.$Message.success({duration:5,content:t.message}),e.changed=t.status,t.status&&(e.append||e.fileInfo.splice(0),e.files.forEach(function(i){e.fileInfo.push({name:i.name,path:t.data+i.name})}),e.clearFiles())):e.changed=!1},function(t){e.loadText="上传文件",e.loadingStatus=!1})}},format:function(e,t){var i=e.name.split(".").pop().toLocaleLowerCase()||"",n="ios-document-outline";if(this.fileTypes.length>0&&void 0!=t)return-1!=this.fileTypes.indexOf(i);if(t&&!(t instanceof Array)&&"img"!=t&&"excel"!=t)return t.indexOf(i)>-1;if("img"==t||["gif","jpg","jpeg","png","bmp","webp"].indexOf(i)>-1){if("img"==t)return["gif","jpg","jpeg","png","bmp","webp"].indexOf(i)>-1;n="ios-image"}if(["mp4","m3u8","rmvb","avi","swf","3gp","mkv","flv"].indexOf(i)>-1&&(n="ios-film"),["mp3","wav","wma","ogg","aac","flac"].indexOf(i)>-1&&(n="ios-musical-notes"),["doc","txt","docx","pages","epub","pdf"].indexOf(i)>-1&&(n="md-document"),"excel"==t||["numbers","csv","xls","xlsx"].indexOf(i)>-1){if("excel"==t)return["numbers","csv","xls","xlsx"].indexOf(i)>-1;n="ios-podium"}return["keynote","ppt","pptx"].indexOf(i)>-1&&(n="ios-videocam"),n},beforeUpload:function(){},checkFile:function(e){if(e||(e=this.files),this.multiple&&e.length+this.fileInfo.length>(this.maxFile||5))return this.$Message.error({duration:5,content:"最多只能选【"+(this.maxFile||5)+"】"+(this.img?"张图片":"个文件")}),!1;for(var t=[],i=0;i<e.length;i++){var n=e[i];if(-1!=t.indexOf(n.name)&&(n.name="("+i+")"+n.name),t.push(n.name),this.img&&!this.format(n,"img"))return this.$Message.error({duration:5,content:"选择的文件【"+n.name+"】只能是图片格式"}),!1;if(this.excel&&!this.format(n,"excel"))return this.$Message.error({duration:5,content:"选择的文件【"+n.name+"】只能是excel文件"}),!1;if(this.fileTypes&&this.fileTypes.length>0&&!this.format(n,this.fileTypes))return this.$Message.error({duration:5,content:"选择的文件【"+n.name+"】只能是【"+this.fileTypes.join(",")+"】格式"}),!1;if(n.size>1024*(this.maxSize||3)*1024)return this.$Message.error({duration:5,content:"选择的文件【"+n.name+"】不能超过:"+(this.maxSize||3)+"M"}),!1}return!0}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-container"},[i("div",[i("div",{staticClass:"input-btns",staticStyle:{"margin-bottom":"10px"}},[i("input",{ref:"input",staticStyle:{display:"none"},attrs:{type:"file",multiple:e.multiple},on:{change:e.handleChange}}),e._v(" "),e.img?i("div",{staticClass:"upload-img"},[e._l(e.files.length>0?e.files:e.fileInfo,function(t,n){return i("div",{key:n,staticClass:"img-item"},[i("div",{staticClass:"operation"},[i("div",{staticClass:"action"},[i("Icon",{staticClass:"view",attrs:{type:"md-eye"},on:{click:function(t){e.previewImg(n)}}}),e._v(" "),i("Icon",{staticClass:"remove",attrs:{type:"md-close"},on:{click:function(t){e.removeFile(n)}}})],1),e._v(" "),i("div",{staticClass:"mask"})]),e._v(" "),i("img",{attrs:{src:e.getImgSrc(t),onerror:e.errorImg}})])}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.autoUpload||e.autoUpload&&e.files.length<e.maxFile&&e.fileInfo.length<e.maxFile,expression:"!autoUpload||(autoUpload&&files.length<maxFile&&fileInfo.length<maxFile)"}],staticClass:"img-selector",class:e.getSelector()},[i("div",{staticClass:"selector",on:{click:e.handleClick}},[i("Icon",{attrs:{type:"ios-camera"}})],1),e._v(" "),e.autoUpload?e._e():i("div",{staticClass:"s-btn",class:{readonly:e.changed},on:{click:e.upload}},[i("div",[e._v(e._s(e.loadText))])])])],2):i("Button",{attrs:{icon:"ios-cloud-upload-outline"},on:{click:e.handleClick}},[e._v("选择"+e._s(e.img?"图片":"文件"))]),e._v(" "),e.autoUpload||e.img?e._e():i("Button",{attrs:{type:"info",disabled:e.changed,icon:"md-arrow-round-up",loading:e.loadingStatus},on:{click:e.upload}},[e._v("上传文件")])],1),e._v(" "),e._t("default"),e._v(" "),e.desc?i("div",[i("Alert",{attrs:{"show-icon":""}},[e._v(e._s(e.getText())+"文件大小不超过"+e._s(e.maxSize||3)+"M")])],1):e._e(),e._v(" "),e._t("content"),e._v(" "),e.img?e._e():i("div",[i("ul",{directives:[{name:"show",rawName:"v-show",value:e.fileList,expression:"fileList"}],staticClass:"upload-list"},e._l(e.files.length>0?e.files:e.fileInfo,function(t,n){return i("li",{key:n,staticClass:"list-file"},[i("a",[i("span",{on:{click:function(i){e.fileOnClick(n,t)}}},[i("Icon",{attrs:{type:e.format(t)}}),e._v("\n              "+e._s(t.name)+"\n            ")],1)]),e._v(" "),i("span",{staticClass:"file-remove",on:{click:function(t){e.removeFile(n)}}},[i("Icon",{attrs:{type:"md-close"}})],1)])}),0)]),e._v(" "),e._t("tip")],2)])},staticRenderFns:[]};var o=i("VU/8")(a,l,!1,function(e){i("mkw0")},"data-v-5f3f73db",null);t.default=o.exports},ScXB:function(e,t){e.exports="data:image/png;base64,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"},mkw0:function(e,t){}});