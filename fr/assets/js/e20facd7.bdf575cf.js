(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2506],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43009:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var r=n(22122),s=n(19756),a=(n(67294),n(3905)),o={title:"Promises and nested requests",sidebar_label:"\ud83d\udcdc Promises and nested requests",id:"promise-all-nested-requests",keywords:["library","job","expression","http","alterState","each","get","Promise"]},i={unversionedId:"jobs/auto/promise-all-nested-requests",id:"jobs/auto/promise-all-nested-requests",isDocsHomePage:!1,title:"Promises and nested requests",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/promise-all-nested-requests.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/promise-all-nested-requests",permalink:"/fr/library/jobs/auto/promise-all-nested-requests",version:"current",sidebar_label:"\ud83d\udcdc Promises and nested requests",frontMatter:{title:"Promises and nested requests",sidebar_label:"\ud83d\udcdc Promises and nested requests",id:"promise-all-nested-requests",keywords:["library","job","expression","http","alterState","each","get","Promise"]},sidebar:"library",previous:{title:"Chaining HTTP Requests",permalink:"/fr/library/jobs/auto/complex-http-request-chains"},next:{title:"Chaining synchronous http requests",permalink:"/fr/library/jobs/auto/synchronous-http-request"}},l=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcdc ",(0,a.kt)("em",null,"This job is an official example from OpenFn.")),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Promises and nested requests"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"latest"))),(0,a.kt)("li",{parentName:"ul"},"Created date unknown"),(0,a.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"100")," (an ",(0,a.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  '$.enrolledUsers[10]',\n  alterState(state => {\n    const { host } = state.configuration;\n    const { id } = state.data;\n    const usersfields = [];\n    return get(\n      host,\n      {\n        query: {\n          wstoken: state.token,\n          wsfunction: 'core_user_get_users_by_field',\n          field: 'id',\n          'values[]': id,\n          moodlewsrestformat: 'json',\n        },\n      },\n      state => {\n        const { id, phone1, address } = state.data[0];\n        const fields = [\n          { id, 'Tel\xe9fono m\xf3vil': phone1, Direcci\xf3n: address, grades: [] },\n        ];\n        console.log(state.courseIds);\n        let promises = [];\n        state.courseIds.forEach(courseid => {\n          promises.push(\n            get(\n              host,\n              {\n                query: {\n                  wstoken: state.token,\n                  wsfunction: 'gradereport_user_get_grade_items',\n                  userid: id,\n                  courseid,\n                  moodlewsrestformat: 'json',\n                },\n              },\n              state => {\n                console.log('fetched');\n                const { graderaw } = state.data.usergrades[0].gradeitems[0];\n                const grades = [{ courseid, graderaw }];\n                fields[0].grades.push(...grades);\n              }\n            )(state)\n          );\n        });\n\n        return Promise.all(promises).then(() => {\n          usersfields.push(...fields);\n          return {\n            ...state,\n            usersfields,\n            enrolledUsers: [],\n            response: [],\n          };\n        });\n      }\n    )(state);\n  })\n);\n\n")))}p.isMDXComponent=!0}}]);