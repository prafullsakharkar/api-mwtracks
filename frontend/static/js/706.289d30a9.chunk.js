"use strict";(self.webpackChunkmwtracks=self.webpackChunkmwtracks||[]).push([[706],{38706:function(e,r,t){t.d(r,{gW:function(){return K}});var n=t(47313);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}function u(e){var r=(0,n.useRef)(e),t=(0,n.useRef)((function(e){r.current&&r.current(e)}));return r.current=e,t.current}var c=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},l=function(e){return"touches"in e},i=function(e){return e&&e.ownerDocument.defaultView||self},s=function(e,r,t){var n=e.getBoundingClientRect(),o=l(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:c((o.pageX-(n.left+i(e).pageXOffset))/n.width),top:c((o.pageY-(n.top+i(e).pageYOffset))/n.height)}},f=function(e){!l(e)&&e.preventDefault()},v=n.memo((function(e){var r=e.onMove,t=e.onKey,c=a(e,["onMove","onKey"]),v=(0,n.useRef)(null),h=u(r),d=u(t),p=(0,n.useRef)(null),g=(0,n.useRef)(!1),m=(0,n.useMemo)((function(){var e=function(e){f(e),(l(e)?e.touches.length>0:e.buttons>0)&&v.current?h(s(v.current,e,p.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=g.current,o=i(v.current),a=t?o.addEventListener:o.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=v.current;if(n&&(f(r),!function(e,r){return r&&!l(e)}(r,g.current)&&n)){if(l(r)){g.current=!0;var o=r.changedTouches||[];o.length&&(p.current=o[0].identifier)}n.focus(),h(s(n,r,p.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),d({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[d,h]),b=m[0],_=m[1],x=m[2];return(0,n.useEffect)((function(){return x}),[x]),n.createElement("div",o({},c,{onTouchStart:b,onMouseDown:b,className:"react-colorful__interactive",ref:v,onKeyDown:_,tabIndex:0,role:"slider"}))})),h=function(e){return e.filter(Boolean).join(" ")},d=function(e){var r=e.color,t=e.left,o=e.top,a=void 0===o?.5:o,u=h(["react-colorful__pointer",e.className]);return n.createElement("div",{className:u,style:{top:100*a+"%",left:100*t+"%"}},n.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},p=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},g=(Math.PI,function(e){return M(m(e))}),m=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?p(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?p(parseInt(e.substring(6,8),16)/255,2):1}},b=function(e){return C(w(e))},_=function(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return{h:p(e.h),s:p(o>0&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:p(o/2),a:p(n,2)}},x=function(e){var r=_(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},w=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var a=Math.floor(r),u=n*(1-t),c=n*(1-(r-a)*t),l=n*(1-(1-r+a)*t),i=a%6;return{r:p(255*[n,c,u,u,l,n][i]),g:p(255*[l,n,n,c,u,u][i]),b:p(255*[u,u,l,n,n,c][i]),a:p(o,2)}},E=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},C=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=o<1?E(p(255*o)):"";return"#"+E(r)+E(t)+E(n)+a},M=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=Math.max(r,t,n),u=a-Math.min(r,t,n),c=u?a===r?(t-n)/u:a===t?2+(n-r)/u:4+(r-t)/u:0;return{h:p(60*(c<0?c+6:c)),s:p(a?u/a*100:0),v:p(a/255*100),a:o}},y=n.memo((function(e){var r=e.hue,t=e.onChange,o=h(["react-colorful__hue",e.className]);return n.createElement("div",{className:o},n.createElement(v,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:c(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":p(r),"aria-valuemax":"360","aria-valuemin":"0"},n.createElement(d,{className:"react-colorful__hue-pointer",left:r/360,color:x({h:r,s:100,v:100,a:1})})))})),k=n.memo((function(e){var r=e.hsva,t=e.onChange,o={backgroundColor:x({h:r.h,s:100,v:100,a:1})};return n.createElement("div",{className:"react-colorful__saturation",style:o},n.createElement(v,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:c(r.s+100*e.left,0,100),v:c(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+p(r.s)+"%, Brightness "+p(r.v)+"%"},n.createElement(d,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:x(r)})))})),N=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},I=function(e,r){return e.toLowerCase()===r.toLowerCase()||N(m(e),m(r))};function H(e,r,t){var o=u(t),a=(0,n.useState)((function(){return e.toHsva(r)})),c=a[0],l=a[1],i=(0,n.useRef)({color:r,hsva:c});(0,n.useEffect)((function(){if(!e.equal(r,i.current.color)){var t=e.toHsva(r);i.current={hsva:t,color:r},l(t)}}),[r,e]),(0,n.useEffect)((function(){var r;N(c,i.current.hsva)||e.equal(r=e.fromHsva(c),i.current.color)||(i.current={hsva:c,color:r},o(r))}),[c,e,o]);var s=(0,n.useCallback)((function(e){l((function(r){return Object.assign({},r,e)}))}),[]);return[c,s]}var O,R="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,z=new Map,D=function(e){R((function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!z.has(r)){var n=r.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',z.set(r,n);var o=O||t.nc;o&&n.setAttribute("nonce",o),r.head.appendChild(n)}}),[])},L=function(e){var r=e.className,t=e.colorModel,u=e.color,c=void 0===u?t.defaultColor:u,l=e.onChange,i=a(e,["className","colorModel","color","onChange"]),s=(0,n.useRef)(null);D(s);var f=H(t,c,l),v=f[0],d=f[1],p=h(["react-colorful",r]);return n.createElement("div",o({},i,{ref:s,className:p}),n.createElement(k,{hsva:v,onChange:d}),n.createElement(y,{hue:v.h,onChange:d,className:"react-colorful__last-control"}))},j={defaultColor:"000",toHsva:g,fromHsva:function(e){return b({h:e.h,s:e.s,v:e.v,a:1})},equal:I},K=function(e){return n.createElement(L,o({},e,{colorModel:j}))}}}]);