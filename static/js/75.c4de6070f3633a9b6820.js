webpackJsonp([75],{"/9Ia":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{pathList:[{path:"/user/agent_list",icon:"iconxiashuyonghu",txt:"下属用户"},{path:"/user/income",icon:"iconwodeshouyi",txt:"我的收益"}],zjmxInfo:null,showTag:!1}},activated:function(){this.showTag=!1},created:function(){var n=this;document.onclick=function(){n.showTag=!1},n.getData()},mounted:function(){window.addEventListener("scroll",this.menu,!0)},destroyed:function(){window.removeEventListener("scroll",this.menu,!0)},methods:{menu:function(){this.showTag=!1},copy:function(){var n=new this.clipboard(".copy"),e=this;n.on("success",function(){e.$createToast({txt:"复制成功",type:"txt",time:1500}).show()}),n.on("error",function(){e.$createToast({txt:"复制失败",type:"txt",time:1500}).show()})},changeTab:function(n){n.stopPropagation(),this.showTag=!this.showTag},getData:function(){var n=this;n.$axios.post(n.$domain+"/user_agent/get_tgurl").then(function(e){var t=e.data;n.zjmxInfo=t.data})}}},o=t("VU/8")(a,{render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return null!=n.zjmxInfo?t("div",{staticClass:"index"},[t("gn-header",{attrs:{title:"我的推广码",pathList:n.pathList,top:!0,type:"6"}}),n._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"zjmx-box"},[t("div",{staticClass:"zjmx-t-c"},[t("div",{staticClass:"zjmx-t-item"},[t("strong",[n._v(n._s(n.zjmxInfo.count))]),n._v(" "),t("span",[n._v("已邀请人数")])]),n._v(" "),t("div",{staticClass:"zjmx-t-item"},[t("strong",{staticClass:"zjmx-item-02"},[n._v("$"+n._s(n.zjmxInfo.qian))]),n._v(" "),t("span",[n._v("累计推广收益")])])]),n._v(" "),t("p",[n._v("推广链接："+n._s(n.zjmxInfo.url))])]),n._v(" "),t("div",{staticClass:"msg"},[n._v("您推荐的朋友注册并产生消费后，您将获得每笔成功交易的分成，分成直接打入您的账户余额。")]),n._v(" "),t("button",{staticClass:"copy",attrs:{type:"button","data-clipboard-action":"copy","data-clipboard-text":n.zjmxInfo.url},on:{click:n.copy}},[n._v("复制链接")])])],1):n._e()},staticRenderFns:[]},!1,function(n){t("pCrK")},"data-v-7ecf04ae",null);e.default=o.exports},BKOF:function(n,e,t){var a=t("kxFB");(n.exports=t("FZ+f")(!1)).push([n.i,"\nbody[data-v-7ecf04ae],\nhtml[data-v-7ecf04ae] {\n  background: #fff;\n  color: #333;\n  height: 100%;\n}\ninput[data-v-7ecf04ae],\nbutton[data-v-7ecf04ae] {\n  overflow: visible;\n  vertical-align: middle;\n  outline: none;\n  border: 0;\n}\n.cube-btn.cube-btn_active[data-v-7ecf04ae],\n.cube-btn[data-v-7ecf04ae]:active {\n  background: -webkit-linear-gradient(top, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  background: linear-gradient(180deg, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  opacity: 0.8;\n}\n.text-danger[data-v-7ecf04ae] {\n  color: #e8001c !important;\n}\n.text-B40000[data-v-7ecf04ae] {\n  color: #b40000 !important;\n}\n.text-pink[data-v-7ecf04ae] {\n  color: #d21095 !important;\n}\n.text-right[data-v-7ecf04ae] {\n  color: #009207 !important;\n}\n.text-orange[data-v-7ecf04ae] {\n  color: #e49a00 !important;\n}\n.text-8187A1[data-v-7ecf04ae] {\n  color: #8187a1 !important;\n}\n.text-0002FF[data-v-7ecf04ae] {\n  color: #0002ff !important;\n}\n.text-333333[data-v-7ecf04ae] {\n  color: #333 !important;\n}\n.text-normal[data-v-7ecf04ae] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-7ecf04ae] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-7ecf04ae]:active {\n  color: #3464ff !important;\n}\n.cube-picker-title[data-v-7ecf04ae] {\n  color: #121212;\n  font-size: 0.426667rem;\n}\n.iconfanhui[data-v-7ecf04ae] {\n  width: 1.386667rem;\n}\n.g_input[data-v-7ecf04ae],\n.cube-select[data-v-7ecf04ae] {\n  width: 100%;\n  height: 1.04rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  text-indent: 0.4rem;\n  color: #333;\n  font-size: 0.4rem;\n  box-sizing: border-box;\n}\n.g_textarea[data-v-7ecf04ae] {\n  display: block;\n  padding: 0.253333rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  height: 2.933333rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  color: #333;\n  font-size: 0.373333rem;\n  resize: none;\n  line-height: 0.64rem;\n}\n.g_textarea1[data-v-7ecf04ae] {\n  margin-top: 0.32rem;\n}\n.g_button_submit[data-v-7ecf04ae] {\n  display: block;\n  margin-top: 0.8rem;\n  font-size: 0.373333rem;\n  width: 100%;\n  height: 1.173333rem;\n  background: -webkit-linear-gradient(top, #6096ff 0%, #003bfc 100%);\n  background: linear-gradient(180deg, #6096ff 0%, #003bfc 100%);\n  box-shadow: 0 0.08rem 0.16rem 0 rgba(0,54,249,0.3);\n  border-radius: 0.08rem;\n  line-height: 1.173333rem;\n  text-align: center;\n  color: #fff;\n}\n.g_input[data-v-7ecf04ae]::-webkit-input-placeholder,\n.g_textarea[data-v-7ecf04ae]::-webkit-input-placeholder {\n  color: #8187a1;\n  font-size: 0.4rem;\n}\n.fr[data-v-7ecf04ae] {\n  float: right;\n}\n.fl[data-v-7ecf04ae] {\n  float: left;\n}\n.clear[data-v-7ecf04ae] {\n  zoom: 1;\n}\n.clear[data-v-7ecf04ae]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.xieyi[data-v-7ecf04ae] {\n  font-size: 0.32rem;\n}\n.xieyi a[data-v-7ecf04ae] {\n  color: #3464ff;\n}\n.xieyi .cube-checkbox-wrap[data-v-7ecf04ae] {\n  margin-top: 0.466667rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n.icongouwuche1[data-v-7ecf04ae] {\n  position: relative;\n}\n.icongouwuche1 span[data-v-7ecf04ae] {\n  position: absolute;\n  left: 0.186667rem;\n  top: -0.213333rem;\n  min-width: 0.386667rem;\n  height: 0.386667rem;\n  background-color: #e8001c;\n  color: #fff !important;\n  line-height: 0.386667rem;\n  text-align: center;\n  border-radius: 0.386667rem;\n  font-size: 0.266667rem;\n  padding: 0 0.053333rem;\n  box-sizing: border-box;\n}\n.nodata[data-v-7ecf04ae] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  background: #fff;\n  text-align: center;\n  color: #999;\n  font-size: 0.373333rem;\n}\n.nodata img[data-v-7ecf04ae] {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0.8rem;\n  width: 7.266667rem;\n}\n.has-error[data-v-7ecf04ae] {\n  border-color: #e8001c !important;\n}\n.mask[data-v-7ecf04ae] {\n  z-index: 999;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: rgba(0,0,0,0.65);\n}\n.zt_0[data-v-7ecf04ae] {\n  color: #666 !important;\n}\n.zt_1[data-v-7ecf04ae] {\n  color: #ffac00 !important;\n}\n.zt_2[data-v-7ecf04ae] {\n  color: #009207 !important;\n}\n.zt_3[data-v-7ecf04ae] {\n  color: #e8001c !important;\n}\n.border-bottom-1px[data-v-7ecf04ae]::after {\n  border: 0;\n}\n.cube-checkbox_checked .cube-checkbox-ui i[data-v-7ecf04ae] {\n  background: url("+a(t("bpH+"))+") no-repeat center center !important;\n  background-size: 100% 100% !important;\n  -webkit-transform: scale(1) !important;\n  transform: scale(1) !important;\n}\n.cube-checkbox_disabled .cube-checkbox-ui[data-v-7ecf04ae]::before {\n  border-color: transparent;\n}\n.ff-money[data-v-7ecf04ae] {\n  font-family: DINProM !important;\n}\n.index[data-v-7ecf04ae] {\n  width: 100%;\n  background-color: #f3f5fc;\n}\n.index .index-head[data-v-7ecf04ae] {\n  position: fixed;\n  top: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  height: 1.173333rem;\n  width: 100%;\n  box-sizing: border-box;\n  background: #fff;\n  padding: 0 0.4rem;\n  font-size: 0.426667rem;\n  line-height: 1.173333rem;\n  color: #121212;\n  z-index: 999;\n}\n.index .index-head span[data-v-7ecf04ae]:last-child {\n  font-size: 0.346667rem;\n}\n.index .content[data-v-7ecf04ae] {\n  margin-top: 1.173333rem;\n  overflow: hidden;\n}\n.index .content .zjmx-box[data-v-7ecf04ae] {\n  width: 9.626667rem;\n  height: 5.2rem;\n  margin: 0 auto;\n  margin-top: 0.32rem;\n  background: url("+a(t("ULrK"))+") no-repeat;\n  background-size: cover;\n  color: #fff;\n  overflow: hidden;\n}\n.index .content .zjmx-box .zjmx-t-c[data-v-7ecf04ae] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  margin-top: 0.933333rem;\n  margin-bottom: 0.666667rem;\n  overflow: hidden;\n}\n.index .content .zjmx-box .zjmx-t-c .zjmx-t-item[data-v-7ecf04ae] {\n  width: 50%;\n  text-align: center;\n}\n.index .content .zjmx-box .zjmx-t-c .zjmx-t-item strong[data-v-7ecf04ae] {\n  position: relative;\n  display: block;\n  font-size: 0.693333rem;\n  margin-bottom: 0.56rem;\n  line-height: 0.853333rem;\n  font-family: DINProM;\n}\n.index .content .zjmx-box .zjmx-t-c .zjmx-t-item .zjmx-item-02[data-v-7ecf04ae]:before {\n  position: absolute;\n  left: 0;\n  top: 0.213333rem;\n  content: '';\n  width: 0.026667rem;\n  height: 1.333333rem;\n  background: #fff;\n  opacity: 0.2;\n}\n.index .content .zjmx-box .zjmx-t-c .zjmx-t-item span[data-v-7ecf04ae] {\n  display: block;\n  font-size: 0.346667rem;\n}\n.index .content .zjmx-box p[data-v-7ecf04ae] {\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  white-space: nowrap;\n  width: 8.4rem;\n  height: 0.906667rem;\n  margin-left: 0.613333rem;\n  background-color: rgba(255,255,255,0.1);\n  text-indent: 0.32rem;\n  font-size: 0.32rem;\n  border-radius: 0.133333rem;\n  color: rgba(255,255,255,0.69);\n  line-height: 0.906667rem;\n}\n.msg[data-v-7ecf04ae] {\n  width: 9.2rem;\n  height: 2.133333rem;\n  padding: 0.613333rem 0.533333rem 0.4rem;\n  margin: 0 auto;\n  box-sizing: border-box;\n  line-height: 0.56rem;\n  color: #666;\n  font-size: 0.346667rem;\n  background: url("+a(t("X5xL"))+") left top no-repeat;\n  background-size: 100% 100%;\n}\n.copy[data-v-7ecf04ae] {\n  display: block;\n  width: 9.2rem;\n  height: 1.173333rem;\n  margin: 0 auto;\n  position: fixed;\n  bottom: 0.8rem;\n  left: 0;\n  right: 0;\n  background: -webkit-linear-gradient(top, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  background: linear-gradient(180deg, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  border-radius: 0.08rem;\n  color: #fff;\n  font-size: 0.426667rem;\n}",""])},pCrK:function(n,e,t){var a=t("BKOF");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals),t("rjj0")("39760a2f",a,!0,{})}});