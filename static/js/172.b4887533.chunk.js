"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[172],{8755:function(n,t,e){e.d(t,{T:function(){return a}});var r=e(1598),o=e(184),a=function(){return(0,o.jsxs)(r.xg,{children:[(0,o.jsx)(r.oT,{delay:"0s"}),(0,o.jsx)(r.oT,{delay:".2s"}),(0,o.jsx)(r.oT,{delay:".4s"})]})}},1598:function(n,t,e){e.d(t,{eb:function(){return p},hX:function(){return l},oT:function(){return h},xg:function(){return f}});var r,o,a,i,c,s=e(168),u=e(6444),d=e(1087),p=u.ZP.header(r||(r=(0,s.Z)(["\n  padding: 20px 30px;\n  text-align: center;\n  box-shadow: 0px 4px 4px #d3d3d3;\n"]))),l=(0,u.ZP)(d.OL)(o||(o=(0,s.Z)(["\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: color 0.2s ease-in-out;\n  color: #000000;\n\n  &:not(:last-child) {\n    margin-right: 40px;\n  }\n\n  &.active,\n  &:hover,\n  &:focus {\n    color: #1c85ff;\n    text-decoration: underline;\n  }\n"]))),x=(0,u.F4)(a||(a=(0,s.Z)(["\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"]))),f=u.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))),h=u.ZP.div(c||(c=(0,s.Z)(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 50%;\n  background-color: #1c85ff;\n  animation: "," 1s infinite ease-in-out;\n  animation-delay: ",";\n"])),x,(function(n){return n.delay}))},172:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var r,o,a,i,c,s,u,d,p,l,x,f,h,v=e(5861),g=e(9439),m=e(7757),b=e.n(m),Z=e(2791),j=e(7689),w=e(1087),y=e(8185),k=e(4390),P=e(168),_=e(6444),U=_.ZP.div(r||(r=(0,P.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 20px;\n"]))),T=_.ZP.img(o||(o=(0,P.Z)(["\n  height: 600px;\n  width: 400px;\n"]))),S=_.ZP.div(a||(a=(0,P.Z)(["\n  padding-top: 20px;\n  max-width: 1100px;\n"]))),z=_.ZP.h2(i||(i=(0,P.Z)(["\n  margin-bottom: 20px;\n"]))),F=_.ZP.p(c||(c=(0,P.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),N=_.ZP.span(s||(s=(0,P.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),C=_.ZP.div(u||(u=(0,P.Z)(["\n  margin-top: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: 1px solid #d3d3d3;\n  border-bottom: 1px solid #d3d3d3;\n"]))),H=_.ZP.h3(d||(d=(0,P.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n"]))),O=_.ZP.ul(p||(p=(0,P.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n  font-size: 18px;\n"]))),A=_.ZP.li(l||(l=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),E=(0,_.ZP)(w.rU)(x||(x=(0,P.Z)(["\n  font-size: 16px;\n  margin-right: 5px;\n  padding: 5px 15px;\n  border: 1px solid #0d57aa;\n  border-radius: 6px;\n  background-color: #b5d1f2;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  color: #0d57aa;\n\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  }\n"]))),G=e(8755),M=e(184),q=function(n){var t,e,r,o,a=n.movie,i=a.title,c=a.release_date,s=a.poster_path,u=a.vote_average,d=a.overview,p=a.genres,l=(0,j.TH)(),x=new Date(c),f=isNaN(x)?"Unknown":x.getFullYear(),h=s?"https://image.tmdb.org/t/p/w400/".concat(s):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",v=u?"".concat((10*u).toFixed(0),"%"):"Not rated yet";return i?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(U,{children:[(0,M.jsx)(T,{src:h,alt:"".concat(i," poster")}),(0,M.jsxs)(S,{children:[(0,M.jsxs)(z,{children:[null!==i&&void 0!==i?i:"Unknown"," (",f,")"]}),(0,M.jsxs)(F,{children:["User Score: ",v]}),(0,M.jsxs)(F,{children:[(0,M.jsx)(N,{children:"Overview:"})," ",d]}),p&&p.length>0&&(0,M.jsxs)(F,{children:[(0,M.jsx)(N,{children:"Genres:"}),p.map((function(n){return n.name})).join(", ")]})]})]}),(0,M.jsxs)(C,{children:[(0,M.jsx)(H,{children:"Additional information"}),(0,M.jsxs)(O,{children:[(0,M.jsx)(A,{children:(0,M.jsx)(E,{to:"cast",state:{from:null!==(t=null===l||void 0===l||null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,M.jsx)(A,{children:(0,M.jsx)(E,{to:"reviews",state:{from:null!==(r=null===l||void 0===l||null===(o=l.state)||void 0===o?void 0:o.from)&&void 0!==r?r:"/"},children:"Reviews"})})]})]})]}):(0,M.jsx)(G.T,{})},D=_.ZP.div(f||(f=(0,P.Z)(["\n  padding: 20px 40px;\n"]))),I=_.ZP.button(h||(h=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  border: 1px solid #0d57aa;\n  border-radius: 6px;\n  background-color: #b5d1f2;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n  }\n"]))),L=function(){var n,t,e=(0,j.UO)().movieId,r=(0,j.TH)(),o=(0,Z.useState)({}),a=(0,g.Z)(o,2),i=a[0],c=a[1];return(0,Z.useEffect)((function(){var n=function(){var n=(0,v.Z)(b().mark((function n(t){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.Mc)(t);case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}();n(e)}),[e]),(0,M.jsx)("main",{children:(0,M.jsxs)(D,{children:[(0,M.jsx)(w.rU,{to:null!==(n=null===r||void 0===r||null===(t=r.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:(0,M.jsxs)(I,{type:"button",children:[(0,M.jsx)(y.i1r,{style:{width:"25px",height:"25px",display:"inline-block"}}),"Go back"]})}),(0,M.jsx)(q,{movie:i})," ",(0,M.jsx)(Z.Suspense,{fallback:(0,M.jsx)(G.T,{}),children:(0,M.jsx)(j.j3,{})})]})})}},4390:function(n,t,e){e.d(t,{E3:function(){return d},Hx:function(){return x},Mc:function(){return p},_k:function(){return u},uV:function(){return l}});var r=e(5861),o=e(7757),a=e.n(o),i=e(1243),c="https://api.themoviedb.org",s="d6edcad997ee9c808a30a1ff00b87277",u=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(t,"}/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=172.b4887533.chunk.js.map