(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8610],{95601:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(67294),n=a(86010),l=a(36742),m="sidebar_2ahu",s="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",o="sidebarItem_2UVv",i="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";function u(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,n.Z)(m,"thin-scrollbar")},r.createElement("h3",{className:s},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:i,activeClassName:g},e.title))}))))}},69404:function(e,t,a){"use strict";a.r(t);var r=a(67294),n=a(35888),l=a(69788),m=a(36742),s=a(95601),c=a(24973),o=a(86700);function i(e){var t,a=e.tagName,n=e.count,l=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return r.createElement(c.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:l(n),tagName:a}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){var t=e.metadata,a=e.items,g=e.sidebar,u=t.allTagsPath,d=t.name,p=t.count;return r.createElement(n.Z,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"',wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(s.Z,{sidebar:g})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(i,{count:p,tagName:d})),r.createElement(m.Z,{href:u},r.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))))))}},69788:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var r=a(67294),n=a(86010),l=a(3905),m=a(99105),s=a(36742),c=a(3541),o=a(44996),i="blogPostTitle_nmLu",g="blogPostDate_3tMv",u="blogPostAuthorSeparator_1vC2",d="blogPostAvatar_1SuQ",p="blogPostTag_36QG",E="blogPostPreview_2NNd",h=["January","February","March","April","May","June","July","August","September","October","November","December"];var v=function(e){var t,a,v,b,f,N=e.children,_=e.frontMatter,k=e.metadata,Z=e.truncated,y=e.isBlogPostPage,w=void 0!==y&&y,P=k.date,T=k.permalink,M=k.tags,I=k.readingTime,x=_.author,A=_.author_image_url,L=_.author_url,C=_.title,F=_.image,J=_.keywords,R=(0,o.Z)(F,{absolute:!0});return r.createElement(r.Fragment,null,r.createElement(m.Z,null,J&&J.length&&r.createElement("meta",{name:"keywords",content:J.join(",")}),F&&r.createElement("meta",{property:"og:image",content:R}),F&&r.createElement("meta",{property:"twitter:image",content:R}),F&&r.createElement("meta",{name:"twitter:image:alt",content:"Image for "+C})),r.createElement("article",{className:(0,n.Z)(!w&&"margin-bottom--lg",!w&&E)},(t=w?"h1":"h2",a=P.substring(0,10).split("-"),v=a[0],b=h[parseInt(a[1],10)-1],f=parseInt(a[2],10),r.createElement("header",null,r.createElement(t,{className:(0,n.Z)("margin-bottom--sm",i)},w?C:r.createElement(s.Z,{to:T},C)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:P,className:g},b," ",f,", ",v," ",I&&r.createElement(r.Fragment,null," \xb7 ",Math.ceil(I)," min read"))),r.createElement("div",{className:"avatar margin-vert--md"},r.createElement("div",{style:{position:"relative",height:"45px",width:53+20*([x].length-1)+"px"}},[{name:x,avatar:A}].map((function(e,t){var a=e.name,n=e.avatar;return r.createElement("img",{key:a,className:d,style:{zIndex:1e3-t,marginLeft:20*t+"px"},src:n,alt:a})}))),r.createElement("div",{className:"avatar__intro"},r.createElement("h4",{className:"avatar__name"},[{name:x,url:L}].map((function(e,t){var a=e.name,l=e.url;return r.createElement(r.Fragment,{key:a},r.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener"},a),0!=t&&r.createElement("span",{className:(0,n.Z)(u)},",\xa0"))}))))))),r.createElement("section",{className:"markdown"},r.createElement(l.Zo,{components:c.Z},N)),(M.length>0||Z)&&r.createElement("footer",{className:"row margin-vert--md"},M.length>0&&r.createElement("div",{className:"col",style:{marginTop:-10}},M.map((function(e){var t=e.label,a=e.permalink;return r.createElement(s.Z,{key:a,className:(0,n.Z)(p),to:a},t)}))),Z&&r.createElement("div",{className:"col text--right",style:{marginTop:"auto"}},r.createElement(s.Z,{to:k.permalink,"aria-label":"Read more about "+C},r.createElement("strong",null,"Read More"))))))}}}]);