(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4349],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48315:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a={layout:"post",title:"Tracked entity instances in DHIS2",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["how-to","tips"],featured:!0},c={permalink:"/articles/2020/12/09/upsert-in-dhis2",editUrl:"https://github.com/openfn/docs/edit/main/articles/2020-12-09-upsert-in-dhis2.md",source:"@site/articles/2020-12-09-upsert-in-dhis2.md",title:"Tracked entity instances in DHIS2",description:"tl;dr: Lots of our users want to upsert tracked entity instances in dhis2, but",date:"2020-12-09T00:00:00.000Z",formattedDate:"December 9, 2020",tags:[{label:"how-to",permalink:"/articles/tags/how-to"},{label:"tips",permalink:"/articles/tags/tips"}],readingTime:1.71,truncated:!0,prevItem:{title:"Our Servers or Yours: Thinking through deployment options",permalink:"/articles/2021/02/03/hosted-or-local-deployment"},nextItem:{title:"Product News: Enhanced Scheduled/Periodic Job Control",permalink:"/articles/2020/07/14/cron-is-better-than-a-timer"}},s=[],u={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"tl;dr: Lots of our users want to upsert tracked entity instances in dhis2, but\nupserts aren\u2019t supported by a standard DHIS2 API endpoint. We built one in our\ndhis2 adaptor: it\u2019s composed of existing APIs and a bit of logic \ud83e\udd14. Now you can\n",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," tracked entity instances to DHIS2 \ud83d\udc4d \u2705."))}p.isMDXComponent=!0}}]);