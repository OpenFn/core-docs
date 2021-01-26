(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return j})),a.d(t,"metadata",(function(){return I})),a.d(t,"toc",(function(){return O})),a.d(t,"default",(function(){return C}));var n=a(3),b=a(7),i=a(0),c=a.n(i),l=a(145),r=a(170),o=a(147),s=a(130),m=a.n(s),d=37,g=39;var p=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,b=e.values,l=e.groupId,s=e.className,p=Object(r.a)(),u=p.tabGroupChoices,j=p.setTabGroupChoices,I=Object(i.useState)(n),O=I[0],h=I[1],C=i.Children.toArray(e.children);if(null!=l){var N=u[l];null!=N&&N!==O&&b.some((function(e){return e.value===N}))&&h(N)}var A=function(e){h(e),null!=l&&j(l,e)},v=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},s)},b.map((function(e){var t=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",m.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case g:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return A(t)},onClick:function(){A(t)}},a)}))),t?Object(i.cloneElement)(C.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},C.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))};var u=function(e){var t=e.children,a=e.hidden,b=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:b}),t)},j={id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",slug:"/style-guide"},I={unversionedId:"style-guide",id:"style-guide",isDocsHomePage:!1,title:"Style Guide",description:"You can write content using",source:"@site/docs/style-guide.mdx",slug:"/style-guide",permalink:"/documentation/style-guide",editUrl:"https://github.com/openfn/docs/edit/main/docs/style-guide.mdx",version:"current",sidebar_label:"Style Guide",sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/documentation/faqs"},next:{title:"About",permalink:"/documentation/about"}},O=[{value:"Markdown Syntax",id:"markdown-syntax",children:[]},{value:"Headers",id:"headers",children:[]},{value:"H2 - Create the best documentation",id:"h2---create-the-best-documentation",children:[{value:"H3 - Create the best documentation",id:"h3---create-the-best-documentation",children:[]}]},{value:"Emphasis",id:"emphasis",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Links",id:"links",children:[]},{value:"Images",id:"images",children:[]},{value:"Code",id:"code",children:[]},{value:"Tables",id:"tables",children:[]},{value:"Blockquotes",id:"blockquotes",children:[]},{value:"Inline HTML",id:"inline-html",children:[]},{value:"Line Breaks",id:"line-breaks",children:[]},{value:"Admonitions",id:"admonitions",children:[]},{value:"Tabs",id:"tabs",children:[]}],h={toc:O};function C(e){var t=e.components,i=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},h,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can write content using\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.github.com/gfm/"}),"GitHub-flavored Markdown syntax"),"."),Object(l.b)("h2",{id:"markdown-syntax"},"Markdown Syntax"),Object(l.b)("p",null,"To serve as an example page when styling markdown based Docusaurus sites."),Object(l.b)("h2",{id:"headers"},"Headers"),Object(l.b)("h1",{id:"h1---create-the-best-documentation"},"H1 - Create the best documentation"),Object(l.b)("h2",{id:"h2---create-the-best-documentation"},"H2 - Create the best documentation"),Object(l.b)("h3",{id:"h3---create-the-best-documentation"},"H3 - Create the best documentation"),Object(l.b)("h4",{id:"h4---create-the-best-documentation"},"H4 - Create the best documentation"),Object(l.b)("h5",{id:"h5---create-the-best-documentation"},"H5 - Create the best documentation"),Object(l.b)("h6",{id:"h6---create-the-best-documentation"},"H6 - Create the best documentation"),Object(l.b)("hr",null),Object(l.b)("h2",{id:"emphasis"},"Emphasis"),Object(l.b)("p",null,"Emphasis, aka italics, with ",Object(l.b)("em",{parentName:"p"},"asterisks")," or ",Object(l.b)("em",{parentName:"p"},"underscores"),"."),Object(l.b)("p",null,"Strong emphasis, aka bold, with ",Object(l.b)("strong",{parentName:"p"},"asterisks")," or ",Object(l.b)("strong",{parentName:"p"},"underscores"),"."),Object(l.b)("p",null,"Combined emphasis with ",Object(l.b)("strong",{parentName:"p"},"asterisks and ",Object(l.b)("em",{parentName:"strong"},"underscores")),"."),Object(l.b)("p",null,"Strikethrough uses two tildes. ",Object(l.b)("del",{parentName:"p"},"Scratch this.")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"lists"},"Lists"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"First ordered list item"),Object(l.b)("li",{parentName:"ol"},"Another item",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Unordered sub-list."))),Object(l.b)("li",{parentName:"ol"},"Actual numbers don't matter, just that it's a number",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"Ordered sub-list"))),Object(l.b)("li",{parentName:"ol"},"And another item.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Unordered list can use asterisks")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Or minuses")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Or pluses")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"links"},"Links"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.google.com/"}),"I'm an inline-style link")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.google.com/",title:"Google's Homepage"}),"I'm an inline-style link with title")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mozilla.org/"}),"I'm a reference-style link")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://slashdot.org/"}),"You can use numbers for reference-style link definitions")),Object(l.b)("p",null,"Or leave it empty and use the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.reddit.com/"}),"link text itself"),"."),Object(l.b)("p",null,"URLs and URLs in angle brackets will automatically get turned into links.\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com/"}),"http://www.example.com/")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com/"}),"http://www.example.com/")," and sometimes example.com\n(but not on GitHub, for example)."),Object(l.b)("p",null,"Some text to show that the reference links can follow later."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"images"},"Images"),Object(l.b)("p",null,"Here's our logo (hover to see the title text):"),Object(l.b)("p",null,"Inline-style:\n",Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"}))),Object(l.b)("p",null,"Reference-style: ",Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"}))),Object(l.b)("p",null,"Images from any folder can be used by providing path to file. Path should be\nrelative to markdown file."),Object(l.b)("p",null,Object(l.b)("img",{alt:"img",src:a(494).default})),Object(l.b)("hr",null),Object(l.b)("h2",{id:"code"},"Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var s = 'JavaScript syntax highlighting';\nalert(s);\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'s = "Python syntax highlighting"\nprint(s)\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{2}","{2}":!0}),"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"tables"},"Tables"),Object(l.b)("p",null,"Colons can be used to align columns."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tables"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Are"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cool"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col 3 is"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"right-aligned"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"\\$1600")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col 2 is"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"centered"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"\\$12")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zebra stripes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"are neat"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"\\$1")))),Object(l.b)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|)\nare optional, and you don't need to make the raw Markdown line up prettily. You\ncan also use inline Markdown."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Markdown"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Less"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pretty"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"Still")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"renders")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"nicely"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"blockquotes"},"Blockquotes"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Blockquotes are very handy in email to emulate reply text. This line is part\nof the same quote.")),Object(l.b)("p",null,"Quote break."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This is a very long line that will still be quoted properly when it wraps. Oh\nboy let's keep writing to make sure this is long enough to actually wrap for\neveryone. Oh, you can ",Object(l.b)("em",{parentName:"p"},"put")," ",Object(l.b)("strong",{parentName:"p"},"Markdown")," into a blockquote.")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"inline-html"},"Inline HTML"),Object(l.b)("dl",null,Object(l.b)("dt",null,"Definition list"),Object(l.b)("dd",null,"Is something people use sometimes."),Object(l.b)("dt",null,"Markdown in HTML"),Object(l.b)("dd",null,"Does *not* work **very** well. Use HTML ",Object(l.b)("em",null,"tags"),".")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"line-breaks"},"Line Breaks"),Object(l.b)("p",null,"Here's a line for us to start with."),Object(l.b)("p",null,"This line is separated from the one above by two newlines, so it will be a\n",Object(l.b)("em",{parentName:"p"},"separate paragraph"),"."),Object(l.b)("p",null,"This line is also a separate paragraph, but... This line is only separated by a\nsingle newline, so it's a separate line in the ",Object(l.b)("em",{parentName:"p"},"same paragraph"),"."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"admonitions"},"Admonitions"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This is a note"))),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This is a tip"))),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This is important"))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This is a caution"))),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This is a warning"))),Object(l.b)("h2",{id:"tabs"},"Tabs"),Object(l.b)("p",null,"Note how we import tabs first, then use them as below:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Tabs\n  defaultValue=\"apple\"\n  values={[\n    { label: 'Apple', value: 'apple' },\n    { label: 'Orange', value: 'orange' },\n    { label: 'Banana', value: 'banana' },\n  ]}\n>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n")),Object(l.b)(p,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},Object(l.b)(u,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),Object(l.b)(u,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),Object(l.b)(u,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}C.isMDXComponent=!0},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(0),b=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),s=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},g=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),m=s(a),g=n,p=m["".concat(c,".").concat(g)]||m[g]||d[g]||i;return a?b.a.createElement(p,l(l({ref:t},o),{},{components:a})):b.a.createElement(p,l({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=g;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},147:function(e,t,a){"use strict";function n(e){var t,a,b="";if("string"==typeof e||"number"==typeof e)b+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(b&&(b+=" "),b+=a);else for(t in e)e[t]&&(b&&(b+=" "),b+=t);return b}t.a=function(){for(var e,t,a=0,b="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(b&&(b+=" "),b+=t);return b}},170:function(e,t,a){"use strict";var n=a(0),b=a(171);t.a=function(){var e=Object(n.useContext)(b.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},171:function(e,t,a){"use strict";var n=a(0),b=Object(n.createContext)(void 0);t.a=b},494:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI5Ni43NjAwMDIiCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5Ni43NjAwMDIiCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iL2hvbWUvdGF5bG9yL0dvb2dsZURyaXZlL29wZW5Gbi9BcnQgJmFtcDsgTG9nby9uZXdfbG9nb19ncmVlbi5wbmciCiAgIHNvZGlwb2RpOmRvY25hbWU9Im5ld19sb2dvLWdyYWRpZW50LnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjEgKDA3NjdmODMwMmEsIDIwMjAtMTAtMTcpIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcyIgogICB2aWV3Qm94PSIwIDAgODAwLjAwMDA5IDgwMC4wMDAwOSIKICAgaGVpZ2h0PSI4MDAuMDAwMDYiCiAgIHdpZHRoPSI4MDAuMDAwMDYiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50ODkwIj4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzgzZDZlMjtzdG9wLW9wYWNpdHk6MSIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBpZD0ic3RvcDg4NiIgLz4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6I2FmMjc4MztzdG9wLW9wYWNpdHk6MCIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBpZD0ic3RvcDg4OCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgeTI9Ii05Mi4xMzM2MTQiCiAgICAgICB4Mj0iODk1LjkyMzk1IgogICAgICAgeTE9IjY2Ny41NzIzMyIKICAgICAgIHgxPSIxMzYuMjE4MDUiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQxNDY0IgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50ODkwIgogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiCiAgICAgdW5pdHM9InB4IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTYiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGlua3NjYXBlOnNuYXAtdG8tZ3VpZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOnNuYXAtZ3JpZHM9InRydWUiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3k9IjM1My43NzE1NCIKICAgICBpbmtzY2FwZTpjeD0iLTExLjM0Njg2MiIKICAgICBpbmtzY2FwZTp6b29tPSIwLjQ5NDk3NDc1IgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGlkPSJiYXNlIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNi4wNzEsMTEyLjI4MDY2KSIKICAgICBpZD0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPgogICAgPHJlY3QKICAgICAgIHk9Ii05Mi4xMzM1OTgiCiAgICAgICB4PSIxMzYuMjE4MDYiCiAgICAgICBoZWlnaHQ9Ijc1OS43MDU5MyIKICAgICAgIHdpZHRoPSI3NTkuNzA1OTMiCiAgICAgICBpZD0icmVjdDMzNDgtNiIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTk7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0MC4yOTQxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDxyZWN0CiAgICAgICB5PSItOTIuMTMzNjE0IgogICAgICAgeD0iMTM2LjIxODA1IgogICAgICAgaGVpZ2h0PSI3NTkuNzA1OTMiCiAgICAgICB3aWR0aD0iNzU5LjcwNTkzIgogICAgICAgaWQ9InJlY3QzMzQ4IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45OTtmaWxsOnVybCgjbGluZWFyR3JhZGllbnQxNDY0KTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NDAuMjk0MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICA8dGV4dAogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgxLjAxODM1MDEsMC45ODE5ODA1NCkiCiAgICAgICBpZD0idGV4dDMzNDQiCiAgICAgICB5PSI0NjcuMjMwNjUiCiAgICAgICB4PSIyMzMuMjI3ODEiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpib2xkO2ZvbnQtc3RyZXRjaDpub3JtYWw7bGluZS1oZWlnaHQ6MCU7Zm9udC1mYW1pbHk6J05ldXplaXRTIExUIEJvb2snOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J05ldXplaXRTIExUIEJvb2ssIEJvbGQnO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4KICAgICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo0NjMuMzgycHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTonTmV1emVpdFMgTFQgQm9vayc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTmV1emVpdFMgTFQgQm9vaywgQm9sZCc7dGV4dC1hbGlnbjpzdGFydDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxIgogICAgICAgICB5PSI0NjcuMjMwNjUiCiAgICAgICAgIHg9IjIzMy4yMjc4MSIKICAgICAgICAgaWQ9InRzcGFuMzM0NiIKICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSI+Rm48L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="}}]);