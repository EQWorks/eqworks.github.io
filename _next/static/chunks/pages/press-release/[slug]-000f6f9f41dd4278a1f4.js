_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{FiXS:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return w})),n.d(t,"default",(function(){return _}));var r=n("q1tI"),o=n.n(r),a=n("eomm"),i=n.n(a),c=n("8Kt/"),l=n.n(c),s=n("YFqc"),u=n.n(s),f=n("vOnD"),p=n("8GVx"),d=n("F8TD"),h=o.a.createElement,m=f.c.p.withConfig({displayName:"reading-time__ParagraphStyled",componentId:"sc-1j0qxan-0"})(["margin:0 0 20px 0;"]);function g(e){var t=e.data,n="";t.map((function(e){e.content.length>0&&"string"===typeof e.content[0].value&&(n+=e.content[0].value)}));var r=n.replace(/^\s+/,"").replace(/\s+$/,"").split(" ").length,o=Math.floor(r/225)+1;return h(m,null,o," minute read")}var v=o.a.createElement,x=f.c.section.withConfig({displayName:"slug__PageStyled",componentId:"sc-1upxokx-0"})([".press-releases-link{color:",";cursor:pointer;display:block;font-size:0.9em;margin:40px auto;text-align:center;text-decoration:none;transition:color 0.25s ease-out;&:hover{color:",";}}"],(function(e){return e.theme.color.black}),(function(e){return e.theme.color.navBarLinksListHover})),y=f.c.div.withConfig({displayName:"slug__Article",componentId:"sc-1upxokx-1"})(["color:",";margin:0 auto;max-width:",";padding:0 20px 40px 20px;h1{color:",";font-size:2em;margin:0 0 30px 0;text-align:center;}.author-date{color:",";font-size:0.9em;margin:0 0 30px 0;text-align:center;}.content{a{color:",";text-decoration:none;transition:color 0.25s ease-out;&:hover{color:",";}}p{margin:0 0 20px 0;}ul{margin:0 0 20px 0;li{margin:0 0 10px 0;&:last-child{margin:0 0 0 0;}p{margin:0;}}}}.excerpt{font-family:",",sans-serif;font-weight:",";font-size:1.5em;line-height:1.25em;margin:0 0 20px 0;text-align:center;}"],(function(e){return e.theme.color.greyMedium}),(function(e){return e.theme.width.article}),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.navBarLinksListHover}),(function(e){return e.theme.font.copy.name}),(function(e){return e.theme.font.copy.light})),w=(f.c.div.withConfig({displayName:"slug__StyleNoContent",componentId:"sc-1upxokx-2"})(["margin:20px auto;max-width:",";h2{font-size:2em;}"],(function(e){return e.theme.width.article})),!0);function _(e){var t=e.pressRelease;return t?v(x,null,v(l.a,null,v("title",null,t.title," | EQ Works")),v(u.a,{href:"/press-releases"},v("a",{className:"press-releases-link"},"Press Releases")),v(y,null,v("h1",null,t.title),v("p",{className:"excerpt"},t.excerpt),v("p",{className:"author-date"},t.author.fields.name," /"," ",v(p.a,{className:"date",dateString:t.date})),v(g,{data:t.content.content}),v(d.a,{content:t.content}))):v(i.a,{statusCode:404})}},HAG8:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/press-release/[slug]",function(){return n("FiXS")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("elyg"),l=n("nOHt"),s=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],s=o[1],h=(0,l.useRouter)(),m=h&&h.pathname||"/",g=i.default.useMemo((function(){var t=(0,c.resolveHref)(m,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,c.resolveHref)(m,e.as):a||o}}),[m,e.href,e.as]),v=g.href,x=g.as;i.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,c.isLocalURL)(v)&&!f[v+"%"+x])return p(a,(function(){d(h,v,x)}))}),[t,a,v,x,h]);var y=e.children,w=e.replace,_=e.shallow,k=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var E=i.Children.only(y),N={ref:function(e){e&&s(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,v,x,w,_,k)}};return t&&(N.onMouseEnter=function(e){(0,c.isLocalURL)(v)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),d(h,v,x,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(N.href=(0,c.addBasePath)((0,c.addLocale)(x,h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(E,N)};t.default=h},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["HAG8",2,1,0,4,5,6]]]);