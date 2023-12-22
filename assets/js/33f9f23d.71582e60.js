"use strict";(self.webpackChunkcarefree_portable_doc=self.webpackChunkcarefree_portable_doc||[]).push([[288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));n(2389);const i={id:"contributing",title:"Contributing"},a=void 0,l={unversionedId:"contributing-guides/contributing",id:"contributing-guides/contributing",title:"Contributing",description:"Contributions are truly welcomed! Here are some good (common) ways to get started:",source:"@site/docs/contributing-guides/contributing.md",sourceDirName:"contributing-guides",slug:"/contributing-guides/contributing",permalink:"/carefree-portable-doc/docs/contributing-guides/contributing",draft:!1,tags:[],version:"current",lastUpdatedAt:1703239742,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"docs",previous:{title:"Configurations",permalink:"/carefree-portable-doc/docs/user-guides/configurations"},next:{title:"Code of Conduct",permalink:"/carefree-portable-doc/docs/contributing-guides/code-of-conduct"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"<code>JSON</code> Developers",id:"json-developers",level:2},{value:"<code>Python</code> Developers",id:"python-developers",level:2},{value:"Contribute Default <code>Block</code>",id:"contribute-default-block",level:3},{value:"Contribute Specific <code>Block</code>",id:"contribute-specific-block",level:3},{value:"Style Guide",id:"style-guide",level:3},{value:"Enthusiasts",id:"enthusiasts",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contributions are truly welcomed! Here are some good (common) ways to get started:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GitHub Discussions"),": Currently the best way to chat around."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GitHub Issues"),": Bugs! Fixes! PRs!.")),(0,r.kt)("p",null,"Apart from these, if you want to dive deeper into this project, you can also check out the following sections."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"It might be necessary to install ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f from source for development purposes. You can do this by cloning the repository and running ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install -e .")," in the root directory of the repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/carefree0910/carefree-portable.git\ncd carefree-portable\npip install -e .\n")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Well, in fact the followings are not actually 'prerequisites', but knowing them will help you understand the system better and improve your contribution experience:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/terminology"},"Terminology"),"."),(0,r.kt)("li",{parentName:"ol"},"The overall ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/design-philosophy"},"Design Philosophy"),".")),(0,r.kt)("h2",{id:"json-developers"},(0,r.kt)("inlineCode",{parentName:"h2"},"JSON")," Developers"),(0,r.kt)("p",null,"It might sound weird - but ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f will hold more ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," files than code files by design, since packaging is more of an asset-heavy task, instead of a logic-heavy task."),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/jsons"},"JSONs")," documentation to see how to add / edit these ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," files to suit your needs."),(0,r.kt)("h2",{id:"python-developers"},(0,r.kt)("inlineCode",{parentName:"h2"},"Python")," Developers"),(0,r.kt)("p",null,"If you find some general packaging logics that cannot be achieved by the existing features, you can create new ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/design-philosophy#block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block")),"s to extend the system."),(0,r.kt)("p",null,"As said in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/design-philosophy#block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))," documentation, there are two kinds of ",(0,r.kt)("inlineCode",{parentName:"p"},"Block"),"s to be created, and their contributing guides will be discussed in the following sections."),(0,r.kt)("h3",{id:"contribute-default-block"},"Contribute Default ",(0,r.kt)("inlineCode",{parentName:"h3"},"Block")),(0,r.kt)("p",null,"There are three steps to contribute your own Default ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/design-philosophy#block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block")),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a file in the ",(0,r.kt)("inlineCode",{parentName:"li"},"cfport/executer/blocks/third_party")," directory, let's say ",(0,r.kt)("inlineCode",{parentName:"li"},"my_fancy_block.py"),"."),(0,r.kt)("li",{parentName:"ol"},"Implement your ",(0,r.kt)("inlineCode",{parentName:"li"},"Block")," (let's say, ",(0,r.kt)("inlineCode",{parentName:"li"},"MyFancyBlock"),"), don't forget to register it with ",(0,r.kt)("inlineCode",{parentName:"li"},'@IExecuteBlock.register("...")')," and with a unique name."),(0,r.kt)("li",{parentName:"ol"},"Expose your ",(0,r.kt)("inlineCode",{parentName:"li"},"Block")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"cfport/executer/blocks/third_party/__init__.py")," file with ",(0,r.kt)("inlineCode",{parentName:"li"},"from .my_fancy_block import MyFancyBlock"),"."),(0,r.kt)("li",{parentName:"ol"},"Add an instance of your ",(0,r.kt)("inlineCode",{parentName:"li"},"Block")," to the suitable position of the ",(0,r.kt)("inlineCode",{parentName:"li"},"get_default_blocks")," function in the ",(0,r.kt)("inlineCode",{parentName:"li"},"cfport\\executer\\__init__.py")," file.")),(0,r.kt)("h3",{id:"contribute-specific-block"},"Contribute Specific ",(0,r.kt)("inlineCode",{parentName:"h3"},"Block")),(0,r.kt)("p",null,"This is simple - just create a folder of the usage of your ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/design-philosophy#block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"examples")," directory, and add a ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," file to explain what's going on."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-portable/blob/main/examples/sd_webui"},"Stable Diffusion Web UI")," example for a reference!")),(0,r.kt)("h3",{id:"style-guide"},"Style Guide"),(0,r.kt)("p",null,"If you are still interested: ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f adopted ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/psf/black"},(0,r.kt)("inlineCode",{parentName:"a"},"black"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/python/mypy"},(0,r.kt)("inlineCode",{parentName:"a"},"mypy"))," to stylize its codes, so you may need to check the format, coding style and type hint with them before your codes could actually be merged."),(0,r.kt)("h2",{id:"enthusiasts"},"Enthusiasts"),(0,r.kt)("p",null,"Although currently ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f only supports packaging python projects, it is designed to be language-agnostic - it has the full potential to support other languages. By utilizing the existing toolchain, one should be able to easily create a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/design-philosophy#block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))," for other languages!"))}d.isMDXComponent=!0}}]);