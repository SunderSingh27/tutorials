"use strict";(self.webpackChunkfour=self.webpackChunkfour||[]).push([[6504],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4627:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={title:"Module 1 - Introduction"},s=void 0,c={unversionedId:"getting_started/intro_data_science/module1",id:"getting_started/intro_data_science/module1",title:"Module 1 - Introduction",description:"This is an introductory module that will familiarize you to some of the data science terms.",source:"@site/docs/getting_started/intro_data_science/01-module1.mdx",sourceDirName:"getting_started/intro_data_science",slug:"/getting_started/intro_data_science/module1",permalink:"/getting_started/intro_data_science/module1",editUrl:"https://github.com/The-Programming-Foundation/tutorials/docs/getting_started/intro_data_science/01-module1.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Module 1 - Introduction"},sidebar:"tutorialSidebar",previous:{title:"Data Science",permalink:"/getting_started/intro_data_science/"},next:{title:"Module 2 - Process",permalink:"/getting_started/intro_data_science/module2"}},d=[{value:"Dataset",id:"dataset",children:[],level:2},{value:"Sample Data",id:"sample-data",children:[],level:2},{value:"Variables",id:"variables",children:[],level:2},{value:"Types of variables",id:"types-of-variables",children:[],level:2},{value:"Descriptive data",id:"descriptive-data",children:[],level:2}],p={toc:d};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is an introductory module that will familiarize you to some of the data science terms."),(0,r.kt)("h2",{id:"dataset"},"Dataset"),(0,r.kt)("p",null,"A dataset is a table/spreadsheet document with historical information. For example, if you want to understand details about the weather: the dataset will include the historical information about the weather in the past few years. Precipitation, Humidity, Temperature, etc. Below is a sample snapshot of the dataset:"),(0,r.kt)("h2",{id:"sample-data"},"Sample Data"),(0,r.kt)("p",null,"Some definitions are based on the following snapshot. You can spend some time looking at the screenshot before moving forward."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"workbook",src:a(894).Z,width:"1395",height:"580"})),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"A variable is like a container. Values can be assigned to them. Precipitation, Humidity, temperature etc are variables here in this above example."),(0,r.kt)("h2",{id:"types-of-variables"},"Types of variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Independent variable:")," Independent variables are not influenced by any factors and impact the outcome variable. Here the outcome variable is \u2018chances of rain\u2019. Temperature, Humidity, sunrise, sunset times are independent variables."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Another name for Independent variable is ",(0,r.kt)("b",null,"Predictor variable"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependent variable:")," Dependent variables are influenced or dependent on the independent variable. For example \u2013 the chance of rain depends on the temperature, humidity etc. Depending on the temperature, the chances of rain may increase or decrease."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Another name for Dependent variable is ",(0,r.kt)("b",null,"Output variable"),". Mainly because the resulting variable value varies depending on the independent variable.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Continuous variable:")," Any variable with numerical value is considered as continuous. Temperature, humidity, and chances of rain are considered continuous variables.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Categorical variable:")," Any variable with non-numerical value is considered as categorical. Weather is considered a categorical variable."))),(0,r.kt)("h2",{id:"descriptive-data"},"Descriptive data"),(0,r.kt)("p",null,"Summarize the data or describe the data in a meaningful way to provide insights about the dataset. The example image describes the data overall. Below are some of the key insights that can be provided to describe the data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Highest and lowest temperature"),(0,r.kt)("li",{parentName:"ul"},"Did increase in the temperature lower the chances of rain?"),(0,r.kt)("li",{parentName:"ul"},"Effects of humidity on rain"),(0,r.kt)("li",{parentName:"ul"},"Weather Vs. chances of rain")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The visual story telling is the best way to understand data. We will learn more about the visualization later in the series."))),(0,r.kt)("p",null,"This is the end of Module 1. We will explore more into each of these terms in next lessons."))}u.isMDXComponent=!0},894:function(e,t,a){t.Z=a.p+"assets/images/intro-617ea68a5c6366389f4f917a537166d8.png"}}]);