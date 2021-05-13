(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(8),r=(t(0),t(300)),i={title:"Update Household in SF (Production) with salesforce",sidebar_label:"Update Household in SF (Production)",id:"Update Household in SF Production-2017-05-15",keywords:["library","job","expression","salesforce","alterState","combine","create","dataValue","field","fields","upsert"]},l={unversionedId:"jobs/auto/Update Household in SF Production-2017-05-15",id:"jobs/auto/Update Household in SF Production-2017-05-15",isDocsHomePage:!1,title:"Update Household in SF (Production) with salesforce",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Update Household in SF Production-2017-05-15.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Update Household in SF Production-2017-05-15",permalink:"/library/jobs/auto/Update Household in SF Production-2017-05-15",version:"current",sidebar_label:"Update Household in SF (Production)",frontMatter:{title:"Update Household in SF (Production) with salesforce",sidebar_label:"Update Household in SF (Production)",id:"Update Household in SF Production-2017-05-15",keywords:["library","job","expression","salesforce","alterState","combine","create","dataValue","field","fields","upsert"]},sidebar:"library",previous:{title:"Handling multiple ODK repeat groups with salesforce",permalink:"/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks"},next:{title:"Pre-processing data with salesforce",permalink:"/library/jobs/auto/alter-state-before-operations"}},d=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],_={toc:d};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},_,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("em",null,"This job was provided by an OpenFn.org user via the job library API."),Object(r.b)("h2",{id:"metadata"},"Metadata"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Name: Update Household in SF (Production)"),Object(r.b)("li",{parentName:"ul"},"Adaptor: ",Object(r.b)("inlineCode",{parentName:"li"},"@openfn/language-salesforce")),Object(r.b)("li",{parentName:"ul"},"Adaptor Version: ",Object(r.b)("inlineCode",{parentName:"li"},"v1.3.2")),Object(r.b)("li",{parentName:"ul"},"Created almost 4 years ago"),Object(r.b)("li",{parentName:"ul"},"Updated 5 months ago")),Object(r.b)("h2",{id:"key-functions"},"Key Functions"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"alterState"),", ",Object(r.b)("inlineCode",{parentName:"p"},"combine"),", ",Object(r.b)("inlineCode",{parentName:"p"},"create"),", ",Object(r.b)("inlineCode",{parentName:"p"},"dataValue"),", ",Object(r.b)("inlineCode",{parentName:"p"},"field"),", ",Object(r.b)("inlineCode",{parentName:"p"},"fields"),", ",Object(r.b)("inlineCode",{parentName:"p"},"upsert")),Object(r.b)("h2",{id:"expression"},"Expression"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  if (state.data.form.Household_Status == 'No') {\n    return upsert(\n      'Household__c',\n      'CommCare_Code__c',\n      fields(\n        field('CommCare_Code__c', dataValue('form.case.@case_id')),\n        field('Active_Household__c', false),\n        field('Inactive_Reason__c', dataValue('form.Reason_for_Inactive')),\n        field('Inactive_Date__c', dataValue('$.form.Date')),\n        field('Completed_COVID_19_Phone_Screening__c', dataValue('form.did_you_complete_the_covid-19_phone_screening_for_this_household')),\n          field('Household_Visit_Type__c', state => {\n            var visit = dataValue('form.is_this_a_physical_home_visit_or_a_phone_call_visit')(state);\n            return visit ? visit.toString().replace(/_/g, ' ') : null;\n          })\n      )\n    )(state);\n  } else {\n    return combine(\n      create(\n        'Survey__c',\n        fields(\n          relationship(\n            'Household__r',\n            'CommCare_Code__c',\n            dataValue('$.form.case.@case_id')\n          ),\n          field('Catchment__c', 'a002400000pAcOe'),\n          field(\n            'Treats_Drinking_Water__c',\n            dataValue('$.form.Household_Information.Treats_Drinking_Water')\n          ),\n          field(\n            'WASH_Trained__c',\n            dataValue('$.form.Household_Information.WASH_Trained')\n          ),\n          field(\n            'Rubbish_Pit__c',\n            dataValue('$.form.Household_Information.Rubbish_Pit')\n          ),\n          field(\n            'Kitchen_Garden__c',\n            dataValue('$.form.Household_Information.Kitchen_Garden')\n          ),\n          field(\n            'Improved_Cooking_Method__c',\n            dataValue('$.form.Household_Information.Improved_Cooking_Method')\n          ),\n          field('Uses_ITNs__c', dataValue('$.form.Household_Information.ITNs')),\n          field(\n            'Pit_Latrine__c',\n            dataValue('$.form.Household_Information.Functional_Latrine')\n          ),\n          field(\n            'Clothesline__c',\n            dataValue('$.form.Household_Information.Clothesline')\n          ),\n          field(\n            'Drying_Rack__c',\n            dataValue('$.form.Household_Information.Drying_Rack')\n          ),\n          field(\n            'Tippy_Tap__c',\n            dataValue('$.form.Household_Information.Active_Handwashing_Station')\n          ),\n          field(\n            'Number_of_Over_5_Females__c',\n            dataValue('$.form.Household_Information.Number_of_over_5_Females')\n          ),\n          field(\n            'Number_of_Under_5_Males__c',\n            dataValue('$.form.Household_Information.Number_of_Under_5_Males')\n          ),\n          field(\n            'Number_of_Under_5_Females__c',\n            dataValue('$.form.Household_Information.Number_of_Under_5_Female')\n          ),\n          field(\n            'Number_of_Over_5_Males__c',\n            dataValue('$.form.Household_Information.Number_of_Over_5_Males')\n          ),\n          field(\n            'Family_Planning__c',\n            dataValue('$.form.Household_Information.family_planning')\n          ),\n          field(\n            'Family_Planning_Method__c',\n            dataValue('$.form.Household_Information.Family_planning_method')\n          ),\n          field('Source__c', 1)\n        )\n      ),\n      upsert(\n      'Household__c',\n      'CommCare_Code__c',\n      fields(\n        field('CommCare_Code__c', dataValue('form.case.@case_id')),\n        field('Completed_COVID_19_Phone_Screening__c', dataValue('form.did_you_complete_the_covid-19_phone_screening_for_this_household')),\n          field('Household_Visit_Type__c', state => {\n            var visit = dataValue('form.is_this_a_physical_home_visit_or_a_phone_call_visit')(state);\n            return visit ? visit.toString().replace(/_/g, ' ') : null;\n          })\n        )\n      ),\n      upsert(\n        'Visit__c',\n        'CommCare_Visit_ID__c',\n        fields(\n          field('CommCare_Visit_ID__c', dataValue('id')),\n          field('Name', 'CHW Visit'),\n          relationship(\n            'Household__r',\n            'CommCare_Code__c',\n            dataValue('$.form.case.@case_id')\n          ),\n          field('Visit_UID__c', state => {\n            var hh = dataValue('form.case.@case_id')(state);\n            var date = dataValue('metadata.timeEnd')(state);\n            return hh + date;\n          }),\n          field('Date__c', dataValue('$.metadata.timeEnd')),\n          field('CommCare_Visit_ID__c', dataValue('id')),\n          field('Catchment__c', 'a002400000pAcOe'),\n          field('Household_CHW__c', dataValue('form.chw')),\n          field('Supervisor_Visit__c', state => {\n            return dataValue('$.form.supervisor_visit')(state)\n              .toString()\n              .replace(/ /g, ';');\n          }),\n          field(\n            'COC_Cycles_Distributed__c',\n            dataValue('$.form.Household_Information.COC_count')\n          ),\n          field(\n            'Female_Condoms_Distributed__c',\n            dataValue('$.form.Household_Information.female_condoms_count')\n          ),\n          field(\n            'Male_Condoms_Distributed__c',\n            dataValue('$.form.Household_Information.male_condoms_count')\n          ),\n          field(\n            'Emergency_Pills_Distributed__c',\n            dataValue('$.form.Household_Information.emergency_pills_count')\n          ),\n          field(\n            'POP_Cycles_Distributed__c',\n            dataValue('$.form.Household_Information.POP_count')\n          )\n        )\n      )\n    )(state);\n  }\n});\n\n")))}s.isMDXComponent=!0},300:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var _=o.a.createContext({}),s=function(e){var n=o.a.useContext(_),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return o.a.createElement(_.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,_=d(e,["components","mdxType","originalType","parentName"]),c=s(t),f=a,m=c["".concat(i,".").concat(f)]||c[f]||u[f]||r;return t?o.a.createElement(m,l(l({ref:n},_),{},{components:t})):o.a.createElement(m,l({ref:n},_))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var _=2;_<r;_++)i[_]=t[_];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);