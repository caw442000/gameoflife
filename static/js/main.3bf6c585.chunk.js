(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(4),o=n.n(a),u=(n(10),n(1)),l=n(2),i=(n(11),[[0,1],[0,-1],[1,0],[-1,0],[1,-1],[-1,1],[1,1],[-1,-1]]);var s=function(){var e=Object(r.useState)(30),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(30),s=Object(u.a)(o,2),f=s[0],m=s[1],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;a(e),m(t),console.log("row",e),console.log("column",t);for(var n=[],r=0;r<e;r++)n.push(Array.from(Array(t),(function(){return 0})));return n},d=Object(r.useState)(b),j=Object(u.a)(d,2),O=j[0],h=j[1],v=Object(r.useState)(b),E=Object(u.a)(v,2),p=E[0],g=(E[1],Object(r.useState)(b)),k=Object(u.a)(g,2),R=k[0],S=(k[1],Object(r.useState)(b)),y=Object(u.a)(S,2),C=y[0],w=(y[1],Object(r.useState)(!1)),N=Object(u.a)(w,2),x=N[0],T=N[1],A=Object(r.useState)(0),B=Object(u.a)(A,2),I=B[0],G=(B[1],Object(r.useState)(!1)),J=Object(u.a)(G,2),L=J[0],M=(J[1],Object(r.useState)(1e3)),W=Object(u.a)(M,2),U=W[0],$=W[1],q=Object(r.useRef)(x),z=Object(r.useRef)(I),D=Object(r.useRef)(L),F=(Object(r.useRef)(p),Object(r.useRef)(R),Object(r.useRef)(C),Object(r.useRef)(U));q.current=x,D.current=!0;var H=Object(r.useRef)(n),K=Object(r.useRef)(f);H.current=n,K.current=f;var P=Object(r.useCallback)((function(e,t){if(q.current){D.current=!1;var n=e,r=t;r=function(e){return Object(l.a)(e,(function(t){for(var n=function(n){for(var r=function(r){var c=0;i.forEach((function(t){var a=Object(u.a)(t,2),o=a[0],l=a[1],i=n+o,s=r+l;i>=0&&i<H.current&&s>=0&&s<K.current&&(c+=e[i][s])})),c<2||c>3?t[n][r]=0:0===e[n][r]&&3===c&&(t[n][r]=1,D.current=!0)},c=0;c<K.current;c++)r(c)},r=0;r<H.current;r++)n(r);!1!==D.current||(q.current=!x)}))},z.current+=1,console.log("generation",z.current),h(n);r=n=r,console.log("speed",F.current),setTimeout(P,F.current,n)}}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"Title"},"Game of Life"),c.a.createElement("div",{className:"Buttons"},c.a.createElement("button",{onClick:function(){T(!x),x||(q.current=!0,P(O))}},x?"stop":"start"),c.a.createElement("button",{onClick:function(){h(b(n,f)),x&&T(!x),z.current=0}},"clear"),c.a.createElement("button",{onClick:function(){h(function(){for(var e=[],t=0;t<n;t++)e.push(Array.from(Array(f),(function(){return Math.random()>.5?1:0})));return e}()),z.current=0}},"random"),c.a.createElement("button",{onClick:function(){F.current*=2,$(F.current)}},"slower"),c.a.createElement("button",{onClick:function(){F.current>=50&&(F.current/=2,$(F.current))}},"fast"),c.a.createElement("button",{onClick:function(){h(b(25,25)),x&&T(!x),z.current=0}},"small"),c.a.createElement("button",{onClick:function(){h(b(40,40)),x&&T(!x),z.current=0}},"medium"),c.a.createElement("button",{onClick:function(){h(b(50,50)),x&&T(!x),z.current=0}},"large")),c.a.createElement("div",{className:"InfoBar"},c.a.createElement("h1",null," Generations: ",z.current," "),c.a.createElement("h1",null," Speed: ",U/1e3," sec ")),c.a.createElement("h2",{className:"RulesTitle"},"RULES "),c.a.createElement("p",{className:"RulesText"},"1: If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies."),c.a.createElement("p",{className:"RulesText"},"2: If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead"),c.a.createElement("p",{className:"RulesText"},"3: All edge cells are permanently dead"),c.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(f,", 20px)")}},O.map((function(e,t){return e.map((function(e,n){return c.a.createElement("div",{key:"".concat(t,"-").concat(n),onClick:function(){x||function(e,t){var n=Object(l.a)(O,(function(n){n[e][t]=O[e][t]?0:1}));h(n)}(t,n)},style:{width:20,height:20,backgroundColor:O[t][n]?"black":"red",border:"solid 1px black"}})}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.3bf6c585.chunk.js.map