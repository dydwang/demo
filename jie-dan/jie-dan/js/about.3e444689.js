(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"38be":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"add"}},[i("up-pdf",{attrs:{"auto-upload":!0},on:{success:t.success}}),i("el-date-picker",{attrs:{type:"date",placeholder:"接单日期",format:"yyyy 年 MM 月 dd 日","value-format":"timestamp"},model:{value:t.item.time,callback:function(e){t.$set(t.item,"time",e)},expression:"item.time"}}),i("el-input",{attrs:{placeholder:"请输入介绍"},model:{value:t.item.jieshao,callback:function(e){t.$set(t.item,"jieshao",e)},expression:"item.jieshao"}}),i("el-input",{attrs:{placeholder:"请输入价格"},model:{value:t.item.price,callback:function(e){t.$set(t.item,"price",e)},expression:"item.price"}}),i("el-button",{attrs:{type:"primary"},on:{click:t.submits}},[t._v("提交")])],1)},a=[],c=(i("b0c0"),{name:"add",props:[""],data:function(){return{item:{word:"",names:"",time:Date.now(),jieshao:"",status:"未完成",price:450}}},methods:{submits:function(){this.$api.addPdf(this.item,(function(t){}))},success:function(t,e){this.item.word=e,this.item.names=t.name}},mounted:function(){},created:function(){},components:{},watch:{}}),o=c,s=(i("da93"),i("2877")),r=Object(s["a"])(o,n,a,!1,null,"3d588a35",null);e["default"]=r.exports},"80e5":function(t,e,i){},b0c0:function(t,e,i){var n=i("83ab"),a=i("9bf2").f,c=Function.prototype,o=c.toString,s=/^\s*function ([^ (]*)/,r="name";!n||r in c||a(c,r,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},da93:function(t,e,i){"use strict";var n=i("df00"),a=i.n(n);a.a},df00:function(t,e,i){},f0ef:function(t,e,i){"use strict";var n=i("80e5"),a=i.n(n);a.a},f820:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item?i("div",{attrs:{id:"add"}},[i("iframe",{staticClass:"filename",staticStyle:{height:"3000px"},attrs:{src:"http://view.xdocin.com/xdoc?_xdoc=http://39.108.162.102:3000/uploads/"+t.item.word,width:"100%",frameborder:"1"}})]):t._e()},a=[],c={name:"add",props:[""],data:function(){return{item:!1}},methods:{},mounted:function(){this.item=this.$route.query},created:function(){},components:{},watch:{}},o=c,s=(i("f0ef"),i("2877")),r=Object(s["a"])(o,n,a,!1,null,"1a2d1e4c",null);e["default"]=r.exports}}]);
//# sourceMappingURL=about.3e444689.js.map