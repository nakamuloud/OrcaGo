(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ed7095e5"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=n[t]=[e,o]}));e.push(a[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/OrcaGo/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"081d":function(t,e,a){"use strict";var o=a("fdeb"),n=a.n(o);n.a},4261:function(t,e,a){t.exports=a.p+"img/grampas.cdcc76af.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Map")},r=[],s=a("90a4"),i={name:"App",components:{Map:s["a"]},data:function(){return{}}},c=i,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null),f=u.exports,m=(a("d3b7"),a("8c4f")),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),o("br"),t._v("please join our online "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return o("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},g=[],v={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},b=v,y=a("6544"),k=a.n(y),x=a("62ad"),_=a("a523"),w=a("adda"),C=a("0fd9"),j=Object(l["a"])(b,p,g,!1,null,null,null),M=j.exports;k()(j,{VCol:x["a"],VContainer:_["a"],VImg:w["a"],VRow:C["a"]});var I={name:"Home",components:{HelloWorld:M}},P=I,O=Object(l["a"])(P,h,d,!1,null,null,null),V=O.exports;o["a"].use(m["a"]);var S=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],T=new m["a"]({mode:"history",base:"/OrcaGo/",routes:S}),E=T,F=a("2f62");o["a"].use(F["a"]);var L=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=a("f309");o["a"].use(G["a"]);var N=new G["a"]({}),A=a("755e"),W=a("f355");o["a"].use(A,{load:{key:W.apiKey,libraries:"places",region:"JP",language:"ja"}}),o["a"].config.productionTip=!1,new o["a"]({router:E,store:L,vuetify:N,render:function(t){return t(f)}}).$mount("#app")},"90a4":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(this.snackbarText)+" ")]),a("v-card",{attrs:{color:"red"}},[a("v-card-title",{staticStyle:{color:"white"}},[t._v(t._s(this.info.titleName))])],1),a("img",{directives:[{name:"show",rawName:"v-show",value:t.itemImageFlag,expression:"itemImageFlag"}],staticClass:"item",attrs:{src:t.itemImagePath},on:{click:t.onImageClicked}}),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.itemImageFlag,expression:"itemImageFlag"}],staticClass:"item_button",attrs:{color:"red",dark:""},on:{click:t.onButtonClicked}},[t._v(t._s(this.info.buttonMessage))]),a("v-card",{staticClass:"footer",attrs:{color:"red"}},[a("v-card-title",{staticStyle:{color:"white"}},[t._v("Lv:"+t._s(this.info.level)+",TotalExp:"+t._s(this.info.exp))])],1),a("GmapMap",{staticStyle:{width:"100vw",height:"90vh"},attrs:{center:this.center,zoom:this.zoom,options:{streetViewControl:!1},"map-type-id":"roadmap"}},[t._l(t.markers,(function(e,o){return a("GmapMarker",{key:o,attrs:{position:e.position,clickable:!0,draggable:!1},on:{click:function(a){return t.markerClicked(e)}}})})),a("GmapMarker",{attrs:{position:this.coords,clickable:!1,draggable:!1,icon:this.info.icon}})],2)],1)},n=[],r=(a("c740"),a("bc3a")),s=a.n(r),i={components:{},data:function(){return{center:{lat:35.084605,lng:137.170834},mode:!1,zoom:18,snackbar:!1,snackbarText:"",focusedMarker:[],coords:{lat:35.084605,lng:137.170834},itemImageFlag:!1,itemImagePath:a("4261"),markers:[],info:{level:1,exp:100,titleName:"シャチGo!!",buttonMessage:"Get",icon:{url:a("4261"),scaledSize:{width:44,height:70,f:"px",b:"px"}}}}},methods:{markerClicked:function(t){this.itemImageFlag=!0,this.info.titleName=t.title+",Exp:"+t.itemLevel,this.focusedMarker=t,this.center=t.position},onImageClicked:function(){this.itemImageFlag=!1,this.info.titleName="シャチGo!!"},changeMode:function(){this.mode=!this.mode},onButtonClicked:function(){console.log("onButtonClicked",this.focusedMarker.title),this.getItem(this.focusedMarker)},getItem:function(t){var e=this.markers[this.markers.findIndex((function(e){var a=e.title;return a===t.title}))];console.log(e),0==e.accessable?this.popMessage("もう少し近づこう"):(e.exist=!1,this.calcLevel(e.itemLevel)?this.popMessage("アイテムゲット!レベルアップ!!!"):this.popMessage("アイテムゲット!"),this.itemImageFlag=!1)},calcLevel:function(t){return this.info.exp+=parseInt(t),this.info.exp-100*this.info.level>=100&&(this.info.level+=1,!0)},popMessage:function(t){console.log(t),this.snackbar=!0,this.snackbarText=t},distance:function(t,e,a,o){return t*=Math.PI/180,e*=Math.PI/180,a*=Math.PI/180,o*=Math.PI/180,6371*Math.acos(Math.cos(t)*Math.cos(a)*Math.cos(o-e)+Math.sin(t)*Math.sin(a))}},created:function(){var t=this;console.log("created"),navigator.geolocation.getCurrentPosition((function(e){t.coords.lat=e.coords.latitude,t.coords.lng=e.coords.longitude})),this.center=this.coords,setInterval((function(){for(var e in navigator.geolocation.getCurrentPosition((function(e){t.coords.lat=e.coords.latitude,t.coords.lng=e.coords.longitude})),t.markers)t.distance(t.markers[e].position.lat,t.markers[e].position.lng,t.coords.lat,t.coords.lng),t.markers[e].accessable=!0}),1e3),console.log("GET from kintone"),s.a.get("https://dstn5.kumoko.club:443/dataspider/trigger/get_kintone_spot").then((function(e){for(var a in e.data)t.markers.push({position:{lat:parseFloat(e.data[a].lng),lng:parseFloat(e.data[a].lat)},title:e.data[a].spot,itemName:e.data[a].item_name,itemLevel:e.data[a].item_level,exist:!1})}))}},c=i,l=(a("081d"),a("2877")),u=a("6544"),f=a.n(u),m=a("7496"),h=a("8336"),d=a("b0af"),p=a("99d9"),g=a("2db4"),v=Object(l["a"])(c,o,n,!1,null,"1dc61388",null);e["a"]=v.exports;f()(v,{VApp:m["a"],VBtn:h["a"],VCard:d["a"],VCardTitle:p["a"],VSnackbar:g["a"]})},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},f355:function(t){t.exports=JSON.parse('{"apiKey":"AIzaSyCCnDP91XS-TV1l8zRq3aP7W1kJj6v3aGg"}')},fdeb:function(t,e,a){}});
//# sourceMappingURL=app.bc7f7783.js.map