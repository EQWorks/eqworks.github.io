(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a,i=r(n("q1tI")),c=n("elyg"),u=(n("g/15"),n("nOHt")),l=new Map,s=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,o){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),f[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=o(n,2),a=r[0],l=r[1],d=(0,u.useRouter)(),m=d&&d.pathname||"/",g=i.default.useMemo((function(){var t=(0,c.resolveHref)(m,e.href);return{href:t,as:e.as?(0,c.resolveHref)(m,e.as):t}}),[m,e.href,e.as]),v=g.href,y=g.as;i.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,c.isLocalURL)(v)&&!f[v+"%"+y])return p(a,(function(){h(d,v,y)}))}),[t,a,v,y,d]);var b=e.children,w=e.replace,k=e.shallow,x=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var E=i.Children.only(b),O={ref:function(e){e&&l(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,v,y,w,k,x)}};return t&&(O.onMouseEnter=function(e){(0,c.isLocalURL)(v)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),h(d,v,y,{priority:!0}))}),!e.passHref&&("a"!==E.type||"href"in E.props)||(O.href=(0,c.addBasePath)(y)),i.default.cloneElement(E,O)};t.default=d},nTCQ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var o=n("q1tI"),r=n.n(o),a=n("YFqc"),i=n.n(a),c=n("vOnD"),u=r.a.createElement,l=c.default.section.withConfig({displayName:"content__SectionStyled",componentId:"sc-1hm5wsj-0"})(["color:",";margin:0 auto;max-width:600px;padding:40px 20px;text-align:center;h2{color:",";margin:0 auto 20px auto;}.link{color:",";cursor:pointer;border:2px solid ",";display:inline-block;font-family:",",sans-serif;font-weight:",";text-decoration:none;text-transform:uppercase;transition:all 0.25s ease-out;padding:10px 20px;&:hover{background-color:",";color:",";}}.subtitle{font-weight:",";margin:20px auto;}"],(function(e){return e.theme.color.greyMedium}),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.black}),(function(e){return e.theme.font.copy.name}),(function(e){return e.theme.font.copy.medium}),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.white}),(function(e){return e.theme.font.copy.bold}));function s(){return u(l,null,u("h2",null,"Browser Opt-Out"),u("p",null,"You may opt-out of interest-based advertising on your browser by clicking the button below. Please note that this does not mean that you will no longer see advertising online, simply that the advertisements you are served may no longer be relevant to your\xa0interests."),u("p",{className:"subtitle"},u("i",null,"Clicking the button below will redirect you to the EQ Works homepage.")),u(i.a,{href:"https://um2.eqads.com/optout"},u("a",{className:"link",target:"_blank"},"Opt Out")))}}}]);