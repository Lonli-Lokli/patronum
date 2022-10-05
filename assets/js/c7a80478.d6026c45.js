"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[169],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(2081),a=(n(9496),n(9613));const o={},s="reset",i={unversionedId:"reset/readme",id:"reset/readme",title:"reset",description:"patronum 1.7.0",source:"@site/../src/reset/readme.md",sourceDirName:"reset",slug:"/reset/",permalink:"/methods/reset/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/reset/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"pending",permalink:"/methods/pending/"},next:{title:"reshape",permalink:"/methods/reshape/"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"Example",id:"example",level:3},{value:"Alternative",id:"alternative",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reset"},"reset"),(0,a.kt)("admonition",{title:"since",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"patronum 1.7.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { reset } from 'patronum';\n// or\nimport { reset } from 'patronum/reset';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n### Motivation\n\nThe method allow to reset many stores by a single line\n\n### Formulae\n\n```ts\nreset({ clock, target });\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"clock")," is triggered, reset store/stores in ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," to the initial value.")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"clock: Unit<any> | Array<Unit<any>>")," \u2014 Any kind of units is accepted (Store, Event, Effect)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"target: Store<any> | Array<Store<any>>")," \u2014 Each of these stores will be reset to the initial values when ",(0,a.kt)("inlineCode",{parentName:"li"},"clock")," is happened.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEvent, createStore } from 'effector';\nimport { reset } from 'patronum/reset';\n\nconst pageUnmounted = createEvent();\nconst userSessionFinished = createEvent();\n\nconst $post = createStore(null);\nconst $comments = createStore([]);\nconst $draftComment = createStore('');\n\nreset({\n  clock: [pageUnmounted, userSessionFinished],\n  target: [$post, $comments, $draftComment],\n});\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://share.effector.dev/06hpVftG"},"Try it")),(0,a.kt)("h3",{id:"alternative"},"Alternative"),(0,a.kt)("p",null,"First variant is writing each reset by yourself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"$post.reset([pageUnmounted, userSessionFinished]);\n$comments.reset([pageUnmounted, userSessionFinished]);\n$draftComment.reset([pageUnmounted, userSessionFinished]);\n")),(0,a.kt)("p",null,"There has another way \u2014 use domain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createDomain, createStore } from 'effector';\nconst resetOnSomeCases = createDomain();\n\nconst $post = resetOnSomeCases.createStore(null);\nconst $comments = resetOnSomeCases.createStore([]);\nconst $draftComment = resetOnSomeCases.createStore('');\n\nresetOnSomeCases.onCreateStore((store) => {\n  store.reset([pageUnmounted, userSessionFinished]);\n});\n")))}m.isMDXComponent=!0}}]);