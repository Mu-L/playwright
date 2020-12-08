(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(277)),i={id:"working-with-selectors",title:"Working with selectors"},s={unversionedId:"api/working-with-selectors",id:"version-1.6.1/api/working-with-selectors",isDocsHomePage:!1,title:"Working with selectors",description:"Selector describes an element in the page. It can be used to obtain ElementHandle (see page.$() for example) or shortcut element operations to avoid intermediate handle (see page.click() for example).",source:"@site/versioned_docs/version-1.6.1/api/working-with-selectors.md",slug:"/api/working-with-selectors",permalink:"/playwright/docs/1.6.1/api/working-with-selectors",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/api/working-with-selectors.md",version:"1.6.1",sidebar:"version-1.6.1/api",previous:{title:"Environment Variables",permalink:"/playwright/docs/1.6.1/api/environment-variables"},next:{title:"Working with Chrome Extensions",permalink:"/playwright/docs/1.6.1/api/working-with-chrome-extensions"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Selector describes an element in the page. It can be used to obtain ",Object(o.b)("inlineCode",{parentName:"p"},"ElementHandle")," (see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#pageselector"}),"page.$()")," for example) or shortcut element operations to avoid intermediate handle (see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/api/class-page#pageclickselector-options"}),"page.click()")," for example)."),Object(o.b)("p",null,"Selector has the following format: ",Object(o.b)("inlineCode",{parentName:"p"},"engine=body [>> engine=body]*"),". Here ",Object(o.b)("inlineCode",{parentName:"p"},"engine")," is one of the supported ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.6.1/selectors"}),"selector engines")," (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"css")," or ",Object(o.b)("inlineCode",{parentName:"p"},"xpath"),"), and ",Object(o.b)("inlineCode",{parentName:"p"},"body")," is a selector body in the format of the particular engine. When multiple ",Object(o.b)("inlineCode",{parentName:"p"},"engine=body")," clauses are present (separated by ",Object(o.b)("inlineCode",{parentName:"p"},">>"),"), next one is queried relative to the previous one's result."),Object(o.b)("p",null,"For convenience, selectors in the wrong format are heuristically converted to the right format:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"selector starting with ",Object(o.b)("inlineCode",{parentName:"li"},"//")," or ",Object(o.b)("inlineCode",{parentName:"li"},"..")," is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"xpath=selector"),";"),Object(o.b)("li",{parentName:"ul"},"selector starting and ending with a quote (either ",Object(o.b)("inlineCode",{parentName:"li"},'"')," or ",Object(o.b)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"text=selector"),";"),Object(o.b)("li",{parentName:"ul"},"otherwise selector is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"css=selector"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// queries 'div' css selector\nconst handle = await page.$('css=div');\n\n// queries '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div');\n\n// queries '\"foo\"' text selector\nconst handle = await page.$('text=\"foo\"');\n\n// queries 'span' css selector inside the result of '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div >> css=span');\n\n// converted to 'css=div'\nconst handle = await page.$('div');\n\n// converted to 'xpath=//html/body/div'\nconst handle = await page.$('//html/body/div');\n\n// converted to 'text=\"foo\"'\nconst handle = await page.$('\"foo\"');\n\n// queries '../span' xpath selector starting with the result of 'div' css selector\nconst handle = await page.$('div >> ../span');\n\n// queries 'span' css selector inside the div handle\nconst handle = await divHandle.$('css=span');\n")))}p.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);