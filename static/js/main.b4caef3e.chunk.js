(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),i=n.n(s),a=(n(9),n(2)),l=n(0);function o(e){return(1+Math.sqrt(1+8*e))/2}function j(e,t){return(e-1)*t-e*(e-1)/2}function h(e,t){return(e-1)*t-e*(e-1)/2+t-e}function u(e,t){for(var n=o(e.length),r=function(e,t){var n=4*Math.pow(e,2)-4*e+1-8*t,r=(2*e+1-Math.sqrt(n))/2;return Math.floor(r)}(n,t),c=j(r,n),s=h(r,n),i=t-c+r+1,a=j(i,n),l=h(i,n),u=e.substring(a,l),d=function(e,t){for(var n="",r=e.length-1,c=t.length-1;c>=0;c--)n="1"===e[r--]||"1"===t[c]?"1"+n:"0"+n;return n}(e.substring(c,s),u),b="",f=1;f<r;f++){var x=j(f,n),v=h(f,n),g=e.substring(x,v);b+=g.substring(0,r-f-1)+g.substring(r-f)}return b+=e.substring(s,a)+d+e.substring(l)}function d(e,t){return function(e,t){for(var n=Math.max(e.length,t.length),r=Array(n).fill(0),c=0;c<n;c++)e.length>c&&(r[c]+=e[c]),t.length>c&&(r[c]-=t[c]);return r}(b(e),b(t))}function b(e){if(function(e){if(""===e)return!0;for(var t=0;t<e.length;t++)if("0"!==e[t])return!1;return!0}(e)){var t=o(e.length),n=Array(t).fill(0);return n[t-1]=1,n}var r=function(e){var t=function(e){for(var t=0;t<e.length;t++)if("1"===e[t])return t}(e);return[function(e,t){return e.substring(0,t)+"0"+e.substring(t+1)}(e,t),u(e,t)]}(e),c=Object(a.a)(r,2);return d(c[0],c[1])}var f=b("100011101100111");console.log(f),console.log("101010",b("101010").reverse()),console.log(f.map((function(e,t,n){return{cofficient:e,xterm:Object(l.jsxs)("span",{children:["x",Object(l.jsx)("sup",{children:n.length-t})]})}})));n(11);function x(){var e,t=Object(r.useState)(""),n=Object(a.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)([]),o=Object(a.a)(i,2),j=o[0],h=o[1];return Object(l.jsxs)("div",{className:"Main",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"heading",children:"Chromatic Polynomial"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h((function(){return b(c).reverse()}))},children:[Object(l.jsx)("div",{className:"form-control",children:Object(l.jsxs)("label",{htmlFor:"vector",children:[Object(l.jsx)("input",{type:"text",placeholder:"Enter the adjacency vector of the graph",className:"vector",id:"vector",onFocus:function(e){return e.target.select()},autoComplete:"off",value:c,onChange:function(e){e.target.value.length>45||"1"!==e.nativeEvent.data&&"0"!==e.nativeEvent.data&&"deleteContentBackward"!==e.nativeEvent.inputType||s(e.target.value)}}),Object(l.jsx)("small",{children:"Adjacency vector consists of 0s and 1s only and its size is equal to n(n-1)/2 for any integer n"})]})}),Object(l.jsx)("div",{className:"form-control",children:Object(l.jsx)("button",{className:"calculate-btn",disabled:(e=c.length,!(e>0&&Math.sqrt(1+8*e)%1===0)),children:"Calculate"})})]}),Object(l.jsx)("div",{className:"result",children:Object(l.jsxs)("div",{children:[0!==j.length&&Object(l.jsx)("span",{children:"P(x) = "}),j.map((function(e,t,n){return 0===t?Object(l.jsx)("span",{children:Object(l.jsxs)("span",{children:["\ud835\udc65",Object(l.jsx)("sup",{children:n.length-t===1?"":n.length-t})]})},t):Object(l.jsx)("span",{children:0!==e&&Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{children:1===Math.abs(e)?e>0?" + ":" - ":e>0?" + ".concat(e):" - ".concat(Math.abs(e))}),Object(l.jsxs)("span",{children:["\ud835\udc65",Object(l.jsx)("sup",{children:n.length-t===1?"":n.length-t})]})]})},t)}))]})})]}),Object(l.jsxs)("div",{className:"instruction",children:[Object(l.jsx)("h2",{children:"FAQ"}),Object(l.jsx)("div",{className:"question",children:"What is adjacency vector of the Graph? "}),Object(l.jsxs)("div",{className:"answer",children:[Object(l.jsx)("div",{children:"It is simple! It is just a minified version of Adjacency List, so it is easy to write in one single line"}),Object(l.jsxs)("div",{children:["For, example - the adjacency list for a Graph with 3 nodes,",Object(l.jsx)("p",{children:"1 -> 3"}),Object(l.jsx)("p",{children:"2 -> 3,4"}),Object(l.jsx)("p",{children:"3 -> 4"}),"can be written as, '010111'",Object(l.jsx)("p",{children:"The first three numbers '010' - explains vertex 1 is connected to vertex 3 but not connected to vertices 2 and 4"}),Object(l.jsx)("p",{children:"The next two numbers '11' - explains vertex 2 is connected to both vertices 3 and 4"}),Object(l.jsx)("p",{children:"The final number '1' - explains vertex 3 is connected to vertex 4"})]})]})]})]})}var v=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(x,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),g()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b4caef3e.chunk.js.map