(this["webpackJsonpreact-admin-antd"]=this["webpackJsonpreact-admin-antd"]||[]).push([[0],{1290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(127),l=a(51);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(633);var o=a(408),u=a(75),i=a(306),s=a(399),m=a.n(s);window.hyoukaRouterPath={};var d=function e(t){var a=t(),n=a.path,c=a.component,o=a.redirect,s=a.meta,d=(a.icon,Object(i.a)(a,["path","component","redirect","meta","icon"]));n&&"/"!==n&&(window.hyoukaRouterPath[n]=Object(u.a)({path:n,meta:s},d)),o&&m.a.isArray(d.children)&&(d.children=d.children.map((function(t){return e((function(){return t}))})),d.children.unshift(r.a.createElement(l.a,{to:o,from:n,key:"".concat(n,"_redirect"),exact:!0})));var f={key:n||m.a.random(),render:function(e){var t,a=Object.assign({},e);return t=s.title,document.title="Hyouka-".concat(t),r.a.createElement(c,Object.assign({renderChildren:d},a))}};return r.a.createElement(l.b,Object.assign({path:n},f))},f=(a(243),a(85)),p=a.n(f),h=(a(638),p.a.Content),E=function(e){var t=e.renderChildren.children;return r.a.createElement(p.a,{className:"full-layout user-layout fixed"},r.a.createElement(h,null,r.a.createElement(l.d,null,t)))},b=a(36),g=a(142),v=a(8),y=a.n(v),O=a(1301),j=a(1303),x=(a(314),a(131)),w=a.n(x),k=(a(704),a(705).pathToRegexp);function N(e,t){return e.filter((function(e){return k(e.path).test(t)}))}var S=p.a.Sider,M=w.a.SubMenu,C=w.a.Item,F=function(e){return"string"===typeof e&&0===e.indexOf("http")?r.a.createElement("img",{src:e,alt:"\u56fe\u6807",className:"sider-menu-item-img"}):"string"===typeof e?r.a.createElement(A,{font:"antd",antd:"true",type:e}):e},I=function(e){var t=y()("sidebar-left","sidebar-default"),a=e.menu,l=e.collapsed,o=e.themeClass,u=e.location,i=e.flatMenu,s=e.currentMenu,m=Object(n.useState)([]),d=Object(b.a)(m,2),f=d[0],p=d[1],h=function(e,t){var a=N(e,t.pathname)[0];return a?[a.path]:[]}(i,u),E=l?{selectedKeys:h}:{selectedKeys:h,openKeys:f};return Object(n.useEffect)((function(){p(s?s.parentPath:[])}),[s]),r.a.createElement(S,{width:230,className:t,trigger:null,collapsed:l},r.a.createElement("div",{className:"slider-left-logo"},r.a.createElement("span",null,r.a.createElement("img",{src:"https://hyoukam.github.io/react-antd-admin/public/Athena.jpg",alt:""}),l?null:r.a.createElement("h1",null,"Hyouka Admin"))),r.a.createElement("div",{className:"sidebar-left-content"},r.a.createElement(w.a,Object.assign({mode:"inline",onOpenChange:function(e){return function(e){p(e)}(e)},className:"ant-menu-".concat(o)},E),function e(t){if(!t)return[];var a=function(t){return t.children&&t.children.length>0?e(t.children)&&e(t.children).length>0?r.a.createElement(M,{title:t.icon?r.a.createElement("span",null,F(t.icon),r.a.createElement("span",null,t.meta.title)):t.meta.title,key:t.path},e(t.children)):void 0:r.a.createElement(C,{key:t.path},function(e){var t=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/").replace(/\/:\w+\??/,"")}(e.path),a=F(e.icon),n=e.meta;return/^https?:\/\//.test(t)?r.a.createElement("a",{href:t},a,r.a.createElement("span",null,n.title)):r.a.createElement(c.b,{to:t,replace:t===u.pathname},a,r.a.createElement("span",null,n.title))}(t))};return t.filter((function(e){return e.meta.title&&!e.hidden})).map((function(e){return a(e)})).filter((function(e){return e}))}(a))))},P=a(194),q=a(589),R=a(286),A=function(e){var t,n=e.prefixClass,c=e.type,l=e.className,o=e.children,u=e.font,s=e.antd,m=e.spin,d=Object(i.a)(e,["prefixClass","type","className","children","font","antd","spin"]),f=y()(n,(t={},Object(P.a)(t,u,u),Object(P.a)(t,"".concat(u,"-").concat(c),u&&c),Object(P.a)(t,"spin",m),t),l);if(/^&#x.+;$/.test(c))return r.a.createElement("i",Object.assign({className:f},e,{dangerouslySetInnerHTML:{__html:c}}));if(s){var p=y()(n,l);if("string"===typeof c){var h=a(229)[c]||q.a;return r.a.createElement(h,Object.assign({className:p,spin:m},e))}if(r.a.isValidElement(c))return r.a.createElement(R.a,Object.assign({component:function(){return c},className:p,spin:m},e))}return r.a.createElement("i",Object.assign({className:l},d),o)},H=(a(713),a(429),a(599)),T=a.n(H),z=(a(716),a(600)),B=a.n(z),D=a(595),L=a(592),K=a(594),_=w.a.Item,J=w.a.Divider,U=function(e){var t=e.dispatch,a=Object(g.b)("roles"),n=r.a.createElement(w.a,{onClick:function(e){switch(e.key){case"logout":return t({type:"login/Logout"}),!1;default:return!1}}},r.a.createElement(_,{key:"center"},r.a.createElement(D.a,null),"\u4e2a\u4eba\u4e2d\u5fc3"),r.a.createElement(_,{key:"github"},r.a.createElement(L.a,null),"GitHub\u5730\u5740"),r.a.createElement(J,null),r.a.createElement(_,{key:"logout"},r.a.createElement(K.a,null),"\u9000\u51fa\u767b\u5f55"));return r.a.createElement(T.a,{overlay:n,className:"avatar-dropdown"},r.a.createElement("span",{className:"avatar-dropdown-action"},r.a.createElement(B.a,{size:"small",className:"avatar-dropdown-avatar",src:"https://hyoukam.github.io/react-antd-admin/public/Athena.jpg",alt:"\u5934\u50cf"}),r.a.createElement("span",null,a)))};var W=function(e){var t=e.setCollapsed,a=e.collapsed,c=e.dispatch,l=e.location,o=y()("ant-header"),u=Object(n.useState)(!1),i=Object(b.a)(u,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){document.onfullscreenchange=function(){m(!!document.fullscreenElement)}}),[]),r.a.createElement("div",{className:o},r.a.createElement("span",{className:"ant-header-trigger",onClick:t},r.a.createElement(A,{type:a?"MenuUnfoldOutlined":"MenuFoldOutlined",antd:"true",font:""})),r.a.createElement(te,{location:l}),r.a.createElement("div",{className:"ant-header-right"},r.a.createElement("span",{className:"avatar-dropdown avatar-dropdown-action",onClick:function(){var e;e=document.documentElement,document.fullscreenElement?document.fullscreenElement&&(document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()):e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullScreen(),m(!document.fullscreenElement)}},r.a.createElement(Q,{fullscreen:s})),r.a.createElement(U,{dispatch:c})))},$=(a(315),a(165)),G=a.n($),V=a(590),Y=a(591),Q=function(e){return e.fullscreen?r.a.createElement(G.a,{title:"\u9000\u51fa\u5168\u5c4f"},r.a.createElement(V.a,null)):r.a.createElement(G.a,{title:"\u5168\u5c4f"},r.a.createElement(Y.a,null))},X=(a(734),a(402)),Z=a.n(X),ee=Z.a.Item;var te=function(e){var t=e.location,a=Object(n.useState)([]),l=Object(b.a)(a,2),o=l[0],u=l[1];return Object(n.useEffect)((function(){u(function(e){var t=[];return e.split("/").reduce((function(e,a){var n=[e,a].join("/");return t.push(n),n})),t.map((function(e){return window.hyoukaRouterPath[e]})).filter((function(e){return e}))}(t.pathname))}),[t]),r.a.createElement("div",null,o.length?r.a.createElement(Z.a,null,r.a.createElement(ee,null,r.a.createElement(c.b,{to:"/"},"\u9996\u9875")),o.map((function(e){return r.a.createElement(ee,{key:e.path},r.a.createElement("span",null,e.meta.title))}))):null)},ae=a(191),ne=a.n(ae),re=(a(888),p.a.Content),ce=p.a.Header,le=Object(ae.connect)((function(e){var t=e.global,a=e.login;return Object(u.a)({menu:t.asyncMenu,login:a},t)}))((function(e){var t=e.location,a=e.renderChildren,c=e.dispatch,o=e.menu,i=e.flatMenu,s=a.children,m=Object(n.useState)(!1),d=Object(b.a)(m,2),f=d[0],h=d[1],E=Object(l.g)(),v=Object(n.useState)(Object(g.b)("roles")),x=Object(b.a)(v,1)[0],w=Object(n.useState)(Object(u.a)({leftSide:"darkgrey",navBar:"light"},Object(g.b)("theme"))),k=Object(b.a)(w,1)[0],S=y()("basic-layout","full-layout",{fixed:k.layout&&-1!==k.layout.indexOf("fixedSidebar"),"fixed-header":k.layout&&-1!==k.layout.indexOf("fixedHeader"),"fixed-breadcrumbs":k.layout&&-1!==k.layout.indexOf("fixedBreadcrumbs"),"hided-breadcrumbs":k.layout&&-1!==k.layout.indexOf("hidedBreadcrumbs")});return Object(n.useEffect)((function(){x||E.push({pathname:"/user/login"}),k.layout||(k.layout=["fixedHeader","fixedSidebar","fixedBreadcrumbs"]),c({type:"global/getMenu"})}),[x,E,k,c]),r.a.createElement(p.a,{className:S},r.a.createElement(p.a,null,r.a.createElement(I,{collapsed:f,currentMenu:N(i,t.pathname)[0],flatMenu:i,menu:o,location:t,themeClass:k.leftSide,collapsedLeftSide:f}),r.a.createElement(re,{style:{overflow:"hidden"}},r.a.createElement(p.a,{className:"full-layout"},r.a.createElement(ce,null,r.a.createElement(W,{location:t,dispatch:c,collapsed:f,setCollapsed:function(){h(!f)}})),r.a.createElement(O.a,null,r.a.createElement(j.a,{key:t.pathname,classNames:"fade",timeout:500},r.a.createElement(re,{className:"router-page"},r.a.createElement(l.d,{location:t},s))))))))})),oe=(a(889),a(605)),ue=a.n(oe),ie=(a(248),a(184)),se=a.n(ie),me=(a(891),a(606)),de=a.n(me),fe=(a(893),a(404)),pe=a.n(fe),he=(a(895),a(403)),Ee=a.n(he),be=(a(898),a(593)),ge=p.a.Content,ve=Ee.a.Item,ye=Object(ae.connect)((function(e){return{formLogin:e.login}}))((function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],l=a[1];return r.a.createElement(p.a,{className:"full-layout login-page"},r.a.createElement(ge,null,r.a.createElement(ue.a,{tip:"\u767b\u9646\u4e2d...",spinning:c},r.a.createElement(Ee.a,{className:"login-form",onFinish:function(t){(0,e.dispatch)({type:"login/Login",payload:Object(u.a)({},t)}),l(!1)}},r.a.createElement("div",{className:"user-img"},r.a.createElement("img",{src:"https://hyoukam.github.io/react-antd-admin/public/Athena.jpg",alt:"logo"}),r.a.createElement("b",null,"HYOUKA"),r.a.createElement("span",null,"-"),r.a.createElement("span",null,"Admin")),r.a.createElement(ve,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d\uff0c\u793a\u4f8badmin"}]},r.a.createElement(pe.a,{size:"large",prefix:r.a.createElement(D.a,null),placeholder:"\u7528\u6237\u540d"})),r.a.createElement(ve,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801\uff0c\u793a\u4f8badmin"}]},r.a.createElement(pe.a,{size:"large",prefix:r.a.createElement(be.a,null),type:"password",placeholder:"\u5bc6\u7801"})),r.a.createElement(ve,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(de.a,null,"\u8bb0\u4f4f\u6211")),r.a.createElement("a",{className:"login-form-forgot",href:"/"},"\u5fd8\u8bb0\u5bc6\u7801"),r.a.createElement(ve,null,r.a.createElement(se.a,{size:"large",className:"login-form-button",type:"primary",htmlType:"submit"},"\u767b\u9646")),r.a.createElement("div",{className:"new-user"},"\u65b0\u7528\u6237\uff1f",r.a.createElement("a",{href:"/"},"\u73b0\u5728\u6ce8\u518c"))))))})),Oe=(a(497),a(304)),je=a.n(Oe),xe=(a(498),a(396)),we=a.n(xe),ke=(a(969),a(614)),Ne=a.n(ke),Se=(a(973),a(615)),Me=a.n(Se),Ce=(a(975),a(617));var Fe=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){new Promise((function(e){e([{Date:"2010-01",scales:1998},{Date:"2010-02",scales:1850},{Date:"2010-03",scales:1851},{Date:"2010-04",scales:1234},{Date:"2010-05",scales:1560}])})).then((function(e){c(e)}))}),[]);var l={data:a,xField:"Date",xAxis:{visible:!1},yAxis:{visible:!1},yField:"scales",height:100,forceFit:!0},o=[{span:"\u603b\u9500\u552e\u989d",iconType:"InfoCircleOutlined",value:Math.floor(1e7*Math.random())},{span:"\u603b\u9500\u552e\u989d",iconType:"InfoCircleOutlined",value:Math.floor(1e7*Math.random())},{span:"\u603b\u9500\u552e\u989d",iconType:"InfoCircleOutlined",value:Math.floor(1e7*Math.random())},{span:"\u603b\u9500\u552e\u989d",iconType:"InfoCircleOutlined",value:Math.floor(1e7*Math.random())}];return r.a.createElement("div",{className:"dashboard-component"},r.a.createElement(je.a,{gutter:16},o.map((function(e,t){return r.a.createElement(we.a,{key:t,span:6},r.a.createElement(Ne.a,null,r.a.createElement("div",{className:"dashboard-component-body"},r.a.createElement("div",{className:"dashboard-component-meta"},r.a.createElement("div",{className:"dashboard-component-chart-top"},r.a.createElement("div",{className:"dashboard-component-chart-top-index"},r.a.createElement("span",null,e.span),r.a.createElement(G.a,{title:e.span,className:"dashboard-component-chart-top-index-tooltip"},r.a.createElement(A,{type:e.iconType,antd:"true",font:""}))),r.a.createElement("div",{className:"dashboard-component-chart-statistic"},r.a.createElement(Me.a,{value:"\uffe5".concat(e.value)})),r.a.createElement("div",{className:"dashboard-component-chart"},r.a.createElement(Ce.a,l)),r.a.createElement("div",{className:"dashboard-component-footer"},r.a.createElement("div",{className:"dashboard-component-footer-span"},r.a.createElement("span",null,e.span),r.a.createElement("span",{style:{marginLeft:"8px"}},"\uffe5",e.value))))))))}))),r.a.createElement(je.a,{gutter:16},r.a.createElement("div",null,"123")))},Ie=(a(1282),a(616)),Pe=a.n(Ie),qe=a(143),Re=function(){return r.a.createElement(Pe.a,{status:"404",title:"404",subTitle:"\u5bf9\u4e0d\u8d77\u6ca1\u6709\u76f8\u5173\u7684\u9875\u9762...",extra:r.a.createElement(se.a,{type:"primary",onClick:function(){return qe.a.push("/")}},"Back Home")})},Ae=function(){return[{path:"/user",component:E,meta:{title:"\u767b\u9646"},redirect:"/user/login",children:[{meta:{title:"\u767b\u9646"},path:"/user/login",component:ye},{meta:{title:"\u9519\u8bef\u9875\u9762"},path:"*",component:Re}]},{path:"/",component:le,meta:{title:"\u9996\u9875"},redirect:"/dashboard",children:[{meta:{title:"\u9ed8\u8ba4\u9875"},path:"/dashboard",component:Fe},{meta:{title:"\u9519\u8bef"},path:"*",component:Re}]}]},He=function(){return function(e){var t=e().map((function(e){return d((function(){return e}))})).reduce((function(e,t){return t.length?[].concat(Object(o.a)(e),Object(o.a)(t)):e.concat(t)}),[]);return r.a.createElement(l.d,null,t)}(Ae)},Te=ne()({history:qe.a});Te.model(a(1295).default),Te.model(a(1296).default),Te.router((function(){return r.a.createElement(c.a,null,r.a.createElement(l.c,{history:qe.a},He()))})),Te.start("#root"),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},1295:function(e,t,a){"use strict";a.r(t);var n=a(75),r=a(144),c=a.n(r),l=function(e){return new Promise((function(t,a){t(Object(n.a)({roles:"\u7ba1\u7406\u5458"},e)),a("\u767b\u9646\u5931\u8d25")}))},o=a(142),u=a(143),i={namespace:"login",state:{username:"",password:"",remember:void 0},effects:{Login:c.a.mark((function e(t,a){var n,r,i,s,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.put,i=a.call,e.next=4,i(l,n);case 4:return s=e.sent,e.next=7,r({type:"changeState",payload:s});case 7:if(!(Object.keys(s).length>0)){e.next=13;break}return m=s.roles,e.next=11,Object(o.c)("roles",m);case 11:return e.next=13,u.a.push({pathname:"/"});case 13:case"end":return e.stop()}}),e)})),Logout:c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.push({pathname:"/user/login"});case 2:return e.next=4,Object(o.a)();case 4:case"end":return e.stop()}}),e)}))},reducers:{changeState:function(e,t){var a=t.payload;return Object(n.a)(Object(n.a)({},e),a)}}};t.default=i},1296:function(e,t,a){"use strict";a.r(t);var n=a(75),r=a(144),c=a.n(r),l=function(){return new Promise((function(e){e([{meta:{title:"\u9ed8\u8ba4\u9875"},path:"/dashboard",icon:"DashboardOutlined"}])}))},o=function e(t){var a=[];return t.forEach((function(t){t.children&&t.children.length>0&&(a=a.concat(e(t.children))),a.push(t)})),a},u={namespace:"global",state:{asyncMenu:[],flatMenu:[]},effects:{getMenu:c.a.mark((function e(t,a){var n,r,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.put,o=a.call,e.next=4,o(l,n);case 4:if(u=e.sent,function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.forEach((function(t){a.path&&(t.parentPath=a.parentPath?a.parentPath.concat(a.path):[a.path]),t.children&&t.children.length&&e(t.children,t)}))}(u),!(u.length>0)){e.next=10;break}return e.next=10,r({type:"changeMenu",payload:u});case 10:case"end":return e.stop()}}),e)}))},reducers:{changeMenu:function(e,t){var a=t.payload;return Object(n.a)(Object(n.a)({},e),{},{asyncMenu:a,flatMenu:o(a)})}}};t.default=u},142:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=function(e,t){localStorage.setItem(e,t)},r=function(e){return localStorage.getItem(e)},c=function(){localStorage.clear()}},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(86),r={basename:"/"};window.routerBase&&(r.basename=window.routerBase);var c=Object(n.b)(r)},631:function(e,t,a){e.exports=a(1290)},633:function(e,t,a){},638:function(e,t,a){},704:function(e,t,a){},713:function(e,t,a){},800:function(e,t){},888:function(e,t,a){},898:function(e,t,a){},975:function(e,t,a){}},[[631,1,2]]]);
//# sourceMappingURL=main.598995bd.chunk.js.map