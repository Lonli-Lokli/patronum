"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[151],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var r=n(2081),i=(n(9496),n(9613));const a={},l="interval",o={unversionedId:"interval/readme",id:"interval/readme",title:"interval",description:"patronum 1.7.0",source:"@site/../src/interval/readme.md",sourceDirName:"interval",slug:"/interval/",permalink:"/methods/interval/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/interval/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"inFlight",permalink:"/methods/in-flight/"},next:{title:"not",permalink:"/methods/not/"}},p={},m=[{value:"<code>interval({ timeout, start, stop })</code>",id:"interval-timeout-start-stop-",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interval"},"interval"),(0,i.kt)("admonition",{title:"since",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"patronum 1.7.0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { interval } from 'patronum';\n// or\nimport { interval } from 'patronum/interval';\n")),(0,i.kt)("h2",{id:"interval-timeout-start-stop-"},(0,i.kt)("inlineCode",{parentName:"h2"},"interval({ timeout, start, stop })")),(0,i.kt)("h3",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Creates a dynamic interval with events to start, stop interval, and handle tick."),(0,i.kt)("h3",{id:"formulae"},"Formulae"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { tick, isRunning } = interval({\n  timeout,\n  start,\n  stop,\n  leading,\n  trailing,\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," is triggered, ",(0,i.kt)("inlineCode",{parentName:"li"},"tick")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"triggered")," each ",(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," ms"),(0,i.kt)("li",{parentName:"ul"},"Till ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," is triggered, until ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," is triggered, ",(0,i.kt)("inlineCode",{parentName:"li"},"isRunning")," will\nbe ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"After ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," is triggered ",(0,i.kt)("inlineCode",{parentName:"li"},"tick")," won't be triggered, until ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," is run\nagain")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(number | Store<number>)")," - timeout for each ",(0,i.kt)("inlineCode",{parentName:"li"},"tick")," run"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"start")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Event<any>)")," - start triggering ",(0,i.kt)("inlineCode",{parentName:"li"},"tick"),". Double trigger\nwithout ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," call, do nothing."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"stop")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Event<any>)")," - stop triggering ",(0,i.kt)("inlineCode",{parentName:"li"},"tick"),". Double trigger\nwithout ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," call between them, do nothing."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"leading")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(boolean)")," - Allows running ",(0,i.kt)("inlineCode",{parentName:"li"},"tick")," when ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," is triggered."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"trailing")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(boolean)")," - Allows running ",(0,i.kt)("inlineCode",{parentName:"li"},"tick")," when ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," is triggered, it\nwill be final call of ",(0,i.kt)("inlineCode",{parentName:"li"},"tick"),".")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("em",{parentName:"li"},"object")," of event ",(0,i.kt)("inlineCode",{parentName:"li"},"tick")," and store ",(0,i.kt)("inlineCode",{parentName:"li"},"isRunning"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tick")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Event<void)")," - the event is run on each ",(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," ms after ",(0,i.kt)("inlineCode",{parentName:"li"},"start"),"\ntrigger until ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," trigger"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isRunning")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," - the store contains ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," until ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," is\ntriggered, next until ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," triggered the store will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore, createEvent } from 'effector';\nimport { interval } from 'patronum';\n\nconst startCounter = createEvent();\nconst stopCounter = createEvent();\nconst $counter = createStore(0);\n\nconst { tick } = interval({\n  timeout: 500,\n  start: startCounter,\n  stop: stopCounter,\n});\n\n$counter.on(tick, (number) => number + 1);\n$counter.watch((value) => console.log('COUNTER', value));\n\nstartCounter();\n\nsetTimeout(() => stopCounter(), 5000);\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://share.effector.dev/EOVzc3df"},"Try it")))}s.isMDXComponent=!0}}]);