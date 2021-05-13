(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{158:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(8),a=(r(0),r(300)),i={title:"Enroll in Nutrition Group in SF with salesforce",sidebar_label:"Enroll in Nutrition Group in SF",id:"Enroll in Nutrition Group in SF-2017-06-09",keywords:["library","job","expression","salesforce","create","dataValue","field","fields"]},l={unversionedId:"jobs/auto/Enroll in Nutrition Group in SF-2017-06-09",id:"jobs/auto/Enroll in Nutrition Group in SF-2017-06-09",isDocsHomePage:!1,title:"Enroll in Nutrition Group in SF with salesforce",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Enroll in Nutrition Group in SF-2017-06-09.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Enroll in Nutrition Group in SF-2017-06-09",permalink:"/library/jobs/auto/Enroll in Nutrition Group in SF-2017-06-09",version:"current",sidebar_label:"Enroll in Nutrition Group in SF",frontMatter:{title:"Enroll in Nutrition Group in SF with salesforce",sidebar_label:"Enroll in Nutrition Group in SF",id:"Enroll in Nutrition Group in SF-2017-06-09",keywords:["library","job","expression","salesforce","create","dataValue","field","fields"]},sidebar:"library",previous:{title:"Create SMS linked to contact with salesforce",permalink:"/library/jobs/auto/Create-SMS-Linked-to-Contact-in-SF"},next:{title:"F1. Validate Contract Payment in Salesforce with salesforce",permalink:"/library/jobs/auto/F1. Validate Contract Payment in Salesforce-2018-12-14"}},c=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],u={toc:c};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("em",null,"This job was provided by an OpenFn.org user via the job library API."),Object(a.b)("h2",{id:"metadata"},"Metadata"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Name: Enroll in Nutrition Group in SF"),Object(a.b)("li",{parentName:"ul"},"Adaptor: ",Object(a.b)("inlineCode",{parentName:"li"},"@openfn/language-salesforce")),Object(a.b)("li",{parentName:"ul"},"Adaptor Version: ",Object(a.b)("inlineCode",{parentName:"li"},"v1.3.2")),Object(a.b)("li",{parentName:"ul"},"Created almost 4 years ago"),Object(a.b)("li",{parentName:"ul"},"Updated about 2 hours ago")),Object(a.b)("h2",{id:"key-functions"},"Key Functions"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"create"),", ",Object(a.b)("inlineCode",{parentName:"p"},"dataValue"),", ",Object(a.b)("inlineCode",{parentName:"p"},"field"),", ",Object(a.b)("inlineCode",{parentName:"p"},"fields")),Object(a.b)("h2",{id:"expression"},"Expression"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"create(\n  'Household_Membership__c',\n  fields(\n    relationship(\n      'Household__r',\n      'CommCare_Code__c',\n      dataValue('$.form.case.@case_id')\n    ),\n    field('Group__c', dataValue('$.form.sfid')),\n    field('Start_Date__c', dataValue('form.meta.timeEnd'))\n  )\n);\n\n")))}s.isMDXComponent=!0},300:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=t,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(f,l(l({ref:n},u),{},{components:r})):o.a.createElement(f,l({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);