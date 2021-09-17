(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{119:function(n,e,t){"use strict";t.r(e);var r,a,i,c,o=t(1),s=t.n(o),d=t(27),l=t.n(d),b=(t(68),t(69),t(26)),u=t(12),p=t(17),m=t(4),j=t(3),h="rgb(32, 199, 178)",f=Object(j.a)(r||(r=Object(m.a)(["\n    *{\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        user-select: none;\n    }\n    html{\n        background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e); /* Chrome 10-25, Safari 5.1-6 */\n        background: linear-gradient(to right, #0f0c29, #302b63, #24243e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    }   \n     a{\n        text-decoration: none;\n        color: black;\n    }\n"]))),g=j.b.button(a||(a=Object(m.a)(["\n  width: 3rem;\n  height: 3rem;\n  background: ",";\n  border: none;\n"])),h),O=j.b.div(i||(i=Object(m.a)(["\n  width: 50%;\n"]))),x=Object(j.b)(b.b)(c||(c=Object(m.a)(["\n  text-transform: capitalize;\n  font-size: 1.325rem;\n  color: ",";\n  &:not(:last-child) {\n    margin-right: 3rem;\n  }\n"])),h),v=[{name:"home",to:"/movies-api/"},{name:"Tv Shows",to:"/movies-api/shows"},{name:"Movies",to:"/movies-api/movies"},{name:"Upcoming",to:"/movies-api/upcoming"}],w=t(2),y=function(){return Object(w.jsx)(O,{children:v.map((function(n,e){return Object(w.jsx)(x,{to:n.to,children:n.name},e)}))})};function k(){return(k=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function S(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var z=o.createElement("path",{fill:"#616161",d:"M34.6 28.1H38.6V45.1H34.6z",transform:"rotate(-45.001 36.586 36.587)"}),E=o.createElement("path",{fill:"#616161",d:"M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"}),_=o.createElement("path",{fill:"#37474F",d:"M36.2 32.1H40.2V44.400000000000006H36.2z",transform:"rotate(-45.001 38.24 38.24)"}),T=o.createElement("path",{fill:"#64B5F6",d:"M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"}),V=o.createElement("path",{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"});function M(n,e){var t=n.title,r=n.titleId,a=S(n,["title","titleId"]);return o.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",ref:e,"aria-labelledby":r},a),t?o.createElement("title",{id:r},t):null,z,E,_,T,V)}var P,B,C,R,I,U,D,F,H,A,G,L,N,q,W,J,X,Y,Z,K,Q,$,nn,en,tn,rn,an,cn,on,sn,dn,ln,bn,un,pn,mn,jn,hn,fn,gn,On,xn,vn,wn,yn,kn,Sn,zn,En,_n,Tn,Vn,Mn,Pn=o.forwardRef(M),Bn=(t.p,j.b.div(P||(P=Object(m.a)(["\n  position: relative;\n  padding-right: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n"])))),Cn=Object(j.b)(Pn)(B||(B=Object(m.a)(["\n  position: absolute;\n  align-self: center;\n  right: 1.3rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  cursor: pointer;\n  border-radius: 20%;\n"]))),Rn=function(n){var e=n.searchToggle;return Object(w.jsx)(Bn,{children:Object(w.jsx)(Cn,{onClick:e})})},In=j.b.div(C||(C=Object(m.a)(["\n  width: 25%;\n"]))),Un=Object(j.b)(b.b)(R||(R=Object(m.a)(["\n  font-size: 2rem;\n  color: ",";\n"])),h),Dn=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(In,{children:Object(w.jsx)(Un,{to:"/movies-api/",children:"MovieDb"})})})},Fn=j.b.div(I||(I=Object(m.a)(["\n  display: none;\n  @media screen and (min-width: 480px) {\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(5px);\n    top: 0;\n    z-index: 900;\n    display: flex;\n    width: 100%;\n    height: 8vh;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 6rem;\n    border-bottom: 1px solid rgba(147, 148, 150, 0.6);\n  }\n"]))),Hn=j.b.div(U||(U=Object(m.a)(["\n  display: none;\n  @media screen and (max-width: 480px) {\n    display: block;\n    cursor: pointer;\n    position: absolute;\n    z-index: 1000;\n    right: 2rem;\n    top: 2rem;\n  }\n"]))),An=Object(j.c)(D||(D=Object(m.a)(["\n 0% {\n    transform: rotateX(80deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0);\n    opacity: 1;\n  }\n"]))),Gn=j.b.div(F||(F=Object(m.a)(["\n  position: absolute;\n  top: 6.7vh;\n  max-height: 45rem;\n  width: 75vw;\n  background-color: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(5px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  &.open {\n    animation: "," 1s both;\n  }\n"])),An),Ln=j.b.div(H||(H=Object(m.a)(["\n  width: 90%;\n  height: 100%;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 5px;\n  border-bottom: 1px solid rgba(147, 148, 150, 0.6);\n"]))),Nn=j.b.div(A||(A=Object(m.a)(["\n  bottom: 0;\n  height: 4.5rem;\n  width: 3.5rem;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n"])),(function(n){return n.src})),qn=j.b.p(G||(G=Object(m.a)(["\n  width: 25%;\n  color: ",";\n  font-size: 1.25rem;\n"])),h),Wn=j.b.div(L||(L=Object(m.a)(["\n  width: 25%;\n"]))),Jn=(j.b.div(N||(N=Object(m.a)(["\n  text-align: center;\n  font-size: 2.5rem;\n  color: ",";\n"])),h),t(55)),Xn=t.n(Jn),Yn=function(){return{getRating:function(n,e,t){return Object(w.jsx)(Xn.a,{rating:(10-(100-10*n)/10)/2,numberOfStars:5,starRatedColor:"yellow",starEmptyColor:"grey",starDimension:e,starSpacing:t})}}},Zn=function(n){return"https://image.tmdb.org/t/p/original"+n},Kn=function(n){var e=n.query,t=n.data,r=Yn().getRating;return Object(w.jsx)(Gn,{className:e.trim()>=1&&"open",children:void 0!==t&&t.slice(0,5).map((function(n,e){return 0===n.length&&console.log("not"),Object(w.jsxs)(Ln,{children:[Object(w.jsx)(qn,{children:n.title}),Object(w.jsx)(Wn,{children:r(n.vote_average,"10px","1px")}),Object(w.jsx)(Nn,{src:Zn(n.poster_path)})]},e)}))})},Qn=t(13),$n=Object(j.c)(q||(q=Object(m.a)(["\n\t0% {\n\t\ttransform: translateY(-20px);\n\t\tleft: 12.5%;\n\t\topacity: 0;\n\t}\n\t100% {\n\t\ttransform: translateY(0);\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, 0);\n\t\topacity: 1;\n\t}\n"]))),ne=j.b.div(W||(W=Object(m.a)(["\n  position: absolute;\n  z-index: 99;\n  width: 75vw;\n  height: 4rem;\n  top: 8.2vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &.open {\n    animation: "," 1s forwards;\n  }\n"])),$n),ee=j.b.input(J||(J=Object(m.a)(["\n  width: 95%;\n  height: 2.5rem;\n  border: none;\n  border-bottom: 1px solid ",";\n  background-color: rgba(0, 0, 0, 0.2);\n  backdrop-filter: blur(1px);\n  padding-left: 15px;\n  color: white;\n  &:focus {\n    outline: none;\n  }\n  &::placeholder {\n    color: white;\n  }\n"])),h),te=t(9),re=t.n(te),ae=t(14),ie="https://api.themoviedb.org/3",ce={typeStr:"SEARCH_MOVIE",axiosUrl:"".concat(ie,"/search/movie")},oe=("".concat(ie,"/genre/movie/list"),{typeStr:"GET_TRENDING_MOVIE",axiosUrl:"".concat(ie,"/trending/movie/week")}),se=("".concat(ie,"/movie/upcoming"),{typeStr:"GET_TRENDING_TVSHOWS",axiosUrl:"".concat(ie,"/trending/tv/week")}),de={typeStr:"GET_TVSHOWS_POPULAR",axiosUrl:"".concat(ie,"/tv/popular")},le={typeStr:"GET_MOVIES_POPULAR",axiosUrl:"".concat(ie,"/movie/popular")},be={typeStr:"GET_MOVIE_VIDEO",axiosUrl:"".concat(ie,"/movie")},ue={typeStr:"GET_TVSHOW_VIDEO",axiosUrl:"".concat(ie,"/tv")},pe=t(24),me=t.n(pe),je=function(){var n=Object(ae.a)(re.a.mark((function n(e,t,r){var a,i;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=void 0===r?"":r,a={api_key:"817e8342d860daa34f8e4510732ca634",language:"en_US",page:1},void 0!==t&&Object.assign(a,t),n.next=5,me()(e.axiosUrl+r,{params:a});case 5:return i=n.sent,n.abrupt("return",i);case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),he=function(){var n=Object(ae.a)(re.a.mark((function n(e){var t,r;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,je(oe);case 2:if(t=n.sent,(r=t.data)&&0!==r.length){n.next=6;break}return n.abrupt("return");case 6:e({type:oe.typeStr,payload:r});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fe=function(){var n=Object(ae.a)(re.a.mark((function n(e){var t,r;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,je(se);case 2:if(t=n.sent,(r=t.data)&&0!==r.length){n.next=6;break}return n.abrupt("return");case 6:e({type:se.typeStr,payload:r});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ge=function(){var n=Object(ae.a)(re.a.mark((function n(e){var t,r;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,je(le);case 2:if(t=n.sent,(r=t.data)&&0!==r.length){n.next=6;break}return n.abrupt("return");case 6:e({type:le.typeStr,payload:r});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Oe=function(){var n=Object(ae.a)(re.a.mark((function n(e){var t,r;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,je(de);case 2:if(t=n.sent,(r=t.data)&&0!==r.length){n.next=6;break}return n.abrupt("return");case 6:e({type:de.typeStr,payload:r});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),xe=function(n){var e=n.open,t=Object(o.useState)(""),r=Object(p.a)(t,2),a=r[0],i=r[1],c=Object(Qn.b)();Object(o.useEffect)((function(){""!==a.trim()&&c(function(n){return function(){var e=Object(ae.a)(re.a.mark((function e(t){var r,a;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(ce,{query:n});case 2:r=e.sent,a=r.data,t({type:ce.typeStr,payload:a});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}(a))}),[a]);var s=Object(Qn.c)((function(n){return n.movies.searchMovieResults.results}));return Object(w.jsxs)(ne,{className:e&&"open",children:[Object(w.jsx)(ee,{type:"text",name:"query",value:a,placeholder:"Search Movie...",onChange:function(n){return function(n){i(n.target.value)}(n)}}),a.length>=1&&Object(w.jsx)(Kn,{query:a,data:s})]})},ve=Object(j.c)(X||(X=Object(m.a)(["\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform-origin: 100% 0%;\n            transform-origin: 100% 0%;\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-transform-origin: 100% 0%;\n            transform-origin: 100% 0%;\n    opacity: 1;\n  }\n"]))),we=Object(j.c)(Y||(Y=Object(m.a)(["\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-transform-origin: 0% 100%;\n            transform-origin: 0% 100%;\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform-origin: 0% 100%;\n            transform-origin: 0% 100%;\n    opacity: 1;\n  }\n"]))),ye=j.b.div(Z||(Z=Object(m.a)(["\n  position: absolute;\n  z-index: 900;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(5px);\n  &.open {\n    animation: "," 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;\n  }\n  &.close {\n    animation: "," 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n      forwards;\n  }\n"])),ve,we),ke=j.b.div(K||(K=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    a {\n      text-align: center;\n      font-size: 2.5rem;\n      :not(:last-child) {\n        margin-right: 0;\n        margin-bottom: 2rem;\n      }\n    }\n  }\n"]))),Se=function(n){var e=n.classOpen;return Object(w.jsx)(ye,{className:e,children:Object(w.jsx)(ke,{children:Object(w.jsx)(y,{})})})},ze=Object(j.c)(Q||(Q=Object(m.a)(["\n    0%{\n        width: 3rem;\n        margin-left: 0;\n    }\n    50%{\n        position: absolute;\n        width: 2.5rem;\n        margin-left: 1.5rem;\n        transform: rotate(-45deg);\n    }\n    100%{\n        position: absolute;\n        width: 2.5rem;\n        margin-left: 0;\n        transform: rotate(-45deg);\n    }\n"]))),Ee=Object(j.c)($||($=Object(m.a)(["\n    0%{\n        width: 2rem;\n        margin-left: 1rem;\n    }\n    50%{\n        width: 3rem;\n        margin-left: 0;\n    }\n    100%{\n        opacity: 0;\n    }\n"]))),_e=Object(j.c)(nn||(nn=Object(m.a)(["\n    0%{\n        width: 1.5rem;\n        margin-left: 1.5rem;\n    }\n    50%{\n        position: absolute;\n        width: 2.5rem;\n        margin-left: 1rem;\n        transform: rotate(45deg);\n    }\n    100%{\n        position: absolute;\n        width: 2.5rem;\n        margin: 0;\n        transform: rotate(45deg);\n    }\n"]))),Te=Object(j.c)(en||(en=Object(m.a)(["\n    0%{\n        position: absolute;\n        width: 2.5rem;\n        margin-left: 0;\n        transform: rotate(-45deg);\n    }\n    50%{\n        width: 2.5rem;\n        margin-left: 1.5rem;\n    }\n    100%{\n        width: 3rem;\n        margin-left: 0;\n    }\n\n"]))),Ve=Object(j.c)(tn||(tn=Object(m.a)(["\n    0%{\n        opacity: 0;\n    }\n    50%{\n        opacity: 1;\n    }\n    100%{\n        width: 2rem;\n        margin-left: 1rem;\n    }\n\n"]))),Me=Object(j.c)(rn||(rn=Object(m.a)(["\n    0%{\n        position: absolute;\n        width: 2.5rem;\n        margin: 0;\n        transform: rotate(45deg);\n    }\n    50%{\n        width: 2.5rem;\n        margin-left: 1rem;\n    }\n    100%{\n        width: 1.5rem;\n        margin-left: 1.5rem;\n    }\n\n"]))),Pe=j.b.div(an||(an=Object(m.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 3rem;\n  height: 3rem;\n  &.open {\n    padding: 0.7rem;\n    div {\n      :nth-child(3) {\n        animation: "," 1s forwards;\n      }\n      :nth-child(2) {\n        animation: "," 0.5s forwards;\n      }\n      :nth-child(1) {\n        animation: "," 1s forwards;\n      }\n    }\n  }\n  &.close {\n    div {\n      :nth-child(3) {\n        animation: "," 1s forwards;\n      }\n      :nth-child(2) {\n        animation: "," 0.5s forwards;\n      }\n      :nth-child(1) {\n        animation: "," 1s forwards;\n      }\n    }\n  }\n"])),_e,Ee,ze,Me,Ve,Te),Be=j.b.div(cn||(cn=Object(m.a)(["\n  height: 0.3rem;\n  background: linear-gradient(to right, #0575e6, #859398);\n  border-radius: 0.5rem;\n  :nth-child(1) {\n    width: 3rem;\n    margin-left: 0;\n  }\n  :nth-child(2) {\n    width: 2rem;\n    margin-left: 1rem;\n  }\n  :nth-child(3) {\n    width: 1.5rem;\n    margin-left: 1.5rem;\n  }\n  &:not(:last-child) {\n    margin-bottom: 0.3rem;\n  }\n"]))),Ce=function(n){var e=n.openClass;return Object(w.jsxs)(Pe,{className:e,children:[Object(w.jsx)(Be,{}),Object(w.jsx)(Be,{}),Object(w.jsx)(Be,{})]})},Re=function(){var n=Object(o.useState)(!1),e=Object(p.a)(n,2),t=e[0],r=e[1],a=Object(o.useState)(""),i=Object(p.a)(a,2),c=i[0],s=i[1],d=Object(o.useState)(!1),l=Object(p.a)(d,2),b=l[0],u=l[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(Fn,{children:[Object(w.jsx)(Dn,{}),Object(w.jsx)(y,{}),Object(w.jsx)(Rn,{searchToggle:function(){r(!t)}}),t&&Object(w.jsx)(xe,{open:t})]}),Object(w.jsx)(Hn,{onClick:function(){u(!b),b?(s("close"),setTimeout((function(){s("")}),1e3)):b||s("open")},children:Object(w.jsx)(Ce,{openClass:c})}),c&&Object(w.jsx)(Se,{classOpen:c})]})},Ie=t(123),Ue=j.b.div(on||(on=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 5vh;\n  background: url(",");\n  background-size: cover;\n"])),(function(n){return n.bg})),De=j.b.div(sn||(sn=Object(m.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Fe=j.b.p(dn||(dn=Object(m.a)(["\n  bottom: 20.5rem;\n  margin-left: 2.5rem;\n  font-size: 1.5rem;\n  color: ",";\n"])),h),He=j.b.div(ln||(ln=Object(m.a)(["\n  height: 13rem;\n  width: 10rem;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  @media screen and (max-width: 320px) {\n    width: 8rem;\n    height: 14rem;\n  }\n"])),(function(n){return n.src})),Ae=Object(j.b)(Ie.a)(bn||(bn=Object(m.a)(["\n  border-top: 2px solid rgba(147, 148, 150, 0.6);\n  padding: 1.3rem 5rem;\n  width: calc(100% - 5rem);\n  margin-top: 0.5rem;\n  .swiper-slide {\n    height: 17rem;\n    width: 10rem;\n    &:hover "," {\n      transform: scale(1.1);\n    }\n  }\n"])),He),Ge=j.b.p(un||(un=Object(m.a)(["\n  margin-top: 0.5rem;\n  font-size: 1.425rem;\n  text-align: center;\n  color: white;\n"]))),Le=(t(47),t(121)),Ne=t(120),qe=function(n){var e=n.data,t=n.title;return Object(w.jsx)(Ue,{children:Object(w.jsxs)(De,{children:[Object(w.jsx)(Fe,{children:t}),Object(w.jsx)(Ae,{modules:[Ne.a],navigation:!0,loop:!0,watchSlidesProgress:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:100},400:{slidesPerView:2,spaceBetween:10},480:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:4,spaceBetween:10},1141:{slidesPerView:6,spaceBetween:10},1400:{slidesPerView:6,spaceBetween:10}},children:void 0!==e&&e.map((function(n,e){return Object(w.jsxs)(Le.a,{children:[Object(w.jsx)(He,{src:Zn(n.poster_path)}),Object(w.jsx)(Ge,{children:void 0===n.title?n.name:n.title})]},e)}))})]})})},We=function(){var n=Object(Qn.b)(),e=Object(Qn.c)((function(n){return n.movies.popularMovies.results})),t=Object(Qn.c)((function(n){return n.movies.popularTvShows.results}));return Object(o.useEffect)((function(){n(Oe),n(ge)}),[]),Object(w.jsxs)("div",{style:{marginTop:"10vh"},children:[Object(w.jsx)(qe,{data:e,title:"Popular Movies"}),Object(w.jsx)(qe,{data:t,title:"Popular TV Shows"})]})},Je=j.b.div(pn||(pn=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Xe=j.b.p(mn||(mn=Object(m.a)(["\n  position: absolute;\n  bottom: 20.5rem;\n  left: 3rem;\n  font-size: 1.5rem;\n  color: ",";\n  @media screen and (max-width: 480px) {\n    z-index: 20;\n    bottom: 17.5rem;\n  }\n"])),h),Ye=j.b.div(jn||(jn=Object(m.a)(["\n  position: absolute;\n  bottom: 0;\n  height: 15.5rem;\n  width: 10rem;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  @media screen and (max-width: 480px) {\n    z-index: 20;\n    width: 8rem;\n    height: 13rem;\n  }\n"])),(function(n){return n.src})),Ze=Object(j.b)(Ie.a)(hn||(hn=Object(m.a)(["\n  position: absolute;\n  border-top: 2px solid rgba(147, 148, 150, 0.6);\n  width: calc(100% - 5rem);\n  bottom: 5vh;\n  .swiper-slide {\n    height: 17rem;\n    width: 10rem;\n    &:hover "," {\n      height: 16.5rem;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    z-index: 20;\n    .swiper-slide {\n      height: 14rem;\n      width: 10rem;\n    }\n  }\n"])),Ye),Ke=t(122),Qe=t(56),$e=t(57),nt=(Object(j.b)(Ke.a)(fn||(fn=Object(m.a)([""]))),j.b.div(gn||(gn=Object(m.a)(["\n  display: none;\n  @media screen and (max-width: 480px) {\n    display: block;\n    height: 80vh;\n    width: 100vw;\n    position: absolute;\n    top: 20vh;\n    z-index: 10;\n    background: linear-gradient(\n      to bottom,\n      rgba(15, 12, 41, 0),\n      rgba(36, 36, 62, 1),\n      rgba(48, 43, 99, 1)\n    );\n    background-blend-mode: screen;\n  }\n"])))),et=j.b.div(On||(On=Object(m.a)(["\n  position: absolute;\n  top: 6.5rem;\n  left: 6rem;\n  max-width: 50rem;\n  max-height: 50rem;\n  @media screen and (max-width: 480px) {\n    z-index: 20;\n    top: 5rem;\n    left: 2rem;\n  }\n"]))),tt=j.b.div(xn||(xn=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),rt=j.b.h1(vn||(vn=Object(m.a)(["\n  font-size: 3.5rem;\n  color: rgb(233, 237, 240);\n  @media screen and (max-width: 480px) {\n    font-size: 2.5rem;\n    max-width: 80%;\n  }\n"]))),at=j.b.div(wn||(wn=Object(m.a)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  @media screen and (max-width: 480px) {\n    background-size: 100% 62%;\n  }\n"])),(function(n){return n.src})),it=j.b.div(yn||(yn=Object(m.a)(["\n  display: flex;\n  margin: 0.5rem 0;\n  @media screen and (max-width: 480px) {\n    max-width: 80%;\n    flex-wrap: wrap;\n  }\n"]))),ct=j.b.p(kn||(kn=Object(m.a)(["\n  color: rgb(233, 237, 240);\n  font-size: 1.3rem;\n  &:not(:last-child) {\n    margin-right: 1rem;\n    padding-right: 1rem;\n    border-right: 1px solid rgba(147, 148, 150, 0.6);\n  }\n  @media screen and (max-width: 480px) {\n    font-size: 1rem;\n  }\n"]))),ot=j.b.div(Sn||(Sn=Object(m.a)(["\n  font-weight: 800;\n  font-size: 1.25rem;\n  line-height: 1.8rem;\n  margin: 0.5rem 0;\n  color: rgb(233, 237, 240);\n"]))),st=Object(j.b)(g)(zn||(zn=Object(m.a)(["\n  background: rgb(10, 72, 71);\n  cursor: pointer;\n"]))),dt=Object(j.b)(g)(En||(En=Object(m.a)(["\n  cursor: pointer;\n"]))),lt=j.b.p(_n||(_n=Object(m.a)(["\n  color: rgb(233, 237, 240);\n  margin-top: 1.6vw;\n  width: 60%;\n  font-size: 1.1rem;\n  line-height: 1.6rem;\n  @media screen and (max-width: 480px) {\n    text-indent: 15px;\n    width: 95%;\n    margin-top: 2rem;\n  }\n"]))),bt=Object(j.b)(Qe.a)(Tn||(Tn=Object(m.a)(["\n  color: white;\n  font-size: 1.5rem;\n"]))),ut=Object(j.b)($e.a)(Vn||(Vn=Object(m.a)(["\n  color: white;\n  font-size: 1.5rem;\n"]))),pt=j.b.div(Mn||(Mn=Object(m.a)(["\n  margin: 0.5rem 0;\n"]))),mt="817e8342d860daa34f8e4510732ca634",jt="https://api.themoviedb.org/3",ht="".concat(jt,"/trending/movie/week"),ft="".concat(jt,"/genre/movie/list"),gt="".concat(jt,"/search/movie"),Ot=("".concat(jt,"/movie"),function(){var n=Object(o.useState)(null),e=Object(p.a)(n,2),t=e[0],r=e[1],a=Object(o.useState)(null),i=Object(p.a)(a,2),c=i[0],s=i[1],d=Object(o.useState)(null),l=Object(p.a)(d,2),b=l[0],u=l[1],m=function(){var n=Object(ae.a)(re.a.mark((function n(){var e,t;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,me()(ht,{params:{api_key:mt,language:"en_US",page:1}});case 2:if(e=n.sent,(t=e.data)&&0!==t.length){n.next=7;break}return console.log("no data"),n.abrupt("return");case 7:r(t);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=Object(ae.a)(re.a.mark((function n(){var e,t,r;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,me()(ft,{params:{api_key:mt,language:"en_US",page:1}});case 2:e=n.sent,t=e.data,r=t.genres.map((function(n){return{id:n.id,name:n.name}})),s(r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=Object(ae.a)(re.a.mark((function n(e){var t,r;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==e){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,me()(gt,{params:{api_key:mt,language:"en_US",page:1,include_adult:!1,query:e}});case 6:t=n.sent,r=t.data,u(r.results);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){m(),j()}),[]),{data:t,getMovies:m,genre:c,search:h,searchData:b}}),xt=t(58),vt=t(61),wt=t.n(vt),yt={content:{top:"20rem",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"black",border:"none"},overlay:{zIndex:1e3,background:"rgba(0, 0, 0, 0.4)",backdropFilter:"blur(5px)"}},kt=function(n){var e=n.toggle,t=n.open,r=n.data,a=Object(Qn.b)(),i=Object(Qn.c)((function(n){return"movie"===r.media_type?n.movies.movieTrailer.results:n.movies.tvshowTrailer.results}));return Object(o.useEffect)((function(){if(void 0===r)var n;else a("movie"===r.media_type?(n=r.id,function(){var e=Object(ae.a)(re.a.mark((function e(t){var r,a;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(be,void 0,"/".concat(n,"/videos"));case 2:if(r=e.sent,(a=r.data)&&0!==a.length){e.next=6;break}return e.abrupt("return");case 6:t({type:be.typeStr,payload:a});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()):function(n){return function(){var e=Object(ae.a)(re.a.mark((function e(t){var r,a;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(ue,void 0,"/".concat(n,"/videos"));case 2:if(r=e.sent,(a=r.data)&&0!==a.length){e.next=6;break}return e.abrupt("return");case 6:t({type:ue.typeStr,payload:a});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}(r.id))}),[]),Object(w.jsx)(wt.a,{isOpen:t,onRequestClose:e,style:yt,ariaHideApp:!1,children:void 0!==i&&Object(w.jsx)(xt.a,{videoId:void 0!==i[0].key&&i[0].key,opts:{height:"480",width:"360",playerVars:{autoplay:1}}})})},St=function(n){var e=n.activeData,t=n.children,r=Zn(e.backdrop_path),a=Ot().genre,i=Yn().getRating,c=Object(o.useState)(!1),s=Object(p.a)(c,2),d=s[0],l=s[1],b=function(){l(!d)};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(nt,{}),Object(w.jsx)(at,{src:r,children:t}),Object(w.jsx)(et,{children:Object(w.jsxs)(tt,{children:[Object(w.jsx)(rt,{children:void 0!==e.original_title?e.original_title:e.name}),Object(w.jsxs)(ot,{children:[i(e.vote_average,"20px","2px"),e.vote_average]}),Object(w.jsx)(it,{children:null!==a&&a.map((function(n){return e.genre_ids.map((function(e,t){return n.id===e&&Object(w.jsx)(ct,{children:n.name},t)}))}))}),Object(w.jsxs)(pt,{children:[Object(w.jsx)(st,{onClick:b,children:Object(w.jsx)(bt,{})}),Object(w.jsx)(dt,{children:Object(w.jsx)(ut,{})})]}),Object(w.jsxs)(lt,{children:[e.overview.slice(0,150),"..."]})]})}),d&&Object(w.jsx)(kt,{open:d,toggle:b,data:e})]})},zt=function(n){var e=n.data,t=Object(o.useState)(e[0]),r=Object(p.a)(t,2),a=r[0],i=r[1];return Object(w.jsx)(St,{activeData:a,children:Object(w.jsxs)(Je,{children:[Object(w.jsx)(Xe,{children:"Trending"}),Object(w.jsx)(Ze,{loop:!0,spaceBetween:5,slidesPerView:8.5,watchSlidesProgress:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:100},400:{slidesPerView:2,spaceBetween:10},480:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:4,spaceBetween:10},1141:{slidesPerView:6,spaceBetween:10},1400:{slidesPerView:8,spaceBetween:10}},children:null!==e&&e.map((function(n,e){return Object(w.jsx)(Le.a,{onClick:function(e){!function(n){i(n)}(n)},children:Object(w.jsx)(Ye,{src:Zn(n.poster_path)})},e)}))})]})})},Et=function(){var n=Object(Qn.b)(),e=Object(Qn.c)((function(n){return n.movies.trendingTvShowsList.results}));return Object(o.useEffect)((function(){n(fe)}),[]),Object(w.jsx)(w.Fragment,{children:void 0!==e&&Object(w.jsx)(zt,{data:e})})},_t=function(){var n=Object(Qn.b)(),e=Object(Qn.c)((function(n){return n.movies.trendingMovieList.results}));return Object(o.useEffect)((function(){n(he)}),[]),Object(w.jsx)(w.Fragment,{children:void 0!==e&&Object(w.jsx)(zt,{data:e})})},Tt=function(){return Object(w.jsx)("div",{})};var Vt=function(){return Object(w.jsxs)(b.a,{children:[Object(w.jsx)(Re,{}),Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{path:"/movies-api/",exact:!0,component:We}),Object(w.jsx)(u.a,{path:"/movies-api/movies",exact:!0,component:_t}),Object(w.jsx)(u.a,{path:"/movies-api/shows",component:Et}),Object(w.jsx)(u.a,{path:"/movies-api/upcoming",component:Tt})]})]})},Mt=t(28),Pt=t(15),Bt={trendingMovieList:{},searchMovieResults:{},trendingTvShowsList:{},popularTvShows:{},popularMovies:{},movieTrailer:{},tvshowTrailer:{}},Ct=t(62),Rt=t(63),It=Object(Mt.combineReducers)({movies:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case oe.typeStr:return Object(Pt.a)(Object(Pt.a)({},n),{},{trendingMovieList:e.payload});case ce.typeStr:return Object(Pt.a)(Object(Pt.a)({},n),{},{searchMovieResults:e.payload});case se.typeStr:return Object(Pt.a)(Object(Pt.a)({},n),{},{trendingTvShowsList:e.payload});case de.typeStr:return Object(Pt.a)(Object(Pt.a)({},n),{},{popularTvShows:e.payload});case le.typeStr:return Object(Pt.a)(Object(Pt.a)({},n),{},{popularMovies:e.payload});case be.typeStr:return Object(Pt.a)(Object(Pt.a)({},n),{},{movieTrailer:e.payload});case ue.typeStr:return Object(Pt.a)(Object(Pt.a)({},n),{},{tvshowTrailer:e.payload});default:return n}}}),Ut=Object(Mt.createStore)(It,{},Object(Rt.composeWithDevTools)(Object(Mt.applyMiddleware)(Ct.a)));l.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsxs)(Qn.a,{store:Ut,children:[Object(w.jsx)(f,{}),Object(w.jsx)(Vt,{})]})}),document.getElementById("root"))},68:function(n,e,t){},69:function(n,e,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.89855ed8.chunk.js.map