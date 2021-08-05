(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),i=a.n(c),o=(a(97),a(20)),s=a(16),l=a(11),d=a(50),j=a(141),b=a(109),u=a(129),m=a(47),p=a(130),f=a(142),g=a(132),h=a(133),x=a(134),O=a(127),v=a(128),y=a(28),w=a(33),S=a.n(w),I=a(42),C=a(23),k="http://localhost:8080",z=Object(C.b)("funfact/fetchContent",function(){var e=Object(I.a)(S.a.mark((function e(t,a){var r,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(k,"/fun-fact?year=").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n.funfact);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",a.rejectWithValue(e.t0.response.data));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}()),P=Object(C.c)({name:"funfact",initialState:{funfact:"",year:"",status:"idle"},reducers:{setYear:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{year:t.payload})},resetData:function(e){return Object(y.a)(Object(y.a)({},e),{},{funfact:"",year:"",status:"idle"})}},extraReducers:function(e){e.addCase(z.pending,(function(e){e.status="loading"})).addCase(z.fulfilled,(function(e,t){e.status="fulfilled","<"!==t.payload[0]?e.funfact=t.payload:e.status="rejected"})).addCase(z.rejected,(function(e){e.status="rejected"}))}}),W=P.actions,N=(W.setData,W.setYear),T=W.resetData,L=(P.reducer,P.reducer),A=a(79),B=a.n(A),M=a(2);function D(){return Object(M.jsxs)(j.a,{role:"alert",borderColor:"error.main",border:"1px solid",borderRadius:"4px",p:1.2,mt:1,pl:2,pr:2,color:"error.main",children:[Object(M.jsx)(B.a,{color:"error.main"}),Object(M.jsx)(b.a,{variant:"body2",component:"body2",style:{paddingLeft:"1rem",verticalAlign:"super"},children:"Something went wrong. Please try again!"})]})}function R(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.funfact}));return Object(r.useEffect)((function(){return function(){e(T())}}),[]),Object(M.jsxs)(j.a,{mb:2,mt:.5,children:[Object(M.jsx)(b.a,{variant:"body1",component:"body1",color:"textSecondary",style:{verticalAlign:"middle"},children:t.year}),Object(M.jsxs)(O.a,{color:"primary",onClick:function(){e(z(t.year))},style:{marginLeft:".5rem"},children:["Fun Fact of ",t.year,"?"]}),Object(M.jsx)(v.a,{in:"fulfilled"===t.status||"loading"===t.status,timeout:300,children:Object(M.jsxs)(j.a,{p:2,mb:2,mt:1,border:1,borderColor:"primary.main",style:{borderStyle:"dashed"},children:["loading"===t.status&&Object(M.jsx)(j.a,{textAlign:"center",mb:2,children:Object(M.jsx)(u.a,{size:23})}),"fulfilled"===t.status&&Object(M.jsx)(b.a,{variant:"body2",children:t.funfact})]})}),"rejected"===t.status&&Object(M.jsx)(D,{})]})}var E=a(65),Y=a.n(E),_=Object(p.a)((function(e){return{posterImg:{width:"100%",maxHeight:"calc(100vh - 104px)",objectFit:"contain",position:"relative",boxSizing:"border-box"},bgImg:{filter:"url(#svg-blur)",webkitFilter:"url(#svg-blur)",height:"110vh",width:"110%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"absolute",top:"-5vh",left:"-5%"},closeBtn:Object(m.a)({position:"absolute",right:"20px",top:"20px"},e.breakpoints.down("md"),{display:"none"}),closeBtn_fab:Object(m.a)({top:"10px",position:"fixed",right:"10px",zIndex:"999"},e.breakpoints.up("md"),{display:"none"})}}));function G(e){var t=_(),a=e.onClose,n=e.open,c=Object(s.c)((function(e){return e.itemList})).selectedProgram,i=Object(s.b)(),o=function(){a()};return Object(r.useEffect)((function(){i(N(c.releaseYear))}),[c]),Object(M.jsxs)(f.a,{onClose:o,"aria-label":c.title,open:n,maxWidth:"lg",fullWidth:!0,children:[Object(M.jsx)(g.a,{"aria-label":"close",onClick:o,className:t.closeBtn_fab,children:Object(M.jsx)(Y.a,{})}),Object(M.jsx)(h.a,{"aria-label":"close",onClick:o,className:t.closeBtn,children:Object(M.jsx)(Y.a,{})}),c&&Object(M.jsxs)(x.a,{container:!0,children:[Object(M.jsx)(x.a,{item:!0,xs:12,md:5,children:Object(M.jsxs)(j.a,{position:"relative",overflow:"hidden",children:[Object(M.jsx)(j.a,{className:t.bgImg,style:{backgroundImage:"url(".concat(c.images["Poster Art"].url,")")}}),Object(M.jsx)("svg",{style:{display:"none"},children:Object(M.jsx)("filter",{id:"svg-blur",children:Object(M.jsx)("feGaussianBlur",{stdDeviation:"20"})})}),Object(M.jsx)("img",{className:t.posterImg,src:c.images["Poster Art"].url,alt:"Poster Art"})]})},"dialogImg"),Object(M.jsx)(x.a,{item:!0,xs:12,md:7,children:Object(M.jsxs)(j.a,{p:6,children:[Object(M.jsx)(b.a,{variant:"h2",style:{fontWeight:"600"},children:c.title}),Object(M.jsx)(j.a,{children:Object(M.jsx)(R,{year:c.releaseYear})}),Object(M.jsx)(b.a,{variant:"body1",children:c.description})]})},"dialogBody")]})]})}var H=a(135),F=a(136),V=a(137),Z=Object(C.b)("itemList/fetchPrograms",function(){var e=Object(I.a)(S.a.mark((function e(t,a){var r,n,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(k,"/programs?programtype=").concat(t));case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c.programs);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),J=Object(C.c)({name:"itemList",initialState:{programs:[],programType:"",selectedProgram:"",status:"idle",error:null},reducers:{setProgramType:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{programType:t.payload})},setSelectedProgram:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{selectedProgram:t.payload})}},extraReducers:function(e){e.addCase(Z.pending,(function(e){e.status="loading"})).addCase(Z.fulfilled,(function(e,t){e.status="fulfilled",e.programs=t.payload})).addCase(Z.rejected,(function(e,t){e.status="rejected",e.error=t.error.message}))}}),$=J.actions,q=$.setProgramType,K=$.setSelectedProgram,Q=(J.reducer,J.reducer),U=Object(p.a)((function(e){return{paddingZero:{padding:0},card:{margin:e.spacing(2),borderRadius:"1rem",overflow:"hidden",position:"relative","&:after":{content:'""',display:"block",position:"absolute",width:"100%",height:"64%",bottom:0,zIndex:1,background:"linear-gradient(to top, #000, rgba(0,0,0,0))"}},titleWrapper:{textAlign:"left",padding:"1.5rem 8%",color:"#fff",position:"absolute",zIndex:2,bottom:0,width:"100%",boxSizing:"border-box"},itemYear:{fontSize:".8rem",marginBottom:".4rem",opacity:.85},itemTitle:{fontSize:"1.2rem",fontWeight:"600",lineHeight:1.4,letterSpacing:.2}}}));function X(e){var t,a=Object(s.b)(),r=U(),n=Object(s.c)((function(e){return e.itemList}));return Object(M.jsx)(x.a,{container:!0,spacing:2,children:null===(t=n.programs)||void 0===t?void 0:t.map((function(t){return Object(M.jsx)(x.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(M.jsx)(H.a,{className:"".concat(r.card," ").concat(r.paddingZero),variant:"outlined",onClick:function(){a(K(t)),e.open()},children:Object(M.jsxs)(F.a,{className:r.paddingZero,children:[Object(M.jsx)(V.a,{style:{height:"25vw"},image:t.images["Poster Art"].url,title:t.title}),Object(M.jsxs)(j.a,{className:r.titleWrapper,children:[Object(M.jsx)(b.a,{variant:"h3",className:r.itemYear,children:t.releaseYear}),Object(M.jsx)(b.a,{variant:"h2",className:r.itemTitle,children:t.title})]})]})},t.title)},t.title+"wrapper")}))})}function ee(e){var t=Object(r.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1],i=Object(s.b)(),o=Object(s.c)((function(e){return e.itemList}));return Object(r.useEffect)((function(){i(q(e.programType)),i(Z(e.programType))}),[e.programType]),Object(M.jsxs)(j.a,{p:6,maxWidth:"1920",children:[Object(M.jsxs)(j.a,{mb:8,children:[Object(M.jsx)(b.a,{variant:"h2",align:"center",color:"textPrimary",children:"movie"===o.programType?o.programType+"s":o.programType}),Object(M.jsxs)(b.a,{variant:"subtitle1",align:"center",color:"textPrimary",children:["Find our popular ",o.programType," titles here! ",Object(M.jsx)("br",{}),"Click item to view more details."]})]}),Object(M.jsxs)(j.a,{textAlign:"center",children:["loading"===o.status&&Object(M.jsx)(u.a,{size:68}),"fulfilled"===o.status&&Object(M.jsx)(X,{open:function(){c(!0)}.bind(this)}),"rejected"===o.status&&Object(M.jsx)(D,{})]}),Object(M.jsx)(G,{selectedData:o.selectedProgram,open:n,onClose:function(){c(!1)},maxWidth:"lg",fullWidth:!0})]})}var te=a(61),ae=a.n(te),re=a(60),ne=a.n(re),ce=Object(p.a)({ani:{position:"absolute",opacity:".3",animation:"$bgani 25s infinite"},"@keyframes bgani":{"0%":{top:"-50%",left:"-5%"},"20%":{top:"-50%",left:"0%"},"40%":{top:"-55%",left:"0%"},"60%":{top:"-55%",left:"-3%"},"80%":{top:"-49%",left:"-3%"},"100%":{top:"-49%",left:"-5%"}}});function ie(e){var t=e.imageList,a=ce(),n=Object(r.useState)(Math.floor(Math.random()*(t.length-1))),c=Object(d.a)(n,2),i=c[0],o=c[1],s=Object(r.useState)(""),l=Object(d.a)(s,2),b=l[0],u=l[1];return Object(r.useEffect)((function(){var e=setInterval((function(){o(Math.floor(Math.random()*(t.length-1)))}),5e3);return u(a.ani),function(){return clearInterval(e)}}),[]),Object(M.jsx)(j.a,{style:{overflow:"hidden",position:"relative",opacity:".5"},width:"100%",height:"100vh",children:Object(M.jsx)("img",{src:t[i].url,className:b,width:"105%"})})}function oe(){var e=Object(s.c)((function(e){return e.bgImg}));return console.log(e),Object(M.jsxs)(j.a,{position:"relative",children:[Object(M.jsx)(j.a,{width:"100%",position:"absolute",top:"-68px",style:{zIndex:"-999",backgroundColor:"#000"},children:"fulfilled"===e.status&&Object(M.jsx)(ie,{imageList:e.imgList})}),Object(M.jsx)(j.a,{p:4,pt:4,m:"auto",minHeight:"80vh",display:"flex",alignItems:"flex-end",children:Object(M.jsxs)(j.a,{textAlign:"center",pb:"20vh",width:"100%",children:[Object(M.jsx)(b.a,{variant:"h1",align:"center",style:{color:"#fff"},children:"Meet our popular streaming contents"}),Object(M.jsxs)(b.a,{variant:"body1",style:{color:"#ffffffCC",marginBottom:"1.7rem"},children:["Streaming service coming soon.",Object(M.jsx)("br",{}),"Preview our contents list and learn about some fun facts!"]}),Object(M.jsx)(O.a,{component:o.b,to:se,variant:"contained",color:"primary","aria-label":"Go to series",size:"large",disableElevation:!0,style:{margin:".5rem"},startIcon:Object(M.jsx)(ne.a,{}),children:"Series"}),Object(M.jsx)(O.a,{component:o.b,to:le,variant:"contained",color:"primary","aria-label":"Go to movies",size:"large",disableElevation:!0,style:{margin:".5rem"},startIcon:Object(M.jsx)(ae.a,{}),children:"Movies"})]})})]},"homeWrapper")}var se="/series/",le="/movies/";function de(){return Object(M.jsxs)(l.c,{children:[Object(M.jsx)(l.a,{path:"/",exact:!0,component:oe}),Object(M.jsx)(l.a,{path:se,render:function(e){return Object(M.jsx)(ee,{programType:"series"})}}),Object(M.jsx)(l.a,{path:le,render:function(e){return Object(M.jsx)(ee,{programType:"movie"})}})]})}var je=a(140),be=a(84),ue=Object(be.a)({palette:{primary:{main:"#008edd"},secondary:{main:"#c2dd6a"}},typography:{h1:{fontWeight:"600",fontSize:"2.5rem",letterSpacing:"1px",marginBottom:"1.5rem",textTransform:"capitalize"},subtitle1:{fontSize:"1rem"},h2:{fontWeight:"600",textTransform:"capitalize",marginBottom:"1rem"}}}),me=(a(105),a(106),a(138)),pe=a(143),fe=Object(p.a)((function(e){return{logo:{fontSize:"1.3rem",textTransform:"uppercase",textDecoration:"none",fontWeight:"300",letterSpacing:"2px"},navbar:{transition:".2s",flexDirection:"row",background:"#ffffffD9",justifyContent:"space-between",alignItems:"center",paddingRight:e.spacing(6),paddingLeft:e.spacing(6),boxShadow:"none",margin:"0 auto",height:"50px",borderRadius:"25px"},homeNavBar:{justifyContent:"center",background:"none"},menuIcons:{marginRight:e.spacing(2)}}}));function ge(){var e=Object(l.f)().pathname,t=fe();return Object(M.jsx)(j.a,{maxWidth:"1920px",p:1,position:"sticky",top:"0",zIndex:"999",children:Object(M.jsxs)(me.a,{position:"static",className:"".concat(t.navbar," ").concat("/"===e?t.homeNavBar:""),children:[Object(M.jsx)(b.a,{variant:"h6",className:t.logo,"aria-label":"home",component:o.b,to:"/",color:"primary",style:{color:"/"===e?"#ffffff":""},children:"DEMO Streaming"},"logo"),Object(M.jsxs)(j.a,{display:"/"===e?"none":"",children:[Object(M.jsx)(pe.a,{title:"Series","aria-label":"series",children:Object(M.jsx)(h.a,{component:o.b,to:se,children:Object(M.jsx)(ne.a,{})})}),Object(M.jsx)(pe.a,{title:"Movies","aria-label":"movies",children:Object(M.jsx)(h.a,{component:o.b,to:le,children:Object(M.jsx)(ae.a,{})})})]},"navmenus")]},"navbar")})}var he=a(139),xe=a(81),Oe=a.n(xe),ve=a(82),ye=a.n(ve),we=a(83),Se=a.n(we),Ie=a.p+"static/media/downloadAppStore.8c4986ee.svg",Ce={Home:"/","Terms and Conditions":"","Privacy Policy":"","Collection Statement":"",Help:"","Manage Account":""},ke=Object(p.a)((function(e){return{storeIcon:{height:"36px",maxWidth:"100%",paddingLeft:e.spacing(2)},socialIcon:{color:e.palette.text.secondary,marginRight:e.spacing(1)}}})),ze=Object.keys(Ce);function Pe(){var e=ke();return Object(M.jsx)(j.a,{mt:10,children:Object(M.jsxs)(j.a,{maxWidth:"1920px",p:6,m:"auto",children:[Object(M.jsx)(j.a,{ml:-1.5,children:ze.map((function(e){return Object(M.jsx)(j.a,{display:"inline-block",pl:1.5,pr:1.5,borderRight:1,borderColor:"text.disabled",lineHeight:"1",children:Object(M.jsx)(he.a,{variant:"body2",color:"textSecondary",to:Ce[e]?Ce[e]:"",style:{textDecoration:"none",cursor:"pointer"},component:o.b,children:e})},"footerMenu".concat(e))}))}),Object(M.jsx)(j.a,{mt:2,mb:6,children:Object(M.jsx)(b.a,{color:"textSecondary",variant:"body2",children:"Copyright 2021 DEMO Streaming. All rights Reserved."})}),Object(M.jsxs)(x.a,{container:!0,children:[Object(M.jsxs)(x.a,{item:!0,xs:12,sm:6,children:[Object(M.jsx)(Oe.a,{fontSize:"large",className:e.socialIcon}),Object(M.jsx)(ye.a,{fontSize:"large",className:e.socialIcon}),Object(M.jsx)(Se.a,{fontSize:"large",className:e.socialIcon})]}),Object(M.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(M.jsxs)(j.a,{textAlign:"right",children:[Object(M.jsx)("img",{src:Ie,className:e.storeIcon,alt:"Download on the App Store"}),Object(M.jsx)("img",{alt:"Get it on Google Play",className:e.storeIcon,style:{marginBottom:"-8px",height:"51px"},src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"}),Object(M.jsx)("img",{className:e.storeIcon,src:"https://developer.microsoft.com/store/badges/images/English_get-it-from-MS.png",alt:"Get it from Microsoft"})]})})]})]})})}var We=Object(C.b)("bgImg/fetchContent",Object(I.a)(S.a.mark((function e(){var t,a,r,n=arguments;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:"",t=n.length>1?n[1]:void 0,e.prev=2,e.next=5,fetch("".concat(k,"/bg-img"));case 5:return a=e.sent,e.next=8,a.json();case 8:return r=e.sent,e.abrupt("return",r.imageList);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",t.rejectWithValue(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))),Ne=Object(C.c)({name:"bgImg",initialState:{imgList:[],status:"idle"},reducers:{},extraReducers:function(e){e.addCase(We.pending,(function(e){e.status="loading"})).addCase(We.fulfilled,(function(e,t){e.status="fulfilled",e.imgList=t.payload})).addCase(We.rejected,(function(e){e.status="rejected"}))}}),Te=(Ne.reducer,Ne.reducer);function Le(){var e=Object(s.b)();return Object(r.useEffect)((function(){e(We())}),[]),Object(M.jsx)(je.a,{theme:ue,children:Object(M.jsxs)(o.a,{children:[Object(M.jsx)(ge,{}),Object(M.jsx)(de,{}),Object(M.jsx)(Pe,{})]})})}var Ae=Object(C.a)({reducer:{bgImg:Te,funfact:L,itemList:Q}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(M.jsx)(n.a.StrictMode,{children:Object(M.jsx)(s.a,{store:Ae,children:Object(M.jsx)(Le,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.6258ed51.chunk.js.map