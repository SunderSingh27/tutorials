"use strict";(self.webpackChunkfour=self.webpackChunkfour||[]).push([[393],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),d=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,f=u["".concat(m,".").concat(p)]||u[p]||c[p]||i;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Vim"},m=void 0,d={unversionedId:"os/vim/introduction",id:"os/vim/introduction",title:"Vim",description:"Vim stands for Vi Improved. This text editor is found in UNIX based operating systems. It has many commands to create new files and edit the configuration files of an operating system.",source:"@site/docs/os/vim/introduction.md",sourceDirName:"os/vim",slug:"/os/vim/introduction",permalink:"/os/vim/introduction",editUrl:"https://github.com/The-Programming-Foundation/tutorials/docs/os/vim/introduction.md",tags:[],version:"current",frontMatter:{title:"Vim"},sidebar:"tutorialSidebar",previous:{title:"Unix Shell",permalink:"/os/unix/Shell"},next:{title:"C",permalink:"/programming/c/"}},l=[{value:"Vim modes",id:"vim-modes",children:[{value:"Command mode",id:"command-mode",children:[],level:3},{value:"Insert mode",id:"insert-mode",children:[],level:3}],level:2}],c={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vim stands for Vi Improved. This text editor is found in UNIX based operating systems. It has many commands to create new files and edit the configuration files of an operating system."),(0,i.kt)("h2",{id:"vim-modes"},"Vim modes"),(0,i.kt)("p",null,"Once you create or open a file in VIM, the editor displays a message. VIM has modes:"),(0,i.kt)("h3",{id:"command-mode"},"Command mode"),(0,i.kt)("p",null,"The file in VIM is opened in the command mode. This mode helps to address the file using insert, delete and append. This also allows us to search in the files, move or navigate in the open file. Though the command mode allows you to insert, it is opened as the reading mode. To take action on the file, you need to issue the command by typing ",(0,i.kt)("strong",{parentName:"p"},":")," and command."),(0,i.kt)("h3",{id:"insert-mode"},"Insert mode"),(0,i.kt)("p",null,"This mode is displayed as ",(0,i.kt)("strong",{parentName:"p"},"\u2014\u2014insert\u2014\u2014")," at the bottom of the VIM. This allows you to type or use arrow keys to insert and navigated in the system. You can easily move from insert mode to command mode by using ",(0,i.kt)("strong",{parentName:"p"},"[Esc]")),(0,i.kt)("p",null,"As VIM is not designed for staying on insert mode for long hours, either save while working or avoid insert mode for a long time."))}u.isMDXComponent=!0}}]);