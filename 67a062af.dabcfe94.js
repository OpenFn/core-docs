(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(143)),i={title:"Understanding Jobs"},s={unversionedId:"jobs/core",id:"jobs/core",isDocsHomePage:!1,title:"Understanding Jobs",description:"Introduction",source:"@site/docs/jobs/core.md",slug:"/jobs/core",permalink:"/documentation/jobs/core",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/core.md",version:"current",sidebar:"docs",previous:{title:"For Application Developers",permalink:"/documentation/for-devs"},next:{title:"Operations",permalink:"/documentation/jobs/operations"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Key Terms and Concepts",id:"key-terms-and-concepts",children:[]},{value:"State is passed to operations. Operations Return state.",id:"state-is-passed-to-operations-operations-return-state",children:[]},{value:"Sequences of operations inside custom functions.",id:"sequences-of-operations-inside-custom-functions",children:[]},{value:"Controlling timing between operations with async functions.",id:"controlling-timing-between-operations-with-async-functions",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This is technical documentation aimed at making complex custom jobs easier to\nwrite."),Object(r.b)("h2",{id:"key-terms-and-concepts"},"Key Terms and Concepts"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"core")," (",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/openfn/core"}),"https://github.com/openfn/core"),") is the Javascript program which\nexecutes jobs for OpenFn in an emphemeral Node.js environment."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"state")," is a .JSON file that is built and passed into the Node environment.\nIt contains at least two keys, ",Object(r.b)("inlineCode",{parentName:"li"},"configuration")," and ",Object(r.b)("inlineCode",{parentName:"li"},"data"),". Configuration will\nbe populated with your credential and it used by language packages for\nauthentication, and data will be populated with message data if the job was\ntriggered by an incoming message.")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "configuration": {\n    "username": "taylor",\n    "password": "shhhhhh",\n    "loginUrl": "https://login.salesforce.com"\n  },\n  "data": {\n    "a": 1,\n    "b": {\n      "x": [1, 2, 3]\n    }\n  }\n}\n')),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"expressions"),' are sequences of operations to be executed. They are part of\n"jobs", which also include a credential, a trigger, a label, and (sometimes)\na github filepath.'),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"operations")," are named functions, exported for use by specific\nlanguage-packages, which take state and return state.")),Object(r.b)("h2",{id:"state-is-passed-to-operations-operations-return-state"},"State is passed to operations. Operations Return state."),Object(r.b)("p",null,"This is a key concept. When you write:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"create('object', fields(\n  field(...)\n));\n")),Object(r.b)("p",null,"The execute function in your language-package (e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"language-salesforce"),") will\nexecute each operation with state, then return state. If you want to execute\noperations inside another custom function, you must explicitly pass in state."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"alterState(state => {\n  return create('object', fields(\n    field(...)\n  ))(state)\n});\n")),Object(r.b)("h2",{id:"sequences-of-operations-inside-custom-functions"},"Sequences of operations inside custom functions."),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"execute")," you can string together several sequential operations inside a\ncustom function."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'alterState(state => {\n  const { userName } = state.data.form.meta;\n\n  if (userName != \'tester\') {\n    return execute(\n      upsert("person__c", "Name", fields(\n        field(...),\n        field(...)\n      )),\n      beta.each(\n        dataPath("form.array[*]"),\n        upsert("object", "Name", fields(\n          field(...)\n        ))\n      )\n    )(state)\n  }\n  return state;\n});\n')),Object(r.b)("h2",{id:"controlling-timing-between-operations-with-async-functions"},"Controlling timing between operations with async functions."),Object(r.b)("p",null,"To get really complex, you might want to execute a number of async functions\ninside an ",Object(r.b)("inlineCode",{parentName:"p"},"alterState")," operation, but WAIT for those functions to resolve before\nmoving on to your next operation. If ",Object(r.b)("inlineCode",{parentName:"p"},"execute")," doesn't work for your use case,\nyou could use ",Object(r.b)("inlineCode",{parentName:"p"},"Promise.all")," and return an async function."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"alterState(state => {\n  console.log('Here we will await the result of a LOT of async operations.');\n  console.log('First we define a bunch of different async functions.');\n  const postClinics = async c => {\n    return post(state.configuration.inboxUrl, {\n      body: { clinics: c },\n    })(state);\n  };\n\n  const postPatients = async p => {\n    return post(state.configuration.inboxUrl, {\n      body: { patients: p },\n    })(state);\n  };\n\n  const postVisits = async v => {\n    return post(state.configuration.inboxUrl, {\n      body: { visits: v },\n    })(state);\n  };\n\n  console.log(\n    'Then we define a single function that wraps them all up and waits for all the individual functions to resolve.'\n  );\n  async function makePosts() {\n    return Promise.all([\n      ...state.data.clinicSets.map(item => postClinics(item)),\n      ...state.data.patientSets.map(item => postPatients(item)),\n      ...state.data.visitSets.map(item => postVisits(item)),\n    ]);\n  }\n\n  console.log(\n    'Then we return that function, forcing our next operation to await the result of this one.'\n  );\n  return makePosts();\n});\n\nalterState(state => {\n  console.log('I get called AFTER those async functions are resolved.');\n  return state;\n});\n")))}u.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);