"use strict";(self.webpackChunkcarefree_portable_doc=self.webpackChunkcarefree_portable_doc||[]).push([[329],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9189:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={id:"index",title:"Introduction"},i=void 0,l={unversionedId:"getting-started/index",id:"getting-started/index",title:"Introduction",description:"carefree-portable \ud83d\udce6\ufe0f aims to help you create portable (Python \ud83d\udc0d) projects of your codes / repo!",source:"@site/docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/carefree-portable-doc/docs/getting-started/",draft:!1,tags:[],version:"current",lastUpdatedAt:1704246143,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{id:"index",title:"Introduction"},sidebar:"docs",next:{title:"Examples",permalink:"/carefree-portable-doc/docs/getting-started/examples"}},p={},c=[{value:"AI PC",id:"ai-pc",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Installation",id:"installation",level:2},{value:"Usages",id:"usages",level:2},{value:"Generate Config",id:"generate-config",level:3},{value:"Packaging",id:"packaging",level:3},{value:"PyTorch",id:"pytorch",level:3},{value:"Portable <code>carefree-portable</code> \ud83d\udce6\ufe0f",id:"portable-carefree-portable-\ufe0f",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f aims to help you create portable (Python \ud83d\udc0d) projects of your codes / repo!"),(0,r.kt)("h2",{id:"ai-pc"},"AI PC"),(0,r.kt)("p",null,"AI PC is a 'new' concept that Intel proposed (see ",(0,r.kt)("a",{parentName:"p",href:"https://www.intel.com/content/www/us/en/products/docs/processors/core-ultra/ai-pc.html"},"here"),"). Since AI PC users often have zero knowledge about programming, it is important to provide them with a portable version of the AI project. This is where ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f comes in handy!"),(0,r.kt)("h2",{id:"highlights"},"Highlights"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Portable"),": The generated portable project can be used directly without any extra requirements.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, you can run a portable Python project even without Python installed!"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Extensible"),": You can easily extend the functionality of ",(0,r.kt)("inlineCode",{parentName:"li"},"carefree-portable")," \ud83d\udce6\ufe0f by editing existing configurations, or adding brand new ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/design-philosophy#block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))," / ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/jsons#presets"},(0,r.kt)("inlineCode",{parentName:"a"},"presets"))," without much effort.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carefree0910/carefree-portable/blob/main/examples/sd_webui"},"Stable Diffusion Web UI")," example on how we hijack the famous SD webui repo with a custom ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/design-philosophy#block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))," and make it portable out-of-the-box."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integrable"),": You can integrate ",(0,r.kt)("inlineCode",{parentName:"li"},"carefree-portable")," \ud83d\udce6\ufe0f with (GitHub) CI to automatically generate a portable version of your project.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Basically, you only need to create a ",(0,r.kt)("inlineCode",{parentName:"li"},"cfport.json")," file in the root directory of your project, and then run ",(0,r.kt)("inlineCode",{parentName:"li"},"cfport package")," in your CI workflow (see ",(0,r.kt)("a",{parentName:"li",href:"#usages"},"Usages")," for more details)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carefree0910/carefree-portable/blob/main/.github/workflows/package.yml"},"Here"),"'s an example of how ",(0,r.kt)("inlineCode",{parentName:"li"},"carefree-portable")," \ud83d\udce6\ufe0f packages itself into a portable version in the GitHub CI workflow.")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f requires Python 3.8 or higher."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install carefree-portable\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/carefree0910/carefree-portable.git\ncd carefree-portable\npip install -e .\n")),(0,r.kt)("h2",{id:"usages"},"Usages"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Detailed usages can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guides/cli"},"CLI")," section.")),(0,r.kt)("p",null,"Go to the root directory of your project first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd <path/to/your/project>\n")),(0,r.kt)("h3",{id:"generate-config"},"Generate Config"),(0,r.kt)("admonition",{title:"User Guides",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-guides/configurations"},"configurations")))),(0,r.kt)("p",null,"To generate a default config, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cfport config\n")),(0,r.kt)("p",null,"This command will genearte a ",(0,r.kt)("inlineCode",{parentName:"p"},"cfport.json")," file in the current directory. To make it work properly, you may need to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"python_requirements")," field, which is a list of Python packages that your project depends on."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Don't forget to add your own project to this field as well!"))),(0,r.kt)("h3",{id:"packaging"},"Packaging"),(0,r.kt)("p",null,"After generating the config, you can package your project by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cfport package\n")),(0,r.kt)("h3",{id:"pytorch"},"PyTorch"),(0,r.kt)("p",null,"Since nowadays many fancy projects are built on top of ",(0,r.kt)("inlineCode",{parentName:"p"},"pytorch"),", we provided a preset config for ",(0,r.kt)("inlineCode",{parentName:"p"},"pytorch")," projects, which can be generated by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cfport config --preset torch-2.1.0-cu118\n# or\ncfport config --preset torch-2.1.0-cpu\n")),(0,r.kt)("p",null,"This will generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"cfport.json")," with a pre-defined ",(0,r.kt)("inlineCode",{parentName:"p"},"requirement")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"python_requirements")," field."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You may notice that the pre-defined ",(0,r.kt)("inlineCode",{parentName:"p"},"requirement")," starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"$pip")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),". This is important because it can tell ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f to use the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," executable when packaging your project.")),(0,r.kt)("h2",{id:"portable-carefree-portable-\ufe0f"},"Portable ",(0,r.kt)("inlineCode",{parentName:"h2"},"carefree-portable")," \ud83d\udce6\ufe0f"),(0,r.kt)("p",null,"You may also download the ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable-*.zip")," from the assets of the latest ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-portable/releases"},"Releases"),". The zip files contain the portable versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f that can be used directly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On Linux / MacOS, you still need to have Python installed (to activate the ",(0,r.kt)("inlineCode",{parentName:"li"},"venv"),"), but no extra packages are required."),(0,r.kt)("li",{parentName:"ul"},"On Windows, you can even run it without Python installed!")),(0,r.kt)("p",null,"If you are using this portable version, just make sure to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd")," into the unzipped ",(0,r.kt)("inlineCode",{parentName:"li"},"carefree-portable-*")," folder."),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"cfport")," with ",(0,r.kt)("inlineCode",{parentName:"li"},".\\run.bat")," (Windows) / ",(0,r.kt)("inlineCode",{parentName:"li"},"bash run.sh")," (Linux / MacOS) in the following commands."),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"python")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"<path\\to\\portable\\python>")," in other python commands. The portable ",(0,r.kt)("inlineCode",{parentName:"li"},"python")," locates at:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"li"},".\\carefree-portable-*\\python_embeddables\\python-3.10.11-embed-amd64\\python"),"."),(0,r.kt)("li",{parentName:"ul"},"Linux / MacOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"./carefree-portable-*/python_venv/bin/python3"),".")))),(0,r.kt)("p",null,"Here's a step by step guide on how to use the portable ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-portable")," \ud83d\udce6\ufe0f to run the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-portable/blob/main/examples/sd_webui"},"Stable Diffusion Web UI")," example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("inlineCode",{parentName:"li"},"carefree-portable-*.zip")," from the assets of the latest ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carefree0910/carefree-portable/releases"},"Releases"),"."),(0,r.kt)("li",{parentName:"ol"},"Unzip the ",(0,r.kt)("inlineCode",{parentName:"li"},"carefree-portable-*.zip")," to a folder (let's say, ",(0,r.kt)("inlineCode",{parentName:"li"},"./carefree-portable-*"),"), and ",(0,r.kt)("inlineCode",{parentName:"li"},"cd")," into it."),(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("inlineCode",{parentName:"li"},"run.py")," from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carefree0910/carefree-portable/blob/main/examples/sd_webui/run.py"},"here"),", and put it into the unzipped folder (",(0,r.kt)("inlineCode",{parentName:"li"},"./carefree-portable-*"),")."),(0,r.kt)("li",{parentName:"ol"},"Run the following command, and wait until the webui pops up:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\\python_embeddables\\python-3.10.11-embed-amd64\\python run.py\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"After these steps, you'll obtain a portable version of the SD webui (locates at ",(0,r.kt)("inlineCode",{parentName:"li"},"./carefree-portable-*/sd_webui_cfport"),"), which can be used directly without any extra requirements!")))}d.isMDXComponent=!0}}]);