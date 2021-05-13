(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(300)),i={title:"F2. Request Money in Havanao with http",sidebar_label:"F2. Request Money in Havanao",id:"F2. Request Money in Havanao-2018-12-14",keywords:["library","job","expression","http","post"]},s={unversionedId:"jobs/auto/F2. Request Money in Havanao-2018-12-14",id:"jobs/auto/F2. Request Money in Havanao-2018-12-14",isDocsHomePage:!1,title:"F2. Request Money in Havanao with http",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/F2. Request Money in Havanao-2018-12-14.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/F2. Request Money in Havanao-2018-12-14",permalink:"/library/jobs/auto/F2. Request Money in Havanao-2018-12-14",version:"current",sidebar_label:"F2. Request Money in Havanao",frontMatter:{title:"F2. Request Money in Havanao with http",sidebar_label:"F2. Request Money in Havanao",id:"F2. Request Money in Havanao-2018-12-14",keywords:["library","job","expression","http","post"]},sidebar:"library",previous:{title:"02. SMS Balance Update with http",permalink:"/library/jobs/auto/02. SMS Balance Update-2018-12-14"},next:{title:"F4. Check Requested Payment Status with http",permalink:"/library/jobs/auto/F4. Check Requested Payment Status-2018-12-14"}},u=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],c={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("em",null,"This job was provided by an OpenFn.org user via the job library API."),Object(o.b)("h2",{id:"metadata"},"Metadata"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name: F2. Request Money in Havanao"),Object(o.b)("li",{parentName:"ul"},"Adaptor: ",Object(o.b)("inlineCode",{parentName:"li"},"@openfn/language-http")),Object(o.b)("li",{parentName:"ul"},"Adaptor Version: ",Object(o.b)("inlineCode",{parentName:"li"},"latest")),Object(o.b)("li",{parentName:"ul"},"Created over 2 years ago"),Object(o.b)("li",{parentName:"ul"},"Updated over 2 years ago")),Object(o.b)("h2",{id:"key-functions"},"Key Functions"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"post")),Object(o.b)("h2",{id:"expression"},"Expression"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'post("https://api.havanao.com/api/sale/purchase", {\n  query: {\n    "api_token": "KxnJo3KWIs01akwsIq8jRFhs8CKkPffG56nIl0d5QAG2EUcg5NdoKbuaI024"\n  },\n  headers: {\n    "Content-Type": "application/json",\n  },\n  body: (state) => {\n    const postBody = {\n      transactionid: state.paymentId,\n      amount: parseInt(state.data.amount),\n      customer: state.data.msisdn,\n      comment: \'Thanks for initiating an EarthEnable payment.\'\n    };\n    return postBody;\n  }\n});\n')))}p.isMDXComponent=!0},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,y=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return n?r.a.createElement(y,s(s({ref:t},c),{},{components:n})):r.a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);