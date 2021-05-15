(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5815],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83003:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Google Summer of Code"},p={unversionedId:"gsoc",id:"gsoc",isDocsHomePage:!1,title:"Google Summer of Code",description:"Overview",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/gsoc.md",sourceDirName:".",slug:"/gsoc",permalink:"/fr/documentation/gsoc",editUrl:"https://github.com/openfn/docs/edit/main/docs/gsoc.md",version:"current",frontMatter:{title:"Google Summer of Code"},sidebar:"docs",previous:{title:"Developing Connected Applications",permalink:"/fr/documentation/for-devs"},next:{title:"Writing Docs",permalink:"/fr/documentation/writing-docs"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Mentors",id:"mentors",children:[]},{value:"Project Ideas",id:"project-ideas",children:[{value:"OpenFn/microservice Extension",id:"openfnmicroservice-extension",children:[]},{value:"OpenFn/engine Extension",id:"openfnengine-extension",children:[]},{value:"OpenFn/core Metrics",id:"openfncore-metrics",children:[]},{value:"Adaptors 2.0",id:"adaptors-20",children:[]}]}],s={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"OpenFn provides data integration, automation, and interoperability tools that are used to scale the world's most promising health and humanitarian interventions. UNICEF, the World Health Organization, the IRC, and the Wildlife Conservation Society are just a few of the many organizations that drive efficiency via OpenFn software. With an open-core model, we've got hosted and locally-deployed solutions in 40+ countries, and this summer you'll get the chance to work on leading-edge ETL tools built in Elixir/Erlang, and NodeJs. If learning about APIs, data transformation, and middleware/automation layers excites you, OpenFn is the place to be."),(0,a.kt)("h2",{id:"mentors"},"Mentors"),(0,a.kt)("p",null,"This summer, you'll get the chance to work with some of the core team at OpenFn, including ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/team#chaiwa"},"Chaiwa Berian"),", ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/team#mamadou"},"Mamadou Ciss\xe9"),", ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/team#stuart"},"Stu Corbishley"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/team#taylor"},"Taylor Downs"),". They're based in Zambia, Senegal, South Africa, and the United Kingdom, respectively. Between them, they've got almost 50 years of experience working in software and... a PhD in Computer Science. (Hey thanks, Mamadou \ud83d\ude09.)"),(0,a.kt)("h2",{id:"project-ideas"},"Project Ideas"),(0,a.kt)("h3",{id:"openfnmicroservice-extension"},"OpenFn/microservice Extension"),(0,a.kt)("p",null,"OpenFn projects (see ",(0,a.kt)("a",{parentName:"p",href:"portability"},(0,a.kt)("inlineCode",{parentName:"a"},"project.yaml")),") can be deployed on the platform ",(0,a.kt)("em",{parentName:"p"},"or")," on microservice, a Phoenix web application. This summer, GSOC interns will have the opportunity to build out the front-end for this community supported web app."),(0,a.kt)("p",null,"Difficulty level: ",(0,a.kt)("inlineCode",{parentName:"p"},"medium")),(0,a.kt)("p",null,"You'll be working in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},(0,a.kt)("inlineCode",{parentName:"a"},"Docker")),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.phoenixframework.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Phoenix")),", ",(0,a.kt)("a",{parentName:"p",href:"https://elixir-lang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Elixir"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.erlang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Erlang")),"."),(0,a.kt)("h3",{id:"openfnengine-extension"},"OpenFn/engine Extension"),(0,a.kt)("p",null,"Engine is part of the common FOSS toolkit that is used both by ",(0,a.kt)("inlineCode",{parentName:"p"},"microservice")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"platform"),". It's the software which is responsible for actually executing calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenFn/core")," and doing neat things like streaming logs back to the requester. If you're keen on really understanding how Elixir and Erlang work, getting your hands dirty with OTP apps, engine is where you want to be working this summer."),(0,a.kt)("p",null,"Difficulty level: ",(0,a.kt)("inlineCode",{parentName:"p"},"high")),(0,a.kt)("p",null,"You'll be working in ",(0,a.kt)("a",{parentName:"p",href:"https://elixir-lang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Elixir"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.erlang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Erlang")),"."),(0,a.kt)("h3",{id:"openfncore-metrics"},"OpenFn/core Metrics"),(0,a.kt)("p",null,"At the bottom of it all, whether we're providing secure patient data transfer services for ministries of health or making child protection case referrals for UNICEF, OpenFn relies on spinning up NodeVMs, executing code inside those VMs safely, and then shutting the down. Welcome to the core."),(0,a.kt)("p",null,"This summer you could have the chance to dig into that ",(0,a.kt)("em",{parentName:"p"},"sandboxed-VM-in-a-VM"),' magic, learn loads about NodeJs, and provide end-users with better metrics on exactly what kinds of compute they\'re using to "get the job done".'),(0,a.kt)("p",null,"Difficulty level: ",(0,a.kt)("inlineCode",{parentName:"p"},"medium")),(0,a.kt)("p",null,"You'll be working in ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn"},(0,a.kt)("inlineCode",{parentName:"a"},"NodeJs"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Typescript")),"."),(0,a.kt)("h3",{id:"adaptors-20"},"Adaptors 2.0"),(0,a.kt)("p",null,"Adaptors are the API wrappers that allow OpenFn users to quickly and easily work with the most common APIs in international development. They provide an interface for connecting to DHIS2, ODK, CommCare, OpenMRS, etc., etc."),(0,a.kt)("p",null,"They're NodeJs modules, but in order to make the adaptor development and ",(0,a.kt)("em",{parentName:"p"},"use")," process better, we want to bring them into the future with Typescript. Adaptors should tell you how to use them while you use them."),(0,a.kt)("p",null,"Check out this thread on ",(0,a.kt)("a",{parentName:"p",href:"https://community.openfn.org/t/discussion-regarding-adapter-2-0-project"},"community.openfn.org")," for more information."),(0,a.kt)("p",null,"Difficulty level: ",(0,a.kt)("inlineCode",{parentName:"p"},"medium")),(0,a.kt)("p",null,"You'll be working in ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn"},(0,a.kt)("inlineCode",{parentName:"a"},"NodeJs"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Typescript")),"."))}c.isMDXComponent=!0}}]);