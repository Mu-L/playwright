(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{229:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return b}));var a=t(2),o=t(6),n=(t(0),t(277)),c={id:"class-chromiumbrowser",title:"class: ChromiumBrowser"},i={unversionedId:"api/class-chromiumbrowser",id:"api/class-chromiumbrowser",isDocsHomePage:!1,title:"class: ChromiumBrowser",description:"* extends: [Browser]",source:"@site/docs/api/class-chromiumbrowser.md",slug:"/api/class-chromiumbrowser",permalink:"/playwright/docs/next/api/class-chromiumbrowser",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-chromiumbrowser.md",version:"current",sidebar:"api",previous:{title:"class: Logger",permalink:"/playwright/docs/next/api/class-logger"},next:{title:"class: ChromiumBrowserContext",permalink:"/playwright/docs/next/api/class-chromiumbrowsercontext"}},s=[{value:"chromiumBrowser.newBrowserCDPSession()",id:"chromiumbrowsernewbrowsercdpsession",children:[]},{value:"chromiumBrowser.startTracing(page, options)",id:"chromiumbrowserstarttracingpage-options",children:[]},{value:"chromiumBrowser.stopTracing()",id:"chromiumbrowserstoptracing",children:[]}],l={rightToc:s};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"extends: ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api#class-browser",title:"Browser"}),"Browser"))),Object(n.b)("p",null,"Chromium-specific features including Tracing, service worker support, etc. You can use\n",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/next/api/class-chromiumbrowser#chromiumbrowserstarttracingpage-options"}),"chromiumBrowser.startTracing([page, options])")," and ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/playwright/docs/next/api/class-chromiumbrowser#chromiumbrowserstoptracing"}),"chromiumBrowser.stopTracing()")," to create a trace file which can be opened in\nChrome DevTools or ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://chromedevtools.github.io/timeline-viewer/"}),"timeline viewer"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await browser.startTracing(page, {path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait browser.stopTracing();\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-chromiumbrowser#chromiumbrowsernewbrowsercdpsession"}),"chromiumBrowser.newBrowserCDPSession()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowserstarttracingpage-options"}),"chromiumBrowser.startTracing([page, options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#chromiumbrowserstoptracing"}),"chromiumBrowser.stopTracing()"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-browser#browserondisconnected"}),"browser.on('disconnected')")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-browser#browserclose"}),"browser.close()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-browser#browsercontexts"}),"browser.contexts()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-browser#browserisconnected"}),"browser.isConnected()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-browser#browsernewpageoptions"}),"browser.newPage([options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-browser#browserversion"}),"browser.version()"))),Object(n.b)("h2",{id:"chromiumbrowsernewbrowsercdpsession"},"chromiumBrowser.newBrowserCDPSession()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-cdpsession#class-cdpsession",title:"CDPSession"}),"CDPSession"),">>")),Object(n.b)("p",null,"Returns the newly created browser session."),Object(n.b)("h2",{id:"chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing(","[page, options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"page")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/playwright/docs/next/api/class-page#class-page",title:"Page"}),"Page"),"> Optional, if specified, tracing includes screenshots of the given page."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"path")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> A path to write the trace file to."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"screenshots")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> captures screenshots in the trace."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"categories")," <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> specify custom categories to use instead of default."))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(n.b)("p",null,"Only one trace can be active at a time per browser."),Object(n.b)("h2",{id:"chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.htmlapi.md#buffer_class_buffer",title:"Buffer"}),"Buffer"),">>")),Object(n.b)("p",null,"Returns the buffer with trace data."))}b.isMDXComponent=!0},277:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return w}));var a=t(0),o=t.n(a);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,w=p["".concat(c,".").concat(u)]||p[u]||m[u]||n;return t?o.a.createElement(w,i(i({ref:r},l),{},{components:t})):o.a.createElement(w,i({ref:r},l))}));function w(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,c=new Array(n);c[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<n;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);