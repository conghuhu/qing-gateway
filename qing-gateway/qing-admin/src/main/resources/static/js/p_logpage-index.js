(self.webpackChunk_ice_lite_scaffold=self.webpackChunk_ice_lite_scaffold||[]).push([[317],{6509:function(t){t.exports={headContainer:"headContainer--QAOIlv7n",button:"button--TvpC9zyn"}},4090:function(t,n,e){"use strict";e.r(n);var r=e(8208),u=e(1194),i=e(5859),c=e(959),o=e(9699),a=e(1503),l=e(4193),s=e(6720),f=e(6509),d=e.n(f),g=l.Z.Column,h=s.Z.Search;n.default=function(){var t,n,e,s,f=this,p=(0,a.QT)(o.yr,{}),I=p.data,y=p.loading,W=p.request,R={pageNum:1,pageSize:10,content:""};return(0,c.useEffect)(function(){(0,r.Z)(function(){return(0,u.Jh)(this,function(t){switch(t.label){case 0:return[4,W(R)];case 1:return t.sent(),[2]}})})()},[]),(0,i.BX)("div",{children:[(0,i.tZ)("div",{className:d().headContainer,children:(0,i.tZ)(h,{placeholder:"\u8BF7\u8F93\u5165\u6E90IP",onSearch:(t=(0,r.Z)(function(t){return(0,u.Jh)(this,function(n){switch(n.label){case 0:return R.content=t,[4,W(R)];case 1:return n.sent(),[2]}})}),function(n){return t.apply(this,arguments)}),onChange:(n=(0,r.Z)(function(t){return(0,u.Jh)(this,function(n){switch(n.label){case 0:return console.log(t),R.content=t.target.value,[4,W(R)];case 1:return n.sent(),[2]}})}),e=function(t){return n.apply(this,arguments)},s=null,function(t){s&&clearTimeout(s),s=setTimeout(function(){e.call(f,t)},500)}),style:{width:200}})}),(0,i.BX)(l.Z,{dataSource:null==I?void 0:I.data,loading:y,rowKey:function(t){return t.id},pagination:{defaultCurrent:1,total:null==I?void 0:I.total,pageSize:null==I?void 0:I.pageSize,onChange:function(t,n){return(0,r.Z)(function(){return(0,u.Jh)(this,function(e){switch(e.label){case 0:return[4,W({pageNum:t,pageSize:n,content:""})];case 1:return e.sent(),[2]}})})()}},children:[(0,i.tZ)(g,{title:"\u6E90IP",dataIndex:"originIP",align:"center"},"originIP"),(0,i.tZ)(g,{title:"\u6E90\u8BBF\u95EE\u8DEF\u5F84",dataIndex:"originuri",align:"center"},"originuri"),(0,i.tZ)(g,{title:"\u4EE3\u7406uri",dataIndex:"proxyuri",align:"center"},"proxyuri"),(0,i.tZ)(g,{title:"\u8DEF\u7531\u65AD\u8A00",dataIndex:"routeName",align:"center"},"routeName"),(0,i.tZ)(g,{title:"\u76EE\u6807\u670D\u52A1",dataIndex:"targetService",align:"center"},"targetService"),(0,i.tZ)(g,{title:"\u76EE\u6807\u670D\u52A1\u5B9E\u4F8B",dataIndex:"serviceInstance",align:"center"},"serviceInstance"),(0,i.tZ)(g,{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdTime",align:"center"},"createdTime")]})]})}},9699:function(t,n,e){"use strict";e.d(n,{$p:function(){return g},Aw:function(){return W},D1:function(){return f},Jo:function(){return L},Lv:function(){return C},MM:function(){return v},Rh:function(){return o},S1:function(){return b},V$:function(){return y},ch:function(){return h},d3:function(){return I},id:function(){return a},kM:function(){return m},mb:function(){return d},mc:function(){return w},n3:function(){return R},qM:function(){return s},r8:function(){return l},ul:function(){return Y},x4:function(){return c},yr:function(){return p}});var r=e(8208),u=e(1194),i=e(1503);function c(t){return i.WY.post("/auth/login",t)}function o(){return i.WY.get("/sys/getLoadBalance")}function a(){return i.WY.get("/routeRule/getRouteRuleList")}function l(t){return i.WY.delete("/routeRule/deleteRouteRule?id=".concat(t))}function s(){return i.WY.get("/nacosInfo/getServiceList")}function f(t){return i.WY.get("/nacosInfo/getServiceInstanceList?serviceId=".concat(t))}function d(t){return i.WY.post("/routeRule/addRouteRule",t)}function g(t){return i.WY.put("/routeRule/updateRouteRule",t)}function h(){return i.WY.get("/websocket-info/getWebsocketInfo")}function p(t){return i.WY.post("/sys/getInvokeLogs",t)}function I(){return i.WY.get("/limitRule/getLimitRuleList")}function y(t){return i.WY.delete("/limitRule/deleteLimitRule?id=".concat(t))}function W(t){return i.WY.post("/limitRule/addLimitRule",t)}function R(t){return i.WY.put("/limitRule/updateLimitRule",t)}function Y(){return i.WY.get("/sys/getCurrentLoadBalance")}function m(t){return i.WY.put("/sys/changeLoadBalance?loadBalance=".concat(t))}function v(){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(function(){return(0,u.Jh)(this,function(t){switch(t.label){case 0:return[4,i.WY.get("/sys/queryInitStatus")];case 1:return[2,t.sent()]}})})).apply(this,arguments)}function b(t){return i.WY.post("/sys/init",t)}function C(t){return i.WY.put("/nacosInfo/updateInstance",t)}function L(){return S.apply(this,arguments)}function S(){return(S=(0,r.Z)(function(){return(0,u.Jh)(this,function(t){switch(t.label){case 0:return[4,i.WY.get("/sys/getCurrentConfig")];case 1:return[2,t.sent()]}})})).apply(this,arguments)}function w(t){return i.WY.post("/sys/reset",t)}}}]);