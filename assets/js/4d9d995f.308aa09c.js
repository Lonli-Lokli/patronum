"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[876],{2240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),s=["components"],l={},i="reshape",u={unversionedId:"reshape/readme",id:"reshape/readme",title:"reshape",description:"result = reshape({ source, shape })",source:"@site/../src/reshape/readme.md",sourceDirName:"reshape",slug:"/reshape/",permalink:"/methods/reshape/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/reshape/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"reset",permalink:"/methods/reset/"},next:{title:"snapshot",permalink:"/methods/snapshot/"}},c={},p=[{value:"<code>result = reshape({ source, shape })</code>",id:"result--reshape-source-shape-",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Creates much stores from single string",id:"creates-much-stores-from-single-string",level:4},{value:"Destructure object",id:"destructure-object",level:4}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reshape"},"reshape"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { reshape } from 'patronum/reshape';\n")),(0,o.kt)("h2",{id:"result--reshape-source-shape-"},(0,o.kt)("inlineCode",{parentName:"h2"},"result = reshape({ source, shape })")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"This method allows to create many stores from single store at once.\nIt useful when you want to read many properties from object to different stores."),(0,o.kt)("h3",{id:"formulae"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"result = reshape({ source, shape });\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Call each function in ",(0,o.kt)("inlineCode",{parentName:"li"},"shape")," object with data from ",(0,o.kt)("inlineCode",{parentName:"li"},"source"),", and create store with the same name as key in ",(0,o.kt)("inlineCode",{parentName:"li"},"shape")),(0,o.kt)("li",{parentName:"ul"},"If function in ",(0,o.kt)("inlineCode",{parentName:"li"},"shape")," returns ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),", the same store will contain ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),", because store cannot contain ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),".")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"source")," (",(0,o.kt)("a",{parentName:"li",href:"https://effector.dev/docs/api/effector/store"},(0,o.kt)("em",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"em"},"Store"))),") \u2014 Source store, data from this unit passed to each function in ",(0,o.kt)("inlineCode",{parentName:"li"},"shape")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"shape")," (",(0,o.kt)("inlineCode",{parentName:"li"},"{ [key: string]: (payload: T) => any }"),") \u2014 Object of functions. Function receives payload of ",(0,o.kt)("inlineCode",{parentName:"li"},"source")," as single argument, should return any value.")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"result")," (",(0,o.kt)("inlineCode",{parentName:"li"},"{ [key: string]: Store<any> }"),") \u2014 Object of stores, that created with the same structure as ",(0,o.kt)("inlineCode",{parentName:"li"},"shape"),", with data from passed functions")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"creates-much-stores-from-single-string"},"Creates much stores from single string"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'effector';\nimport { reshape } from 'patronum/reshape';\n\nconst $original = createStore<string>('Example');\n\nconst result = reshape({\n  source: $original,\n  shape: {\n    length: (string) => string.length,\n    lowercase: (string) => string.toLowerCase(),\n    uppercase: (string) => string.toUpperCase(),\n  },\n});\n\n// result.length: Store<number>;\n// result.lowercase: Store<string>;\n// result.uppercase: Store<string>;\n\nresult.length.watch((length) => console.log('String length:', length));\nresult.lowercase.watch((lowercase) => console.log('lowercase:', lowercase));\n")),(0,o.kt)("h4",{id:"destructure-object"},"Destructure object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'effector';\nimport { reshape } from 'patronum/reshape';\n\nconst $user = createStore({\n  name: 'Sergey',\n  lastname: 'Sova',\n  age: 26,\n});\n\nconst { name, lastname, age } = reshape({\n  source: $user,\n  shape: {\n    name: (user) => user.name,\n    lastname: (user) => user.lastname,\n    age: ({ age }) => age,\n  },\n});\n\nname.watch((name) => console.info('name updated', name));\nlastname.watch((lastname) => console.info('lastname updated', lastname));\nage.watch((age) => console.info('age updated', age));\n\n// => name updated Sergey\n// => lastname updated Sova\n// => age updated 26\n")))}d.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);