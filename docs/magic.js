function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e){if(Array.isArray(e))return e}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o;r=e,o=n[t],t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o})}return e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,r){return t(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,l=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,r=c}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,r)||l(e,r)||n()}function l(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}!function(){var e,c,s,u,f,p,d,h,m,g,v,y,b,w,x,k,C,P,M,S,A=(e={},s=(c=[]).map,u=Array.isArray,f="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,p=function(e){var t="";if("string"==typeof e)return e;if(u(e)&&e.length>0)for(var n,r=0;r<e.length;r++)""!==(n=p(e[r]))&&(t+=(t&&" ")+n);else for(var r in e)e[r]&&(t+=(t&&" ")+r);return t},d=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},h=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:h(t):0)},c)},m=function(e,t){if(e!==t)for(var n in d(e,t)){var r,o;if(e[n]!==t[n]&&(r=e[n],o=t[n],!(u(r)&&u(o))||r[0]!==o[0]||"function"!=typeof r[0]))return!0;t[n]=e[n]}},g=function(e,t,n){for(var r,o,i=0,a=[];i<e.length||i<t.length;i++)r=e[i],a.push((o=t[i])?!r||o[0]!==r[0]||m(o[1],r[1])?[o[0],o[1],o[0](n,o[1]),r&&r[2]()]:r:r&&r[2]());return a},v=function(e,t,n,r,o,i){if("key"===t);else if("style"===t)for(var a in d(n,r))n=null==r||null==r[a]?"":r[a],"-"===a[0]?e[t].setProperty(a,n):e[t][a]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=r)?n||e.addEventListener(t,o):e.removeEventListener(t,o):!i&&"list"!==t&&t in e?e[t]=null==r?"":r:null!=r&&!1!==r&&("class"!==t||(r=p(r)))?e.setAttribute(t,r):e.removeAttribute(t)},y=function(e,t,n){var r=e.props,o=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:r.is}):document.createElement(e.name,{is:r.is});for(var i in r)v(o,i,null,r[i],t,n);for(var a=0,l=e.children.length;a<l;a++)o.appendChild(y(e.children[a]=C(e.children[a]),t,n));return e.node=o},b=function(e){return null==e?null:e.key},w=function(e,t,n,r,o,i){if(n===r);else if(null!=n&&3===n.type&&3===r.type)n.name!==r.name&&(t.nodeValue=r.name);else if(null==n||n.name!==r.name)t=e.insertBefore(y(r=C(r),o,i),t),null!=n&&e.removeChild(n.node);else{var a,l,c,s,u=n.props,f=r.props,p=n.children,h=r.children,m=0,g=0,x=p.length-1,k=h.length-1;for(var P in i=i||"svg"===r.name,d(u,f))("value"===P||"selected"===P||"checked"===P?t[P]:u[P])!==f[P]&&v(t,P,u[P],f[P],o,i);for(;g<=k&&m<=x&&null!=(c=b(p[m]))&&c===b(h[g]);)w(t,p[m].node,p[m],h[g]=C(h[g++],p[m++]),o,i);for(;g<=k&&m<=x&&null!=(c=b(p[x]))&&c===b(h[k]);)w(t,p[x].node,p[x],h[k]=C(h[k--],p[x--]),o,i);if(m>x)for(;g<=k;)t.insertBefore(y(h[g]=C(h[g++]),o,i),(l=p[m])&&l.node);else if(g>k)for(;m<=x;)t.removeChild(p[m++].node);else{for(var P=m,M={},S={};P<=x;P++)null!=(c=p[P].key)&&(M[c]=p[P]);for(;g<=k;){if(c=b(l=p[m]),s=b(h[g]=C(h[g],l)),S[c]||null!=s&&s===b(p[m+1])){null==c&&t.removeChild(l.node),m++;continue}null==s||1===n.type?(null==c&&(w(t,l&&l.node,l,h[g],o,i),g++),m++):(c===s?(w(t,l.node,l,h[g],o,i),S[s]=!0,m++):null!=(a=M[s])?(w(t,t.insertBefore(a.node,l&&l.node),a,h[g],o,i),S[s]=!0):w(t,l&&l.node,null,h[g],o,i),g++)}for(;m<=x;)null==b(l=p[m++])&&t.removeChild(l.node);for(var P in M)null==S[P]&&t.removeChild(M[P].node)}}return r.node=t},x=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},k=function(e){return"object"==typeof e?e:M(e)},C=function(e,t){return 2===e.type?((!t||!t.lazy||x(t.lazy,e.lazy))&&((t=k(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},P=function(e,t,n,r,o,i){return{name:e,props:t,children:n,node:r,type:i,key:o}},M=function(t,n){return P(t,e,c,n,void 0,3)},S=function(t){return 3===t.nodeType?M(t.nodeValue,t):P(t.nodeName.toLowerCase(),e,s.call(t.childNodes,S),t,void 0,1)},{h:function(t,n){for(var r,o=[],i=[],a=arguments.length;a-- >2;)o.push(arguments[a]);for(;o.length>0;)if(u(r=o.pop()))for(var a=r.length;a-- >0;)o.push(r[a]);else!1===r||!0===r||null==r||i.push(k(r));return n=n||e,"function"==typeof t?t(n,i):P(t,n,i,void 0,n.key)},app:function(e){var t={},n=!1,r=e.view,o=e.node,i=o&&S(o),a=e.subscriptions,l=[],c=function(e){d(this.actions[e.type],e)},s=function(e){return t!==e&&(t=e,a&&(l=g(l,h([a(t)]),d)),r&&!n&&f(m,n=!0)),t},p=e.middleware,d=(void 0===p?function(e){return e}:p)(function(e,n){return"function"==typeof e?d(e(t,n)):u(e)?"function"==typeof e[0]||u(e[0])?d(e[0],"function"==typeof e[1]?e[1](n):e[1]):(h(e.slice(1)).map(function(e){e&&e[0](d,e[1])},s(e[0])),t):s(e)}),m=function(){n=!1,o=w(o.parentNode,o,i,i=k(r(t)),c)};d(e.init)}}),z=A.h,O=A.app,L=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.some(function(t){return t===(void 0===e?"undefined":e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e)})};if(r(n,"undefined")){if(t.props)return z(e,{},[t]);r(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):r(t.View,"function")&&(n=t.View,t={})}return z(e,t,n)}},W=L("a");L("abbr"),L("address"),L("animate"),L("animateMotion"),L("animateTransform"),L("area"),L("article"),L("aside"),L("audio"),L("b"),L("base"),L("bdi"),L("bdo"),L("blockquote"),L("body"),L("br");var j=L("button");L("canvas"),L("caption");var T=L("circle");L("cite"),L("clipPath");var N=L("code");L("col"),L("colgroup"),L("data"),L("datalist"),L("dd"),L("defs"),L("del"),L("desc"),L("description"),L("details"),L("dfn"),L("dialog"),L("discard");var B=L("div");L("dl"),L("dt"),L("ellipse"),L("em"),L("embed"),L("feBlend"),L("feColorMatrix"),L("feComponentTransfer"),L("feComposite"),L("feConvolveMatrix"),L("feDiffuseLighting"),L("feDisplacementMap"),L("feDistantLight"),L("feDropShadow"),L("feFlood"),L("feFuncA"),L("feFuncB"),L("feFuncG"),L("feFuncR"),L("feGaussianBlur"),L("feImage"),L("feMerge"),L("feMergeNode"),L("feMorphology"),L("feOffset"),L("fePointLight"),L("feSpecularLighting"),L("feSpotLight"),L("feTile"),L("feTurbulence"),L("fieldset"),L("figcaption"),L("figure"),L("filter");var E=L("footer");L("foreignObject"),L("form");var I=L("g"),D=L("h1"),R=L("h2"),F=L("h3");L("h4"),L("h5"),L("h6"),L("hatch"),L("hatchpath"),L("head");var U=L("header");L("hgroup"),L("hr"),L("html"),L("i"),L("iframe"),L("image");var G=L("img"),V=L("input");L("ins"),L("kbd"),L("label"),L("legend");var q=L("li");L("line"),L("linearGradient"),L("link");var H=L("main");L("map"),L("mark"),L("marker"),L("mask"),L("mesh"),L("meshgradient"),L("meshpatch"),L("meshrow"),L("meta"),L("metadata"),L("meter"),L("mpath");var Y=L("nav");L("noscript"),L("object"),L("ol"),L("optgroup"),L("option"),L("output");var _=L("p");L("param");var J=L("path");L("pattern");var Q=L("picture");L("polygon"),L("polyline");var $=L("pre");L("progress"),L("q"),L("radialGradient"),L("rb"),L("rect"),L("rp"),L("rt"),L("rtc"),L("ruby"),L("s"),L("samp"),L("script"),L("section"),L("select"),L("set"),L("small"),L("solidcolor");var K=L("source"),X=L("span");L("stop"),L("strong"),L("style"),L("sub"),L("summary"),L("sup");var Z=L("svg");L("symbol"),L("table"),L("tbody"),L("td"),L("template"),L("text"),L("textPath"),L("textarea"),L("tfoot"),L("th"),L("thead"),L("time"),L("title"),L("tr"),L("track"),L("tspan"),L("u");var ee=L("ul");L("unknown"),L("use"),L("video"),L("view"),L("wbr");var et=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return E({class:"Footer"},[B({class:"Container"},[B({class:"Credits"},["made with a few bits of ",eo({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),t])])},en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];CHECK_PROPS(e,propTypes,"Header");var n=e.logo,r=e.menu,o=e.logotext,i=e.hash,a=e.url;if(n||r||o)return U({class:"Header"},[ei(),o&&_(o),r&&ea({url:a,hash:i,menu:r}),t])},er=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return CHECK_PROPS(e,propTypes,"LightSwitch"),Z({class:"LightSwitch icon",onclick:ed.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[J({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),J({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),J({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])},eo=function(e,t){var n=e.to,r=e.action,o=void 0===r?ed.go:r,a=e.text,l=i(e,["to","action","text"]),c=l.href,s=l.nofollow,u=l.noreferrer,f=i(l,["href","nofollow","noreferrer"]);return n=n||c||"",f.href=n,a&&t?a=[a,t]:a||(a=t||n),"/"===n[0]||"#"===n[0]?f.onclick=[o,ep.preventDefault]:(f.target="_blank",f.rel="noopener",s&&(f.rel+=" nofollow"),u&&(f.rel+=" noreferrer")),W(f,a)},ei=function(){return eo({to:"/picture/",class:"Logo"},[Z({viewBox:"0 0 512 444"},[J({d:"M512 444L256 0 0 444z",fill:"#663695"}),T({cx:"256",cy:"294",r:"130",fill:"#fff"}),T({cx:"256",cy:"281",r:"40",fill:"#663695"}),J({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),J({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])])},ea=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};CHECK_PROPS(e,propTypes,"Menu");var t=e.collapse,n=void 0===t||t,i=e.menu,a=e.hash,l=e.class,c=void 0===l?"":l,s=e.url;return c.includes("Menu")||(c="Menu ".concat(c).trim()),a&&!s.endsWith(a)&&(s+="#".concat(a)),Y({className:c},ee(i.map(function(e){return el(o(r({},e),{url:s,collapse:n}))})))},el=function(e){CHECK_PROPS(e,propTypes,"MenuItem",!0);var t=e.collapse,n=e.items,o=void 0===n?[]:n,a=e.text,l=e.url,c=i(e,["collapse","items","text","url"]),s={class:{}},u=c.to;u===l&&(s.class.active=!0);var f=[];return(!t||l.includes(u))&&o.length&&(f=ee(o.map(function(e){return el(r({url:l,collapse:t},e))}))),q(s,[u?eo(c,a):X(c,a),f])},ec=function(e){var t=e.nospy,n=void 0===t?{}:t;e.cookies;var r=n.show,o=n.title,i=void 0===o?"Privacy Notice":o,a=n.content,l=void 0===a?"This app neither saves, collects, nor shares any data about you.":a,c=n.buttonText;return r?B({class:"NoSpy"},[B({class:"Background",onclick:ed.nospy.toggle}),B({class:"Container"},[i&&F(i),l&&_(l),V({onclick:ed.nospy.toggle,value:void 0===c?"Awesome!":c,type:"button"})])]):B({class:"NoSpy"},Z({class:"icon",onclick:ed.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[I([J({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),T({cx:"192",cy:"128",r:"32"}),T({cx:"128",cy:"256",r:"32"}),T({cx:"288",cy:"384",r:"32"}),T({cx:"272",cy:"272",r:"16"}),T({cx:"400",cy:"336",r:"16"}),T({cx:"176",cy:"368",r:"16"})])]))},es=function(e,t){var n=e.page,r=e.state;return H({id:"Magic",class:r.pageClass},B({class:{Wrapper:!0}},[en(r),B({class:"Page",id:"page"},n(r)),et(r),t]))},eu=function(e){CHECK_PROPS(e,propTypes,"Picture");var t=e.ext,n=e.imgClass,r=e.width,o=e.height,i=e.alt,a=e.loading,l=e.role,c=e.avif,s=e.name,u={};return e.class?(u.class=e.class,u.class.includes("Picture")||(u.class="Picture ".concat(u.class))):u.class="Picture",s.startsWith("/")||(s="/".concat(s)),Q(u,[(void 0===c||c)&&K({type:"image/avif",srcset:"".concat(s,".avif")}),K({type:"image/webp",srcset:"".concat(s,".webp")}),G({class:void 0===n?"":n,width:r,height:o,loading:void 0===a?"lazy":a,alt:void 0===i?"":i,role:void 0===l?"presentation":l,src:"".concat(s,".").concat(void 0===t?"jpg":t)})])},ef=function(e,t){"string"==typeof e?e={content:e}:t?e=r({content:t},e):Array.isArray(e)&&(e={content:e.join("")}),CHECK_PROPS(e,propTypes,"Pre");var n=e.content,o=e.lines,i=void 0===o||o;return B({class:{Pre:!0,lines:i&&"false"!==i}},[B({class:"menu"},[j({onclick:[ed.pre.clip,function(e){return{e:e,content:n}}]},"copy")]),$(n.trim().split("\n").map(ef.Line))])};ef.Comment=function(e){return X({class:"comment"},e)},ef.Line=function(e){return N({class:"line"},ef.Words(e))},ef.Word=function(e){if(!e)return"";var t=e.includes("://"),n=e.startsWith("mailto:")||e.includes("@")&&e.includes(".");if(t||n)return eo({to:e,text:e});var r="";return("state"===e?r="state":"actions"===e?r="actions":ep.pre.keywords.includes(e)?r="keyword":ep.pre.builtins.includes(e)?r="builtin":ep.pre.booleans.includes(e)&&(r="boolean"),r)?X({class:r},e):e},ef.Words=function(e){var r,o=t(r=e.split(ep.pre.commentRegex))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||l(r)||n(),i=o[0],c=o.slice(1);if(!i.endsWith(":")&&c.length)return[ef.Words(i),ef.Comment(c.join("").split(ep.pre.wordRegex).map(ef.Word))];var s=[],u=e;return(e.replace(ep.pre.stringRegex,function(e){if(u){var t=a(u.split(e),2),n=t[0],r=t[1];n&&s.push(n.split(ep.pre.wordRegex).map(ef.Word).filter(function(e){return e})),u=r}s.push(X({class:"string"},e))}),u!==e)?(u&&s.push(u.split(ep.pre.wordRegex).map(ef.Word).filter(function(e){return e})),s):e.split(ep.pre.wordRegex).filter(function(e){return e}).map(ef.Word)};var ep={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function(e){return e.preventDefault(),e}},ed={changeTheme:function(e){return o(r({},e),{pageClass:o(r({},e.pageClass),{light:"dark"===e.theme}),theme:"dark"===e.theme?"light":"dark"})},go:function(e,t){var n=t.currentTarget.href.replace(window.location.origin,""),i=a(n.split("#"),2),l=i[0],c=i[1],s=void 0===c?"":c;if(l===e.url&&s===e.hash)return s&&(window.location.hash=s),e;var u=e.pages&&e.pages[l]&&e.pages[l].title;u&&(document.title=e.title=u),l!==e.url?s||window.scrollTo({top:0}):window.location.hash=s;var f=window.scrollY;return window.history.pushState({url:l,hash:s,scrollY:f},e.title,n),o(r({},e),{url:l,hash:s,prev:e.url})},nospy:{toggle:function(e){return e.nospy.show=!e.nospy.show,r({},e)}},pop:function(e,t){var n=window.location,i=n.pathname,a=n.hash;a=a.substring(1);var l=0;return t.state&&(i=t.state.url,a=t.state.hash,l=t.state.scrollY||0),a?window.location.hash=a:window.scroll({top:l}),o(r({},e),{url:i,hash:a})},pre:{clip:function(e,t){var n=t.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var r=document.createElement("textarea");r.id="copy",r.innerHTML=n,document.body.appendChild(r);var o=document.getElementById("copy");o.select(),document.execCommand("copy"),document.body.removeChild(o)}return e}}},eh={listenPopState:function(e,t){var n=function(n){return e(t,n)};return addEventListener("popstate",n),function(){return removeEventListener("popstate",n)}}},em={"/picture/":function(e){return[D(e.title),_(["this is the ",eo({text:"@magic-modules",to:"https://github.com/magic-modules"})," Picture component."]),_("wraps <picture> to load modern image formats with fallbacks to jpg|png|gif."),R({id:"installation"},"installation"),ef("npm install --save-exact @magic-modules/picture"),R({id:"usage"},"usage"),F("markdown:"),ef('<Picture name="image"></Picture>'),F("javascript:"),ef("\nPicture({\n  name: 'image',\n})\n  "),_("both examples above output:"),ef('\n<picture class="Picture">\n  <source type="image/avif" srcset="/image.avif">\n  <source type="image/webp" srcset="/image.webp">\n  <img loading="lazy" alt="" role="presentation" src="/image.jpg">\n</picture>\n  '),_("example:"),eu({name:"image"}),F("default values"),_("the following code snippet shows the default values"),ef("\nPicture({\n  name: 'image',\n  ext: 'jpg',\n  imgClass: '',\n  width: '',\n  height: '',\n  alt: '',\n  loading: 'lazy',\n  role: 'presentation',\n  avif: true,\n})\n"),F("png or gif files"),ef("\nPicture({\n  name: 'image',\n  ext: 'png', // alternative: 'gif',\n})\n  "),_("renders"),ef('\n<picture class="Picture">\n  <source type="image/avif" srcset="/image.avif">\n  <source type="image/webp" srcset="/image.webp">\n  <img loading="lazy" alt="" role="presentation" src="/image.jpg">\n</picture>\n  '),_("example:"),eu({name:"image",ext:"png"}),R("caveat"),_("at the moment, webp and avif files have to be generated manually. we will automate this task sometime in the future."),R({id:"source"},"source"),_(["the source for this page is in the ",eo({text:"example directory",to:"https://github.com/magic-modules/picture/tree/master/example"})," and gets built and published to github using ",eo({text:"@magic",to:"https://github.com/magic/core"})])]},"/picture/404/":function(){return B("404 - not found.")}};O({init:o(r({},{description:"@magic Picture module. .",logotext:"Quote",menu:[{text:"installation",to:"/picture/#installation"},{text:"usage",to:"/picture/#usage"},{text:"source",to:"/picture/#source"}],nospy:{show:!1},pageClass:{},pages:{"/picture/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/picture/",theme:"dark",title:"@magic-modules/picture",url:"/picture/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function(e){return[[eh.listenPopState,ed.pop]]},view:function(e){var t=em[e.url]?e.url:"/404/",n=em[t],r=e.pages&&e.pages[t];return r&&Object.keys(r).forEach(function(t){e[t]=r[t]}),e.url=t,es({page:n,state:e},[er(e),ec(e)])},node:document.getElementById("Magic")})}();