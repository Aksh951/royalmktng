(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[6],{73:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return h})),r.d(t,"i",(function(){return x})),r.d(t,"h",(function(){return v})),r.d(t,"e",(function(){return w})),r.d(t,"f",(function(){return N})),r.d(t,"g",(function(){return I}));var n=r(28),c=r(77),a=r(20),s=r(71),u=r.n(s),i=r(72),o=r(21);function l(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("userId","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(u.a.mark((function e(t,r){var n,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.b.firestore().collection("users"),n=r.length>0?n.where("userId","not-in",[].concat(Object(c.a)(r),[t])):n.where("userId","!=",t),e.next=4,n.limit(10).get();case 4:return s=e.sent,i=s.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,r){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(u.a.mark((function e(t,r,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.b.firestore().collection("users").doc(t).update({following:n?o.a.arrayRemove(r):o.a.arrayUnion(r)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,r){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(u.a.mark((function e(t,r,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.b.firestore().collection("users").doc(t).update({followers:n?o.a.arrayRemove(r):o.a.arrayUnion(r)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("photos").where("userId","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(u.a.mark((function e(t,r){var c,s,i,l,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).where("following","array-contains",r).get();case 2:return c=e.sent,s=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),i=Object(n.a)(s,1),l=i[0],d=void 0===l?{}:l,e.abrupt("return",d.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,r,n,c){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(u.a.mark((function e(t,r,n,c,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r,c,t);case 2:return e.next=4,v(n,a,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},75:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="/images/avatars/default.png"},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(71),c=r.n(n),a=r(72),s=r(28),u=r(1),i=r(73);function o(e){var t=Object(u.useState)(),r=Object(s.a)(t,2),n=r[0],o=r[1];return Object(u.useEffect)((function(){function t(){return(t=Object(a.a)(c.a.mark((function e(t){var r,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.c)(t);case 2:r=e.sent,n=Object(s.a)(r,1),a=n[0],o(a||{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e&&function(e){t.apply(this,arguments)}(e)}),[e]),{user:n,setActiveUser:o}}},78:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(1),c=r(6),a=r(19),s=r(17),u=r(29),i=r(14),o=r(75),l=r(76),d=r(5);function f(){var e=Object(n.useContext)(u.a).user,t=Object(l.a)(null===e||void 0===e?void 0:e.uid).user,r=Object(n.useContext)(s.a).firebase,f=Object(c.g)();return Object(d.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary mb-8",children:Object(d.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(d.jsxs)("div",{className:"flex justify-between h-full",children:[Object(d.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items cursor-pointer",children:Object(d.jsx)("h1",{className:"flex justify-center w-full",children:Object(d.jsx)(a.b,{to:i.a,"aria-label":"Direct Mktng logo",children:Object(d.jsx)("img",{src:"/images/logo.png",alt:"Direct Mktng",className:"mt-2 w-6/12"})})})}),Object(d.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items",children:e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",title:"Sign Out",onClick:function(){r.auth().signOut(),f.push(i.b)},onKeyDown:function(e){"Enter"===e.key&&(r.auth().signOut(),f.push(i.b))},children:Object(d.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),t&&Object(d.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(d.jsx)(a.b,{to:"/p/".concat(null===t||void 0===t?void 0:t.username),children:Object(d.jsx)("img",{className:"rounded-full h-8 w-8 flex",src:"/images/avatars/".concat(null===t||void 0===t?void 0:t.username,".jpg"),alt:"".concat(null===t||void 0===t?void 0:t.username," profile"),onError:function(e){e.target.src=o.a}})})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.b,{to:i.b,children:Object(d.jsx)("button",{type:"button",className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",children:"Log In"})}),Object(d.jsx)(a.b,{to:i.e,children:Object(d.jsx)("button",{type:"button",className:"font-bold text-sm rounded text-blue-medium w-20 h-8",children:"Sign Up"})})]})})]})})})}},89:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var n=r(1),c=r(78),a=r(5);function s(){return Object(a.jsx)("div",{className:"container col-span-2",children:Object(a.jsx)("p",{children:"The content will be updated"})})}var u=r(19),i=r(79),o=r.n(i),l=r(75);function d(e){var t=e.username,r=e.fullName;return t&&r?Object(a.jsxs)(u.b,{to:"/p/".concat(t),className:"grid grid-cols-4 gap-4 mb-6 items-center",children:[Object(a.jsx)("div",{className:"flex items-center justify-between col-span-1",children:Object(a.jsx)("img",{className:"rounded-full w-16 flex mr-3",src:"/images/avatars/".concat(t,".jpg"),alt:"",onError:function(e){e.target.src=l.a}})}),Object(a.jsxs)("div",{className:"col-span-3",children:[Object(a.jsx)("p",{className:"font-bold text-sm",children:t}),Object(a.jsx)("p",{className:"text-sm",children:r})]})]}):Object(a.jsx)(o.a,{count:1,height:61})}r(71),r(72),r(28),r(73);var f=Object(n.createContext)(null);function b(){var e=Object(n.useContext)(f).user,t=((e=void 0===e?{}:e).docId,e.fullName),r=e.username;e.userId,e.following;return Object(a.jsx)("div",{className:"p-4",children:Object(a.jsx)(d,{username:r,fullName:t})})}var p=r(76);function j(e){var t=e.user,r=Object(p.a)(t.uid),u=r.user,i=r.setActiveUser;return Object(n.useEffect)((function(){document.title="Direct Mktng"}),[]),Object(a.jsx)(f.Provider,{value:{user:u,setActiveUser:i},children:Object(a.jsxs)("div",{className:"bg-gray-background",children:[Object(a.jsx)(c.a,{}),Object(a.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg",children:[Object(a.jsx)(b,{}),Object(a.jsx)(s,{})]})]})})}}}]);
//# sourceMappingURL=6.73bb84c4.chunk.js.map