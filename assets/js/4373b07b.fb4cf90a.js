(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(269)),i={},s={unversionedId:"jobs/async-and-array-dot-map",id:"jobs/async-and-array-dot-map",isDocsHomePage:!1,title:"async-and-array-dot-map",description:"`js",source:"@site/library/jobs/async-and-array-dot-map.md",sourceDirName:"jobs",slug:"/jobs/async-and-array-dot-map",permalink:"/library/jobs/async-and-array-dot-map",version:"current",frontMatter:{},sidebar:"library",previous:{title:"alter-state-before-operations",permalink:"/library/jobs/alter-state-before-operations"},next:{title:"bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",permalink:"/library/jobs/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce"}},c=[],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  console.log('Here we will await the result of a LOT of async operations.');\n\n  console.log('First we needed to break large arrays into smaller chunks.');\n  function chunk(arr, chunkSize) {\n    var R = [];\n    for (var i = 0, len = arr.length; i < len; i += chunkSize)\n      R.push(arr.slice(i, i + chunkSize));\n    return R;\n  }\n\n  const clinicSets = chunk(state.data.Clinic, 10);\n  const patientSets = chunk(state.data.Patient, 10);\n  const visitSets = chunk(state.data.Visit, 10);\n  const deletedVisitSets = chunk(state.data.VisitDeleted, 10);\n\n  console.log('Then we define a bunch of different async functions.');\n  const postClinics = async cs => {\n    return post(state.configuration.inboxUrl, {\n      body: { clinics: cs },\n    })(state);\n  };\n\n  const postPatients = async ps => {\n    return post(state.configuration.inboxUrl, {\n      body: { patients: ps },\n    })(state);\n  };\n\n  const postVisits = async vs => {\n    return post(state.configuration.inboxUrl, {\n      body: { visits: vs },\n    })(state);\n  };\n\n  const postDeletedVisits = async dvs => {\n    return post(state.configuration.inboxUrl, {\n      body: { deletedVisits: dvs },\n    })(state);\n  };\n\n  console.log(\n    'Then we define a single function that wraps them all up and waits for all the individual functions to resolve.'\n  );\n  async function makePosts() {\n    return Promise.all([\n      ...clinicSets.map(item => postClinics(item)),\n      ...patientSets.map(item => postPatients(item)),\n      ...visitSets.map(item => postVisits(item)),\n      ...deletedVisitSets.map(item => postDeletedVisits(item)),\n    ]);\n  }\n\n  console.log(\n    'Then we return that function, forcing our next operation to await the result of this one.'\n  );\n  return makePosts();\n});\n\nalterState(state => {\n  console.log('I show up AFTER those async functions are resolved.');\n  return state;\n});\n")))}u.isMDXComponent=!0},269:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?a.a.createElement(y,s(s({ref:n},l),{},{components:t})):a.a.createElement(y,s({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);