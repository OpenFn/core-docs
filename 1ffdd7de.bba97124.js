(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(143)),s={title:"Frequently Asked Questions",sidebar_label:"FAQs"},i={unversionedId:"faqs",id:"faqs",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"What is OpenFn?",source:"@site/docs/faqs.md",slug:"/faqs",permalink:"/documentation/faqs",editUrl:"https://github.com/openfn/docs/edit/main/docs/faqs.md",version:"current",sidebar_label:"FAQs",sidebar:"docs",previous:{title:"Using multiple operations",permalink:"/documentation/jobs/multiple-operations"},next:{title:"Style Guide",permalink:"/documentation/style-guide"}},c=[{value:"<strong><em>What is OpenFn?</em></strong>",id:"what-is-openfn",children:[]},{value:"<strong><em>Who uses OpenFn?</em></strong>",id:"who-uses-openfn",children:[]},{value:"<strong><em>Is OpenFn open-source?</em></strong>",id:"is-openfn-open-source",children:[]},{value:"<strong><em>How reliable is the hosted service?</em></strong>",id:"how-reliable-is-the-hosted-service",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"what-is-openfn"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("em",{parentName:"strong"},"What is OpenFn?"))),Object(o.b)("p",null,"OpenFn is an ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"integration platform as a service")),". This means our prime\ndirective is to move data quickly and securely between different software\nsystems. In most cases:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"A source application sends ",Object(o.b)("strong",{parentName:"p"},"messages")," to your project\u2019s ",Object(o.b)("strong",{parentName:"p"},"inbox")," when\nsomething happens.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Jobs")," will be triggered, based on your ",Object(o.b)("strong",{parentName:"p"},"filters"),", and use the data in\nthose messages to attempt specific actions in destination systems.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("strong",{parentName:"p"},"logs")," are recorded so you can see precisely what happened and when and\nwhere it happened to take action in the event of a failed attempt\u2014like editing\nthe job or even the source message and trying it again."))),Object(o.b)("h3",{id:"who-uses-openfn"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("em",{parentName:"strong"},"Who uses OpenFn?"))),Object(o.b)("p",null,"OpenFn is used by organizations big and small, but the individuals interacting\nwith the platform range from system administrators to Javascript developers.\nWith a basic understanding of Javascript, the flexibility of the platform is\nalmost limitless."),Object(o.b)("h3",{id:"is-openfn-open-source"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("em",{parentName:"strong"},"Is OpenFn open-source?"))),Object(o.b)("p",null,"OpenFn has built and maintains dozens of open-source data transformation and API\nwrapper software packages. They are licensed under the ",Object(o.b)("strong",{parentName:"p"},"LGPL")," and can be used\nfreely to extract, transform, and load data from a command line, or as part of\nanother software application."),Object(o.b)("p",null,"OpenFn also hosts a proprietary web-application that ties these tools together\n(",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.openfn.org"}),"www.openfn.org"),") into an out-of-the-box integration management platform."),Object(o.b)("h3",{id:"how-reliable-is-the-hosted-service"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("em",{parentName:"strong"},"How reliable is the hosted service?"))),Object(o.b)("p",null,"OpenFn has harnessed the extreme stability and scalability of Erlang to\ncoordinate these actions and provide users with email alerts, project management\ntools, and an online job writing IDE."),Object(o.b)("p",null,"We constantly monitor our own status with independent infrastructure at\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://status.openfn.org"}),"status.openfn.org"),". You can subscribe to\nnotifications there or follow ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/openfnstatus"}),"@openfnstatus"),"."),Object(o.b)("p",null,"We've been delivering this service continuously since 2014."))}l.isMDXComponent=!0}}]);