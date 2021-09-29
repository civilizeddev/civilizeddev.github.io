"use strict";(self.webpackChunkcivilizeddev_github_io=self.webpackChunkcivilizeddev_github_io||[]).push([[7],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8489:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={slug:"how-to-change-the-default-storageclass-in-k8s",title:"\uae30\ubcf8 \uc2a4\ud1a0\ub9ac\uc9c0 \ud074\ub798\uc2a4 \ubcc0\uacbd\ud558\uae30",authors:"david",tags:["kubernetes","storageclass"]},c=void 0,l={permalink:"/blog/how-to-change-the-default-storageclass-in-k8s",editUrl:"https://github.com/civilizeddev/civilizeddev.github.io/blog/2021-09-27-how-to-change-the-default-storageclass-in-k8s.md",source:"@site/blog/2021-09-27-how-to-change-the-default-storageclass-in-k8s.md",title:"\uae30\ubcf8 \uc2a4\ud1a0\ub9ac\uc9c0 \ud074\ub798\uc2a4 \ubcc0\uacbd\ud558\uae30",description:"cka",date:"2021-09-27T00:00:00.000Z",formattedDate:"2021\ub144 9\uc6d4 27\uc77c",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"storageclass",permalink:"/blog/tags/storageclass"}],readingTime:5.715,truncated:!0,authors:[{name:"David Lee",title:"\uad50\uc591\uc788\ub294 \uac1c\ubc1c\uc790",url:"https://www.linkedin.com/in/civilizeddev/",imageURL:"https://github.com/civilizeddev.png",key:"david"}],prevItem:{title:"vscode-server \uc0ac\uc6a9 \uc911 extensions/git/dist/askpass.sh: No such file or directory \uc624\ub958",permalink:"/blog/how-to-fix-askpass-no-such-file-or-directory-when-using-vscode-server"},nextItem:{title:"\ud504\ub9ac\ub79c\uc11c\uc640 \uc720\ud29c\ubc84\ub97c \uc704\ud55c [\uae30\ucd08 \uc138\uae08 \uac00\uc774\ub4dc]",permalink:"/blog/00bf45de-b124-465b-93e9-bfb1451773a6"}},p={authorsImageUrls:[void 0]},d=[{value:"\uac1c\ub150",id:"\uac1c\ub150",children:[{value:"\uc2a4\ud1a0\ub9ac\uc9c0 \ud074\ub798\uc2a4",id:"\uc2a4\ud1a0\ub9ac\uc9c0-\ud074\ub798\uc2a4",children:[]}]}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.credly.com/badges/116c17f9-92c0-4116-95e8-e6eff4f980fe"},(0,o.kt)("img",{parentName:"a",src:"https://images.credly.com/size/220x220/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",alt:"cka"}))),(0,o.kt)("h2",{id:"\uac1c\ub150"},"\uac1c\ub150"),(0,o.kt)("h3",{id:"\uc2a4\ud1a0\ub9ac\uc9c0-\ud074\ub798\uc2a4"},"\uc2a4\ud1a0\ub9ac\uc9c0 \ud074\ub798\uc2a4"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/storage/storage-classes/"},"\uc2a4\ud1a0\ub9ac\uc9c0 \ud074\ub798\uc2a4(storagesclass, sc)"),"\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uc6cc\ud06c\ub85c\ub4dc\uc5d0 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/storage/persistent-volumes/"},"\ud37c\uc2dc\uc2a4\ud134\uc2a4 \ubcfc\ub968(persistencevolume, pv)"),"\uc744 \uacf5\uae09\ud574\uc8fc\ub294 \ubc29\ubc95\uc744 \uac00\ub9ac\ud0a4\ub294 \ub9ac\uc18c\uc2a4\uc785\ub2c8\ub2e4."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\uc608\ub97c \ub4e4\uba74, AWS\uc5d0\uc11c EKS(\ucfe0\ubc84\ub124\ud2f0\uc2a4)\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 AWS EBS\ub97c \ubcfc\ub968 \uacf5\uae09\uc790\ub85c \uc0ac\uc6a9\ud558\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/storage-classes.html"},(0,o.kt)("inlineCode",{parentName:"a"},"gp2")),"\uac00 \uae30\ubcf8 \uc2a4\ud1a0\ub9ac\uc9c0 \ud074\ub798\uc2a4\ub85c \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/workloads/controllers/statefulset/"},"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b(statefulset, sts)"),"\uacfc \uac19\uc740 \uc6cc\ud06c\ub85c\ub4dc\uc5d0\uc11c \ubcfc\ub968\uc744 \uc694\uccad(claim)\ud558\uba74 AWS EBS\uc758 gp2 \ud0c0\uc785 \ubcfc\ub968 \uc0dd\uc131\ud574\uc11c \ub3d9\uc801\uc73c\ub85c \uacf5\uae09\ud558\uac8c \ub429\ub2c8\ub2e4."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://kubernetes.io/ko/docs/concepts/storage/storage-classes/"},"[\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uacf5\uc2dd \ubb38\uc11c] \uc2a4\ud1a0\ub9ac\uc9c0 \ud074\ub798\uc2a4")),"\ub97c \ucc38\uc870\ud558\uc138\uc694."))))}u.isMDXComponent=!0}}]);