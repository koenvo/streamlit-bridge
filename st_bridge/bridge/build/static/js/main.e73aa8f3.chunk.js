(this["webpackJsonpstreamlit-bridge"]=this["webpackJsonpstreamlit-bridge"]||[]).push([[0],{6:function(e,t,n){e.exports=n(7)},7:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(1),r=n(4),a=function(){function e(t){Object(i.a)(this,e),this.name=void 0,this.name=t}return Object(s.a)(e,[{key:"send",value:function(e){r.a.setComponentValue(e)}}]),e}();var o=function(){var e;try{window.top.stBridges;e=window.top||window.parent}catch(t){e=window.parent}return e}();if(void 0===o.stBridges){var d={bridges:{},send:function(e,t){d.bridges[e].send(t)}};o.stBridges=d}r.a.events.addEventListener(r.a.RENDER_EVENT,(function(e){var t=e.detail,n=o.stBridges,i=t.args.name;n.bridges[i]=new a(i)})),r.a.setComponentReady()}},[[6,1,2]]]);
//# sourceMappingURL=main.e73aa8f3.chunk.js.map