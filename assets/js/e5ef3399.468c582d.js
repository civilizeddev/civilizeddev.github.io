"use strict";(self.webpackChunkcivilizeddev_github_io=self.webpackChunkcivilizeddev_github_io||[]).push([[980],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),v=i,u=m["".concat(l,".").concat(v)]||m[v]||d[v]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),i=n(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,i=e.block,p=e.defaultValue,c=e.values,d=e.groupId,m=e.className,v=a.Children.toArray(e.children),u=null!=c?c:v.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value,h=r(),N=h.tabGroupChoices,g=h.setTabGroupChoices,f=(0,a.useState)(k),b=f[0],w=f[1],y=[];if(null!=d){var C=N[d];null!=C&&C!==b&&u.some((function(e){return e.value===C}))&&w(C)}var j=function(e){var t=e.currentTarget,n=y.indexOf(t),a=u[n].value;w(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,i,r,o,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,s=o.innerHeight,p=o.innerWidth,n>=0&&r<=p&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,a.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},4127:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return m},toc:function(){return v},default:function(){return k}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(5064),s=n(8215),l=["components"],p={slug:"typescript-getting-started",title:"TypeScript \uc2dc\uc791\ud558\uae30",authors:"david",tags:["typescript","nodejs"]},c=void 0,d={permalink:"/blog/typescript-getting-started",source:"@site/blog/2020-04-16-typescript-getting-started.mdx",title:"TypeScript \uc2dc\uc791\ud558\uae30",description:"\uc548\ub155\ud558\uc138\uc694, \uad50\uc591\uc788\ub294 \uac1c\ubc1c\uc790 \ub370\uc774\ube44\ub4dc\uc785\ub2c8\ub2e4.",date:"2020-04-16T00:00:00.000Z",formattedDate:"2020\ub144 4\uc6d4 16\uc77c",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:6.01,truncated:!0,authors:[{name:"David Lee",title:"\uad50\uc591\uc788\ub294 \uac1c\ubc1c\uc790",url:"https://www.linkedin.com/in/civilizeddev/",imageURL:"https://github.com/civilizeddev.png",key:"david"}],prevItem:{title:"\ud504\ub9ac\ub79c\uc11c\uc640 \uc720\ud29c\ubc84\ub97c \uc704\ud55c [\uae30\ucd08 \uc138\uae08 \uac00\uc774\ub4dc]",permalink:"/blog/00bf45de-b124-465b-93e9-bfb1451773a6"}},m={authorsImageUrls:[void 0]},v=[{value:"\uc900\ube44\ubb3c",id:"\uc900\ube44\ubb3c",children:[]},{value:"\uc0ac\uc804 \uc791\uc5c5",id:"\uc0ac\uc804-\uc791\uc5c5",children:[]},{value:"\ud504\ub85c\uc81d\ud2b8 \ucd08\uae30\ud654",id:"\ud504\ub85c\uc81d\ud2b8-\ucd08\uae30\ud654",children:[]},{value:"tsconfig.json \uc124\uc815",id:"tsconfigjson-\uc124\uc815",children:[]},{value:"\ube4c\ub4dc\ud558\uae30",id:"\ube4c\ub4dc\ud558\uae30",children:[]},{value:"\uc2e4\ud589\ud558\uae30",id:"\uc2e4\ud589\ud558\uae30",children:[]},{value:"\ube4c\ub4dc\uc640 \uc2e4\ud589\uc744 \ud55c\ubc29\uc5d0 \ud558\uae30",id:"\ube4c\ub4dc\uc640-\uc2e4\ud589\uc744-\ud55c\ubc29\uc5d0-\ud558\uae30",children:[]},{value:"Watch",id:"watch",children:[]},{value:"\uc798 \ub418\ub098\uc694?",id:"\uc798-\ub418\ub098\uc694",children:[]}],u={toc:v};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694, \uad50\uc591\uc788\ub294 \uac1c\ubc1c\uc790 \ub370\uc774\ube44\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"nodejs\ub098 reactjs \uac1c\ubc1c\uc790\uac00 \uc544\ub2c8\ub354\ub77c\ub3c4, \uc694\uc998\uc5d0\ub294 \ud544\uc218 \uad50\uc591\uc73c\ub85c \uc2a4\ud06c\ub9bd\ud2b8 \uc5b8\uc5b4 \ud558\ub098\ub294 \ub2e4\ub8f0 \uc218 \uc788\uc5b4\uc57c \ud558\uc796\uc544\uc694?"),(0,r.kt)("p",null,"\uc624\ub298\uc740 TypeScript\ub97c \uc900\ube44\ud588\uc73c\ub2c8 \ud55c \ubc88 \uad6c\uacbd\ud558\uace0 \uac00\uc138\uc694."),(0,r.kt)("h2",{id:"\uc900\ube44\ubb3c"},"\uc900\ube44\ubb3c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub9e5\ubd81")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Windows\ub85c \uc124\uba85\ud558\ub824\ub2c8 \uadc0\ucc2e\uc2b5\ub2c8\ub2e4. \uadf8\ub0e5 macOS \uae30\uc900\uc73c\ub85c \uc124\uba85\ud558\uaca0\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("h2",{id:"\uc0ac\uc804-\uc791\uc5c5"},"\uc0ac\uc804 \uc791\uc5c5"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\uc774\ubbf8 \ub418\uc5b4 \uc788\uc73c\uba74 \ub2e4\uc74c\uc73c\ub85c \ub118\uc5b4\uac11\ub2c8\ub2e4."))),(0,r.kt)("h4",{id:"homebrew-\uc124\uce58"},"homebrew \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n')),(0,r.kt)("h4",{id:"nvm-\uc124\uce58"},"nvm \uc124\uce58"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NVM\uc740 \uc5ec\ub7ec \ubc84\uc804\uc758 Node\ub97c \uc124\uce58\ud574\ub193\uace0 \uc804\ud658\ud560 \uc218 \uc788\ub294 Node Version Manager\uc785\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install nvm\n")),(0,r.kt)("h4",{id:"nvm-\ud658\uacbd\ubcc0\uc218-\ucd94\uac00"},"nvm \ud658\uacbd\ubcc0\uc218 \ucd94\uac00"),(0,r.kt)(o.Z,{defaultValue:"bash",values:[{label:"bash",value:"bash"},{label:"zsh",value:"zsh"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export NVM_DIR=\"$HOME/.nvm\"' >> ~/.bashrc\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm\' >> ~/.bashrc\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion\' >> ~/.bashrc\n'))),(0,r.kt)(s.Z,{value:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export NVM_DIR=\"$HOME/.nvm\"' >> ~/.zshrc\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm\' >> ~/.zshrc\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion\' >> ~/.zshrc\n')))),(0,r.kt)("h4",{id:"nodejs-\uc124\uce58"},"node.js \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install 16\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ub2e4\ub978 \ubc84\uc804\uc774 \ud544\uc694\ud558\uba74 \ud574\ub2f9 \ubc84\uc804\uc744 \uc785\ub825\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install 14.17.6\n")))),(0,r.kt)("h4",{id:"npm-\uc5c5\uadf8\ub808\uc774\ub4dc"},"npm \uc5c5\uadf8\ub808\uc774\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g npm\n")),(0,r.kt)("h4",{id:"yarn-\uc5c5\uadf8\ub808\uc774\ub4dc"},"yarn \uc5c5\uadf8\ub808\uc774\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g yarn\n")),(0,r.kt)("h2",{id:"\ud504\ub85c\uc81d\ud2b8-\ucd08\uae30\ud654"},"\ud504\ub85c\uc81d\ud2b8 \ucd08\uae30\ud654"),(0,r.kt)("h4",{id:"\ub514\ub809\ud130\ub9ac-\uc0dd\uc131"},"\ub514\ub809\ud130\ub9ac \uc0dd\uc131"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mdkir <\ud504\ub85c\uc81d\ud2b8>\ncd <\ud504\ub85c\uc81d\ud2b8>\n")),(0,r.kt)("h4",{id:"git-\uc800\uc7a5\uc18c-\ucd08\uae30\ud654"},"git \uc800\uc7a5\uc18c \ucd08\uae30\ud654"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git init\n")),(0,r.kt)("h4",{id:"\ud504\ub85c\uc81d\ud2b8-\ucd08\uae30\ud654-1"},"\ud504\ub85c\uc81d\ud2b8 \ucd08\uae30\ud654"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn init\n")),(0,r.kt)("p",null,"\uc9c8\ubb38\uc5d0 \uc801\uc808\ud788 \ub2f5\ubcc0\ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"typescript-\uc124\uce58"},"typescript \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add typescript --dev\n")),(0,r.kt)("h4",{id:"typescript-\ucd08\uae30\ud654"},"typescript \ucd08\uae30\ud654"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn tsc --init\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"tsconfigjson-\uc124\uc815"},"tsconfig.json \uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsc --init"),"\uc744 \uc2e4\ud589\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"TypeScript \ud504\ub85c\uc81d\ud2b8\ub97c \uc5b4\ub5bb\uac8c \ube4c\ub4dc\ud560\uc9c0 \uc124\uc815\ud558\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\uac01 \uc635\uc158 \ud544\ub4dc\uc758 \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/ko/tsconfig"},"TSConfig Reference \uc18c\uac1c"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))),(0,r.kt)("p",null,"\uc800\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.prod.json"),"\ub97c \uac01\uac01 \uc120\uc5b8\ud574\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "commonjs",\n    "outDir": "./lib",\n    "rootDir": "./src",\n    "strict": true,\n    "moduleResolution": "node",\n    "esModuleInterop": true,\n    "experimentalDecorators": true,\n    "emitDecoratorMetadata": true,\n    "resolveJsonModule": true,\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.prod.json"',title:'"tsconfig.prod.json"'},'{\n  "extends": "./tsconfig.json",\n  "include": ["src/**/*.ts"],\n  "exclude": ["src/**/*.test.ts"]\n}\n')),(0,r.kt)("p",null,"\uac01\uac01 \uc5b4\ub5a4 \uc124\uc815\uc778\uc9c0 \ud55c \ubc88 \uc54c\uc544\ubcf4\uc138\uc694."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"compilerOptions.target"),"\uc740 node.js \ub7f0\ud0c0\uc784\uc758 \ubc84\uc804\uc5d0 \ub530\ub77c \uc9c0\uc815\ud569\ub2c8\ub2e4."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://kangax.github.io/compat-table/es2016plus/#node16_0"},"node.js 16.x\ub294 \ud604\uc7ac ECMA2021\uae4c\uc9c0 \uad6c\ud604\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h2",{id:"\ube4c\ub4dc\ud558\uae30"},"\ube4c\ub4dc\ud558\uae30"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"tsc")," \ucef4\ud30c\uc77c\ub7ec\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," \ud30c\uc77c\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," \ud30c\uc77c\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"d.ts")," \ud30c\uc77c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4."))),(0,r.kt)("h4",{id:"tsconfigjson-\uc0ac\uc6a9\ud574\uc11c-\ube4c\ub4dc"},"tsconfig.json \uc0ac\uc6a9\ud574\uc11c \ube4c\ub4dc"),(0,r.kt)("p",null,"\ud604\uc7ac \ub514\ub809\ud130\ub9ac\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\uc744 \uae30\ubcf8\uac12\uc73c\ub85c \uc0ac\uc6a9\ud574\uc11c \ube4c\ub4dc\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tsc --build --force\n")),(0,r.kt)("h4",{id:"\ubcc4\ub3c4\uc758-\uc124\uc815\uc744-\uc0ac\uc6a9\ud574\uc11c-\ube4c\ub4dc"},"\ubcc4\ub3c4\uc758 \uc124\uc815\uc744 \uc0ac\uc6a9\ud574\uc11c \ube4c\ub4dc"),(0,r.kt)("p",null,"\ub9cc\uc57d \ub2e4\ub978 \uc124\uc815 \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud574\uc11c \ube4c\ub4dc\ud558\ub824\uba74 \uba85\uc2dc\uc801\uc73c\ub85c \uc785\ub825\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tsc --build --force tsconfig.prod.json\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \ud30c\uc77c\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," \ud56d\ubaa9\uc5d0 \uc120\uc5b8\ud574 \ub193\uc73c\uba74 \ub2e4\uc74c\uc5d0 \uc0ac\uc6a9\ud558\uae30 \ud3b8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "build": "tsc --build --force",\n        "build:prod": "tsc --build --force tsconfig.prod.json",\n        ...\n    },\n    ...\n}\n')))),(0,r.kt)("h2",{id:"\uc2e4\ud589\ud558\uae30"},"\uc2e4\ud589\ud558\uae30"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"compilerOptions.outDir"),"\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"./lib")," \uacbd\ub85c\ub97c \uc9c0\uc815\ud588\uae30 \ub54c\ubb38\uc5d0, \ud574\ub2f9 \uacbd\ub85c\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"d.ts")," \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."))),(0,r.kt)("p",null,"\uacbd\ub85c\ub97c \uc9c0\uc815\ud558\uba74 \ud574\ub2f9 \ub514\ub809\ud130\ub9ac\uc5d0 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),"\ub97c \uba3c\uc800 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node lib/\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," \ub300\uc2e0 \ub2e4\ub978 \ud30c\uc77c\uc744 \uc2e4\ud589\ud558\ub824\uba74 \ud30c\uc77c \uc774\ub984\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ node lib/server.js\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \ud30c\uc77c\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \ud56d\ubaa9\uc744 \uc9c0\uc815\ud558\uba74 \ub2e4\uc74c\uc5d0 \uc0ac\uc6a9\ud558\uae30 \ud3b8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "main": "lib/index.js",\n    ...\n}\n')),(0,r.kt)("p",{parentName:"div"},"\uadf8\ub7ec\uba74 \uc774\ub807\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node .\n")))),(0,r.kt)("h2",{id:"\ube4c\ub4dc\uc640-\uc2e4\ud589\uc744-\ud55c\ubc29\uc5d0-\ud558\uae30"},"\ube4c\ub4dc\uc640 \uc2e4\ud589\uc744 \ud55c\ubc29\uc5d0 \ud558\uae30"),(0,r.kt)("p",null,"\uc77c\uc77c\uc774 \ube4c\ub4dc, \uc2e4\ud589 \uacfc\uc815\uc744 \uc218\ub3d9\uc73c\ub85c \ubc18\ubcf5\ud558\ub294 \uac83\uc740 \uad34\ub86d\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\uc608 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," \ud30c\uc77c\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," \ud30c\uc77c\ucc98\ub7fc \uc77d\uc5b4\uc11c \ubc14\ub85c \uc2e4\ud589\ud574\uc8fc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," \ubaa8\ub4c8\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"ts-node-\uc124\uce58"},"ts-node \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add ts-node --dev\n")),(0,r.kt)("p",null,"\uc774\uc81c \uadf8\ub0e5 \uc774\ub807\uac8c \ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node src/index.ts\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://typestrong.org/ts-node/"},"ts-node \uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694."))),(0,r.kt)("h2",{id:"watch"},"Watch"),(0,r.kt)("p",null,"\ud30c\uc77c\uc758 \uc5c5\ub370\uc774\ud2b8\ub97c \uac10\uc9c0\ud558\uc5ec \uc790\ub3d9\uc73c\ub85c \ube4c\ub4dc\ub97c \uc7ac\uc2e4\ud589\ud558\ub294 \uae30\ub2a5\uc744 watch\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"ts-node-dev\ub77c\ub294 \ubaa8\ub4c8\uc744 \uc0ac\uc6a9\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"ts-node-dev")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"node-dev")))),(0,r.kt)("h4",{id:"ts-node-dev-\uc124\uce58"},"ts-node-dev \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add ts-node-dev --dev\n")),(0,r.kt)("p",null,"\uc774\ub7f0 \uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node-dev --respawn ./src\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \ud30c\uc77c\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," \ud56d\ubaa9\uc5d0 \uc120\uc5b8\ud574 \ub193\uc73c\uba74 \ub2e4\uc74c\uc5d0 \uc0ac\uc6a9\ud558\uae30 \ud3b8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "debug": "ts-node-dev --respawn ./src",\n        ...\n    },\n    ...\n}\n')))),(0,r.kt)("h2",{id:"\uc798-\ub418\ub098\uc694"},"\uc798 \ub418\ub098\uc694?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"console.log('Hello, World!')\n")),(0,r.kt)("h4",{id:"\uc2e4\ud589-\uacb0\uacfc"},"\uc2e4\ud589 \uacb0\uacfc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn debug\n\nHello, World!\n")),(0,r.kt)("p",null,"\uadf8\ub7fc \uc55e\uc73c\ub85c \uc990\uac70\uc6b4 TypeScript \ucf54\ub529\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."))}k.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);