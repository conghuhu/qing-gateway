"use strict";(self.webpackChunk_ice_lite_scaffold=self.webpackChunk_ice_lite_scaffold||[]).push([[83],{505:function(t,n,e){e.r(n);var u=e(8208),r=e(1194),i=e(5859),o=e(5613),c=e(4548),s=e(6915),l=e(4821),f=e(3814),a=e(959),d=e(1503),h=e(9699);n.default=function(){var t,n=(0,d.QT)(h.Rh),e=n.data,p=n.loading,g=n.request,R=(0,d.QT)(h.ul),W=R.data,Y=R.request,y=(0,d.QT)(h.kM,{onSuccess:function(t){console.log(t)}}).request,Z=(t=(0,u.Z)(function(t){return(0,r.Jh)(this,function(n){switch(n.label){case 0:return[4,y(t)];case 1:return n.sent(),[4,Y()];case 2:return n.sent(),[2]}})}),function(n){return t.apply(this,arguments)});return(0,a.useEffect)(function(){(0,u.Z)(function(){return(0,r.Jh)(this,function(t){switch(t.label){case 0:return[4,Promise.all([g(),Y()])];case 1:return t.sent(),[2]}})})()},[]),(0,i.tZ)("div",{className:"site-card-wrapper",children:(0,i.tZ)(o.Z,{gutter:16,children:null==e?void 0:e.map(function(t,n){return(0,i.tZ)(c.Z,{span:8,children:t===W?(0,i.tZ)(s.Z.Ribbon,{text:"\u5F53\u524D\u9009\u62E9\u7684\u7B56\u7565",color:"blue",children:(0,i.tZ)(l.Z,{title:t,bordered:!0,hoverable:!0,style:{overflow:"hidden"},loading:p,children:"random"})}):(0,i.tZ)(f.Z,{title:"\u4F60\u786E\u5B9A\u8981\u66F4\u6539\u7B56\u7565\u5417",onConfirm:function(){return Z(t)},okText:"Yes",cancelText:"No",children:(0,i.tZ)(l.Z,{title:t,bordered:!0,hoverable:!0,style:{overflow:"hidden"},loading:p,children:"random"})})},n)})})})}},9699:function(t,n,e){e.d(n,{$p:function(){return h},Aw:function(){return Y},D1:function(){return a},Jo:function(){return k},Lv:function(){return w},MM:function(){return m},Rh:function(){return c},S1:function(){return L},V$:function(){return W},ch:function(){return p},d3:function(){return R},id:function(){return s},kM:function(){return b},mb:function(){return d},mc:function(){return C},n3:function(){return y},qM:function(){return f},r8:function(){return l},ul:function(){return Z},x4:function(){return o},yr:function(){return g}});var u=e(8208),r=e(1194),i=e(1503);function o(t){return i.WY.post("/auth/login",t)}function c(){return i.WY.get("/sys/getLoadBalance")}function s(){return i.WY.get("/routeRule/getRouteRuleList")}function l(t){return i.WY.delete("/routeRule/deleteRouteRule?id=".concat(t))}function f(){return i.WY.get("/nacosInfo/getServiceList")}function a(t){return i.WY.get("/nacosInfo/getServiceInstanceList?serviceId=".concat(t))}function d(t){return i.WY.post("/routeRule/addRouteRule",t)}function h(t){return i.WY.put("/routeRule/updateRouteRule",t)}function p(){return i.WY.get("/websocket-info/getWebsocketInfo")}function g(t){return i.WY.post("/sys/getInvokeLogs",t)}function R(){return i.WY.get("/limitRule/getLimitRuleList")}function W(t){return i.WY.delete("/limitRule/deleteLimitRule?id=".concat(t))}function Y(t){return i.WY.post("/limitRule/addLimitRule",t)}function y(t){return i.WY.put("/limitRule/updateLimitRule",t)}function Z(){return i.WY.get("/sys/getCurrentLoadBalance")}function b(t){return i.WY.put("/sys/changeLoadBalance?loadBalance=".concat(t))}function m(){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)(function(){return(0,r.Jh)(this,function(t){switch(t.label){case 0:return[4,i.WY.get("/sys/queryInitStatus")];case 1:return[2,t.sent()]}})})).apply(this,arguments)}function L(t){return i.WY.post("/sys/init",t)}function w(t){return i.WY.put("/nacosInfo/updateInstance",t)}function k(){return I.apply(this,arguments)}function I(){return(I=(0,u.Z)(function(){return(0,r.Jh)(this,function(t){switch(t.label){case 0:return[4,i.WY.get("/sys/getCurrentConfig")];case 1:return[2,t.sent()]}})})).apply(this,arguments)}function C(t){return i.WY.post("/sys/reset",t)}}}]);