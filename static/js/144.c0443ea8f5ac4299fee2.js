webpackJsonp([144],{K31e:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("mvHQ"),i=t.n(a),o=t("vR+E"),r=t("6vn9"),c=t("NC6I"),l=t.n(c),s={data:function(){return{re_code:"",model:{re_yx:"",re_mm:"",re_yzm:"",siteid:null},active:null,fields:[{modelKey:"re_yx"},{modelKey:"re_mm"},{modelKey:"re_yzm"}],lang:[{text:"简体中文",value:"zhcn"},{text:"English",value:"us"}],userList:[],selectShow:!1,selectUserShow:!1}},beforeRouteEnter:function(n,e,t){t(function(n){"/help_detail"!=e.path&&"/forgetPw"!=e.path&&"/protect"!=e.path&&e.name&&n.$route.params.t||t("/")})},created:function(){var n=this;localStorage.removeItem("PguserInfo"),this.$axios.post(this.$domain+"/request/get_token").then(function(e){if(e){var t=e.data;n.$token=t.data,localStorage.setItem("gnameToken",t.data)}})},methods:{selectHandle1:function(n){var e=this;"zhcn"!=n&&(this.$lang="us",this.$axios.get(this.$domain+"/request/lang?mrlang="+this.$lang).then(function(n){1==n.data.code?window.location.href=e.$viewpath+"/us/index.html#/login":e.$createToast({time:1500,type:"txt",txt:"语言切换失败"}).show()}))},close:function(n){this.selectShow=n},closeUser:function(n){this.selectUserShow=n},open:function(){this.selectShow=!0},selectConfirm:function(n,e){this.selectShow=!1,this.selectHandle1(e)},selectUserConfirm:function(n,e){this.selectUserShow=!1,this.model.siteid=e,this.submitHandler()},goback:function(){var n=localStorage.getItem("myUrlHou");-1!=n.indexOf("ydqz/ydxq")||-1!=n.indexOf("ydqz/jjxq")||-1!=n.indexOf("ydqz/plyd")?this.$router.go(-1):this.$router.go(-2)},cyzm:function(){this.$refs.yzm.src=this.$domain+"/getcode?"+(new Date).getTime()},submitHandler:function(n){if(n&&n.stopPropagation(),!Object(o.t)("login-form"))return!1;var e={};e.re_yx=this.model.re_yx,e.re_mm=this.jiami(this.model.re_mm,this.$token),e.re_yzm=this.model.re_yzm,e.csrf_token=this.$token,e.boxlogin=1,this.model.siteid&&(e.siteid=this.model.siteid);var t=this,a=t.$domain+"/request/p_login";t.$axios.post(a,e).then(function(n){if(n){t.setCookie("MGN_WFK",1);var e=n.data,a="";1==e.code?(1001==e.data?t.$axios.post(t.$domain+"/user_zh/get_baseinfo").then(function(n){var e=n.data;1==e.code&&(localStorage.setItem("PguserInfo",i()(e.data)),t.$store.state.userInfo=e.data,a=e.data.lang)}):(localStorage.setItem("PguserInfo",i()(e.data)),t.$store.state.userInfo=e.data,a=e.data.lang),t.$createToast({time:1500,type:"txt",txt:e.msg,onTimeout:function(){localStorage.getItem("myUrlHou")?(-1!=window.location.host.indexOf("192.168.3")?window.location.href=t.$viewpath+"/#"+localStorage.getItem("myUrlHou"):window.location.href=t.$viewpath+"/"+a+"/index.html#"+localStorage.getItem("myUrlHou"),localStorage.removeItem("myUrlHou")):-1!=window.location.host.indexOf("192.168.3")?window.location.href=t.$viewpath:window.location.href=t.$viewpath+"/"+a+"/index.html#/"}}).show()):3==e.code?(t.userList=[],e.data.map(function(n){t.userList.push({text:"ID: "+n.uid+"  "+n.sitename,value:n.siteid})}),t.selectUserShow=!0):(t.cyzm(),t.$createToast({time:1500,type:"txt",txt:e.msg}).show())}})},jiami:function(n,e){return l()(e+l()("[jiami"+this.glwb(n)+"mima]").substring(0,19)).substring(0,19)},glwb:function(n){var e=n,t="";return t=new RegExp('"',"g"),e=e.replace(t,"&#34;"),t=new RegExp("'","g"),e=e.replace(t,"&#39;"),t=new RegExp("<","g"),e=e.replace(t,"&#60;"),t=new RegExp(">","g"),e.replace(t,"&#62;")}},components:{MHeader:r.a}},d=t("VU/8")(s,{render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"header"},[t("i",{staticClass:"iconfont iconguanbi1",on:{click:n.goback}}),n._v(" "),t("img",{attrs:{src:n.ossUrl("zn.png"),alt:""},on:{click:n.open}})]),n._v(" "),t("div",{staticClass:"login"},[t("div",{staticClass:"login-box"},[t("div",{staticClass:"login-title"},[t("img",{attrs:{src:n.ossUrl("logo@2x.png"),alt:""}}),n._v(" "),t("span",[n._v("欢迎登录GNAME")])]),n._v(" "),t("cube-form",{attrs:{model:n.model,id:"login-form"}},[t("cube-form-group",[t("cube-form-item",{class:0==n.active?"activeLine":"",attrs:{field:n.fields[0]}},[t("i",{staticClass:"iconfont iconzhanghao"}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.model.re_yx,expression:"model.re_yx"}],staticClass:"cube-input-field",attrs:{type:"text",name:"re_yx",required:"",placeholder:"请输入邮箱/账户ID",msg:"请输入邮箱/账户ID"},domProps:{value:n.model.re_yx},on:{focus:function(e){n.active=0},blur:function(e){n.active=null},input:function(e){e.target.composing||n.$set(n.model,"re_yx",e.target.value)}}})]),n._v(" "),t("cube-form-item",{class:1==n.active?"activeLine":"",attrs:{field:n.fields[1]}},[t("i",{staticClass:"iconfont iconmima"}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.model.re_mm,expression:"model.re_mm"}],staticClass:"cube-input-field",attrs:{type:"password",name:"re_mm",required:"",placeholder:"请输入您的密码",msg:"请输入您的密码"},domProps:{value:n.model.re_mm},on:{focus:function(e){n.active=1},blur:function(e){n.active=null},input:function(e){e.target.composing||n.$set(n.model,"re_mm",e.target.value)}}})]),n._v(" "),t("cube-form-item",{class:2==n.active?"activeLine":"",attrs:{field:n.fields[2]}},[t("i",{staticClass:"iconfont iconyanzhengma"}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.model.re_yzm,expression:"model.re_yzm"}],staticClass:"cube-input-field yzm",attrs:{type:"text",name:"re_yzm",required:"",placeholder:"请输入图形验证码",msg:"请输入图形验证码",autocomplete:"off"},domProps:{value:n.model.re_yzm},on:{focus:function(e){n.active=2},blur:function(e){n.active=null},input:function(e){e.target.composing||n.$set(n.model,"re_yzm",e.target.value)}}}),n._v(" "),t("img",{ref:"yzm",staticClass:"yzmx",attrs:{src:this.$domain+"/getcode",alt:""},on:{click:n.cyzm}})])],1),n._v(" "),t("cube-form-group",[t("cube-button",{on:{click:n.submitHandler}},[n._v("立即登录")])],1),n._v(" "),t("div",{staticClass:"form-tar"},[t("router-link",{attrs:{to:"./register"}},[n._v("免费注册")]),n._v(" "),t("span"),n._v(" "),t("router-link",{attrs:{to:"./forgetPw"}},[n._v("忘记密码")])],1)],1)],1)]),n._v(" "),t("div",{staticClass:"login-bt"},[n._v("\n    登录即代表您同意\n    "),t("router-link",{attrs:{to:"/help_detail?id=45"}},[n._v("《用户协议》")]),n._v("和\n    "),t("router-link",{attrs:{to:"/help_detail?id=25"}},[n._v("《隐私政策》")])],1),n._v(" "),t("gname-select",{attrs:{selectShow:n.selectShow,selectList:n.lang,title:"选择语言",active:"简体中文"},on:{func:n.close,func1:n.selectConfirm}}),n._v(" "),t("gname-select",{attrs:{selectShow:n.selectUserShow,selectList:n.userList,title:"选择账号"},on:{func:n.closeUser,func1:n.selectUserConfirm}})],1)},staticRenderFns:[]},!1,function(n){t("XZqu")},"data-v-42f1ac2c",null);e.default=d.exports},XZqu:function(n,e,t){var a=t("q3pv");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals),t("rjj0")("46c6fd49",a,!0,{})},q3pv:function(n,e,t){var a=t("kxFB");(n.exports=t("FZ+f")(!1)).push([n.i,"\nbody[data-v-42f1ac2c],\nhtml[data-v-42f1ac2c] {\n  background: #fff;\n  color: #333;\n  height: 100%;\n}\ninput[data-v-42f1ac2c],\nbutton[data-v-42f1ac2c] {\n  overflow: visible;\n  vertical-align: middle;\n  outline: none;\n  border: 0;\n}\n.cube-btn.cube-btn_active[data-v-42f1ac2c],\n.cube-btn[data-v-42f1ac2c]:active {\n  background: -webkit-linear-gradient(top, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  background: linear-gradient(180deg, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  opacity: 0.8;\n}\n.text-danger[data-v-42f1ac2c] {\n  color: #e8001c !important;\n}\n.text-B40000[data-v-42f1ac2c] {\n  color: #b40000 !important;\n}\n.text-pink[data-v-42f1ac2c] {\n  color: #d21095 !important;\n}\n.text-right[data-v-42f1ac2c] {\n  color: #009207 !important;\n}\n.text-orange[data-v-42f1ac2c] {\n  color: #e49a00 !important;\n}\n.text-8187A1[data-v-42f1ac2c] {\n  color: #8187a1 !important;\n}\n.text-0002FF[data-v-42f1ac2c] {\n  color: #0002ff !important;\n}\n.text-333333[data-v-42f1ac2c] {\n  color: #333 !important;\n}\n.text-normal[data-v-42f1ac2c] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-42f1ac2c] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-42f1ac2c]:active {\n  color: #3464ff !important;\n}\n.cube-picker-title[data-v-42f1ac2c] {\n  color: #121212;\n  font-size: 0.426667rem;\n}\n.iconfanhui[data-v-42f1ac2c] {\n  width: 1.386667rem;\n}\n.g_input[data-v-42f1ac2c],\n.cube-select[data-v-42f1ac2c] {\n  width: 100%;\n  height: 1.04rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  text-indent: 0.4rem;\n  color: #333;\n  font-size: 0.4rem;\n  box-sizing: border-box;\n}\n.g_textarea[data-v-42f1ac2c] {\n  display: block;\n  padding: 0.253333rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  height: 2.933333rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  color: #333;\n  font-size: 0.373333rem;\n  resize: none;\n  line-height: 0.64rem;\n}\n.g_textarea1[data-v-42f1ac2c] {\n  margin-top: 0.32rem;\n}\n.g_button_submit[data-v-42f1ac2c] {\n  display: block;\n  margin-top: 0.8rem;\n  font-size: 0.373333rem;\n  width: 100%;\n  height: 1.173333rem;\n  background: -webkit-linear-gradient(top, #6096ff 0%, #003bfc 100%);\n  background: linear-gradient(180deg, #6096ff 0%, #003bfc 100%);\n  box-shadow: 0 0.08rem 0.16rem 0 rgba(0,54,249,0.3);\n  border-radius: 0.08rem;\n  line-height: 1.173333rem;\n  text-align: center;\n  color: #fff;\n}\n.g_input[data-v-42f1ac2c]::-webkit-input-placeholder,\n.g_textarea[data-v-42f1ac2c]::-webkit-input-placeholder {\n  color: #8187a1;\n  font-size: 0.4rem;\n}\n.fr[data-v-42f1ac2c] {\n  float: right;\n}\n.fl[data-v-42f1ac2c] {\n  float: left;\n}\n.clear[data-v-42f1ac2c] {\n  zoom: 1;\n}\n.clear[data-v-42f1ac2c]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.xieyi[data-v-42f1ac2c] {\n  font-size: 0.32rem;\n}\n.xieyi a[data-v-42f1ac2c] {\n  color: #3464ff;\n}\n.xieyi .cube-checkbox-wrap[data-v-42f1ac2c] {\n  margin-top: 0.466667rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n.icongouwuche1[data-v-42f1ac2c] {\n  position: relative;\n}\n.icongouwuche1 span[data-v-42f1ac2c] {\n  position: absolute;\n  left: 0.186667rem;\n  top: -0.213333rem;\n  min-width: 0.386667rem;\n  height: 0.386667rem;\n  background-color: #e8001c;\n  color: #fff !important;\n  line-height: 0.386667rem;\n  text-align: center;\n  border-radius: 0.386667rem;\n  font-size: 0.266667rem;\n  padding: 0 0.053333rem;\n  box-sizing: border-box;\n}\n.nodata[data-v-42f1ac2c] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  background: #fff;\n  text-align: center;\n  color: #999;\n  font-size: 0.373333rem;\n}\n.nodata img[data-v-42f1ac2c] {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0.8rem;\n  width: 7.266667rem;\n}\n.has-error[data-v-42f1ac2c] {\n  border-color: #e8001c !important;\n}\n.mask[data-v-42f1ac2c] {\n  z-index: 999;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: rgba(0,0,0,0.65);\n}\n.zt_0[data-v-42f1ac2c] {\n  color: #666 !important;\n}\n.zt_1[data-v-42f1ac2c] {\n  color: #ffac00 !important;\n}\n.zt_2[data-v-42f1ac2c] {\n  color: #009207 !important;\n}\n.zt_3[data-v-42f1ac2c] {\n  color: #e8001c !important;\n}\n.border-bottom-1px[data-v-42f1ac2c]::after {\n  border: 0;\n}\n.cube-checkbox_checked .cube-checkbox-ui i[data-v-42f1ac2c] {\n  background: url("+a(t("bpH+"))+") no-repeat center center !important;\n  background-size: 100% 100% !important;\n  -webkit-transform: scale(1) !important;\n  transform: scale(1) !important;\n}\n.cube-checkbox_disabled .cube-checkbox-ui[data-v-42f1ac2c]::before {\n  border-color: transparent;\n}\n.ff-money[data-v-42f1ac2c] {\n  font-family: DINProM !important;\n}\n.router[data-v-42f1ac2c] {\n  background: #fff;\n}\n.header[data-v-42f1ac2c] {\n  height: 1.173333rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  padding: 0 0.4rem;\n  box-sizing: border-box;\n  color: #8187a1;\n  font-size: 0.373333rem;\n}\n.header img[data-v-42f1ac2c] {\n  width: 0.533333rem;\n}\n.header i[data-v-42f1ac2c] {\n  font-size: 0.373333rem;\n}\n#app[data-v-42f1ac2c] {\n  height: 100%;\n}\n.login[data-v-42f1ac2c] {\n  margin-top: 0.533333rem;\n  overflow: hidden;\n}\n.login .login-box[data-v-42f1ac2c] {\n  margin-top: 0.426667rem;\n}\n.login .top-banner[data-v-42f1ac2c] {\n  width: 100%;\n}\n.login .cube-form-item[data-v-42f1ac2c] {\n  margin: 0 0.933333rem;\n  margin-bottom: 0.293333rem;\n  padding: 0;\n  border-bottom: 0.026667rem solid #e1e6f0;\n}\n.login[data-v-42f1ac2c] .cube-form-field {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n.login[data-v-42f1ac2c] .cube-form-field i {\n  margin-right: 0.32rem;\n  color: #8187a1;\n  font-size: 0.4rem;\n  line-height: 1;\n}\n.login[data-v-42f1ac2c] .cube-input-field {\n  color: #8187a1;\n  font-size: 0.4rem;\n  line-height: 1;\n}\n.login .yzmx[data-v-42f1ac2c] {\n  position: absolute;\n  width: 2.08rem;\n  height: 0.826667rem;\n  float: right;\n  right: 0;\n}\n.login .cube-btn[data-v-42f1ac2c] {\n  width: 8.133333rem;\n  height: 1.146667rem;\n  margin: 0 auto;\n  padding: 0;\n  margin-top: 0.506667rem;\n  margin-bottom: 0.733333rem;\n  border-radius: 1.333333rem;\n  background-image: -webkit-linear-gradient(top, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  background-image: linear-gradient(180deg, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  line-height: 1.146667rem;\n  font-size: 0.4rem;\n}\n.login .form-tar[data-v-42f1ac2c] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  padding: 0 0.933333rem;\n  color: #8187a1;\n  font-size: 0.32rem;\n  line-height: 0.32rem;\n}\n.login .form-tar a[data-v-42f1ac2c] {\n  color: #8187a1;\n}\n.login .form-tar span[data-v-42f1ac2c] {\n  margin: 0 0.32rem;\n  color: #e1e6f0;\n  border-left: 0.026667rem solid #e1e6f0;\n  display: inline-block;\n  height: 0.293333rem;\n}\n.login .login-title[data-v-42f1ac2c] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  font-size: 0.533333rem;\n  color: #121212;\n}\n.login .login-title img[data-v-42f1ac2c] {\n  width: 1.2rem;\n  text-align: center;\n}\n.login .login-title span[data-v-42f1ac2c]:last-child {\n  line-height: 1;\n  margin-top: 0.533333rem;\n  margin-bottom: 1.226667rem;\n  font-weight: 700;\n  font-family: PingFangSC-Medium, PingFang SC;\n}\n.login-bt[data-v-42f1ac2c] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  margin-top: 2.96rem;\n  font-size: 0.4rem;\n  font-size: 0.293333rem;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #8187a1;\n}\n.login-bt a[data-v-42f1ac2c] {\n  color: #003bfc;\n}\n.yzm[data-v-42f1ac2c] {\n  width: 5.333333rem !important;\n}\n.login-box[data-v-42f1ac2c] .cube-input-field {\n  padding: 0.36rem 0;\n}",""])}});