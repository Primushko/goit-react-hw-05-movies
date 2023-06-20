"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[602],{8615:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,o,u=t(7689),c=t(168),i=t(1109),s=t(1087),f=i.Z.ul(r||(r=(0,c.Z)(["\n  list-style-type: none;\n"]))),p=i.Z.li(a||(a=(0,c.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),d=(0,i.Z)(s.rU)(o||(o=(0,c.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: #3a28fc;\n  }\n"]))),l=t(184),h=function(n){var e=n.films,t=(0,u.TH)();return(0,l.jsx)(f,{children:e.map((function(n){return(0,l.jsx)(p,{children:(0,l.jsx)(d,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},5602:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,o,u=t(9439),c=t(2791),i=t(9649),s=t(8615),f=t(168),p=t(1109),d=p.Z.form(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),l=p.Z.input(a||(a=(0,f.Z)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  border-radius: 8px;\n  outline: none;\n\n  &:hover {\n    color: #3a28fc;\n    border: 3px solid #3a28fc;\n  }\n"]))),h=p.Z.button(o||(o=(0,f.Z)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 8px;\n\n  &:hover {\n    color: #3a28fc;\n    border: 3px solid #3a28fc;\n  }\n"]))),x=t(184),v=function(n){var e=n.searchMovies,t=(0,c.useState)(""),r=(0,u.Z)(t,2),a=r[0],o=r[1];return(0,x.jsxs)(d,{onSubmit:function(n){n.preventDefault(),e(a.toLowerCase())},children:[(0,x.jsx)(l,{type:"text",name:"query",autoFocus:!0,value:a,onChange:function(n){o(n.target.value)}}),(0,x.jsx)(h,{type:"submit",children:"Search"})]})},g=t(4952),Z=function(){var n=(0,c.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,c.useState)(!1),o=(0,u.Z)(a,2),f=o[0],p=o[1],d=(0,c.useState)(!1),l=(0,u.Z)(d,2),h=l[0],Z=l[1];return(0,x.jsxs)("main",{children:[(0,x.jsx)(v,{searchMovies:function(n){p(!0),(0,g.Ml)(n).then((function(n){r(n),Z(0===n.length)})).catch((function(n){console.log(n)})).finally((function(){p(!1)}))}}),f&&(0,x.jsx)(i.Z,{}),h&&(0,x.jsx)("p",{children:"THERE IS NO MOVIES WITH THIS REQUEST. PLEASE, TRY AGAIN!"}),t&&(0,x.jsx)(s.Z,{films:t})]})}},4952:function(n,e,t){t.d(e,{Bt:function(){return d},Ml:function(){return s},Tg:function(){return i},Y5:function(){return f},wL:function(){return p}});var r=t(5861),a=t(4687),o=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="d6edcad997ee9c808a30a1ff00b87277",i=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.6bb4d766.chunk.js.map