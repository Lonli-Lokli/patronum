"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[916],{4522:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],l={},s="combineEvents",c={unversionedId:"combine-events/readme",id:"combine-events/readme",title:"combineEvents",description:"combineEvents({ events Unit })",source:"@site/../src/combine-events/readme.md",sourceDirName:"combine-events",slug:"/combine-events/",permalink:"/methods/combine-events/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/combine-events/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"Methods",permalink:"/methods/"},next:{title:"condition",permalink:"/methods/condition/"}},m={},u=[{value:"<code>combineEvents({ events: Record&lt;key, Event&lt;T&gt;&gt;, reset?: Unit&lt;any&gt; })</code>",id:"combineevents-events-recordkey-eventt-reset-unitany-",level:2},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>combineEvents({ events: Array&lt;Event&lt;T&gt;&gt; })</code>",id:"combineevents-events-arrayeventt-",level:2},{value:"Formulae",id:"formulae-1",level:3},{value:"Example",id:"example-1",level:3}],d={toc:u};function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"combineevents"},"combineEvents"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { combineEvents } from 'patronum/combine-events';\n")),(0,o.kt)("h2",{id:"combineevents-events-recordkey-eventt-reset-unitany-"},(0,o.kt)("inlineCode",{parentName:"h2"},"combineEvents({ events: Record<key, Event<T>>, reset?: Unit<any> })")),(0,o.kt)("h3",{id:"formulae"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const target = combineEvents({\n  events: {\n    key1: event1,\n    key2: event2,\n  },\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When all events (",(0,o.kt)("inlineCode",{parentName:"li"},"event1")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"event2")," from example) is triggered, trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," with data from events mapped to ",(0,o.kt)("inlineCode",{parentName:"li"},"key1")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"key2"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"events")," \u2014 Object of events")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target")," \u2014 Event with the same shape as ",(0,o.kt)("inlineCode",{parentName:"li"},"events"),", that triggered after all ",(0,o.kt)("inlineCode",{parentName:"li"},"events")," triggered")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const first = createEvent<number>();\nconst second = createEvent<string>();\nconst third = createEvent<boolean>();\n\nconst target = combineEvents({\n  events: {\n    a: first,\n    second,\n    another: third,\n  },\n});\n\ntarget.watch((object) => {\n  console.log('first event data', object.a);\n  console.log('second event data', object.second);\n  console.log('third event data', object.another);\n});\n\nfirst(15); // nothing\nsecond('wow'); // nothing\nthird(false); // target triggered with object\n")),(0,o.kt)("h2",{id:"combineevents-events-arrayeventt-"},(0,o.kt)("inlineCode",{parentName:"h2"},"combineEvents({ events: Array<Event<T>> })")),(0,o.kt)("h3",{id:"formulae-1"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const target = combineEvents({ events: [event1, event2] });\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When all events (",(0,o.kt)("inlineCode",{parentName:"li"},"event1")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"event2")," from example) is triggered, trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," with array from events with the same order as events")),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const first = createEvent<number>();\nconst second = createEvent<string>();\nconst third = createEvent<boolean>();\n\nconst target = combineEvents({ events: [first, second, third] });\n\ntarget.watch((list) => {\n  console.log('first event data', list[0]);\n  console.log('second event data', list[1]);\n  console.log('third event data', list[2]);\n});\n\nfirst(15); // nothing\nsecond('wow'); // nothing\nthird(false); // target triggered with array\n")))}v.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),v=a,p=d["".concat(s,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(p,i(i({ref:t},m),{},{components:n})):r.createElement(p,i({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);