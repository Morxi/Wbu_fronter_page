(function(t){function e(e){for(var n,l,s=e[0],i=e[1],c=e[2],p=0,f=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={app:0},o=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85da"),a=r.n(n);a.a},4805:function(t,e,r){"use strict";var n=r("e57a"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("dac5"),r("6e26"),r("9604"),r("df67");var n=r("6e6d"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticStyle:{padding:"10px",background:"#f8f8f9"}},[r("Card",{attrs:{title:"WBU网络测试(非官方)",icon:"ios-options",padding:0,shadow:""}},[r("CellGroup",[r("Cell",{attrs:{title:"当前位置 ",extra:t.Range}}),r("Cell",{attrs:{title:"点击测试当前网络"},nativeOn:{click:function(e){return t.startPing(e)}}}),r("Cell",{attrs:{title:"到学校官网",extra:t.school_homepag}}),r("Cell",{attrs:{title:"到微博的延时 ",extra:t.weibo}}),r("Cell",{attrs:{title:"到Steam亚服延时",extra:t.steam}}),r("Cell",{attrs:{title:"以下结果来自 校园网链接质量收集计划",to:"https://blog.wbucs.com/index.php/archives/19/"}}),r("Cell",{attrs:{title:"正在施工中...",selected:""}}),r("Cell",{attrs:{title:"最近24小时的校园网状态",to:"",disabled:""}}),r("div",{attrs:{id:"mask"}},[r("center",[r("Row",{staticStyle:{height:"20%"}},[r("Col",{attrs:{span:"8"}},[r("i-circle",{attrs:{percent:80}},[r("span",{staticClass:"demo-Circle-inner",staticStyle:{"font-size":"24px"}},[t._v("80%")])])],1),r("Col",{attrs:{span:"8"}},[r("i-circle",{attrs:{percent:100,"stroke-color":"#5cb85c"}},[r("Icon",{staticStyle:{color:"#5cb85c"},attrs:{type:"ios-checkmark",size:"60"}})],1)],1),r("Col",{attrs:{span:"8"}},[r("i-circle",{attrs:{percent:35,"stroke-color":"#ff5500"}},[r("span",{staticClass:"demo-Circle-inner"},[r("Icon",{staticStyle:{color:"#ff5500"},attrs:{type:"ios-close",size:"50"}})],1)])],1)],1),r("Row",[r("Col",{attrs:{span:"8"}},[t._v("平均丢包")]),r("Col",{attrs:{span:"8"}},[t._v("网络连通性")]),r("Col",{attrs:{span:"8"}},[t._v("校园网质量")])],1)],1)],1),r("Badge",{attrs:{slot:"extra"},slot:"extra"}),r("Cell",{attrs:{title:"",disabled:""}}),r("Cell",{attrs:{title:"本工具由信息电子协会-开源技术部负责维护",disabled:""}}),r("Cell",{attrs:{title:"访问我们的官网",to:"https://wbucs.com",target:"_blank"}})],1)],1)],1)])},o=[],l=(r("0857"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])}),s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],i={name:"HelloWorld",props:{msg:String}},c=i,u=(r("4805"),r("6691")),p=Object(u["a"])(c,l,s,!1,null,"b9167eee",null),f=p.exports,v=r("3bef"),h=r.n(v),d=new h.a,g={timeout:200},_=new h.a(g),b={data:function(){return{school_homepag:"",weibo:"",steam:"",switchValue:!0,Range:"正在测试"}},mounted:function(){var t=this;this.$nextTick((function(){_.ping("http://172.16.90.166:8900",(function(e,r){t.Range=e?"校外":"校内"}))}))},methods:{startPing:function(t){console.log("start test");var e=this;d.ping("http://www.wbu.edu.cn/_upload/tpl/00/54/84/template84/images",(function(t,r){e.school_homepag=r+"ms"})),d.ping("http://weibo.com",(function(t,r){e.weibo=r.toString()+"ms"})),d.ping("http://184.50.91.26",(function(t,r){e.steam=r+"ms",r||console.log("timeout")}))}},name:"app",components:{HelloWorld:f}},m=b,w=(r("034f"),Object(u["a"])(m,a,o,!1,null,null,null)),k=w.exports,C=r("591a");n["default"].use(C["a"]);var y=new C["a"].Store({state:{},mutations:{},actions:{}}),j=r("b97b"),x=r.n(j);r("d943");n["default"].use(x.a),n["default"].config.productionTip=!1,new n["default"]({store:y,render:function(t){return t(k)}}).$mount("#app")},"85da":function(t,e,r){},e57a:function(t,e,r){}});
//# sourceMappingURL=app.181ebc03.js.map