webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,n){"use strict";function i(t){n("P+MV")}function a(t){n("Up8c")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r={name:"app",computed:{},data:function(){return{visible:!1}},methods:{handleNav:function(){this.visible=!0}}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{staticStyle:{"margin-top":"56px"},attrs:{app:"",fixed:"",clipped:""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("v-list",[n("v-list-tile",{on:{click:function(e){t.$router.push({path:"/"})}}},[n("v-list-tile-action",[n("v-icon",[t._v("local_offer")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("下单")])],1)],1),t._v(" "),n("v-list-tile",{on:{click:function(e){t.$router.push({path:"/search"})}}},[n("v-list-tile-action",[n("v-icon",[t._v("search")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("查询")])],1)],1)],1)],1),t._v(" "),n("router-view",{attrs:{name:"toolbar"},on:{updatenav:t.handleNav}}),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view",{attrs:{name:"content"}})],1)],1)],1)},l=[],c={render:o,staticRenderFns:l},v=c,u=n("VU/8"),d=i,f=u(r,v,!1,d,null,null),m=f.exports,p=n("/ocq"),_={name:"Order",computed:{hasInfo:function(){return!(!this.$store.state.sendInfo&&!this.$store.state.reciveInfo)},sendInfo:function(){return this.$store.state.sendInfo},reciveInfo:function(){return this.$store.state.reciveInfo}},data:function(){return{canOrder:!1,formValid:!0,formData:{time:"",weightSelect:"",dateSelect:"",timeSelect:""},dateOptions:["今天","明天","后天"],weightOptions:["0-1kg","1-2kg","2-5kg","5-10kg","10-20kg","20kg以上"],timeOptions:["08:00~09:00","09:00~10:00"]}},methods:{handleSend:function(t){this.$router.push({path:t})}}},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"od-order"},[n("v-list",[n("v-list-tile",{on:{click:function(e){t.handleSend("/sender")}}},[n("v-list-tile-avatar",[n("v-icon",[t._v("mood")])],1),t._v(" "),t.sendInfo?n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n          "+t._s(t.sendInfo.name)+" "+t._s(t.sendInfo.phone)+"\n        ")]),t._v(" "),n("v-list-tile-sub-title",[t._v("\n          "+t._s(t.sendInfo.provice)+t._s(t.sendInfo.city)+t._s(t.sendInfo.zone)+t._s(t.sendInfo.detail)+"\n        ")])],1):n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n          添加寄件人信息\n        ")])],1),t._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("keyboard_arrow_right")])],1)],1)],1),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-tile",{on:{click:function(e){t.handleSend("/reciver")}}},[n("v-list-tile-avatar",[n("v-icon",[t._v("mood")])],1),t._v(" "),t.reciveInfo?n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n          "+t._s(t.reciveInfo.name)+" "+t._s(t.reciveInfo.phone)+"\n        ")]),t._v(" "),n("v-list-tile-sub-title",[t._v("\n          "+t._s(t.reciveInfo.provice)+t._s(t.reciveInfo.city)+t._s(t.reciveInfo.zone)+t._s(t.reciveInfo.detail)+"\n        ")])],1):n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n          添加收件人信息\n        ")])],1),t._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("keyboard_arrow_right")])],1)],1)],1)],1),t._v(" "),t.hasInfo?n("v-container",{attrs:{"grid-list-sm":""}},[n("v-form",{staticClass:"od-form",model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"body-2"},[t._v("上门时间")])]),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-select",{attrs:{items:t.dateOptions,label:"日期","prepend-icon":"access_time"},model:{value:t.formData.dateSelect,callback:function(e){t.$set(t.formData,"dateSelect",e)},expression:"formData['dateSelect']"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-select",{attrs:{items:t.timeOptions,label:"时间"},model:{value:t.formData.timeSelect,callback:function(e){t.$set(t.formData,"timeSelect",e)},expression:"formData['timeSelect']"}})],1)],1),t._v(" "),n("v-select",{attrs:{items:t.weightOptions,label:"快件重量","prepend-icon":"explicit"},model:{value:t.formData.weightSelect,callback:function(e){t.$set(t.formData,"weightSelect",e)},expression:"formData['weightSelect']"}})],1),t._v(" "),n("v-btn",{staticStyle:{margin:"20px 0 0"},attrs:{block:"",color:"secondary",dark:""}},[t._v("确实无误，下单")])],1):[n("v-btn",{staticStyle:{margin:"20px 0 0"},attrs:{block:"",color:"primary",disabled:""}},[t._v("快速下单")]),t._v(" "),n("p",{staticClass:"text-xs-center caption",staticStyle:{margin:"20px 0 0"}},[t._v("提供您的寄件信息，即可预订快递员上门为您取件")])]],2)},b=[],x={render:h,staticRenderFns:b},S=x,I=n("VU/8"),E=a,D=I(_,S,!1,E,null,null),V=D.exports,k={beforeMount:function(){"Sender"===this.$route.name?(this.varLabels={name:"寄件人",address:"寄件人地址"},this.type="send",this.$store.dispatch("SET_SUBTITLE",{title:"寄件人信息"})):(this.varLabels={name:"收件人",address:"收件人地址"},this.type="recive",this.$store.dispatch("SET_SUBTITLE",{title:"收件人信息"})),this.$store.dispatch("FETCH_ADDRESS")},computed:{title:function(){return this.$store.state.subTitle},address:function(){return this.$store.state.address}},data:function(){return{formValid:!0,rules:[function(t){return!!t||"field is required"}],varLabels:{name:"",address:""},type:"",formData:{name:"",phone:"",detail:"",provice:"",city:"",zone:""},items:["1","2","3"]}},methods:{handleNext:function(){"send"===this.type?this.$store.dispatch("SAVE_SEND_INFO",this.formData):this.$store.dispatch("SAVE_RECIVE_INFO",this.formData),this.$router.push({path:"/"})}}},$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"od-info"},[n("v-container",{attrs:{fluid:"","grid-list-sm":""}},[n("v-form",{model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[n("v-text-field",{attrs:{label:t.varLabels.name,rules:t.rules,required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData['name']"}}),t._v(" "),n("v-text-field",{attrs:{label:"手机号",rules:t.rules,required:""},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData['phone']"}}),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"body-2"},[t._v(t._s(t.varLabels.address))])]),t._v(" "),n("v-flex",{attrs:{flex:"",xs4:""}},[n("v-select",{attrs:{items:t.items,label:"省","item-value":"text",required:"",rules:t.rules},model:{value:t.formData.provice,callback:function(e){t.$set(t.formData,"provice",e)},expression:"formData['provice']"}})],1),t._v(" "),n("v-flex",{attrs:{flex:"",xs4:""}},[n("v-select",{attrs:{items:t.items,label:"市","item-value":"text",required:"",rules:t.rules},model:{value:t.formData.city,callback:function(e){t.$set(t.formData,"city",e)},expression:"formData['city']"}})],1),t._v(" "),n("v-flex",{attrs:{flex:"",xs4:""}},[n("v-select",{attrs:{items:t.items,label:"县/区","item-value":"text",required:"",rules:t.rules},model:{value:t.formData.zone,callback:function(e){t.$set(t.formData,"zone",e)},expression:"formData['zone']"}})],1)],1),t._v(" "),n("v-text-field",{attrs:{name:"input-3-1",label:"详细地址",rows:2,required:"","multi-line":"",rules:t.rules},model:{value:t.formData.detail,callback:function(e){t.$set(t.formData,"detail",e)},expression:"formData['detail']"}})],1)],1),t._v(" "),n("v-btn",{staticStyle:{margin:"20px 0 0"},attrs:{block:"",color:"primary",disabled:!t.formValid},on:{click:t.handleNext}},[t._v("\n    下一步\n  ")])],1)},g=[],y={render:$,staticRenderFns:g},T=y,N=n("VU/8"),O=N(k,T,!1,null,null,null),w=O.exports,L={methods:{handleNavVisible:function(){this.$emit("updatenav")}}},A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:"",dark:"","scroll-off-screen":""}},[n("v-toolbar-side-icon",{on:{click:t.handleNavVisible}}),t._v(" "),n("v-toolbar-title",[t._v("客户自助下单")]),t._v(" "),n("v-spacer")],1)},F=[],C={render:A,staticRenderFns:F},R=C,U=n("VU/8"),q=U(L,R,!1,null,null,null),z=q.exports,B={computed:{subTitle:function(){return this.$store.state.subTitle}},methods:{}},G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:"",dark:"","scroll-off-screen":""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.$router.go(-1)}}},[n("v-icon",[t._v("arrow_back")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.subTitle))]),t._v(" "),n("v-spacer")],1)},H=[],M={render:G,staticRenderFns:H},P=M,j=n("VU/8"),J=j(B,P,!1,null,null,null),W=J.exports;s.a.use(p.a);var Y=new p.a({mode:"history",routes:[{path:"/",name:"Order",components:{content:V,toolbar:z}},{path:"/sender",name:"Sender",components:{content:w,toolbar:W}},{path:"/reciver",name:"Reciver",components:{content:w,toolbar:W}}]}),K=n("NYxO");s.a.use(K.a);var Q=new K.a.Store({state:{sendInfo:null,reciveInfo:null,address:null,subTitle:"",navVisible:!1},actions:{SAVE_SEND_INFO:function(t,e){(0,t.commit)("SAVE_SEND_INFO",e)},SAVE_RECIVE_INFO:function(t,e){(0,t.commit)("SAVE_RECIVE_INFO",e)},FETCH_ADDRESS:function(t,e){t.commit;t.state.address},SET_SUBTITLE:function(t,e){(0,t.commit)("SET_SUBTITLE",{title:e.title})},TOGGLE_NAV_VISIBLE:function(t){(0,t.commit)("TOGGLE_NAV_VISIBLE")}},mutations:{SAVE_SEND_INFO:function(t,e){t.sendInfo=e},SAVE_RECIVE_INFO:function(t,e){t.reciveInfo=e},TOGGLE_NAV_VISIBLE:function(t){t.navVisible=!0},SET_SUBTITLE:function(t,e){var n=e.title;t.subTitle=n}}}),X=n("3EgV"),Z=n.n(X);n("7zck"),n("xfsg");s.a.config.productionTip=!1,s.a.use(Z.a),new s.a({el:"#app",router:Y,store:Q,template:"<App/>",components:{App:m}})},"P+MV":function(t,e){},Up8c:function(t,e){},xfsg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.64496c21b0af2f07eb06.js.map