(this["webpackJsonpreac-tic-tac-toe"]=this["webpackJsonpreac-tic-tac-toe"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(15),i=c.n(r),j=(c(12),c(3)),s=(c(13),c(6)),a=c(1),o=function(e){var t=e.value,c=e.onClick;t&&"squares ".concat(t);return Object(a.jsx)("button",{className:"style",onClick:c,children:t})},l=function(e){var t=e.squares,c=e.onClick;return Object(a.jsxs)("div",{className:"board",children:[t.map((function(e,t){return Object(a.jsx)(o,{value:e,onClick:function(){return c(t)}},t)})),"    "]})},u=function(){var e=Object(n.useState)([Array(9).fill(null)]),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(0),o=Object(j.a)(i,2),u=o[0],b=o[1],O=Object(n.useState)(!0),d=Object(j.a)(O,2),h=d[0],x=d[1],f=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(j.a)(t[c],3),r=n[0],i=n[1],s=n[2];if(e[r]&&e[r]===e[i]&&e[r]===e[s])return e[r]}return null}(c[u]),v=h?"X":"O";return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"React Tic Tac Toe - With Hooks"}),Object(a.jsx)(l,{squares:c[u],onClick:function(e){var t=c.slice(0,u+1),n=t[u],i=Object(s.a)(n);f||i[e]||(i[e]=v,r([].concat(Object(s.a)(t),[i])),b(t.length),x(!h))}}),Object(a.jsxs)("div",{className:"info-wrapper",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"History"}),c.map((function(e,t){var c=t?"Go to move #".concat(t):"Go to Start";return Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:function(){return b(e=t),void x(e%2===0);var e},children:c})},t)}))]}),Object(a.jsx)("h3",{children:f?"Winner: "+f:"Next Player: "+v})]})]})};var b=function(){var e=Object(n.useState)(["","","","","","","","","",""]),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)("X"),o=Object(j.a)(i,2),l=o[0],u=o[1],b=Object(n.useState)(""),O=Object(j.a)(b,2),d=O[0],h=O[1],x=function(e){if(!c[e]&&!d){var t=l,n=Object(s.a)(c);n[e]=t;[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((function(e){var t=e[0],c=e[1],r=e[2];n[t]&&n[t]===n[c]&&n[c]===n[r]&&n[r]===n[t]&&(alert("Winner: Player  is ".concat(l)),h(!0))})),u(t="X"===t?"O":"X"),r(n),console.log(e,t)}};return Object(a.jsxs)("div",{className:"SimpleTicTacToe",children:[Object(a.jsxs)("div",{className:"inner-container",children:[Object(a.jsx)("h1",{children:"Tic Tac Toe"}),Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{onClick:function(){return x(0)},children:c[0]}),Object(a.jsx)("td",{onClick:function(){return x(1)},children:c[1]}),Object(a.jsx)("td",{onClick:function(){return x(2)},children:c[2]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{onClick:function(){return x(3)},children:c[3]}),Object(a.jsx)("td",{onClick:function(){return x(4)},children:c[4]}),Object(a.jsx)("td",{onClick:function(){return x(5)},children:c[5]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{onClick:function(){return x(6)},children:c[6]}),Object(a.jsx)("td",{onClick:function(){return x(7)},children:c[7]}),Object(a.jsx)("td",{onClick:function(){return x(8)},children:c[8]})]})]})]}),Object(a.jsx)("button",{onClick:function(){u("X"),r(["","","","","","","","","",""])},children:"ResetBoard"})]})};var O=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("button",{onClick:function(){return r(!c)},children:c?"Simple Game":"Game with steps"}),Object(a.jsx)("div",{children:c?Object(a.jsx)(u,{}):Object(a.jsx)(b,{})})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,j=t.getTTFB;c(e),n(e),r(e),i(e),j(e)}))},h=c(17);i.a.render(Object(a.jsx)(h.a,{basename:"/ReactJS-Tic-Tac-Toe.git",children:Object(a.jsx)(O,{})}),document.getElementById("root")),d()}},[[28,1,2]]]);
//# sourceMappingURL=main.28cfb2f7.chunk.js.map