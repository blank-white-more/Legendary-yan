webpackJsonp([101],{HFiA:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("pFYg"),i=e.n(a),o={name:"cacheViews",toast:{},data:function(){return{show:!1,whoisXq:{ym:""}}},computed:{},created:function(){var n=this,t=n.$domain+"/request/whois";n.$axios.post(t,{ym:n.$route.query.ym}).then(function(t){if(1==t.data.code){var e=t.data;"object"==i()(e.data)?(n.whoisXq=e.data,n.whoisXq.ym=n.$route.query.ym):n.whoisXq="",n.show=!0}else n.$createToast({txt:t.data.msg,type:"txt",time:1500}).show()})},methods:{buy:function(){this.$store.state.payJson={tjb:"y",fs:"json",lx:1,txt:"我的域名",url:"/user/my_domain",ym:this.$route.query.ym},this.$router.push({path:"/pay"})}},components:{}},r=e("VU/8")(o,{render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"index"},[e("gn-header",{attrs:{title:"Whois查询结果",pathList:[],top:!0,type:"2"}}),n._v(" "),n.show?e("div",{staticClass:"content"},[""!=n.whoisXq?e("div",{staticClass:"layout"},[e("div",{staticClass:"layout-title"},[e("strong",[n._v(n._s(n.$route.query.ym)+"最新Whois信息")]),n._v(" "),e("router-link",{attrs:{to:{path:"/domain_wt_buy",query:{ym:n.$route.query.ym}}}},[n._v("委托购买")])],1),n._v(" "),e("div",{staticClass:"layout-content"},[e("ul",{staticClass:"whois-info"},[e("li",[e("span",[n._v("所有者联系邮箱")]),n._v(" "),e("strong",[n._v(n._s(n.whoisXq.email))])]),n._v(" "),n._m(0),n._v(" "),e("li",[e("span",[n._v("注册商")]),n._v(" "),e("strong",[n._v(n._s(n.whoisXq.zcs))])]),n._v(" "),e("li",[e("span",[n._v("注册商网址")]),n._v(" "),e("strong",[n._v(n._s(n.whoisXq.zcsdz))])]),n._v(" "),e("li",[e("span",[n._v("注册日期")]),n._v(" "),e("strong",[n._v(n._s(n.whoisXq.reg_sj))])]),n._v(" "),e("li",[e("span",[n._v("更新日期")]),n._v(" "),e("strong",[n._v(n._s(n.whoisXq.up_sj))])]),n._v(" "),e("li",[e("span",[n._v("到期日期")]),n._v(" "),e("strong",[n._v(n._s(n.whoisXq.exp_sj))])]),n._v(" "),e("li",[e("span",[n._v("域名状态")]),n._v(" "),e("div",{staticClass:"ym-zt"},n._l(n.whoisXq.zt,function(t,a){return e("p",{key:a},[e("a",{attrs:{href:"https://icann.org/epp#"+t,target:"_blank"}},[n._v(n._s(t))])])}),0)]),n._v(" "),e("li",{staticClass:"ym-dns"},[e("span",[n._v("DNS 服务器")]),n._v(" "),e("div",n._l(n.whoisXq.dns,function(t,a){return e("p",{key:a},[n._v(n._s(t))])}),0)])])])]):e("div",{staticClass:"layout layout1"},[e("img",{attrs:{src:n.ossUrl("nodata.png"),alt:""}}),n._v(" "),n._m(1),n._v(" "),e("button",{attrs:{type:"button"},on:{click:n.buy}},[n._v("立即注册")])])]):n._e()],1)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("li",[t("span",[this._v("域名所有者")]),this._v(" "),t("strong",[this._v("请联系本站客服获取")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("p",[this._v("未查询到注册信息，该域名可能尚未注册"),t("br"),this._v("（该域名也可能被注册局保留、正在审核或限制注册。能否注册，以注册查询结果为准）")])}]},!1,function(n){e("eaC8")},"data-v-621332eb",null);t.default=r.exports},eaC8:function(n,t,e){var a=e("kURl");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals),e("rjj0")("713da817",a,!0,{})},kURl:function(n,t,e){var a=e("kxFB");(n.exports=e("FZ+f")(!1)).push([n.i,"\nbody[data-v-621332eb],\nhtml[data-v-621332eb] {\n  background: #fff;\n  color: #333;\n  height: 100%;\n}\ninput[data-v-621332eb],\nbutton[data-v-621332eb] {\n  overflow: visible;\n  vertical-align: middle;\n  outline: none;\n  border: 0;\n}\n.cube-btn.cube-btn_active[data-v-621332eb],\n.cube-btn[data-v-621332eb]:active {\n  background: -webkit-linear-gradient(top, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  background: linear-gradient(180deg, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  opacity: 0.8;\n}\n.text-danger[data-v-621332eb] {\n  color: #e8001c !important;\n}\n.text-B40000[data-v-621332eb] {\n  color: #b40000 !important;\n}\n.text-pink[data-v-621332eb] {\n  color: #d21095 !important;\n}\n.text-right[data-v-621332eb] {\n  color: #009207 !important;\n}\n.text-orange[data-v-621332eb] {\n  color: #e49a00 !important;\n}\n.text-8187A1[data-v-621332eb] {\n  color: #8187a1 !important;\n}\n.text-0002FF[data-v-621332eb] {\n  color: #0002ff !important;\n}\n.text-333333[data-v-621332eb] {\n  color: #333 !important;\n}\n.text-normal[data-v-621332eb] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-621332eb] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-621332eb]:active {\n  color: #3464ff !important;\n}\n.cube-picker-title[data-v-621332eb] {\n  color: #121212;\n  font-size: 0.426667rem;\n}\n.iconfanhui[data-v-621332eb] {\n  width: 1.386667rem;\n}\n.g_input[data-v-621332eb],\n.cube-select[data-v-621332eb] {\n  width: 100%;\n  height: 1.04rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  text-indent: 0.4rem;\n  color: #333;\n  font-size: 0.4rem;\n  box-sizing: border-box;\n}\n.g_textarea[data-v-621332eb] {\n  display: block;\n  padding: 0.253333rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  height: 2.933333rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  color: #333;\n  font-size: 0.373333rem;\n  resize: none;\n  line-height: 0.64rem;\n}\n.g_textarea1[data-v-621332eb] {\n  margin-top: 0.32rem;\n}\n.g_button_submit[data-v-621332eb] {\n  display: block;\n  margin-top: 0.8rem;\n  font-size: 0.373333rem;\n  width: 100%;\n  height: 1.173333rem;\n  background: -webkit-linear-gradient(top, #6096ff 0%, #003bfc 100%);\n  background: linear-gradient(180deg, #6096ff 0%, #003bfc 100%);\n  box-shadow: 0 0.08rem 0.16rem 0 rgba(0,54,249,0.3);\n  border-radius: 0.08rem;\n  line-height: 1.173333rem;\n  text-align: center;\n  color: #fff;\n}\n.g_input[data-v-621332eb]::-webkit-input-placeholder,\n.g_textarea[data-v-621332eb]::-webkit-input-placeholder {\n  color: #8187a1;\n  font-size: 0.4rem;\n}\n.fr[data-v-621332eb] {\n  float: right;\n}\n.fl[data-v-621332eb] {\n  float: left;\n}\n.clear[data-v-621332eb] {\n  zoom: 1;\n}\n.clear[data-v-621332eb]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.xieyi[data-v-621332eb] {\n  font-size: 0.32rem;\n}\n.xieyi a[data-v-621332eb] {\n  color: #3464ff;\n}\n.xieyi .cube-checkbox-wrap[data-v-621332eb] {\n  margin-top: 0.466667rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n.icongouwuche1[data-v-621332eb] {\n  position: relative;\n}\n.icongouwuche1 span[data-v-621332eb] {\n  position: absolute;\n  left: 0.186667rem;\n  top: -0.213333rem;\n  min-width: 0.386667rem;\n  height: 0.386667rem;\n  background-color: #e8001c;\n  color: #fff !important;\n  line-height: 0.386667rem;\n  text-align: center;\n  border-radius: 0.386667rem;\n  font-size: 0.266667rem;\n  padding: 0 0.053333rem;\n  box-sizing: border-box;\n}\n.nodata[data-v-621332eb] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  background: #fff;\n  text-align: center;\n  color: #999;\n  font-size: 0.373333rem;\n}\n.nodata img[data-v-621332eb] {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0.8rem;\n  width: 7.266667rem;\n}\n.has-error[data-v-621332eb] {\n  border-color: #e8001c !important;\n}\n.mask[data-v-621332eb] {\n  z-index: 999;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: rgba(0,0,0,0.65);\n}\n.zt_0[data-v-621332eb] {\n  color: #666 !important;\n}\n.zt_1[data-v-621332eb] {\n  color: #ffac00 !important;\n}\n.zt_2[data-v-621332eb] {\n  color: #009207 !important;\n}\n.zt_3[data-v-621332eb] {\n  color: #e8001c !important;\n}\n.border-bottom-1px[data-v-621332eb]::after {\n  border: 0;\n}\n.cube-checkbox_checked .cube-checkbox-ui i[data-v-621332eb] {\n  background: url("+a(e("bpH+"))+") no-repeat center center !important;\n  background-size: 100% 100% !important;\n  -webkit-transform: scale(1) !important;\n  transform: scale(1) !important;\n}\n.cube-checkbox_disabled .cube-checkbox-ui[data-v-621332eb]::before {\n  border-color: transparent;\n}\n.ff-money[data-v-621332eb] {\n  font-family: DINProM !important;\n}\n.index[data-v-621332eb] {\n  width: 100%;\n  background-color: #f3f5fc;\n}\n.index .index-head[data-v-621332eb] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  background: #fff;\n  padding: 0 0.4rem;\n  height: 1.173333rem;\n  position: fixed;\n  top: 0;\n  font-size: 0.426667rem;\n  z-index: 2;\n  color: #121212;\n}\n.content[data-v-621332eb] {\n  padding-bottom: 0 !important;\n  margin: 1.44rem 0 0;\n  min-height: calc(100% - 1.44rem);\n  background-color: #fff;\n}\n.hot-ss[data-v-621332eb] {\n  padding: 0 0.533333rem;\n}\n.hot-ss li[data-v-621332eb] {\n  float: left;\n  margin-right: 0.266667rem;\n  margin-bottom: 0.266667rem;\n  padding: 0 0.266667rem;\n  height: 0.72rem;\n  background: rgba(255,255,255,0.12);\n  border-radius: 0.08rem;\n  line-height: 0.72rem;\n  font-size: 0.32rem;\n}\n.hot-ss li a[data-v-621332eb] {\n  color: #b1b7d8;\n}\n.layout[data-v-621332eb] {\n  margin-bottom: 0.4rem;\n  background-color: #fff;\n}\n.layout .layout-title[data-v-621332eb] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0 0.4rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  height: 1.306667rem;\n}\n.layout .layout-title strong[data-v-621332eb] {\n  padding-left: 0.266667rem;\n  border-left: 0.08rem solid #3464ff;\n  font-size: 0.4rem;\n  color: #050505;\n  font-weight: 700;\n}\n.layout .layout-title a[data-v-621332eb] {\n  width: 1.84rem;\n  height: 0.72rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #3464ff;\n  font-size: 0.346667rem;\n  color: #3464ff;\n  text-align: center;\n  line-height: 0.746667rem;\n}\n.whois-info li[data-v-621332eb] {\n  padding: 0.48rem 0.4rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  font-size: 0.346667rem;\n}\n.whois-info li[data-v-621332eb]:nth-child(odd) {\n  background-color: #f7f9ff;\n}\n.whois-info li[data-v-621332eb] p {\n  font-size: 0.346667rem;\n  line-height: 0.693333rem;\n}\n.whois-info li span[data-v-621332eb] {\n  color: #8187a1;\n}\n.whois-info li strong[data-v-621332eb] {\n  color: #333;\n}\n.whois-info[data-v-621332eb] .ym-zt a {\n  font-size: 0.346667rem;\n  color: #3464ff;\n}\n.whois-info .ym-dns[data-v-621332eb] {\n  line-height: 0.693333rem;\n}\n.layout1[data-v-621332eb] {\n  padding: 3.733333rem 0.4rem 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  height: 100%;\n  margin-bottom: 0 !important;\n  text-align: center;\n}\n.layout1 p[data-v-621332eb] {\n  margin: 0.266667rem 0;\n  color: #999;\n  font-size: 0.346667rem;\n  line-height: 0.533333rem;\n}\n.layout1 img[data-v-621332eb] {\n  width: 60%;\n  margin-bottom: 0.4rem;\n}\n.layout1 button[data-v-621332eb] {\n  width: 2.666667rem;\n  height: 0.8rem;\n  margin-top: 0.266667rem;\n  background: -webkit-linear-gradient(top, #6096ff 0%, #003bfc 100%);\n  background: linear-gradient(180deg, #6096ff 0%, #003bfc 100%);\n  box-shadow: 0 0.08rem 0.16rem 0 rgba(0,54,249,0.3);\n  border-radius: 0.08rem;\n  line-height: 0.8rem;\n  color: #fff;\n  font-size: 0.346667rem;\n}\n.h20[data-v-621332eb] {\n  height: 0.266667rem;\n  background-color: #f7f9ff;\n  width: 100%;\n}",""])}});