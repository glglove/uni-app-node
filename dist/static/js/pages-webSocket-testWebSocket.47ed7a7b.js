(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-webSocket-testWebSocket"],{"0ab5":function(e,t,n){"use strict";n.r(t);var o=n("e8e2"),c=n("ae3c");for(var s in c)"default"!==s&&function(e){n.d(t,e,function(){return c[e]})}(s);var i=n("2877"),a=Object(i["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},6146:function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var c=o(n("3b8d")),s={onLoad:function(){this.connectSocketInit()},data:function(){return{socketTask:null,is_open_socket:!1}},beforeDestroy:function(){this.closeSocket()},methods:{connectSocketInit:function(){var e=this;this.socketTask=uni.connectSocket({url:"ws://119.28.180.110:9099/echo",success:function(e){console.log("websocket连接成功")}}),this.socketTask.onOpen(function(t){console.log("WebSocket连接正常打开中...！"),e.is_open_socket=!0,e.socketTask.send({data:"uni-app发送一条消息",success:function(){var e=(0,c.default)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log("消息发送成功");case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),e.socketTask.onMessage(function(e){console.log("收到服务器内容："+e.data)})}),this.socketTask.onClose(function(){console.log("已经被关闭了")})},closeSocket:function(){this.socketTask.close({success:function(e){this.is_open_socket=!1,console.log("关闭成功",e)},fail:function(e){console.log("关闭失败",e)}})},clickRequest:function(){this.is_open_socket&&this.socketTask.send({data:"请求一次发送一次message",success:function(){var e=(0,c.default)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log("消息发送成功");case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},leave:function(){this.$uniReLaunch("/pages/tabbar/wallet/wallet")}}};t.default=s},ae3c:function(e,t,n){"use strict";n.r(t);var o=n("6146"),c=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=c.a},e8e2:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("container",[n("v-uni-view",{attrs:{slot:"container-slot",id:"websockets"},slot:"container-slot"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.clickRequest(t)}}},[e._v("点击发送请求")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.leave(t)}}},[e._v("离开页面")])],1)],1)},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})}}]);