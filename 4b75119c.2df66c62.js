(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(f,s(s({ref:t},u),{},{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(145)),i={layout:"post",title:"Tracked entity instances in DHIS2",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars1.githubusercontent.com/u/8732845?s=460&u=5aa58a0e73b25e089668134e0bd1fe971019c960&v=4",categories:["how-to","tips"],featured:!0},s={permalink:"/articles/2020/12/09/upsert-in-dhis2",source:"@site/articles/2020-12-09-upsert-in-dhis2.md",description:"tl;dr: Lots of our users want to upsert tracked entity instances in dhis2, but",date:"2020-12-09T00:00:00.000Z",tags:[],title:"Tracked entity instances in DHIS2",readingTime:1.705,truncated:!1,nextItem:{title:"Product News: Enhanced Scheduled/Periodic Job Control",permalink:"/articles/2020/07/14/cron-is-better-than-a-timer"}},c=[{value:"A bit more...",id:"a-bit-more",children:[]},{value:"Even more!",id:"even-more",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"tl;dr: Lots of our users want to upsert tracked entity instances in dhis2, but\nupserts aren\u2019t supported by a standard DHIS2 API endpoint. We built one in our\ndhis2 adaptor: it\u2019s composed of existing APIs and a bit of logic \ud83e\udd14. Now you can\n",Object(o.b)("inlineCode",{parentName:"p"},"upsert")," tracked entity instances to DHIS2 \ud83d\udc4d \u2705."),Object(o.b)("h2",{id:"a-bit-more"},"A bit more..."),Object(o.b)("p",null,"An \u201cUPSERT\u201d is a portmanteau of the database functions UPDATE and INSERT. It\u2019s\ncritical to handle upserts properly when integrating systems. As of version 35\nof the API, DHIS2 does not allow for an administrator to upsert tracked entity\ninstances (\u201cTEIs\u201d). OpenFn\u2019s own\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/chaiwa-berian"}),"Chaiwa Berian")," has come up with a solution\nthat highlights the utility of helper functions in our dhis2 adaptor. By\ncombining various DHIS2 APIs through an upsertTEI function in OpenFn, DHIS2\nusers can now perform upserts to TEIs."),Object(o.b)("p",null,"If you\u2019re curious, check out his implementation\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L347"}),"here"),"."),Object(o.b)("h2",{id:"even-more"},"Even more!"),Object(o.b)("p",null,"A tracked entity instance in DHIS2 is a type of entity that can be tracked\nthrough the system. It can be anything from a person to a commodity like a\nmedicine. If I am a database administrator presiding over two different systems\nthat are connected to one another, let\u2019s call them \u201cSystem A\u201d and \u201cSystem B,\u201d I\nwould like for any updates made to the TEI of a user named \u201cJim Smith\u201d in System\nA to also appear in Jim\u2019s record in System B. Before upserts came about, doing\nso was difficult because of the possibility of duplicate record creation.\nBecause an upsert simultaneously UPDATES and INSERTS, it prevents duplicates."),Object(o.b)("p",null,"Upserts are important and good because they cut down on the risk of duplicate\ndata entry and they also allow for transactions to be retried over and over to\nensure data integrity. That last bit is called \u201cidempotency\u201d and you can read\nabout it ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.openfn.org/allow-yourself-to-fail/"}),"over here"),"."),Object(o.b)("p",null,"Please don\u2019t hesitate to reach out to one of OpenFn\u2019s implementation specialists\nif you\u2019d like to learn more."),Object(o.b)("p",null,"\u2014 Taylor"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://openfn.org/signup"}),"Sign up"),"{: .btn} to set up a project today,\nabsolutely free."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:admin@openfn.org"}),"Reach out"),"{: .btn} for more information."))}p.isMDXComponent=!0}}]);