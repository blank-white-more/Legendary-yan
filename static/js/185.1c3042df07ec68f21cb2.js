webpackJsonp([185],{Zjg2:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("VU/8")({name:"my",toast:{},data:function(){return{userInfo:{},isLogin:!1,tx_show:!1,yhmsl_show:!1}},created:function(){this.getInfo()},methods:{getInfo:function(){var n=this,a=n.$domain+"/user_zh/get_baseinfo";n.$axios.post(a).then(function(a){if(a){var t=a.data;1==t.code&&(1==t.data.istx?n.tx_show=!0:n.tx_show=!1,t.data.yhmsl?n.yhmsl_show=!0:n.yhmsl_show=!1,n.isLogin=!0,n.userInfo=t.data,n.userInfo.dj="J"==n.userInfo.dj?11:"Q"==n.userInfo.dj?12:"K"==n.userInfo.dj?13:n.userInfo.dj,2==n.userInfo.hs?n.userInfo.hs=3:3==n.userInfo.hs&&(n.userInfo.hs=2))}})}}},{render:function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"index"},[t("div",{staticClass:"index-head",staticStyle:{fontWeight:"700"}},[n._v("\n    我的\n    "),t("router-link",{attrs:{to:"/user/xiaoxi"}},[t("i",{staticClass:"iconfont iconxiaoxi"}),n._v(" "),0!=n.$store.state.xiaoxi?t("span",{staticClass:"icon-dot"}):n._e()])],1),n._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"my-top"},[t("div",{staticClass:"my-top-t",on:{click:function(a){return n.$router.push("/user/accound")}}},[n.isLogin?t("div",{class:["avater","avater_"+n.userInfo.dj+"_"+n.userInfo.hs],style:{backgroundImage:"url("+n.ossUrl("lv.png")+")"}}):t("div",{staticClass:"avater1",style:{backgroundImage:"url("+n.ossUrl("wdl@2x.png")+")"}}),n._v(" "),n.isLogin?t("div",[t("strong",[n._v("ID:"+n._s(n.userInfo.uid))]),n._v(" "),t("p",[n._v("Hi:"+n._s(n.userInfo.name))])]):t("div",[t("strong",[n._v("立即登录")]),n._v(" "),t("p",[n._v("欢迎来到GNAME")])])]),n._v(" "),t("div",{staticClass:"my-top-b",class:{fontsize1:n.userInfo.zqian>=1e6||n.userInfo.dqian>=1e4||n.userInfo.kqian>=1e4,fontsize2:n.userInfo.zqian>=1e8||n.userInfo.dqian>=1e5||n.userInfo.kqian>=1e5,fontsize3:n.userInfo.zqian>=1e9||n.userInfo.dqian>=1e6||n.userInfo.kqian>=1e6}},[t("div",{staticClass:"mybg",style:{backgroundImage:"url("+n.ossUrl("mybg1.png")+")"}},[t("strong",{staticClass:"tsfont"},[n._v(n._s(n.userInfo.zqian||"0.00"))]),n._v(" "),t("p",[n._v("总金额($)")])]),n._v(" "),t("div",{staticClass:"mybg1",style:{backgroundImage:"url("+n.ossUrl("mybg2.png")+")"}},[t("strong",{staticClass:"tsfont"},[n._v(n._s(n.userInfo.dqian||"0.00"))]),n._v(" "),t("p",[n._v("冻结金额($)")])]),n._v(" "),t("div",{staticClass:"mybg1",style:{backgroundImage:"url("+n.ossUrl("mybg2.png")+")"}},[t("strong",{staticClass:"tsfont"},[n._v(n._s(n.userInfo.kqian||"0.00"))]),n._v(" "),t("p",[n._v("可用金额($)")])])])]),n._v(" "),t("div",{staticClass:"my-list"},[t("div",[t("router-link",{attrs:{to:"/message"}},[t("span",{staticClass:"icon-zhcz",style:{backgroundImage:"url("+n.ossUrl("zhcz.png")+")"}},[n._v("账户充值")]),n._v(" "),t("i",{staticClass:"iconfont iconjiantou"})])],1),n._v(" "),t("div",[t("router-link",{attrs:{to:"/user/zjmx"}},[t("span",{staticClass:"icon-zj",style:{backgroundImage:"url("+n.ossUrl("my01.png")+")"}},[n._v("收支明细")]),n._v(" "),t("i",{staticClass:"iconfont iconjiantou"})])],1),n._v(" "),t("div",[t("router-link",{attrs:{to:"/user/djmx"}},[t("span",{staticClass:"icon-cz",style:{backgroundImage:"url("+n.ossUrl("my02.png")+")"}},[n._v("冻结明细")]),n._v(" "),t("i",{staticClass:"iconfont iconjiantou"})])],1),n._v(" "),t("div",[t("router-link",{attrs:{to:"/user/yhq_list"}},[t("span",{staticClass:"icon-ym",style:{backgroundImage:"url("+n.ossUrl("my07.png")+")"}},[n._v("我的优惠券")]),n._v(" "),t("i",{staticClass:"iconfont iconjiantou"})])],1),n._v(" "),n.yhmsl_show?t("div",[t("router-link",{attrs:{to:"/user/yhm_list"}},[t("span",{staticClass:"icon-yhm",style:{backgroundImage:"url("+n.ossUrl("yhm.png")+")"}},[n._v("我的优惠码")]),n._v(" "),t("i",{staticClass:"iconfont iconjiantou"})])],1):n._e(),n._v(" "),n.tx_show?t("div",[t("router-link",{attrs:{to:"/user/tx"}},[t("span",{staticClass:"icon-tx",style:{backgroundImage:"url("+n.ossUrl("wytx.png")+")"}},[n._v("我要提现")]),n._v(" "),t("i",{staticClass:"iconfont iconjiantou"})])],1):n._e()]),n._v(" "),t("div",{staticClass:"my-list"},[t("div",[t("router-link",{attrs:{to:"/user/safe"}},[t("span",{staticClass:"icon-aqzx",style:{backgroundImage:"url("+n.ossUrl("aqzx.png")+")"}},[n._v("安全中心")]),n._v(" "),t("i",{staticClass:"iconfont iconjiantou"})])],1),n._v(" "),t("div",[t("router-link",{attrs:{to:"/user/accound_set"}},[t("span",{staticClass:"icon-log",style:{backgroundImage:"url("+n.ossUrl("my04.png")+")"}},[n._v("设置")]),n._v(" "),t("div",[t("b",[n._v("简体中文")]),n._v(" "),t("i",{staticClass:"iconfont iconjiantou"})])])],1)]),n._v(" "),t("div",{staticClass:"my-list ttlist"},[t("div",[t("router-link",{attrs:{to:"/user/wt_add"}},[t("span",{staticClass:"icon-push",style:{backgroundImage:"url("+n.ossUrl("my03.png")+")"}},[n._v("提交工单")]),n._v(" "),t("div",[t("b",[n._v("提供专业技术支持")]),n._v(" "),t("i",{staticClass:"iconfont iconjiantou"})])])],1)])])])},staticRenderFns:[]},!1,function(n){t("d4pX")},"data-v-25ea470b",null);a.default=e.exports},d4pX:function(n,a,t){var e=t("kGaE");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals),t("rjj0")("5473cbfe",e,!0,{})},kGaE:function(n,a,t){var e=t("kxFB");(n.exports=t("FZ+f")(!1)).push([n.i,"\nbody[data-v-25ea470b],\nhtml[data-v-25ea470b] {\n  background: #fff;\n  color: #333;\n  height: 100%;\n}\ninput[data-v-25ea470b],\nbutton[data-v-25ea470b] {\n  overflow: visible;\n  vertical-align: middle;\n  outline: none;\n  border: 0;\n}\n.cube-btn.cube-btn_active[data-v-25ea470b],\n.cube-btn[data-v-25ea470b]:active {\n  background: -webkit-linear-gradient(top, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  background: linear-gradient(180deg, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  opacity: 0.8;\n}\n.text-danger[data-v-25ea470b] {\n  color: #e8001c !important;\n}\n.text-B40000[data-v-25ea470b] {\n  color: #b40000 !important;\n}\n.text-pink[data-v-25ea470b] {\n  color: #d21095 !important;\n}\n.text-right[data-v-25ea470b] {\n  color: #009207 !important;\n}\n.text-orange[data-v-25ea470b] {\n  color: #e49a00 !important;\n}\n.text-8187A1[data-v-25ea470b] {\n  color: #8187a1 !important;\n}\n.text-0002FF[data-v-25ea470b] {\n  color: #0002ff !important;\n}\n.text-333333[data-v-25ea470b] {\n  color: #333 !important;\n}\n.text-normal[data-v-25ea470b] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-25ea470b] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-25ea470b]:active {\n  color: #3464ff !important;\n}\n.cube-picker-title[data-v-25ea470b] {\n  color: #121212;\n  font-size: 0.426667rem;\n}\n.iconfanhui[data-v-25ea470b] {\n  width: 1.386667rem;\n}\n.g_input[data-v-25ea470b],\n.cube-select[data-v-25ea470b] {\n  width: 100%;\n  height: 1.04rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  text-indent: 0.4rem;\n  color: #333;\n  font-size: 0.4rem;\n  box-sizing: border-box;\n}\n.g_textarea[data-v-25ea470b] {\n  display: block;\n  padding: 0.253333rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  height: 2.933333rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  color: #333;\n  font-size: 0.373333rem;\n  resize: none;\n  line-height: 0.64rem;\n}\n.g_textarea1[data-v-25ea470b] {\n  margin-top: 0.32rem;\n}\n.g_button_submit[data-v-25ea470b] {\n  display: block;\n  margin-top: 0.8rem;\n  font-size: 0.373333rem;\n  width: 100%;\n  height: 1.173333rem;\n  background: -webkit-linear-gradient(top, #6096ff 0%, #003bfc 100%);\n  background: linear-gradient(180deg, #6096ff 0%, #003bfc 100%);\n  box-shadow: 0 0.08rem 0.16rem 0 rgba(0,54,249,0.3);\n  border-radius: 0.08rem;\n  line-height: 1.173333rem;\n  text-align: center;\n  color: #fff;\n}\n.g_input[data-v-25ea470b]::-webkit-input-placeholder,\n.g_textarea[data-v-25ea470b]::-webkit-input-placeholder {\n  color: #8187a1;\n  font-size: 0.4rem;\n}\n.fr[data-v-25ea470b] {\n  float: right;\n}\n.fl[data-v-25ea470b] {\n  float: left;\n}\n.clear[data-v-25ea470b] {\n  zoom: 1;\n}\n.clear[data-v-25ea470b]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.xieyi[data-v-25ea470b] {\n  font-size: 0.32rem;\n}\n.xieyi a[data-v-25ea470b] {\n  color: #3464ff;\n}\n.xieyi .cube-checkbox-wrap[data-v-25ea470b] {\n  margin-top: 0.466667rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n.icongouwuche1[data-v-25ea470b] {\n  position: relative;\n}\n.icongouwuche1 span[data-v-25ea470b] {\n  position: absolute;\n  left: 0.186667rem;\n  top: -0.213333rem;\n  min-width: 0.386667rem;\n  height: 0.386667rem;\n  background-color: #e8001c;\n  color: #fff !important;\n  line-height: 0.386667rem;\n  text-align: center;\n  border-radius: 0.386667rem;\n  font-size: 0.266667rem;\n  padding: 0 0.053333rem;\n  box-sizing: border-box;\n}\n.nodata[data-v-25ea470b] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  background: #fff;\n  text-align: center;\n  color: #999;\n  font-size: 0.373333rem;\n}\n.nodata img[data-v-25ea470b] {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0.8rem;\n  width: 7.266667rem;\n}\n.has-error[data-v-25ea470b] {\n  border-color: #e8001c !important;\n}\n.mask[data-v-25ea470b] {\n  z-index: 999;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: rgba(0,0,0,0.65);\n}\n.zt_0[data-v-25ea470b] {\n  color: #666 !important;\n}\n.zt_1[data-v-25ea470b] {\n  color: #ffac00 !important;\n}\n.zt_2[data-v-25ea470b] {\n  color: #009207 !important;\n}\n.zt_3[data-v-25ea470b] {\n  color: #e8001c !important;\n}\n.border-bottom-1px[data-v-25ea470b]::after {\n  border: 0;\n}\n.cube-checkbox_checked .cube-checkbox-ui i[data-v-25ea470b] {\n  background: url("+e(t("bpH+"))+") no-repeat center center !important;\n  background-size: 100% 100% !important;\n  -webkit-transform: scale(1) !important;\n  transform: scale(1) !important;\n}\n.cube-checkbox_disabled .cube-checkbox-ui[data-v-25ea470b]::before {\n  border-color: transparent;\n}\n.ff-money[data-v-25ea470b] {\n  font-family: DINProM !important;\n}\n.index[data-v-25ea470b] {\n  width: 100%;\n  background-color: #f3f5fc;\n}\n.index .index-head[data-v-25ea470b] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  box-sizing: border-box;\n  background: #fff;\n  padding: 0 0.4rem;\n  font-size: 0.426667rem;\n  text-align: center;\n  line-height: 1.173333rem;\n  height: 1.173333rem;\n  color: #333;\n}\n.index .index-head i[data-v-25ea470b] {\n  color: #333;\n  font-size: 0.453333rem;\n}\n.index .index-head a[data-v-25ea470b] {\n  position: absolute;\n  right: 0.4rem;\n}\n.index .index-head a span[data-v-25ea470b] {\n  position: absolute;\n  width: 0.213333rem;\n  height: 0.213333rem;\n  background: #e8001c;\n  border-radius: 50%;\n  top: 0.266667rem;\n  right: -0.08rem;\n}\n.content[data-v-25ea470b] {\n  margin-top: 1.173333rem;\n  margin-bottom: 2.106667rem;\n}\n.my-top[data-v-25ea470b] {\n  background-color: #fff;\n  overflow: hidden;\n}\n.my-top-t[data-v-25ea470b] {\n  margin: 0.266667rem 0;\n  padding: 0 0.4rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  font-size: 0.293333rem;\n  color: #8187a1;\n}\n.my-top-t strong[data-v-25ea470b] {\n  display: block;\n  margin-bottom: 0.213333rem;\n  font-size: 0.426667rem;\n  font-weight: 700;\n  color: #333;\n}\n.avater[data-v-25ea470b] {\n  width: 1.253333rem;\n  height: 1.4rem;\n  margin-right: 0.32rem;\n  background: 0 0;\n  background-size: 14.226667rem 6.386667rem;\n}\n.avater1[data-v-25ea470b] {\n  width: 1.253333rem;\n  height: 1.453333rem;\n  margin-right: 0.32rem;\n  background-size: 1.253333rem;\n}\n.my-top-b[data-v-25ea470b] {\n  padding: 0 0.306667rem 0.266667rem;\n  overflow: hidden;\n}\n.my-top-b.fontsize1 strong[data-v-25ea470b] {\n  font-size: 0.533333rem;\n}\n.my-top-b.fontsize2 strong[data-v-25ea470b] {\n  font-size: 0.48rem;\n}\n.my-top-b.fontsize3 strong[data-v-25ea470b] {\n  font-size: 0.4rem;\n}\n.my-top-b div[data-v-25ea470b] {\n  height: 1.92rem;\n  float: left;\n  padding: 0.333333rem 0.2rem 0 0.4rem;\n  box-sizing: border-box;\n  color: rgba(255,255,255,0.5);\n  font-size: 0.32rem;\n}\n.my-top-b .mybg[data-v-25ea470b] {\n  width: 3.653333rem;\n  background: no-repeat;\n  background-size: 100% 100%;\n}\n.my-top-b .mybg1[data-v-25ea470b] {\n  width: 2.866667rem;\n  background: no-repeat;\n  background-size: 100% 100%;\n}\n.my-top-b strong[data-v-25ea470b] {\n  display: block;\n  margin-bottom: 0.2rem;\n  color: #fff;\n  font-size: 0.666667rem;\n}\n.my-list[data-v-25ea470b] {\n  margin-top: 0.266667rem;\n}\n.my-list div[data-v-25ea470b] {\n  background-color: #fff;\n}\n.my-list div a[data-v-25ea470b] {\n  margin: 0 0.4rem;\n  height: 1.173333rem;\n  border-bottom: 0.026667rem solid #e1e6f0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  box-sizing: border-box;\n  font-size: 0.373333rem;\n  color: #333;\n}\n.my-list div a i[data-v-25ea470b] {\n  font-size: 0.28rem;\n  color: #8187a1;\n}\n.my-list div a span[data-v-25ea470b] {\n  padding-left: 0.72rem;\n  height: 100%;\n  line-height: 1.173333rem;\n  background: no-repeat center left;\n  background-size: 0.453333rem;\n}\n.my-list div:last-child a[data-v-25ea470b] {\n  border-bottom: 0;\n}\n.kff[data-v-25ea470b] {\n  margin-top: 0.266667rem;\n}\nb[data-v-25ea470b] {\n  color: #8187a1;\n  font-size: 0.32rem;\n}\n.avater_3_1[data-v-25ea470b] {\n  background-position: 0 0;\n}\n.avater_4_1[data-v-25ea470b] {\n  background-position: -1.253333rem 0;\n}\n.avater_5_1[data-v-25ea470b] {\n  background-position: -2.506667rem 0;\n}\n.avater_6_1[data-v-25ea470b] {\n  background-position: -3.76rem 0;\n}\n.avater_7_1[data-v-25ea470b] {\n  background-position: -5.013333rem 0;\n}\n.avater_8_1[data-v-25ea470b] {\n  background-position: -6.266667rem 0;\n}\n.avater_9_1[data-v-25ea470b] {\n  background-position: -7.52rem 0;\n}\n.avater_10_1[data-v-25ea470b] {\n  background-position: -8.773333rem 0;\n}\n.avater_11_1[data-v-25ea470b] {\n  background-position: -10.026667rem 0;\n}\n.avater_12_1[data-v-25ea470b] {\n  background-position: -11.28rem 0;\n}\n.avater_13_1[data-v-25ea470b] {\n  background-position: -12.533333rem 0;\n}\n.avater_3_2[data-v-25ea470b] {\n  background-position: 0 -1.453333rem;\n}\n.avater_4_2[data-v-25ea470b] {\n  background-position: -1.253333rem -1.453333rem;\n}\n.avater_5_2[data-v-25ea470b] {\n  background-position: -2.506667rem -1.453333rem;\n}\n.avater_6_2[data-v-25ea470b] {\n  background-position: -3.76rem -1.453333rem;\n}\n.avater_7_2[data-v-25ea470b] {\n  background-position: -5.013333rem -1.453333rem;\n}\n.avater_8_2[data-v-25ea470b] {\n  background-position: -6.266667rem -1.453333rem;\n}\n.avater_9_2[data-v-25ea470b] {\n  background-position: -7.52rem -1.453333rem;\n}\n.avater_10_2[data-v-25ea470b] {\n  background-position: -8.773333rem -1.453333rem;\n}\n.avater_11_2[data-v-25ea470b] {\n  background-position: -10.026667rem -1.453333rem;\n}\n.avater_12_2[data-v-25ea470b] {\n  background-position: -11.28rem -1.453333rem;\n}\n.avater_13_2[data-v-25ea470b] {\n  background-position: -12.533333rem -1.453333rem;\n}\n.avater_3_3[data-v-25ea470b] {\n  background-position: 0 -2.906667rem;\n}\n.avater_4_3[data-v-25ea470b] {\n  background-position: -1.253333rem -2.906667rem;\n}\n.avater_5_3[data-v-25ea470b] {\n  background-position: -2.506667rem -2.906667rem;\n}\n.avater_6_3[data-v-25ea470b] {\n  background-position: -3.76rem -2.906667rem;\n}\n.avater_7_3[data-v-25ea470b] {\n  background-position: -5.013333rem -2.906667rem;\n}\n.avater_8_3[data-v-25ea470b] {\n  background-position: -6.266667rem -2.906667rem;\n}\n.avater_9_3[data-v-25ea470b] {\n  background-position: -7.52rem -2.906667rem;\n}\n.avater_10_3[data-v-25ea470b] {\n  background-position: -8.773333rem -2.906667rem;\n}\n.avater_11_3[data-v-25ea470b] {\n  background-position: -10.026667rem -2.906667rem;\n}\n.avater_12_3[data-v-25ea470b] {\n  background-position: -11.28rem -2.906667rem;\n}\n.avater_13_3[data-v-25ea470b] {\n  background-position: -12.533333rem -2.906667rem;\n}\n.avater_3_4[data-v-25ea470b] {\n  background-position: 0 -4.36rem;\n}\n.avater_4_4[data-v-25ea470b] {\n  background-position: -1.253333rem -4.36rem;\n}\n.avater_5_4[data-v-25ea470b] {\n  background-position: -2.506667rem -4.36rem;\n}\n.avater_6_4[data-v-25ea470b] {\n  background-position: -3.76rem -4.36rem;\n}\n.avater_7_4[data-v-25ea470b] {\n  background-position: -5.013333rem -4.36rem;\n}\n.avater_8_4[data-v-25ea470b] {\n  background-position: -6.266667rem -4.36rem;\n}\n.avater_9_4[data-v-25ea470b] {\n  background-position: -7.52rem -4.36rem;\n}\n.avater_10_4[data-v-25ea470b] {\n  background-position: -8.773333rem -4.36rem;\n}\n.avater_11_4[data-v-25ea470b] {\n  background-position: -10.026667rem -4.36rem;\n}\n.avater_12_4[data-v-25ea470b] {\n  background-position: -11.28rem -4.36rem;\n}\n.avater_13_4[data-v-25ea470b] {\n  background-position: -12.533333rem -4.36rem;\n}\n.ttlist[data-v-25ea470b] {\n  margin-bottom: 1.706667rem;\n}",""])}});