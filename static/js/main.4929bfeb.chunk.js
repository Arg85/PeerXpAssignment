(this.webpackJsonpassignmentghost=this.webpackJsonpassignmentghost||[]).push([[0],{107:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(64),r=n.n(a),i=(n(75),n(76),n(32)),o=n(7),j=n(1);var l=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:" Home Screen"}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",border:"1px solid black",boxShadow:"2px 2px 2px 2px black"},children:[Object(j.jsxs)("h2",{children:["  ",Object(j.jsx)(i.b,{to:"/Dashboard",children:"Dashboard"}),"  "]}),Object(j.jsxs)("h2",{children:["  ",Object(j.jsx)(i.b,{to:"/Posts",children:"Posts"}),"  "]}),Object(j.jsxs)("h2",{children:["  ",Object(j.jsx)(i.b,{to:"/Links",children:"Links"})," "]})]})]})},h=n(5),d=n(135),b=n(133),u=n(138),O=n(136),x=n(132),f=n(137);function g(e){var t=e.Data,n=e.Name;return Object(j.jsx)(d.a,{sx:{minWidth:150,maxWidth:200,padding:2,Height:150},children:Object(j.jsxs)(b.a,{variant:"outlined",children:[Object(j.jsx)(O.a,{children:Object(j.jsx)(f.a,{sx:{fontSize:14},color:"text.secondary",children:Object(j.jsxs)("h4",{children:[n," ",t]})})}),Object(j.jsx)(u.a,{children:Object(j.jsx)(x.a,{size:"small",children:"Learn More"})})]})})}n(88);var p=n(23),m=n.n(p);n(107);var v=function(e){var t=e.title,n=e.custom_excerpt,c=e.url,s=e.excerpt;return Object(j.jsx)("div",{className:"PostCardComponent",children:Object(j.jsxs)("a",{href:c,target:"_blank",rel:"noreferrer noopener",children:[Object(j.jsx)("h4",{children:t}),Object(j.jsx)("p",{children:n||s})]})})};var k=function(){var e=Object(c.useState)(0),t=Object(h.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),r=Object(h.a)(a,2),i=r[0],o=r[1],l=Object(c.useState)(0),d=Object(h.a)(l,2),b=d[0],u=d[1],O=Object(c.useState)(0),x=Object(h.a)(O,2),f=x[0],p=x[1],k=Object(c.useState)({}),T=Object(h.a)(k,2),S=T[0],y=T[1],E=Object(c.useCallback)((function(){var e=m.a.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=".concat("8196190b08906dda0ebf6e6f5d")),t=m.a.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=".concat("8196190b08906dda0ebf6e6f5d")),n=m.a.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=".concat("8196190b08906dda0ebf6e6f5d")),c=m.a.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=".concat("8196190b08906dda0ebf6e6f5d")),a=m.a.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=".concat("8196190b08906dda0ebf6e6f5d","&limit=5"));m.a.all([e,t,n,c,a]).then(m.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var c=t[0].data.posts.length,a=t[1].data.pages.length,r=t[2].data.authors.length,i=t[3].data.tags.length,j=t[4].data.posts;console.log("anrauar"),s(c),o(a),u(r),p(i),y(j)})))}),[]);return Object(c.useEffect)((function(){console.log("useEfeecet called"),E()}),[E]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Dashboard Screen"}),Object(j.jsxs)("div",{className:"dashboardCards",children:[Object(j.jsx)(g,{Name:"Total Pages",Data:i},1),Object(j.jsx)(g,{Name:"Total Posts",Data:n},2),Object(j.jsx)(g,{Name:"Total Authors",Data:b},3),Object(j.jsx)(g,{Name:"Total Tags",Data:f},4),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Recent Posts"}),Object(j.jsx)("div",{className:"postGridDiv",children:Object.entries(S).map((function(e){return console.log(e[1].url),Object(j.jsx)(v,{title:e[1].title,custom_excerpt:e[1].custom_excerpt,url:e[1].url,excerpt:e[1].excerpt},e[1].id)}))})]})]})]})},T=n(30),S=n.n(T),y=n(44);n(62),n(63);var E=function(e){var t=e.Heading,n=e.datas,s=Object(c.useState)([]),a=Object(h.a)(s,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){console.log("data",typeof n,t,n),setTimeout((function(){i(n)}),100)}),[i,n,t]),Object(j.jsx)("div",{className:"filterCards",children:r.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:t}),r.map((function(e){return Object(j.jsx)("a",{href:e[1].url,rel:"noreferrer",target:"_blank",children:Object(j.jsx)("h5",{children:e[1].url})})}))]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:t}),Object(j.jsx)("h5",{children:"No posts found"})]})})};var F=function(){var e=Object(c.useState)(0),t=Object(h.a)(e,2),n=t[0],s=t[1],a=function(){var e=Object(y.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=".concat("8196190b08906dda0ebf6e6f5d"));case 2:t=e.sent,s(t.data.posts);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log("useEfeecet called"),a()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Posts"}),Object(j.jsxs)("div",{className:"postFilterCards",children:[Object(j.jsx)(E,{Heading:"Without Meta Description",datas:Object.entries(n).filter((function(e){return null===e[1].meta_description}))},1),Object(j.jsx)(E,{Heading:"Too long Meta Description",datas:Object.entries(n).filter((function(e){return null!==e[1].meta_description&&e[1].meta_description.length>50}))},2),Object(j.jsx)(E,{Heading:"Too long Url more than 100 words",datas:Object.entries(n).filter((function(e){return e[1].url.length>100}))},3),Object(j.jsx)(E,{Heading:"Too long Posts more than 1500 words",datas:Object.entries(n).filter((function(e){return e[1].excerpt.length>1500}))},4),Object(j.jsx)(E,{Heading:"Too Short Posts ,less than 250 words",datas:Object.entries(n).filter((function(e){return e[1].excerpt.length<250}))},5)]})]})};var L=function(e){var t=e.Heading,n=e.datas,s=Object(c.useState)([]),a=Object(h.a)(s,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){setTimeout((function(){i(n)}),100)}),[i,n]),Object(j.jsxs)("div",{className:"filterCards",children:[t&&"Total Link Count"===t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:t}),Object(j.jsx)("p",{children:r})]}):"",t&&"Total Broken Internal Links"===t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:t}),r.length>0?r.map((function(e){return Object(j.jsx)("h5",{children:Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:e,children:e},e)})})):Object(j.jsxs)(j.Fragment,{children:['"No Broken Internal Links"',r.length]})]}),t&&"Total Broken External Links"===t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:t}),r.length>0?r.map((function(e){return Object(j.jsx)("h5",{children:Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:e,children:e},e)})})):"No Broken External Links"]})]})};var N=function(){var e=Object(c.useState)(0),t=Object(h.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(h.a)(a,2),i=r[0],o=r[1],l=Object(c.useState)([]),d=Object(h.a)(l,2),b=d[0],u=d[1],O=function(){var e=Object(y.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=".concat("8196190b08906dda0ebf6e6f5d"));case 2:t=e.sent,s(t.data.posts);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log("useEfeecet called"),O()}),[]),Object(c.useEffect)((function(){console.log("ha");var e=[],t=[],c=Object.entries(n).filter((function(e){return e[1].url.includes("https://ghost-blog.ipxp.in/")})),s=Object.entries(n).filter((function(e){return!e[1].url.includes("https://ghost-blog.ipxp.in/")}));s.length>0&&s.forEach((function(e){fetch(n).then((function(n){n.status<300&&t.push(e[1].url)})),u(t)})),c.length>0&&c.forEach((function(t){fetch(t).then((function(n){n.status<300&&e.push(t[1].url)})),o(e)}))}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Links"}),Object(j.jsxs)("div",{className:"postFilterCards",children:[Object(j.jsx)(L,{Heading:"Total Link Count",datas:n.length},1),Object(j.jsx)(L,{Heading:"Total Broken Internal Links",datas:i},21),Object(j.jsx)(L,{Heading:"Total Broken External Links",datas:b},3)]})]})};var C=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(l,{})}),Object(j.jsx)(o.a,{path:"/Dashboard",children:Object(j.jsx)(k,{})}),Object(j.jsx)(o.a,{path:"/Posts",children:Object(j.jsx)(F,{})}),Object(j.jsx)(o.a,{path:"/Links",children:Object(j.jsx)(N,{})})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),D()},62:function(e,t,n){},63:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},88:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.4929bfeb.chunk.js.map