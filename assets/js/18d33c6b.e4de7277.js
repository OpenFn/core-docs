(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{300:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(300)),o={title:"Failed Payment Notification with http",sidebar_label:"Failed Payment Notification",id:"Failed Payment Notification-2021-04-23",keywords:["library","job","expression","http","alterState"]},l={unversionedId:"jobs/auto/Failed Payment Notification-2021-04-23",id:"jobs/auto/Failed Payment Notification-2021-04-23",isDocsHomePage:!1,title:"Failed Payment Notification with http",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Failed Payment Notification-2021-04-23.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Failed Payment Notification-2021-04-23",permalink:"/library/jobs/auto/Failed Payment Notification-2021-04-23",version:"current",sidebar_label:"Failed Payment Notification",frontMatter:{title:"Failed Payment Notification with http",sidebar_label:"Failed Payment Notification",id:"Failed Payment Notification-2021-04-23",keywords:["library","job","expression","http","alterState"]},sidebar:"library",previous:{title:"F4. Check Requested Payment Status with http",permalink:"/library/jobs/auto/F4. Check Requested Payment Status-2018-12-14"},next:{title:"Gmail_test_01 with http",permalink:"/library/jobs/auto/Gmail_test_01-2018-12-06"}},c=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("em",null,"This job was provided by an OpenFn.org user via the job library API."),Object(i.b)("h2",{id:"metadata"},"Metadata"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Name: Failed Payment Notification"),Object(i.b)("li",{parentName:"ul"},"Adaptor: ",Object(i.b)("inlineCode",{parentName:"li"},"@openfn/language-http")),Object(i.b)("li",{parentName:"ul"},"Adaptor Version: ",Object(i.b)("inlineCode",{parentName:"li"},"v3.1.7")),Object(i.b)("li",{parentName:"ul"},"Created 20 days ago"),Object(i.b)("li",{parentName:"ul"},"Updated 16 days ago")),Object(i.b)("h2",{id:"key-functions"},"Key Functions"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"alterState")),Object(i.b)("h2",{id:"expression"},"Expression"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'alterState(state => {\n  console.log("We have notified the administrator to manually initiate payment.");\n  console.log("We have notified the CHW that payment is pending.");\n  return state;\n})\n')))}p.isMDXComponent=!0}}]);