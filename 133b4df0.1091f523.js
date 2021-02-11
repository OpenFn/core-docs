(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(252)),o={title:"Credentials"},c={unversionedId:"build/credentials",id:"build/credentials",isDocsHomePage:!1,title:"Credentials",description:"Credentials",source:"@site/docs/build/credentials.md",slug:"/build/credentials",permalink:"/documentation/build/credentials",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/credentials.md",version:"current",sidebar:"docs",previous:{title:"Using multiple operations",permalink:"/documentation/jobs/multiple-operations"},next:{title:"Triggers",permalink:"/documentation/build/triggers"}},l=[{value:"Credentials",id:"credentials",children:[{value:"Raw Credentials",id:"raw-credentials",children:[]},{value:"Keychain Credentials",id:"keychain-credentials",children:[]}]}],s={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"credentials"},"Credentials"),Object(i.b)("p",null,"Credentials are used to authorize connections to destination systems. In the\nfuture, our adaptors will use credentials to fetch meta-data from source and\ndestination applications and make the job writing process easier."),Object(i.b)("p",null,'Some systems (Salesforce, OpenMRS, DHIS2) require an instanceUrl, host, or\nApiUrl. Leave off the final "/" in these Urls: ',Object(i.b)("inlineCode",{parentName:"p"},"https://login.salesforce.com")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"http://demo.openmrs.org/openmrs")," or ",Object(i.b)("inlineCode",{parentName:"p"},"https://play.dhis2.org"),"."),Object(i.b)("p",null,'Credentials can only be viewed, or edited by a single user \u2014 their "owner" (or\nthe person that created that credential). All the collaborators on a particular\nproject can choose those credentials for use when defining a job.'),Object(i.b)("p",null,"There are two special types of credentials, in addition to the myriad standard\napplication-specific and authentication protocol-specific credentials."),Object(i.b)("h3",{id:"raw-credentials"},"Raw Credentials"),Object(i.b)("p",null,"Raw credentials are valid JSON documents which are passed into a job's runtime\nstate. Note that owners of these credentials will be able to view them, in their\nentirety, in the clear."),Object(i.b)("h3",{id:"keychain-credentials"},"Keychain Credentials"),Object(i.b)("p",null,"Keychain credentials allow for a single job to make use of multiple credentials.\nThey work by inspecting the data in the job's runtime state (i.e., ",Object(i.b)("inlineCode",{parentName:"p"},"state.data"),")\nand checking for the value of a predetermined identifier. Based on that value,\npresent in the data for a given source message, for example, ",Object(i.b)("em",{parentName:"p"},"another"),"\ncredential will be selected and applied for that particular job run."))}d.isMDXComponent=!0}}]);