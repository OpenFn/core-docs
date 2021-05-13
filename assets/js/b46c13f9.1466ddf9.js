(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9290],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=s(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66941:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i={title:"Go.Data"},p={unversionedId:"apps/godata",id:"apps/godata",isDocsHomePage:!1,title:"Go.Data",description:"Overview",source:"@site/docs/apps/godata.md",sourceDirName:"apps",slug:"/apps/godata",permalink:"/documentation/apps/godata",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/godata.md",version:"current",frontMatter:{title:"Go.Data"},sidebar:"docs",previous:{title:"CommCare",permalink:"/documentation/apps/commcare"},next:{title:"Google Forms/Google Sheets",permalink:"/documentation/apps/google-sheets"}},l=[{value:"Overview",id:"overview",children:[{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"Further Reading",id:"further-reading",children:[]}]},{value:"Integration Options",id:"integration-options",children:[]},{value:"OpenFn Adaptor",id:"openfn-adaptor",children:[]},{value:"Implementation Examples",id:"implementation-examples",children:[]}],s={toc:l};function u(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Go.Data (",(0,r.kt)("a",{parentName:"p",href:"https://www.who.int/godata"},"https://www.who.int/godata")," is an outbreak investigation tool for field data collection during\npublic health emergencies."),(0,r.kt)("h3",{id:"integration-use-cases"},"Integration Use Cases"),(0,r.kt)("p",null,"Check out the Go.Data ",(0,r.kt)("inlineCode",{parentName:"p"},"Interoperability Toolkit")," docs for example OpenFn integrations and related documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/godata/interoperability/"},"https://worldhealthorganization.github.io/godata/interoperability/")),(0,r.kt)("h3",{id:"further-reading"},"Further Reading"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go.Data API docs\n",(0,r.kt)("a",{parentName:"li",href:"https://worldhealthorganization.github.io/godata/api-docs/"},"https://worldhealthorganization.github.io/godata/api-docs/")),(0,r.kt)("li",{parentName:"ol"},"Go.Data Community\n",(0,r.kt)("a",{parentName:"li",href:"https://community-godata.who.int/login"},"https://community-godata.who.int/login")),(0,r.kt)("li",{parentName:"ol"},"Go.Data GitHub Repository \u2013 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/WorldHealthOrganization/godata"},"https://github.com/WorldHealthOrganization/godata"))),(0,r.kt)("h2",{id:"integration-options"},"Integration Options"),(0,r.kt)("p",null,"Data integration via the Go.Data web API. Two-way integration can be achieved, but see all options here: ",(0,r.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/godata/options/"},"https://worldhealthorganization.github.io/godata/options/")),(0,r.kt)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,r.kt)("p",null,"The open-source ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.github.io/language-godata/"},(0,r.kt)("inlineCode",{parentName:"a"},"language-godata")),"\nadaptor has been developed with a series of helper functions for common\noperations to expedite integration setup."),(0,r.kt)("p",null,"Also, the generic\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http#language-http-"},(0,r.kt)("inlineCode",{parentName:"a"},"language-http"))," can be\nused to make HTTP requests to the Go.Data API and can perform any operations not\nsupported by ",(0,r.kt)("inlineCode",{parentName:"p"},"language-godata"),"."),(0,r.kt)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,r.kt)("p",null,"See Go.Data docs site: ",(0,r.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/godata/integration-scripts/"},"https://worldhealthorganization.github.io/godata/integration-scripts/")))}u.isMDXComponent=!0}}]);