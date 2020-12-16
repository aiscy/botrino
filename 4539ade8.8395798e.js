(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(3),o=t(8),a=(t(0),t(92)),r={title:"Configuring your bot"},c={unversionedId:"api/configuring-your-bot",id:"api/configuring-your-bot",isDocsHomePage:!1,title:"Configuring your bot",description:"Standardizing the way to configure a bot is one of the primary goals of Botrino. This section will cover the configuration part more in detail, how to access the values of the configuration file in your code, and how to add your own configuration entries for your application.",source:"@site/docs/api/configuring-your-bot.md",slug:"/api/configuring-your-bot",permalink:"/docs/api/configuring-your-bot",editUrl:"https://github.com/Alex1304/botrino/edit/main/website/docs/api/configuring-your-bot.md",version:"current",sidebar:"someSidebar",previous:{title:"Working with services",permalink:"/docs/api/working-with-services"},next:{title:"Customizing the Discord client",permalink:"/docs/api/customizing-the-discord-client"}},l=[{value:"The configuration JSON",id:"the-configuration-json",children:[{value:"The <code>ConfigContainer</code>",id:"the-configcontainer",children:[]},{value:"Built-in configuration entries",id:"built-in-configuration-entries",children:[]},{value:"Adding your own configuration entries",id:"adding-your-own-configuration-entries",children:[]}]},{value:"Customizing the JSON source",id:"customizing-the-json-source",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Standardizing the way to configure a bot is one of the primary goals of Botrino. This section will cover the configuration part more in detail, how to access the values of the configuration file in your code, and how to add your own configuration entries for your application."),Object(a.b)("h2",{id:"the-configuration-json"},"The configuration JSON"),Object(a.b)("p",null,"The configuration is a JSON object, by default located in a ",Object(a.b)("inlineCode",{parentName:"p"},"config.json")," in the runtime directory, each field at the root of the object corresponds to one entry and maps to one class in the Java code."),Object(a.b)("h3",{id:"the-configcontainer"},"The ",Object(a.b)("inlineCode",{parentName:"h3"},"ConfigContainer")),Object(a.b)("p",null,"In order to access the values of the configuration in the Java code, Botrino exposes the object ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigContainer")," as a service that you can inject in your own code. An example below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"package com.example.myproject;\n\nimport botrino.api.config.ConfigContainer;\nimport botrino.api.config.object.BotConfig;\nimport botrino.api.config.object.I18nConfig;\nimport com.github.alex1304.rdi.finder.annotation.RdiFactory;\nimport com.github.alex1304.rdi.finder.annotation.RdiService;\n\n@RdiService\npublic final class SomeService {\n\n    private final BotConfig botConfig;\n    private final I18nConfig i18nConfig;\n\n    @RdiFactory\n    public SomeService(ConfigContainer configContainer) {\n        this.botConfig = configContainer.get(BotConfig.class);\n        this.i18nConfig = configContainer.get(I18nConfig.class);\n    }\n}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigContainer#get(Class)")," method is what allows you to access the entries of the JSON config inside your code."),Object(a.b)("h3",{id:"built-in-configuration-entries"},"Built-in configuration entries"),Object(a.b)("p",null,"Botrino comes with a few configuration entries by default. Here is the list of them below for reference."),Object(a.b)("h4",{id:"the-bot-entry"},"The ",Object(a.b)("inlineCode",{parentName:"h4"},"bot")," entry"),Object(a.b)("p",null,"This entry is where you input the bot information (token, presence, intents, etc). The JSON for the ",Object(a.b)("inlineCode",{parentName:"p"},"bot")," entry has the following structure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'{\n    "bot": {\n        "token": "...", // string: required\n        "presence": { // object: optional, default {"status": "online"}\n            "status": "...", // one of "online", "idle", "dnd", "invisible": required\n            "activity_type": "...", // one of "playing", "watching", "listening", "streaming": optional\n            "activity_text": "..." // string: optional\n        },\n        "enabled_intents": 0 // integer: optional, default 32509 (all non-privileged intents)\n    }\n}\n')),Object(a.b)("p",null,"The corresponding class in the Java code is ",Object(a.b)("inlineCode",{parentName:"p"},"botrino.api.config.object.BotConfig"),", accessed via ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigContainer.get(BotConfig.class)"),"."),Object(a.b)("h4",{id:"the-i18n-entry"},"The ",Object(a.b)("inlineCode",{parentName:"h4"},"i18n")," entry"),Object(a.b)("p",null,"This entry is where you specify the localization settings (default locale and supported locales). The JSON for the ",Object(a.b)("inlineCode",{parentName:"p"},"i18n")," entry has the following structure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'{\n    "i18n": {\n        "default_locale": "...", // string: required, must be a valid locale code ("en", "en-GB", "fr-FR"...)\n        "supported_locales": [] // array of strings: optional, values must be valid locale codes\n    }\n}\n')),Object(a.b)("p",null,"The corresponding class in the Java code is ",Object(a.b)("inlineCode",{parentName:"p"},"botrino.api.config.object.I18nConfig"),", accessed via ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigContainer.get(I18nConfig.class)"),"."),Object(a.b)("h3",{id:"adding-your-own-configuration-entries"},"Adding your own configuration entries"),Object(a.b)("p",null,"The configuration JSON can of course be extended with more entries to include your own parameters."),Object(a.b)("h4",{id:"creating-the-configuration-object"},"Creating the configuration object"),Object(a.b)("p",null,"First step is to create a POJO like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'package com.example.myproject;\n\nimport botrino.api.annotation.ConfigEntry;\nimport com.fasterxml.jackson.annotation.JsonProperty;\nimport com.fasterxml.jackson.databind.annotation.JsonDeserialize;\n\n@JsonDeserialize\n@ConfigEntry("my_config")\npublic final class MyConfig {\n\n    private String myProperty;\n    private long myValue;\n\n    public String getMyProperty() {\n        return myProperty;\n    }\n\n    @JsonProperty("my_property")\n    public void setMyProperty(String myProperty) {\n        this.myProperty = myProperty;\n    }\n\n    public long getMyValue() {\n        return myValue;\n    }\n\n    @JsonProperty("my_value")\n    public void setMyValue(long myValue) {\n        this.myValue = myValue;\n    }\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"@JsonDeserialize")," annotation is to indicate that this class is intended for being constructed from a JSON input, processed by the Jackson library."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"@ConfigEntry")," annotation allows Botrino to recognize it as a configuration object to be registered in the ",Object(a.b)("inlineCode",{parentName:"li"},"ConfigContainer"),", and to indicate the name of the field in the configuration file.")),Object(a.b)("h4",{id:"adding-the-entry-in-the-json-file"},"Adding the entry in the JSON file"),Object(a.b)("p",null,"Once you've created the object, you can add the following in your ",Object(a.b)("inlineCode",{parentName:"p"},"config.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:"{8-11}","{8-11}":!0}),'{\n    "bot": {\n        ...\n    },\n    "i18n": {\n        ...\n    },\n    "my_config": {\n        "my_property": "hello!!!",\n        "my_value": 42\n    }\n}\n')),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The name of the root field in the JSON must match with the name given in the ",Object(a.b)("inlineCode",{parentName:"p"},"@ConfigEntry")," annotation."))),Object(a.b)("h4",{id:"using-the-configuration-object"},"Using the configuration object"),Object(a.b)("p",null,"To test this, we can create a sample service injecting the ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigContainer"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'package com.example.myproject;\n\nimport botrino.api.config.ConfigContainer;\nimport com.github.alex1304.rdi.finder.annotation.RdiFactory;\nimport com.github.alex1304.rdi.finder.annotation.RdiService;\nimport reactor.util.Logger;\nimport reactor.util.Loggers;\n\n@RdiService\npublic final class SampleService {\n\n    private static final Logger LOGGER = Loggers.getLogger(SampleService.class);\n\n    @RdiFactory\n    public SampleService(ConfigContainer configContainer) {\n        var myConfig = configContainer.get(MyConfig.class);\n        LOGGER.info("My property = {}, my value = {}", myConfig.getMyProperty(), myConfig.getMyValue());\n    }\n}\n')),Object(a.b)("p",null,"When running, it should give the following output:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"00:16:42.193 [main] DEBUG botrino.api.Botrino - Discovered config entry com.example.myproject.MyConfig\n00:16:42.468 [main] INFO  com.example.myproject.SampleService - My property = hello!!!, my value = 42\n")),Object(a.b)("h2",{id:"customizing-the-json-source"},"Customizing the JSON source"),Object(a.b)("p",null,"It is possible to override the behavior of Botrino when loading the configuration by implementing the ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigReader")," interface. This interface has two methods, none of them are required to be implemented:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"String loadConfigJson(Path botDirectory) throws IOException"),': Allows to customize the way the configuration file is loaded. It is useful if you want to load the configuration from a file that is located at a different path or that has a different name than "config.json". You can even ignore the ',Object(a.b)("inlineCode",{parentName:"li"},"botDirectory")," parameter and load the JSON from a different source, or directly return a hard-coded JSON string for testing purposes for example. Note that this method throws ",Object(a.b)("inlineCode",{parentName:"li"},"IOException")," and that the return type is not reactive: indeed, this method is ran by Botrino on the main thread at the very start of the program, as such it does not need to be (and shouldn't be) asynchronous. This method is not required to be implemented: it has a default implementation that will simply read the JSON string from a file named ",Object(a.b)("inlineCode",{parentName:"li"},"config.json")," at the root of ",Object(a.b)("inlineCode",{parentName:"li"},"botDirectory"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ObjectMapper createConfigObjectMapper()"),": Allows to customize the Jackson ",Object(a.b)("inlineCode",{parentName:"li"},"ObjectMapper")," instance used to parse the JSON string. You can for example register extra modules and deserializers. This method is not required to be implemented: by default it will create an ",Object(a.b)("inlineCode",{parentName:"li"},"ObjectMapper")," with only the ",Object(a.b)("inlineCode",{parentName:"li"},"Jdk8Module")," registered (allows to recognize types such as ",Object(a.b)("inlineCode",{parentName:"li"},"java.util.Optional"),").")),Object(a.b)("p",null,"If no ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigReader")," implementation is found in your module, it will use a default one which can be recreated like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),'package com.example.myproject;\n\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport com.fasterxml.jackson.datatype.jdk8.Jdk8Module;\nimport reactor.core.publisher.Mono;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic final class DefaultConfigReader implements ConfigReader {\n\n    @Override\n    public String loadConfigJson(Path botDirectory) throws IOException {\n        return Files.readString(botDirectory.resolve("config.json"));\n    }\n\n    @Override\n    public ObjectMapper createConfigObjectMapper() {\n        return new ObjectMapper().registerModule(new Jdk8Module());\n    }\n}\n')),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"The implementation class must have a no-arg constructor."),Object(a.b)("li",{parentName:"ul"},"If more than one implementation of ",Object(a.b)("inlineCode",{parentName:"li"},"ConfigReader")," are found, it will result in an error as it is impossible to determine which one to use. If you don't want to remove the extra implementation(s), you can mark one of them with the ",Object(a.b)("inlineCode",{parentName:"li"},"@Primary")," annotation to lift the ambiguity. You may alternatively use the ",Object(a.b)("inlineCode",{parentName:"li"},"@Exclude")," annotation if you don't want one implementation to be picked up by Botrino.")))))}p.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var i=t(0),o=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=i,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||a;return t?o.a.createElement(m,c(c({ref:n},s),{},{components:t})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);