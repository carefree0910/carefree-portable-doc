"use strict";(self.webpackChunkcarefree_portable_doc=self.webpackChunkcarefree_portable_doc||[]).push([[924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,u=d["".concat(p,".").concat(h)]||d[h]||f[h]||i;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={id:"design-philosophy",title:"Design Philosophy"},r=void 0,l={unversionedId:"reference/design-philosophy",id:"reference/design-philosophy",title:"Design Philosophy",description:"carefree-portable \ud83d\udce6\ufe0f want's to achieve the following goals:",source:"@site/docs/reference/design-philosophy.md",sourceDirName:"reference",slug:"/reference/design-philosophy",permalink:"/carefree-portable-doc/docs/reference/design-philosophy",draft:!1,tags:[],version:"current",lastUpdatedAt:1703063726,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{id:"design-philosophy",title:"Design Philosophy"},sidebar:"docs",previous:{title:"Dataclasses",permalink:"/carefree-portable-doc/docs/api-reference/dataclasses"},next:{title:"Terminology",permalink:"/carefree-portable-doc/docs/reference/terminology"}},p={},c=[{value:"<code>Block</code>",id:"block",level:2},{value:"Default <code>Block</code>",id:"default-block",level:3},{value:"Specific <code>Block</code>",id:"specific-block",level:3}],s={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f want's to achieve the following goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Serializable"),": Everything should be able to configure and run with a single ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON")," file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extensible"),": The packaging process should be streamlined, and one can easily add new ",(0,o.kt)("a",{parentName:"li",href:"#block"},(0,o.kt)("inlineCode",{parentName:"a"},"Block"))," to the system.")),(0,o.kt)("p",null,"Here's the pseudo code of the packaging process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"config = json.load(...)\nblocks = [Block(), ...]\nfor block in blocks:\n   block.build(config)\n")),(0,o.kt)("p",null,"And that's it! Since packaging is more of an asset-heavy task instead of a logic-heavy task, these codes should be enough to handle most of the cases."),(0,o.kt)("p",null,"Here are some pre-defined default blocks, maybe they can illustrate the style of the ",(0,o.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f system to some extent (source codes could be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-portable/tree/main/cfport/executer/blocks"},"here"),"):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PrepareBlock"),": prepare the workspace, ask user whether to overwrite existing one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PreparePythonBlock"),": the downloaded embeddalbe python package cannot be used directly, and this block is to handle the hijack processes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DownloadBlock")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"FetchAssetsBlock"),": download assets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"InstallPythonRequirementsBlock"),": install python requirements."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetPythonLaunchScriptBlock"),": set the python launch script, so users can launch the portable package with a single command / with one click.")),(0,o.kt)("h2",{id:"block"},(0,o.kt)("inlineCode",{parentName:"h2"},"Block")),(0,o.kt)("admonition",{title:"API Reference",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/config"},"Config")))),(0,o.kt)("p",null,"Every ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," should inherit from the ",(0,o.kt)("inlineCode",{parentName:"p"},"IExecuteBlock"),", and only needs to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from cfport import *\n\n@IExecuteBlock.register("my_fancy_block")\nclass MyFancyBlock(IExecuteBlock):\n    def build(self, config: IConfig) -> None:\n        ...\n')),(0,o.kt)("p",null,"And there are two scenarios where you may want to create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Block"),", which will be discussed in the following sections."),(0,o.kt)("h3",{id:"default-block"},"Default ",(0,o.kt)("inlineCode",{parentName:"h3"},"Block")),(0,o.kt)("p",null,"These ",(0,o.kt)("inlineCode",{parentName:"p"},"Block"),"s will be deeply integrated into the ",(0,o.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f system, and will be used by default. They often require the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/config"},(0,o.kt)("inlineCode",{parentName:"a"},"IConfig"))," to be modified in order to control their behaviors, and should often satisfy the following constraints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Should be general enough to be used in many cases."),(0,o.kt)("li",{parentName:"ul"},"Should be able to fully configure with JSON settings."),(0,o.kt)("li",{parentName:"ul"},"Should have as less side effects as possible.")),(0,o.kt)("p",null,"For example, when I'm working on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-portable/tree/main/examples/sd_playground_v2"},"Stable Diffusion - Playground v2")," example, I find that the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.py")," from HuggingFace Spaces cannot be used directly, because they often use ",(0,o.kt)("inlineCode",{parentName:"p"},"import spaces")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"@spaces")," in the codes, which require the HF's special environment to work properly. So I have to implement a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," to make things work, and here's what I've done:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"huggingface_space_app_file")," field in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/config"},(0,o.kt)("inlineCode",{parentName:"a"},"IConfig")),"."),(0,o.kt)("li",{parentName:"ul"},"Implement a ",(0,o.kt)("inlineCode",{parentName:"li"},"HijackHFSpaceAppBlock")," to hijack the ",(0,o.kt)("inlineCode",{parentName:"li"},"app.py")," file, if it is specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"huggingface_space_app_file")," field.")),(0,o.kt)("p",null,"Here are the pseudo codes of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Block"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfport/executer/blocks/hijack.py"',title:'"cfport/executer/blocks/hijack.py"'},'import_spaces = "import spaces"\ndecorate_spaces = "@spaces"\n\ndef hijack_hf_space_app(line: str) -> str:\n    if line.startswith(import_spaces):\n        # remove the import\n        return line[len(import_spaces) :]\n    if line.startswith(decorate_spaces):\n        # comment out the decorator\n        return f"# {line}"\n    return line\n\n@IExecuteBlock.register("hijack_hf_space_app")\nclass HijackHFSpaceAppBlock(IExecuteBlock):\n    def build(self, config: IConfig) -> None:\n        hf_space_app = config.huggingface_space_app_file\n        # do nothing if `huggingface_space_app_file` is not specified\n        if hf_space_app is None:\n            return\n        workspace = Path(config.workspace)\n        log(f"hijacking huggingface space app file \'{hf_space_app}\'")\n        hijack_file(workspace / hf_space_app, hijack_hf_space_app)\n')),(0,o.kt)("p",null,"As you can see, this ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," will only be executed when the ",(0,o.kt)("inlineCode",{parentName:"p"},"huggingface_space_app_file")," field is specified, and it will only hijack the specified file. In this case, we solve a general problem (create portable version of HF Spaces) with a JSON configurable ",(0,o.kt)("inlineCode",{parentName:"p"},"Block"),", and it has no side effects on other parts of the system."),(0,o.kt)("h3",{id:"specific-block"},"Specific ",(0,o.kt)("inlineCode",{parentName:"h3"},"Block")),(0,o.kt)("p",null,"These ",(0,o.kt)("inlineCode",{parentName:"p"},"Block"),"s are often used to solve specific problems, and they are supposed to be used in a specific context. They should not touch the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/config"},(0,o.kt)("inlineCode",{parentName:"a"},"IConfig")),", and often only contain some post-processing business logic."),(0,o.kt)("p",null,"For example, when I'm working on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-portable/blob/main/examples/sd_webui"},"Stable Diffusion Web UI")," example, I found that although A1111 has done most of the works, some small hijacks still need to be made to run it 'out-of-the-box'. So I created a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," to hijack the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.bat")," files, and everything can work 'end-to-end' now."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-portable/blob/main/examples/sd_webui/run.py"},"source codes")," if you are interested.")))}f.isMDXComponent=!0}}]);