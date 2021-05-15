(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4504],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95843:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Ona.io"},c={unversionedId:"apps/ona",id:"apps/ona",isDocsHomePage:!1,title:"Ona.io",description:"1. To push data from Ona.io, click on the drop-down menu next to a specific form and select Settings.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/ona.md",sourceDirName:"apps",slug:"/apps/ona",permalink:"/fr/documentation/apps/ona",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/ona.md",version:"current",frontMatter:{title:"Ona.io"},sidebar:"docs",previous:{title:"Open Data Kit (ODK)",permalink:"/fr/documentation/apps/odk"},next:{title:"Power BI",permalink:"/fr/documentation/apps/powerbi"}},p=[],l={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To push data from Ona.io, click on the drop-down menu next to a specific form and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"On the left-side menu, select ",(0,a.kt)("inlineCode",{parentName:"li"},"Webhooks"),"."),(0,a.kt)("li",{parentName:"ol"},"Paste your OpenFn inbox URL into the URL input field."),(0,a.kt)("li",{parentName:"ol"},'Click "Add webhook".'),(0,a.kt)("li",{parentName:"ol"},"Ensure that the webhook is now listed with the ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON")," tag, indicating that it will forward data as JSON."),(0,a.kt)("li",{parentName:"ol"},"Check to see that, once a form is submitted, it is forwarded to your OpenFn inbox.")))}u.isMDXComponent=!0}}]);