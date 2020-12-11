(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),r=(n(0),n(89)),c={title:"Working with services"},o={unversionedId:"api/working-with-services",id:"api/working-with-services",isDocsHomePage:!1,title:"Working with services",description:"Services are certainly what contribute the most in making Botrino a so concise and easy to use framework. You will hopefully understand why after reading this page introducing services and showing how to use their power to their fullest extent.",source:"@site/docs/api/working-with-services.md",slug:"/api/working-with-services",permalink:"/docs/api/working-with-services",editUrl:"https://github.com/Alex1304/botrino/edit/main/website/docs/api/working-with-services.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Configuring your bot",permalink:"/docs/api/configuring-your-bot"}},s=[{value:"What is a service?",id:"what-is-a-service",children:[]},{value:"How to use services?",id:"how-to-use-services",children:[{value:"Declaring a service",id:"declaring-a-service",children:[]},{value:"Injecting a service in a constructor",id:"injecting-a-service-in-a-constructor",children:[]},{value:"Injecting a service in a static factory",id:"injecting-a-service-in-a-static-factory",children:[]},{value:"Injecting a service in a reactive static factory",id:"injecting-a-service-in-a-reactive-static-factory",children:[]}]},{value:"Built-in services",id:"built-in-services",children:[{value:"<code>GatewayDiscordClient</code>",id:"gatewaydiscordclient",children:[]},{value:"<code>ConfigContainer</code>",id:"configcontainer",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Services are certainly what contribute the most in making Botrino a so concise and easy to use framework. You will hopefully understand why after reading this page introducing services and showing how to use their power to their fullest extent."),Object(r.b)("h2",{id:"what-is-a-service"},"What is a service?"),Object(r.b)("p",null,"Services are more or less the same thing as ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans"}),"beans in Spring"),". They are Java objects that are instantiated once at the start of your application, and that you can inject everywhere in your app. A service can define dependencies to other services, which are resolved when the service is created."),Object(r.b)("p",null,"As such, the concept of dependency injection (DI) is also used in Botrino. Under the hood, it utilizes the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://alex1304.github.io/rdi/docs/intro"}),"RDI library")," which supports factories returning reactive types."),Object(r.b)("h2",{id:"how-to-use-services"},"How to use services?"),Object(r.b)("p",null,"Botrino will be able to find your services automatically in your app module, as long as your module is ",Object(r.b)("inlineCode",{parentName:"p"},"open")," and is annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"@BotModule"),", as explained in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/getting-started"}),"Getting Started guide"),"."),Object(r.b)("h3",{id:"declaring-a-service"},"Declaring a service"),Object(r.b)("p",null,"For a class to be recognized as a service, you need to annotate it with ",Object(r.b)("inlineCode",{parentName:"p"},"@RdiService"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"@RdiService\npublic class A {\n\n}\n")),Object(r.b)("p",null,"With only this code, an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"A")," will be created on startup. By default it assumes that a public no-arg constructor exists, which is the case in the code above. But there are many ways to construct a service, and that's what makes them interesting."),Object(r.b)("h3",{id:"injecting-a-service-in-a-constructor"},"Injecting a service in a constructor"),Object(r.b)("p",null,"Let's create another service ",Object(r.b)("inlineCode",{parentName:"p"},"B"),", which injects ",Object(r.b)("inlineCode",{parentName:"p"},"A")," in its constructor:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"@RdiService\npublic class B {\n\n    @RdiFactory\n    public B(A a) {\n        // you can use A here\n    }\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@RdiFactory")," annotation is what indicates the method to create the service, with the possibility to inject other services in the arguments. In this scenario, the following will happen on startup:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Botrino will find ",Object(r.b)("inlineCode",{parentName:"li"},"A")," and ",Object(r.b)("inlineCode",{parentName:"li"},"B")," in your module, and register them as services"),Object(r.b)("li",{parentName:"ul"},"It will see that ",Object(r.b)("inlineCode",{parentName:"li"},"B")," injects ",Object(r.b)("inlineCode",{parentName:"li"},"A")," in constructor, so ",Object(r.b)("inlineCode",{parentName:"li"},"A")," needs to be created first before ",Object(r.b)("inlineCode",{parentName:"li"},"B")," can be created"),Object(r.b)("li",{parentName:"ul"},"Services are created following the dependency tree.")),Object(r.b)("h3",{id:"injecting-a-service-in-a-static-factory"},"Injecting a service in a static factory"),Object(r.b)("p",null,"The method annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"@RdiFactory")," can as well be a static factory method instead of a constructor:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"@RdiService\npublic class B {\n\n    private final A a;\n\n    private B(A a) {\n        this.a = a;\n    }\n\n    @RdiFactory\n    public static B create(A a) {\n        return new B(a);\n    }\n}\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The return type of the static factory must be ",Object(r.b)("inlineCode",{parentName:"p"},"B")," or a subtype of ",Object(r.b)("inlineCode",{parentName:"p"},"B"),"."))),Object(r.b)("h3",{id:"injecting-a-service-in-a-reactive-static-factory"},"Injecting a service in a reactive static factory"),Object(r.b)("p",null,"If you need to perform some reactive tasks in order to create your object, Botrino (in fact, RDI) allows you to return a ",Object(r.b)("inlineCode",{parentName:"p"},"Publisher")," of the service instead of the service itself:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"@RdiService\npublic class B {\n\n    private final A a;\n\n    private B(A a) {\n        this.a = a;\n    }\n\n    @RdiFactory\n    public static Mono<B> create(A a) {\n        return Mono.fromCallable(() -> new B(a));\n    }\n}\n")),Object(r.b)("p",null,"In this case, if ",Object(r.b)("inlineCode",{parentName:"p"},"B")," is injected somewhere else, it will first subscribe to the publisher returned by the static factory, and create the service only after the instance of ",Object(r.b)("inlineCode",{parentName:"p"},"B")," is emitted."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Check out the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://alex1304.github.io/rdi/docs/intro"}),"RDI documentation")," for more examples and details on how dependency injection works."))),Object(r.b)("h2",{id:"built-in-services"},"Built-in services"),Object(r.b)("h3",{id:"gatewaydiscordclient"},Object(r.b)("inlineCode",{parentName:"h3"},"GatewayDiscordClient")),Object(r.b)("p",null,"Maybe you've been wondering how to access the instance of the Discord client of your bot? Well, now you have the answer: ",Object(r.b)("inlineCode",{parentName:"p"},"GatewayDiscordClient")," is registered as a service, which means you can inject it in your own services!"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"@RdiService\npublic class A {\n\n    @RdiFactory\n    public A(GatewayDiscordClient gateway) {\n        // you can use GatewayDiscordClient here\n    }\n}\n")),Object(r.b)("h3",{id:"configcontainer"},Object(r.b)("inlineCode",{parentName:"h3"},"ConfigContainer")),Object(r.b)("p",null,"To access the values of the configuration file, the service ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigContainer")," is registered and you can inject it in your own services. For example, to get the bot token:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"@RdiService\npublic class A {\n\n    @RdiFactory\n    public A(ConfigContainer configContainer) {\n        var botConfig = configContainer.get(BotConfig.class);\n        var token = botConfig.token();\n    }\n}\n")),Object(r.b)("p",null,"We will see the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigContainer")," more in depth in the next section, ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/configuring-your-bot"}),"Configuring your bot"),"."))}b.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=i,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return n?a.a.createElement(h,o(o({ref:t},l),{},{components:n})):a.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);