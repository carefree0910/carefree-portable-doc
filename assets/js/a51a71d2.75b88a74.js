"use strict";(self.webpackChunkcarefree_portable_doc=self.webpackChunkcarefree_portable_doc||[]).push([[684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6873:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{type:t,defaultValue:n,required:r,appendix:l}=e;const o=a.createElement(a.Fragment,null,l&&a.createElement(a.Fragment,null," ","- ",a.createElement("code",null,l)));return a.createElement("p",null,"[ ",a.createElement("strong",null,t),r?a.createElement(a.Fragment,null,a.createElement("em",null,", required"),o):n?a.createElement(a.Fragment,null,a.createElement("em",null,", default"),": ",a.createElement("code",null,n),o):""," ","]")}},114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(6873);const o={id:"dataclasses",title:"Dataclasses"},i=void 0,s={unversionedId:"api-reference/dataclasses",id:"api-reference/dataclasses",title:"Dataclasses",description:"* Configurations",source:"@site/docs/api-reference/dataclasses.md",sourceDirName:"api-reference",slug:"/api-reference/dataclasses",permalink:"/carefree-portable-doc/docs/api-reference/dataclasses",draft:!1,tags:[],version:"current",lastUpdatedAt:1704246143,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{id:"dataclasses",title:"Dataclasses"},sidebar:"docs",previous:{title:"Config",permalink:"/carefree-portable-doc/docs/api-reference/config"},next:{title:"Design Philosophy",permalink:"/carefree-portable-doc/docs/reference/design-philosophy"}},d={},p=[{value:"<code>PyRequirement</code>",id:"pyrequirement",level:2},{value:"<code>git_url</code>",id:"git_url",level:3},{value:"<code>package_name</code>",id:"package_name",level:3},{value:"<code>install_command</code>",id:"install_command",level:3},{value:"<code>requirement_file</code>",id:"requirement_file",level:3},{value:"<code>Asset</code>",id:"asset",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>path</code>",id:"path",level:3},{value:"<code>git_url</code>",id:"git_url-1",level:3},{value:"<code>ignores</code>",id:"ignores",level:3},{value:"<code>flatten</code>",id:"flatten",level:3},{value:"<code>dst</code>",id:"dst",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"User Guide",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-guides/configurations"},"Configurations")))),(0,r.kt)("p",null,"There are some dataclasses that serve as configurations in ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f."),(0,r.kt)("h2",{id:"pyrequirement"},(0,r.kt)("inlineCode",{parentName:"h2"},"PyRequirement")),(0,r.kt)("p",null,"Represents a Python requirement for a package or module."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Only one of the four attributes should be specified.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfport/config.py"',title:'"cfport/config.py"'},"@dataclass\nclass PyRequirement:\n    git_url: Optional[str] = None\n    package_name: Optional[str] = None\n    install_command: Optional[str] = None\n    requirement_file: Optional[str] = None\n")),(0,r.kt)("h3",{id:"git_url"},(0,r.kt)("inlineCode",{parentName:"h3"},"git_url")),(0,r.kt)(l.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The URL of the Git repository for the requirement."),(0,r.kt)("h3",{id:"package_name"},(0,r.kt)("inlineCode",{parentName:"h3"},"package_name")),(0,r.kt)(l.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The name of the package for the requirement."),(0,r.kt)("h3",{id:"install_command"},(0,r.kt)("inlineCode",{parentName:"h3"},"install_command")),(0,r.kt)(l.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The custom installation command for the requirement."),(0,r.kt)("h3",{id:"requirement_file"},(0,r.kt)("inlineCode",{parentName:"h3"},"requirement_file")),(0,r.kt)(l.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The path to the requirement file."),(0,r.kt)("h2",{id:"asset"},(0,r.kt)("inlineCode",{parentName:"h2"},"Asset")),(0,r.kt)("p",null,"Represents an asset with optional attributes such as name, URL, path, Git URL, ignores, flatten, and destination."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Only one of ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"git_url")," should be specified.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfport/config.py"',title:'"cfport/config.py"'},"@dataclass\nclass Asset:\n    name: Optional[str] = None\n    url: Optional[str] = None\n    path: Optional[str] = None\n    git_url: Optional[str] = None\n    ignores: Optional[List[str]] = None\n    flatten: bool = False\n    dst: Optional[str] = None\n")),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)(l.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The name of the asset."),(0,r.kt)("h3",{id:"url"},(0,r.kt)("inlineCode",{parentName:"h3"},"url")),(0,r.kt)(l.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The URL of the asset."),(0,r.kt)("h3",{id:"path"},(0,r.kt)("inlineCode",{parentName:"h3"},"path")),(0,r.kt)(l.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The local path of the asset."),(0,r.kt)("h3",{id:"git_url-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"git_url")),(0,r.kt)(l.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The Git URL of the asset."),(0,r.kt)("h3",{id:"ignores"},(0,r.kt)("inlineCode",{parentName:"h3"},"ignores")),(0,r.kt)(l.Z,{type:"List[str]",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The list of files or directories to ignore during asset fetching."),(0,r.kt)("h3",{id:"flatten"},(0,r.kt)("inlineCode",{parentName:"h3"},"flatten")),(0,r.kt)(l.Z,{type:"bool",defaultValue:"False",mdxType:"Badget"}),(0,r.kt)("p",null,"Indicates whether to flatten the asset directory structure during copying."),(0,r.kt)("h3",{id:"dst"},(0,r.kt)("inlineCode",{parentName:"h3"},"dst")),(0,r.kt)(l.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"The destination path of the asset."))}m.isMDXComponent=!0}}]);