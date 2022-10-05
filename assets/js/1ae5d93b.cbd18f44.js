"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[900],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(2081),a=(r(9496),r(9613));const o={},l="equals",i={unversionedId:"equals/readme",id:"equals/readme",title:"equals",description:"patronum 1.11.0",source:"@site/../src/equals/readme.md",sourceDirName:"equals",slug:"/equals/",permalink:"/methods/equals/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/equals/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"empty (experimental)",permalink:"/methods/empty/"},next:{title:"every",permalink:"/methods/every/"}},s={},u=[{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Composition",id:"composition",level:3},{value:"Alternative",id:"alternative",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"equals"},"equals"),(0,a.kt)("admonition",{title:"since",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"patronum 1.11.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { equals } from 'patronum';\n// or\nimport { equals } from 'patronum/equals';\n")),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The method allows to compare store value with another value wrote as literal or contained in another store."),(0,a.kt)("h3",{id:"formulae"},"Formulae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"$isEquals = equals(first, second);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$isEquals")," will be store with ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," if value in ",(0,a.kt)("inlineCode",{parentName:"li"},"first")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"second")," is equals by comparing them with ",(0,a.kt)("inlineCode",{parentName:"li"},"==="))),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"first: Store<T> | T")," \u2014 A value or the store to compare with ",(0,a.kt)("inlineCode",{parentName:"li"},"second")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"second: Store<T> | T")," \u2014 A value or the store to be compared with ",(0,a.kt)("inlineCode",{parentName:"li"},"first"))),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$isEquals: Store<boolean>")," \u2014 The store contains ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," if values is equals")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const $first = createStore('foo bar');\nconst $isEquals = equals($first, 'foo bar');\n\nconsole.assert(true === $isEquals.getState());\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://share.effector.dev/UtAWVd9r"},"Try it")),(0,a.kt)("h3",{id:"composition"},"Composition"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"equals")," operator can be composed with any other method of patronum:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const $account = createStore<Account | null>(null);\nconst $authorized = not(equals($account, null));\n// $authorized contains `true` only when $account contains not `null`\n")),(0,a.kt)("h3",{id:"alternative"},"Alternative"),(0,a.kt)("p",null,"Compare to literal value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'effector';\nconst $first = createStore('foo bar');\nconst $isEquals = $first.map((first) => first === 'foo bar');\n\nconsole.assert(true === $isEquals.getState());\n")),(0,a.kt)("p",null,"Compare to another store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore, combine } from 'effector';\nconst $first = createStore('foo bar');\nconst $second = createStore('foo bar');\nconst $isEquals = combine($first, $second, (first, second) => first === second);\n\nconsole.assert(true === $isEquals.getState());\n")))}p.isMDXComponent=!0}}]);