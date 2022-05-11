"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[585],{4086:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),l=["components"],p={},u="Installation",i={type:"mdx",permalink:"/patronum/docs/installation",source:"@site/src/pages/docs/installation.md",title:"Installation",description:"Usage",frontMatter:{}},s=[{value:"Usage",id:"usage",level:2},{value:"Tests and SSR support",id:"tests-and-ssr-support",level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add patronum\n# or\nnpm add patronum\n# or\npnpm add patronum\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Just import method from the root module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { throttle, splitMap } from 'patronum';\n")),(0,o.kt)("p",null,"Or from the personal module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { throttle } from 'patronum/throttle';\nimport { splitMap } from 'patronum/split-map';\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Except ",(0,o.kt)("inlineCode",{parentName:"p"},"patronum/debug"),". It is only available by personal module import.")),(0,o.kt)("p",null,"Be careful in the module naming:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Method export always exports as named export in camelCase"),(0,o.kt)("li",{parentName:"ul"},"Module with the operator always named in param-case")),(0,o.kt)("h2",{id:"tests-and-ssr-support"},"Tests and SSR support"),(0,o.kt)("p",null,"At the moment patronum supports only Babel."),(0,o.kt)("p",null,"Just add ",(0,o.kt)("inlineCode",{parentName:"p"},"patronum/babel-preset")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")," at the ",(0,o.kt)("inlineCode",{parentName:"p"},'"presets"')," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["patronum/babel-preset"]\n}\n')))}m.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);