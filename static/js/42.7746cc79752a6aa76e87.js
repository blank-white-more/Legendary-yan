webpackJsonp([42],{"8sJ8":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t("vR+E");var a={data:function(){return{zdy:"自定义搜索",zjmxList:[],showTag:!1,currentIndex:-1,nodataH:0,where:{zt:0,sou:""},curHeight:0,options:{pullDownRefresh:{threshold:60,stop:40,txt:"刷新成功"},pullUpLoad:{threshold:0,txt:{more:"加载更多",noMore:"－ 我是有底线的 －"}}},page:1}},activated:function(){this.showTag=!1},created:function(){var n=this;n.curHeight=document.documentElement.clientHeight-44+"px",n.nodataH=document.documentElement.clientHeight+"px",n.where.zt=n.$route.query.zt||0,n.getData(n.where),document.onclick=function(){n.showTag=!1}},mounted:function(){},methods:{onPullingDown:function(){var n=this;setTimeout(function(){n.page=1,n.getData(n.where),n.$refs.scroll.forceUpdate()},1e3)},onPullingUp:function(){var n=this;setTimeout(function(){n.page++,n.$axios.post(n.$domain+"/user_yhq/get_myyhq_list",{sou:n.where.sou,page:n.page}).then(function(e){e.data.data.length?e.data.data.map(function(e){n.zjmxList.push(e)}):(n.$refs.scroll.forceUpdate(),n.page--)})},1e3)},search:function(){this.getData(this.where)},getData:function(n){var e=this;e.$axios.post(e.$domain+"/user_yhq/get_myyhq_list",n).then(function(n){var t=n.data;e.zjmxList=t.data,e.zjmxList.length&&e.zjmxList.map(function(n){1==n.sylx?n.sylxurl="/domain_register":2==n.sylx?n.sylxurl="/domain_renew":3==n.sylx?n.sylxurl="/domain_zr":10==n.sylx&&(n.sylxurl="/domain_ruku")})})}}},i=t("VU/8")(a,{render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"index"},[t("div",{ref:"box",staticClass:"index-head"},[t("i",{staticClass:"iconfont iconxiangzuo",on:{click:function(e){return n.$router.back(-1)}}}),n._v(" "),t("div",{staticClass:"centerSearch"},[t("cube-input",{staticClass:"head-search",attrs:{placeholder:"请输入您要搜索的券码"},model:{value:n.where.sou,callback:function(e){n.$set(n.where,"sou",e)},expression:"where.sou"}}),n.where.sou?t("i",{staticClass:"iconfont iconguanbi2",on:{click:function(e){n.where.sou=""}}}):n._e()],1),n._v(" "),t("span",{staticClass:"text-8187A1",on:{click:n.search}},[n._v("搜索")])]),n._v(" "),n.zjmxList.length>0?t("div",{staticClass:"content"},[t("div",{ref:"box1",staticClass:"tab-slide-container"},[t("ul",{staticClass:"pannel"},[t("div",{style:{height:n.curHeight}},[t("cube-scroll",{ref:"scroll",attrs:{options:n.options,data:n.zjmxList},on:{"pulling-down":n.onPullingDown,"pulling-up":n.onPullingUp}},n._l(n.zjmxList,function(e,a){return t("li",{key:a},[t("h5",[t("strong",[n._v(n._s(e.lxstr))]),t("span",[t("span",{class:[0==e.zt?"text-right":1==e.zt?"zt_1":"text-danger"]},[n._v(n._s(e.ztstr))])])]),n._v(" "),t("div",{staticClass:"my-wt"},[t("p",[n._v("使用顺序："),t("span",{staticClass:"dj"},[n._v(n._s(a+1))]),n._v("来  源："),t("span",[n._v(n._s(e.lystr))])]),n._v(" "),t("p",[n._v("未  使 用："),t("span",{staticClass:"dj"},[n._v(n._s(e.sl))]),n._v("已使用："),t("span",[n._v(n._s(e.sysl))])]),n._v(" "),t("p",[n._v("使用方式："),t("span",[n._v(n._s(e.yhsm))])]),n._v(" "),t("p",[n._v("开始时间："),t("span",[n._v(n._s(e.sj))])]),n._v(" "),t("p",[n._v("截止时间："+n._s(e.dqsj))])]),n._v(" "),t("div",{staticClass:"cz-box"},[0==e.zt?t("button",{attrs:{type:"button"},on:{click:function(t){return n.$router.push(e.sylxurl)}}},[n._v("立即使用")]):n._e(),n._v(" "),t("button",{attrs:{type:"button"},on:{click:function(t){n.$router.push("/user/yhq_xq?id="+e.id+"&px="+(a+1))}}},[n._v("查看详情")])])])}),0)],1)])])]):t("div",{staticClass:"nodata",style:{height:n.nodataH}},[t("img",{attrs:{src:n.ossUrl("nodata.png"),alt:""}}),n._v(" "),t("p",[n._v("暂无数据~")])])])},staticRenderFns:[]},!1,function(n){t("p7O2")},"data-v-c2eb4fce",null);e.default=i.exports},Diej:function(n,e,t){var a=t("kxFB");(n.exports=t("FZ+f")(!1)).push([n.i,"\nbody[data-v-c2eb4fce],\nhtml[data-v-c2eb4fce] {\n  background: #fff;\n  color: #333;\n  height: 100%;\n}\ninput[data-v-c2eb4fce],\nbutton[data-v-c2eb4fce] {\n  overflow: visible;\n  vertical-align: middle;\n  outline: none;\n  border: 0;\n}\n.cube-btn.cube-btn_active[data-v-c2eb4fce],\n.cube-btn[data-v-c2eb4fce]:active {\n  background: -webkit-linear-gradient(top, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  background: linear-gradient(180deg, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  opacity: 0.8;\n}\n.text-danger[data-v-c2eb4fce] {\n  color: #e8001c !important;\n}\n.text-B40000[data-v-c2eb4fce] {\n  color: #b40000 !important;\n}\n.text-pink[data-v-c2eb4fce] {\n  color: #d21095 !important;\n}\n.text-right[data-v-c2eb4fce] {\n  color: #009207 !important;\n}\n.text-orange[data-v-c2eb4fce] {\n  color: #e49a00 !important;\n}\n.text-8187A1[data-v-c2eb4fce] {\n  color: #8187a1 !important;\n}\n.text-0002FF[data-v-c2eb4fce] {\n  color: #0002ff !important;\n}\n.text-333333[data-v-c2eb4fce] {\n  color: #333 !important;\n}\n.text-normal[data-v-c2eb4fce] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-c2eb4fce] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-c2eb4fce]:active {\n  color: #3464ff !important;\n}\n.cube-picker-title[data-v-c2eb4fce] {\n  color: #121212;\n  font-size: 0.426667rem;\n}\n.iconfanhui[data-v-c2eb4fce] {\n  width: 1.386667rem;\n}\n.g_input[data-v-c2eb4fce],\n.cube-select[data-v-c2eb4fce] {\n  width: 100%;\n  height: 1.04rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  text-indent: 0.4rem;\n  color: #333;\n  font-size: 0.4rem;\n  box-sizing: border-box;\n}\n.g_textarea[data-v-c2eb4fce] {\n  display: block;\n  padding: 0.253333rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  height: 2.933333rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  color: #333;\n  font-size: 0.373333rem;\n  resize: none;\n  line-height: 0.64rem;\n}\n.g_textarea1[data-v-c2eb4fce] {\n  margin-top: 0.32rem;\n}\n.g_button_submit[data-v-c2eb4fce] {\n  display: block;\n  margin-top: 0.8rem;\n  font-size: 0.373333rem;\n  width: 100%;\n  height: 1.173333rem;\n  background: -webkit-linear-gradient(top, #6096ff 0%, #003bfc 100%);\n  background: linear-gradient(180deg, #6096ff 0%, #003bfc 100%);\n  box-shadow: 0 0.08rem 0.16rem 0 rgba(0,54,249,0.3);\n  border-radius: 0.08rem;\n  line-height: 1.173333rem;\n  text-align: center;\n  color: #fff;\n}\n.g_input[data-v-c2eb4fce]::-webkit-input-placeholder,\n.g_textarea[data-v-c2eb4fce]::-webkit-input-placeholder {\n  color: #8187a1;\n  font-size: 0.4rem;\n}\n.fr[data-v-c2eb4fce] {\n  float: right;\n}\n.fl[data-v-c2eb4fce] {\n  float: left;\n}\n.clear[data-v-c2eb4fce] {\n  zoom: 1;\n}\n.clear[data-v-c2eb4fce]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.xieyi[data-v-c2eb4fce] {\n  font-size: 0.32rem;\n}\n.xieyi a[data-v-c2eb4fce] {\n  color: #3464ff;\n}\n.xieyi .cube-checkbox-wrap[data-v-c2eb4fce] {\n  margin-top: 0.466667rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n.icongouwuche1[data-v-c2eb4fce] {\n  position: relative;\n}\n.icongouwuche1 span[data-v-c2eb4fce] {\n  position: absolute;\n  left: 0.186667rem;\n  top: -0.213333rem;\n  min-width: 0.386667rem;\n  height: 0.386667rem;\n  background-color: #e8001c;\n  color: #fff !important;\n  line-height: 0.386667rem;\n  text-align: center;\n  border-radius: 0.386667rem;\n  font-size: 0.266667rem;\n  padding: 0 0.053333rem;\n  box-sizing: border-box;\n}\n.nodata[data-v-c2eb4fce] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  background: #fff;\n  text-align: center;\n  color: #999;\n  font-size: 0.373333rem;\n}\n.nodata img[data-v-c2eb4fce] {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0.8rem;\n  width: 7.266667rem;\n}\n.has-error[data-v-c2eb4fce] {\n  border-color: #e8001c !important;\n}\n.mask[data-v-c2eb4fce] {\n  z-index: 999;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: rgba(0,0,0,0.65);\n}\n.zt_0[data-v-c2eb4fce] {\n  color: #666 !important;\n}\n.zt_1[data-v-c2eb4fce] {\n  color: #ffac00 !important;\n}\n.zt_2[data-v-c2eb4fce] {\n  color: #009207 !important;\n}\n.zt_3[data-v-c2eb4fce] {\n  color: #e8001c !important;\n}\n.border-bottom-1px[data-v-c2eb4fce]::after {\n  border: 0;\n}\n.cube-checkbox_checked .cube-checkbox-ui i[data-v-c2eb4fce] {\n  background: url("+a(t("bpH+"))+") no-repeat center center !important;\n  background-size: 100% 100% !important;\n  -webkit-transform: scale(1) !important;\n  transform: scale(1) !important;\n}\n.cube-checkbox_disabled .cube-checkbox-ui[data-v-c2eb4fce]::before {\n  border-color: transparent;\n}\n.ff-money[data-v-c2eb4fce] {\n  font-family: DINProM !important;\n}\n.cube-input[data-v-c2eb4fce] {\n  width: 7.426667rem;\n  height: 0.773333rem;\n  border-radius: 1.333333rem;\n}\n[data-v-c2eb4fce] .cube-input-field {\n  display: block;\n  padding: 0;\n  padding-left: 0.826667rem;\n  width: 7.426667rem;\n  height: 0.853333rem;\n  background: #fff url("+a(t("j3d9"))+") no-repeat 0.32rem;\n  background-size: 0.32rem;\n  border-radius: 1.333333rem;\n  border: 0.026667rem solid #e1e6f0;\n  box-sizing: border-box;\n  font-size: 0.32rem;\n  line-height: 0.773333rem;\n  color: #c6cadd;\n}\n.cube-input[data-v-c2eb4fce]::after {\n  border: 0;\n}\n.index[data-v-c2eb4fce] {\n  width: 100%;\n  background-color: #f3f5fc;\n}\n.index .index-head[data-v-c2eb4fce] {\n  position: fixed;\n  top: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  height: 1.173333rem;\n  width: 100%;\n  box-sizing: border-box;\n  background: #fff;\n  padding: 0 0.4rem;\n  font-size: 0.426667rem;\n  line-height: 1.173333rem;\n  color: #121212;\n  z-index: 999;\n}\n.index .index-head span[data-v-c2eb4fce]:last-child {\n  font-size: 0.346667rem;\n}\n.index .content[data-v-c2eb4fce] {\n  margin-top: 1.173333rem;\n  overflow: hidden;\n}\n.index .content .pannel[data-v-c2eb4fce] {\n  width: 9.2rem;\n  margin: 0 auto;\n}\n.index .content .pannel[data-v-c2eb4fce] .cube-scroll-content {\n  padding-top: 0.266667rem;\n}\n.index .content .pannel li[data-v-c2eb4fce] {\n  background-color: #fff;\n  padding: 0.4rem 0.4rem 0.32rem;\n  margin-bottom: 0.4rem;\n  padding-top: 0;\n  box-sizing: border-box;\n  border-radius: 0.106667rem;\n}\n.index .content .pannel li h5[data-v-c2eb4fce] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  height: 1.173333rem;\n  margin-bottom: 0.333333rem;\n  border-bottom: 0.026667rem dashed #e1e6f0;\n  font-size: 0.4rem;\n}\n.index .content .pannel li h5 strong[data-v-c2eb4fce] {\n  font-size: 0.4rem;\n  color: #333;\n  font-weight: 700;\n}\n.index .content .pannel li h5 span[data-v-c2eb4fce] {\n  font-size: 0.346667rem;\n  color: #8187a1;\n}\n.index .content .pannel li .dj[data-v-c2eb4fce] {\n  display: inline-block;\n  width: 4rem;\n}\n.index .content .pannel li p[data-v-c2eb4fce] {\n  word-break: break-all;\n  line-height: 0.666667rem;\n  color: #8187a1;\n  font-size: 0.346667rem;\n  white-space: initial;\n}\n.index .content .pannel .cz-box[data-v-c2eb4fce] {\n  margin-top: 0.266667rem;\n  padding-top: 0.266667rem;\n  border-top: 0.026667rem dashed #e1e6f0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.index .content .pannel .cz-box button[data-v-c2eb4fce] {\n  padding: 0 0.346667rem;\n  height: 0.746667rem;\n  background-color: #f7f9ff;\n  border-radius: 0.08rem;\n  color: #3464ff;\n  line-height: 0.746667rem;\n  text-align: center;\n  font-size: 0.346667rem;\n  margin-right: 0.4rem;\n}\n.zjmx-box[data-v-c2eb4fce] {\n  width: 9.626667rem;\n  height: 5.2rem;\n  margin: 0 auto;\n  margin-top: 0.32rem;\n  background: url("+a(t("ULrK"))+") no-repeat;\n  background-size: cover;\n  color: #fff;\n  overflow: hidden;\n}\n.zjmx-box h5[data-v-c2eb4fce] {\n  margin-top: 0.613333rem;\n  line-height: 0.4rem;\n}\n.zjmx-box h5 span[data-v-c2eb4fce] {\n  margin-left: 0.613333rem;\n  border-left: 0.08rem solid #fff;\n  padding-left: 0.266667rem;\n  color: #fff;\n  font-size: 0.4rem;\n  line-height: 0.4rem;\n}\n.zjmx-box .zjmx-t-c[data-v-c2eb4fce] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  margin: 0.533333rem 0;\n  margin-left: 0.613333rem;\n  overflow: hidden;\n}\n.zjmx-box .zjmx-t-c .zjmx-t-item[data-v-c2eb4fce] {\n  margin-right: 0.533333rem;\n}\n.zjmx-box .zjmx-t-c strong[data-v-c2eb4fce] {\n  display: block;\n  font-size: 0.533333rem;\n  line-height: 0.666667rem;\n  margin-bottom: 0.346667rem;\n}\n.zjmx-box .zjmx-t-c span[data-v-c2eb4fce] {\n  display: block;\n  font-size: 0.32rem;\n}\n.zjmx-box p[data-v-c2eb4fce] {\n  width: 8.4rem;\n  height: 0.906667rem;\n  margin-left: 0.613333rem;\n  background-color: rgba(255,255,255,0.1);\n  text-indent: 0.32rem;\n  font-size: 0.32rem;\n  border-radius: 0.133333rem;\n  color: #fff;\n  line-height: 0.906667rem;\n}\n[data-v-c2eb4fce] .cube-pullup-wrapper {\n  font-size: 0.32rem;\n}\n[data-v-c2eb4fce] .cube-pullup-wrapper .before-trigger {\n  padding: 0.533333rem 0 0.933333rem;\n}\n[data-v-c2eb4fce] .cube-pullup-wrapper span {\n  color: #8187a1;\n}",""])},p7O2:function(n,e,t){var a=t("Diej");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals),t("rjj0")("0d407822",a,!0,{})}});