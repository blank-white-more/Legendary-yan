webpackJsonp([215],{"Ruo/":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{pathList:[{path:"/pl_zr",icon:"iconpiliangzhuanru",txt:"批量转入"},{path:"/price2",icon:"iconxufeijiage",txt:"转入价格"}],showTag:!1,nodataH:0,list:[],items:[],currentIndex:0,ztId:null,curHeight:0,options:{pullDownRefresh:{threshold:60,stop:40,txt:"刷新成功"},pullUpLoad:{threshold:0,txt:{more:"加载更多",noMore:"－ 我是有底线的 －"}}},page:1}},activated:function(){this.showTag=!1},created:function(){var n=this;document.onclick=function(){n.showTag=!1},n.$axios.post(n.$domain+"/user_ym/get_zr_xm").then(function(e){var t=e.data;for(var a in t.data.zt)n.items.push({txt:t.data.zt[a],value:a});n.items.unshift({txt:"全部",value:""})}),n.getData()},mounted:function(){this.curHeight=document.documentElement.clientHeight-88-30+"px",this.nodataH=document.documentElement.clientHeight-88-15+"px"},methods:{scrollHandler:function(){this.showTag=!1},onPullingDown:function(){var n=this;setTimeout(function(){n.page=1,n.getData(n.where),n.$refs.scroll.forceUpdate()},1e3)},onPullingUp:function(){var n=this;setTimeout(function(){n.page++,n.$axios.post(n.$domain+"/user_ym/get_zr_list",{zt:n.ztId,page:n.page}).then(function(e){e.data.data.length?e.data.data.map(function(e){n.zjmxList.push(e)}):(n.$refs.scroll.forceUpdate(),n.page--)})},1e3)},gx:function(n){var e=this;e.$axios.post(e.$domain+"/user_ym/do_zr",{id:n}).then(function(n){var t=n.data;e.$createToast({txt:t.msg,type:"txt",time:1500}).show(),1==__data.code&&e.getData(e.items[e.currentIndex].value)})},changeTab:function(n){n.stopPropagation(),this.showTag=!this.showTag},getData:function(n){var e=this;e.$axios.post(e.$domain+"/user_ym/get_zr_list",{zt:n}).then(function(n){var t=n.data;e.list=t.data})},changeZt:function(n,e){this.getData(n),this.currentIndex=e,this.scrollTo(e)},scrollTo:function(n){n!=this.items.length-1&&this.$refs.scroll1.scrollTo(10*-n,0,500)}}},i=t("VU/8")(a,{render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"index"},[t("gn-header",{ref:"box",attrs:{title:"我的转入",pathList:n.pathList,top:!0,type:"5",ty:!1},on:{search:function(e){return n.$router.push("./zr_search")}}}),n._v(" "),t("div",{staticClass:"content"},[t("cube-scroll",{ref:"scroll1",staticClass:"horizontal-scroll-list-wrap",attrs:{data:n.items,direction:"horizontal"}},[t("ul",{staticClass:"list-wrapper"},n._l(n.items,function(e,a){return t("li",{key:a,class:["list-item",n.currentIndex==a?"active":""],on:{click:function(t){return n.changeZt(e.value,a)}}},[n._v(n._s(e.txt))])}),0)]),n._v(" "),t("div",{ref:"box1",staticClass:"tab-slide-container"},[n.list.length>0?t("ul",{staticClass:"pannel"},[t("div",{style:{height:n.curHeight}},[t("cube-scroll",{ref:"scroll",attrs:{options:n.options,data:n.list,scrollEvents:["scroll"]},on:{"pulling-down":n.onPullingDown,"pulling-up":n.onPullingUp,scroll:n.scrollHandler}},n._l(n.list,function(e,a){return t("li",{key:a},[t("h5",[t("strong",[n._v(n._s(e.ym))]),t("span",{class:[0==e.zt?"text-orange":1==e.zt?"text-right":"text-danger"]},[n._v(n._s(e.ztstr))])]),n._v(" "),t("div",{staticClass:"my-wt"},[t("p",[n._v("登 记 时 间："),t("span",[n._v(n._s(e.sj))])]),n._v(" "),t("p",[n._v("费用："),t("span",{staticClass:"text-danger"},[n._v("$"+n._s(e.qian))])]),n._v(" "),t("p",[n._v("所有者邮箱："),t("span",[n._v(n._s(e.whoisemail))])]),n._v(" "),0!=e.zt?t("p",[n._v("操　　　作：--")]):n._e()]),n._v(" "),0==e.zt?t("div",{staticClass:"my-cz"},[t("p",[t("span",{staticClass:"text-normal",on:{click:function(t){return n.gx(e.id)}}},[n._v("状态更新")])])]):n._e()])}),0)],1)]):t("div",{staticClass:"nodata",style:{height:n.nodataH}},[t("img",{attrs:{src:n.ossUrl("nodata.png"),alt:""}}),n._v(" "),t("p",[n._v("暂无数据~")])])])],1)],1)},staticRenderFns:[]},!1,function(n){t("omM5")},"data-v-08bded92",null);e.default=i.exports},eKKo:function(n,e,t){var a=t("kxFB");(n.exports=t("FZ+f")(!1)).push([n.i,"\nbody[data-v-08bded92],\nhtml[data-v-08bded92] {\n  background: #fff;\n  color: #333;\n  height: 100%;\n}\ninput[data-v-08bded92],\nbutton[data-v-08bded92] {\n  overflow: visible;\n  vertical-align: middle;\n  outline: none;\n  border: 0;\n}\n.cube-btn.cube-btn_active[data-v-08bded92],\n.cube-btn[data-v-08bded92]:active {\n  background: -webkit-linear-gradient(top, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  background: linear-gradient(180deg, #3d7fff 0%, #0053fc 64%, #003bfc 100%);\n  opacity: 0.8;\n}\n.text-danger[data-v-08bded92] {\n  color: #e8001c !important;\n}\n.text-B40000[data-v-08bded92] {\n  color: #b40000 !important;\n}\n.text-pink[data-v-08bded92] {\n  color: #d21095 !important;\n}\n.text-right[data-v-08bded92] {\n  color: #009207 !important;\n}\n.text-orange[data-v-08bded92] {\n  color: #e49a00 !important;\n}\n.text-8187A1[data-v-08bded92] {\n  color: #8187a1 !important;\n}\n.text-0002FF[data-v-08bded92] {\n  color: #0002ff !important;\n}\n.text-333333[data-v-08bded92] {\n  color: #333 !important;\n}\n.text-normal[data-v-08bded92] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-08bded92] {\n  color: #3464ff !important;\n}\n.cube-picker-confirm[data-v-08bded92]:active {\n  color: #3464ff !important;\n}\n.cube-picker-title[data-v-08bded92] {\n  color: #121212;\n  font-size: 0.426667rem;\n}\n.iconfanhui[data-v-08bded92] {\n  width: 1.386667rem;\n}\n.g_input[data-v-08bded92],\n.cube-select[data-v-08bded92] {\n  width: 100%;\n  height: 1.04rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  text-indent: 0.4rem;\n  color: #333;\n  font-size: 0.4rem;\n  box-sizing: border-box;\n}\n.g_textarea[data-v-08bded92] {\n  display: block;\n  padding: 0.253333rem 0.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  height: 2.933333rem;\n  background: #fff;\n  border-radius: 0.08rem;\n  border: 0.026667rem solid #e1e6f0;\n  color: #333;\n  font-size: 0.373333rem;\n  resize: none;\n  line-height: 0.64rem;\n}\n.g_textarea1[data-v-08bded92] {\n  margin-top: 0.32rem;\n}\n.g_button_submit[data-v-08bded92] {\n  display: block;\n  margin-top: 0.8rem;\n  font-size: 0.373333rem;\n  width: 100%;\n  height: 1.173333rem;\n  background: -webkit-linear-gradient(top, #6096ff 0%, #003bfc 100%);\n  background: linear-gradient(180deg, #6096ff 0%, #003bfc 100%);\n  box-shadow: 0 0.08rem 0.16rem 0 rgba(0,54,249,0.3);\n  border-radius: 0.08rem;\n  line-height: 1.173333rem;\n  text-align: center;\n  color: #fff;\n}\n.g_input[data-v-08bded92]::-webkit-input-placeholder,\n.g_textarea[data-v-08bded92]::-webkit-input-placeholder {\n  color: #8187a1;\n  font-size: 0.4rem;\n}\n.fr[data-v-08bded92] {\n  float: right;\n}\n.fl[data-v-08bded92] {\n  float: left;\n}\n.clear[data-v-08bded92] {\n  zoom: 1;\n}\n.clear[data-v-08bded92]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.xieyi[data-v-08bded92] {\n  font-size: 0.32rem;\n}\n.xieyi a[data-v-08bded92] {\n  color: #3464ff;\n}\n.xieyi .cube-checkbox-wrap[data-v-08bded92] {\n  margin-top: 0.466667rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n.icongouwuche1[data-v-08bded92] {\n  position: relative;\n}\n.icongouwuche1 span[data-v-08bded92] {\n  position: absolute;\n  left: 0.186667rem;\n  top: -0.213333rem;\n  min-width: 0.386667rem;\n  height: 0.386667rem;\n  background-color: #e8001c;\n  color: #fff !important;\n  line-height: 0.386667rem;\n  text-align: center;\n  border-radius: 0.386667rem;\n  font-size: 0.266667rem;\n  padding: 0 0.053333rem;\n  box-sizing: border-box;\n}\n.nodata[data-v-08bded92] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  background: #fff;\n  text-align: center;\n  color: #999;\n  font-size: 0.373333rem;\n}\n.nodata img[data-v-08bded92] {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0.8rem;\n  width: 7.266667rem;\n}\n.has-error[data-v-08bded92] {\n  border-color: #e8001c !important;\n}\n.mask[data-v-08bded92] {\n  z-index: 999;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: rgba(0,0,0,0.65);\n}\n.zt_0[data-v-08bded92] {\n  color: #666 !important;\n}\n.zt_1[data-v-08bded92] {\n  color: #ffac00 !important;\n}\n.zt_2[data-v-08bded92] {\n  color: #009207 !important;\n}\n.zt_3[data-v-08bded92] {\n  color: #e8001c !important;\n}\n.border-bottom-1px[data-v-08bded92]::after {\n  border: 0;\n}\n.cube-checkbox_checked .cube-checkbox-ui i[data-v-08bded92] {\n  background: url("+a(t("bpH+"))+") no-repeat center center !important;\n  background-size: 100% 100% !important;\n  -webkit-transform: scale(1) !important;\n  transform: scale(1) !important;\n}\n.cube-checkbox_disabled .cube-checkbox-ui[data-v-08bded92]::before {\n  border-color: transparent;\n}\n.ff-money[data-v-08bded92] {\n  font-family: DINProM !important;\n}\n.index[data-v-08bded92] {\n  width: 100%;\n  background-color: #f3f5fc;\n}\n.index .index-head[data-v-08bded92] {\n  position: fixed;\n  top: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  height: 1.173333rem;\n  width: 100%;\n  box-sizing: border-box;\n  background: #fff;\n  padding: 0 0.4rem;\n  font-size: 0.426667rem;\n  line-height: 1.173333rem;\n  color: #121212;\n  z-index: 999;\n}\n.index .index-head span[data-v-08bded92]:last-child {\n  font-size: 0.346667rem;\n}\n.index .content[data-v-08bded92] {\n  margin-top: 1.173333rem;\n  overflow: hidden;\n}\n.pannel[data-v-08bded92] {\n  width: 9.2rem;\n  margin: 0 auto;\n  margin-top: 0.4rem;\n}\n.pannel li[data-v-08bded92] {\n  background-color: #fff;\n  padding: 0.4rem 0.4rem 0.32rem;\n  margin-bottom: 0.4rem;\n  padding-top: 0;\n  box-sizing: border-box;\n  border-radius: 0.106667rem;\n}\n.pannel li h5[data-v-08bded92] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n  height: 1.173333rem;\n  line-height: 1.173333rem;\n  margin-bottom: 0.32rem;\n  border-bottom: 0.026667rem dashed #e1e6f0;\n  font-size: 0.4rem;\n}\n.pannel li h5 b[data-v-08bded92] {\n  padding: 0 0.266667rem;\n  color: #e5e5e5;\n}\n.pannel li h5 strong[data-v-08bded92] {\n  font-size: 0.4rem;\n  color: #333;\n  font-weight: 700;\n  max-width: 6.4rem;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  white-space: nowrap;\n}\n.pannel li h5 span[data-v-08bded92] {\n  font-size: 0.346667rem;\n  color: #999;\n}\n.pannel li h5 span i[data-v-08bded92] {\n  font-size: 0.32rem;\n  color: #999;\n}\n.pannel li .dj[data-v-08bded92] {\n  display: inline-block;\n  width: 3.466667rem;\n}\n.pannel li p[data-v-08bded92] {\n  word-break: break-all;\n  line-height: 0.666667rem;\n  color: #8187a1;\n  font-size: 0.346667rem;\n  white-space: initial;\n}\n.pannel li .my-cz[data-v-08bded92] {\n  margin-top: 0.32rem;\n  padding-top: 0.32rem;\n  border-top: 0.026667rem dashed #e1e6f0;\n}\n.pannel li .my-cz span[data-v-08bded92] {\n  display: inline-block;\n  padding: 0 0.346667rem;\n  line-height: 0.746667rem;\n  background: #f7f9ff;\n  border-radius: 0.08rem;\n  color: #3464ff;\n  font-size: 0.346667rem;\n  text-align: center;\n}\n.cz-box[data-v-08bded92] {\n  margin-top: 0.266667rem;\n  border-top: 0.026667rem solid #e1e6f0;\n}\n.cz-box button[data-v-08bded92] {\n  padding: 0 0.346667rem;\n  height: 0.746667rem;\n  background-color: #f7f9ff;\n  border-radius: 0.08rem;\n  color: #3464ff;\n  line-height: 0.746667rem;\n  text-align: center;\n}\n.nodata[data-v-08bded92] {\n  margin-top: 0.266667rem;\n}\n.horizontal-scroll-list-wrap[data-v-08bded92] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  height: 1.173333rem;\n  line-height: 0.586667rem;\n  background-color: #fff;\n}\n[data-v-08bded92] .cube-scroll-content {\n  display: inline-block;\n}\n.list-wrapper[data-v-08bded92] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  height: 1.173333rem;\n  line-height: 1.173333rem;\n  white-space: nowrap;\n  margin-left: 0.533333rem;\n}\n.list-item[data-v-08bded92] {\n  margin: 0 0.426667rem;\n  display: inline-block;\n  font-size: 0.373333rem;\n  color: #333;\n}\n.list-item a[data-v-08bded92] {\n  color: #333;\n}\n.list-item.active[data-v-08bded92] {\n  position: relative;\n  color: #3464ff;\n  font-weight: 700;\n}\n.list-item.active a[data-v-08bded92] {\n  color: #3464ff;\n}\n.list-item.active[data-v-08bded92]::after {\n  position: absolute;\n  display: block;\n  content: '';\n  width: 0.693333rem;\n  height: 0.08rem;\n  background: #3464ff;\n  bottom: 0.12rem;\n  left: 50%;\n  margin-left: -0.346667rem;\n  border-radius: 1.333333rem;\n}\n.list-wrapper .list-item[data-v-08bded92]:first-child {\n  margin-left: 0.933333rem;\n}\n[data-v-08bded92] .cube-pullup-wrapper {\n  font-size: 0.32rem;\n}\n[data-v-08bded92] .cube-pullup-wrapper .before-trigger {\n  padding: 0.533333rem 0 0.933333rem;\n}\n[data-v-08bded92] .cube-pullup-wrapper span {\n  color: #8187a1;\n}\n.pannel[data-v-08bded92] .cube-scroll-content {\n  width: 100%;\n}",""])},omM5:function(n,e,t){var a=t("eKKo");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals),t("rjj0")("b275b920",a,!0,{})}});