(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{258:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=o.a.createContext({}),s=function(e){var t=o.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=s(r),f=n,b=l["".concat(c,".").concat(f)]||l[f]||u[f]||a;return r?o.a.createElement(b,i(i({ref:t},m),{},{components:r})):o.a.createElement(b,i({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var m=2;m<a;m++)c[m]=r[m];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(258)),c={title:"CommCare HQ"},i={unversionedId:"apps/commcare",id:"apps/commcare",isDocsHomePage:!1,title:"CommCare HQ",description:"Push cases and/or forms from CommCare to OpenFn",source:"@site/docs/apps/commcare.md",slug:"/apps/commcare",permalink:"/documentation/apps/commcare",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/commcare.md",version:"current",sidebar:"docs",previous:{title:"Community Health Toolkit",permalink:"/documentation/apps/cht"},next:{title:"Go.Data",permalink:"/documentation/apps/godata"}},p=[{value:"Push cases and/or forms from CommCare to OpenFn",id:"push-cases-andor-forms-from-commcare-to-openfn",children:[]}],m={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"push-cases-andor-forms-from-commcare-to-openfn"},"Push cases and/or forms from CommCare to OpenFn"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Go to "Project Settings".'),Object(a.b)("li",{parentName:"ol"},'Click "Data Forwarding".'),Object(a.b)("li",{parentName:"ol"},'"Add a forwarding location" for Cases, Forms, or both.'),Object(a.b)("li",{parentName:"ol"},"Specify JSON, using your OpenFn inbox URL as the target. See the\n",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"}),"CommCare documentation"),"."),Object(a.b)("li",{parentName:"ol"},"Create a\n",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../build/triggers#match-a-message-with-a-fragment-inside-another-object-called-form"}),"message-filter trigger like this"),"."),Object(a.b)("li",{parentName:"ol"},"Set up a ",Object(a.b)("inlineCode",{parentName:"li"},"job")," running on that filter to process CommCare submissions or case\nupdates.")))}s.isMDXComponent=!0}}]);