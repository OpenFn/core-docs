(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(147)),i={title:"Go.Data"},c={unversionedId:"tools/godata",id:"tools/godata",isDocsHomePage:!1,title:"Go.Data",description:"Overview",source:"@site/docs/tools/godata.md",slug:"/tools/godata",permalink:"/documentation/tools/godata",editUrl:"https://github.com/openfn/docs/edit/main/docs/tools/godata.md",version:"current",sidebar:"docs",previous:{title:"CommCare HQ",permalink:"/documentation/tools/commcare"},next:{title:"Kobo Toolbox",permalink:"/documentation/tools/kobo-toolbox"}},l=[{value:"Overview",id:"overview",children:[{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"Further Reading",id:"further-reading",children:[]}]},{value:"Integration Options",id:"integration-options",children:[]},{value:"OpenFn Adaptor",id:"openfn-adaptor",children:[]},{value:"Implementation Examples",id:"implementation-examples",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Go.Data is an outbreak investigation tool for field data collection during\npublic health emergencies."),Object(a.b)("h3",{id:"integration-use-cases"},"Integration Use Cases"),Object(a.b)("p",null,"Example user stories..."),Object(a.b)("h3",{id:"further-reading"},"Further Reading"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"OpenFn Go.Data notes -\n",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://drive.google.com/file/d/12YDZXt9_-XUv8HcAiyzZsqRitBkedKqf/view?usp=sharing"}),"https://drive.google.com/file/d/12YDZXt9_-XUv8HcAiyzZsqRitBkedKqf/view?usp=sharing")),Object(a.b)("li",{parentName:"ol"},"Go.Data User Guides \u2013\n",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://drive.google.com/drive/u/8/folders/1cTcXZLEM4XRxht6VvsSrKq8QGMie-knj"}),"https://drive.google.com/drive/u/8/folders/1cTcXZLEM4XRxht6VvsSrKq8QGMie-knj")),Object(a.b)("li",{parentName:"ol"},"Go.Data GitHub Repository \u2013 ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/WorldHealthOrganization/godata"}),"https://github.com/WorldHealthOrganization/godata")),Object(a.b)("li",{parentName:"ol"},"Go.Data API Explorer - ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"http://who-stable.clarisoft.com/explorer/#/"}),"http://who-stable.clarisoft.com/explorer/#/"))),Object(a.b)("h2",{id:"integration-options"},"Integration Options"),Object(a.b)("p",null,"Data integration via the Go.Data web API - link here: ..."),Object(a.b)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),Object(a.b)("p",null,"The open-source ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://openfn.github.io/language-godata/"}),Object(a.b)("inlineCode",{parentName:"a"},"language-godata")),"\nadaptor has been developed with a series of helper functions for common\noperations to expedite integration setup."),Object(a.b)("p",null,"Also, the generic\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/OpenFn/language-http#language-http-"}),Object(a.b)("inlineCode",{parentName:"a"},"language-http"))," can be\nused to make HTTP requests to the Go.Data API and can perform any operations not\nsupported by ",Object(a.b)("inlineCode",{parentName:"p"},"language-godata"),"."),Object(a.b)("h2",{id:"implementation-examples"},"Implementation Examples"),Object(a.b)("p",null,"Links to jobs and code snippets..."))}s.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);