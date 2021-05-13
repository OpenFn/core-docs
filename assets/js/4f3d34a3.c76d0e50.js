(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2915],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,b=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90789:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Power BI"},s={unversionedId:"apps/powerbi",id:"apps/powerbi",isDocsHomePage:!1,title:"Power BI",description:"(Work in progress)",source:"@site/docs/apps/powerbi.md",sourceDirName:"apps",slug:"/apps/powerbi",permalink:"/documentation/apps/powerbi",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/powerbi.md",version:"current",frontMatter:{title:"Power BI"},sidebar:"docs",previous:{title:"Ona.io",permalink:"/documentation/apps/ona"},next:{title:"Salesforce",permalink:"/documentation/apps/salesforce"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Integration Use Cases",id:"integration-use-cases",children:[]}],p={toc:c};function u(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"(Work in progress)"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://powerbi.microsoft.com/en-us/"},"Power BI")," is a business analytics service by Microsoft. It provides interactive\nvisualizations and business intelligence capabilities with an interface simple\nenough for end users to create their own reports and dashboards."),(0,a.kt)("p",null,"Note that Power BI does not have a built-in database, rather it connects to many\ndifferent data sources (files, databases, etc). For a full list of available data sources, see\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources"},"Power BI data sources"),"."),(0,a.kt)("p",null,"OpenFn has experience setting up databases structured in a way that Power BI can\npull from."),(0,a.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,a.kt)("p",null,"An iNGO uses CommCare, Kobo Toolbox and Survey CTO for different maternal health\nprojects in several different geographies. This iNGO would like to use a\nbusiness intelligence tool, like Power BI, to create data visualisations for it's\nprojects' key indicators. To accomplish this, the iNGO uses OpenFn to take the\nsurvey data from CommCare, Kobo Toolbox and Survey CTO and then create a\nstructured database from it using MySQL. Once the structured database is\nestablished, OpenFn assists the iNGO with connecting this data to Power BI."),(0,a.kt)("p",null,"Refer to the diagram below for a visualization of the data flow cited in the\nabove use case."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tableau Data Flow Visualization",src:r(57077).Z})))}u.isMDXComponent=!0},57077:function(e,t,r){"use strict";t.Z=r.p+"assets/images/survey_db_powerbi-450b87361ecb103bba3d58ace03eaf59.png"}}]);