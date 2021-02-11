(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(252)),i={title:"Power BI"},s={unversionedId:"apps/powerbi",id:"apps/powerbi",isDocsHomePage:!1,title:"Power BI",description:"(Work in progress)",source:"@site/docs/apps/powerbi.md",slug:"/apps/powerbi",permalink:"/documentation/apps/powerbi",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/powerbi.md",version:"current"},c=[{value:"Overview",id:"overview",children:[]},{value:"Integration Use Cases",id:"integration-use-cases",children:[]}],u={toc:c};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"(Work in progress)"),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Power BI is a business analytics service by Microsoft. It provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards."),Object(o.b)("p",null,'Tableau Desktop does not have a built-in database, rather it connects to\ndifferent data sources (files, databases, etc). After connecting to a data\nsource, Tableau can "extract" that data into a Tableau Data Extract file that is\nboth compressed and represented in a columnar store format.'),Object(o.b)("p",null,"A list of the data sources that you can connect to Tableau from can be found\nhere: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.tableau.com/products/techspecs"}),"https://www.tableau.com/products/techspecs")),Object(o.b)("p",null,"OpenFn has experience setting up databases structured in a way that Tableau can\npull from."),Object(o.b)("h2",{id:"integration-use-cases"},"Integration Use Cases"),Object(o.b)("p",null,"An iNGO uses CommCare, Kobo Toolbox and Survey CTO for different maternal health\nprojects in several different geographies. This iNGO would like to use a\nbusiness intelligence tool, like Tableau, to create data visualisations for it's\nprojects' key indicators. To accomplish this, the iNGO uses OpenFn to take the\nsurvey data from CommCare, Kobo Toolbox and Survey CTO and then create a\nstructured database from it using MySQL. Once the structured database is\nestablished, OpenFn assists the iNGO with connecting this data to Tableau."),Object(o.b)("p",null,"Refer to the diagram below for a visualization of the data flow cited in the\nabove use case."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Tableau Data Flow Visualization",src:n(294).default})))}l.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,s(s({ref:t},u),{},{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},294:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/survey_db_tableau-fd5bc5832da679ed66badac6a7130303.png"}}]);