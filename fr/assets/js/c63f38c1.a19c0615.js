(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[107],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47136:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i={title:"Do-it-yourself Deployments",sidebar_label:"DIY"},s={unversionedId:"deploy/diy",id:"deploy/diy",isDocsHomePage:!1,title:"Do-it-yourself Deployments",description:"Are you sure you want to build a new application using core and/or engine? OpenFn's completely free and open source microservice offering provides a pretty good base in the event that you'd like to extend our existing functionality for your own purposes.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/deploy/diy.md",sourceDirName:"deploy",slug:"/deploy/diy",permalink:"/fr/documentation/deploy/diy",editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/diy.md",version:"current",sidebar_label:"DIY",frontMatter:{title:"Do-it-yourself Deployments",sidebar_label:"DIY"},sidebar:"docs",previous:{title:"Instant OpenHIE",permalink:"/fr/documentation/instant-openhie"},next:{title:"Project Management",permalink:"/fr/documentation/manage/platform-mgmt"}},l=[{value:"Using <code>core</code> and <code>engine</code> directly",id:"using-core-and-engine-directly",children:[{value:"Where to begin",id:"where-to-begin",children:[]},{value:"Sample files for DIY getting started",id:"sample-files-for-diy-getting-started",children:[]}]}],p={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Are you sure you want to build a new application using ",(0,o.kt)("strong",{parentName:"p"},"core")," and/or ",(0,o.kt)("strong",{parentName:"p"},"engine"),"? OpenFn's completely free and open source ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/documentation/microservice/home"},"microservice"))," offering provides a pretty good base in the event that you'd like to extend our existing functionality for your own purposes."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We're in the process of migrating the docs for ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/core")," and ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/engine")," here."),(0,o.kt)("p",{parentName:"div"},"In the meantime, check out:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/core"},"https://github.com/OpenFn/core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/engine"},"https://github.com/OpenFn/engine"))))),(0,o.kt)("h2",{id:"using-core-and-engine-directly"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"core")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"engine")," directly"),(0,o.kt)("h3",{id:"where-to-begin"},"Where to begin"),(0,o.kt)("p",null,"OpenFn's core ETL tools are all open-source, and here we will explain how those tools can be used to perform ETL operations from your command line. You can even take this further and wrap them together in your own hosted service!"),(0,o.kt)("p",null,"To create an integration service like ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"microservice"),", you will need to build a REST endpoint that allows JSON or XML to be posted to it, returning a ",(0,o.kt)("inlineCode",{parentName:"p"},"2XX")," and checking the body of that message to see if it matches some criteria. If the criteria match for that message, you must perform ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"core"),", using the message data and some stored configuration as state. See a sample state.json below:"),(0,o.kt)("h4",{id:"statejson"},"State.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "word_count": 284,\n    "last_update": "2016-11-10 13:58:47",\n    "folder_name": "Civil Disobedience",\n    "file_owner": "student@school.org.za",\n    "file_name": "Mock Journal Article"\n  },\n  "configuration": {\n    "host": "109.XXX.11X.2XX",\n    "port": "5432",\n    "database": "data-warehouse",\n    "user": "postgres",\n    "password": "secret-password",\n    "ssl": true\n  }\n}\n')),(0,o.kt)("p",null,"Make sure to store your logs. If you'd like to be able to retry transactions, persist the message data and provide an interface for manipulating that data by hand, or re-running certain transactions after the job expression has been altered."),(0,o.kt)("p",null,"Make sure that a single inbound message can kick off the running of multiple jobs."),(0,o.kt)("p",null,"To get started, or just run fn-lang manually, from your command line, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/openfn-devtools"},"openfn-devtools"),". With windows and linux install scripts, it's the fastest way to get up and running with OpenFn on your local machine."),(0,o.kt)("h3",{id:"sample-files-for-diy-getting-started"},"Sample files for DIY getting started"),(0,o.kt)("p",null,"Below you can find sample code to fill the 3 files required to run fn-lang - ",(0,o.kt)("inlineCode",{parentName:"p"},"message.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expression.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),"."),(0,o.kt)("h4",{id:"messagejson"},"message.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "xform_ids": [],\n  "version": null,\n  "user_id": "user1",\n  "server_date_opened": null,\n  "server_date_modified": null,\n  "properties": {\n    "prop_c": "2013-05-18",\n    "prop_b": "Female",\n    "prop_a": 99,\n    "owner_id": null,\n    "external_id": null,\n    "date_opened": null,\n    "date": "2013-05-17",\n    "case_type": "case_type",\n    "case_name": "Demo"\n  },\n  "indices": {}\n}\n')),(0,o.kt)("h4",{id:"expressionjs"},"expression.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"event(\n  fields(\n    field('program', 'eBAyeGv0exc'),\n    field('orgUnit', 'DiszpKrYNg8'),\n    field('eventDate', dataValue('properties.date')),\n    field('status', 'COMPLETED'),\n    field('storedBy', 'admin'),\n    field('coordinate', {\n      latitude: '59.8',\n      longitude: '10.9',\n    }),\n    field('dataValues', function (state) {\n      return [\n        {\n          dataElement: 'qrur9Dvnyt5',\n          value: dataValue('properties.prop_a')(state),\n        },\n        {\n          dataElement: 'oZg33kd9taw',\n          value: dataValue('properties.prop_b')(state),\n        },\n        {\n          dataElement: 'msodh3rEMJa',\n          value: dataValue('properties.prop_c')(state),\n        },\n      ];\n    })\n  )\n);\n")),(0,o.kt)("h4",{id:"configjson"},"config.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "admin",\n  "password": "district",\n  "apiUrl": "https://play.dhis2.org/demo"\n}\n')))}d.isMDXComponent=!0}}]);