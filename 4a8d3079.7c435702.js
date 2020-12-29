(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(8),i=(t(0),t(94)),r={title:"Creating commands"},c={unversionedId:"command-extension/creating-commands",id:"command-extension/creating-commands",isDocsHomePage:!1,title:"Creating commands",description:"Commands represent the main form of interaction that Discord bots have with users. Creating commands is a simple and straightforward process, with the ability to customize different aspects of them.",source:"@site/docs/command-extension/creating-commands.md",slug:"/command-extension/creating-commands",permalink:"/docs/command-extension/creating-commands",editUrl:"https://github.com/Alex1304/botrino/edit/main/website/docs/command-extension/creating-commands.md",version:"current",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/docs/command-extension/configuration"},next:{title:"Subcommands",permalink:"/docs/command-extension/subcommands"}},m=[{value:"Declaring a command",id:"declaring-a-command",children:[{value:"Implementing the <code>Command</code> interface",id:"implementing-the-command-interface",children:[]},{value:"Inline commands",id:"inline-commands",children:[]}]},{value:"Registering commands",id:"registering-commands",children:[{value:"The <code>@TopLevelCommand</code> annotation",id:"the-toplevelcommand-annotation",children:[]},{value:"Manual registration on the command service",id:"manual-registration-on-the-command-service",children:[]}]},{value:"Commands as a service",id:"commands-as-a-service",children:[]}],d={rightToc:m};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Commands represent the main form of interaction that Discord bots have with users. Creating commands is a simple and straightforward process, with the ability to customize different aspects of them."),Object(i.b)("h2",{id:"declaring-a-command"},"Declaring a command"),Object(i.b)("p",null,"To declare a command, two options are possible."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This subsection only shows how to ",Object(i.b)("strong",{parentName:"p"},"declare")," commands, they won't work until they are ",Object(i.b)("strong",{parentName:"p"},"registered"),". Registration of commands is documented in the next subsection."))),Object(i.b)("h3",{id:"implementing-the-command-interface"},"Implementing the ",Object(i.b)("inlineCode",{parentName:"h3"},"Command")," interface"),Object(i.b)("p",null,"Create a class that implements ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," and override the ",Object(i.b)("inlineCode",{parentName:"p"},"Mono<Void> run(CommandContext)")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.example.myproject;\n\nimport botrino.command.Command;\nimport botrino.command.CommandContext;\nimport botrino.command.annotation.Alias;\nimport reactor.core.publisher.Mono;\n\nimport java.util.Set;\n\n@Alias("ping")\npublic final class PingCommand implements Command {\n\n    @Override\n    public Mono<Void> run(CommandContext ctx) {\n        return ctx.channel().createMessage("Pong!").then();\n    }\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@Alias")," annotation allows to specify one or more alias for the command. The ",Object(i.b)("inlineCode",{parentName:"p"},"run"),' method contains the code of the command itself. Here we are just replying "Pong!" in the same channel the command was sent in.'),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Instead of using ",Object(i.b)("inlineCode",{parentName:"p"},"@Alias"),", it is also possible to override the ",Object(i.b)("inlineCode",{parentName:"p"},"aliases()")," default method from ",Object(i.b)("inlineCode",{parentName:"p"},"Command"),", which by default reads the value of the annotation. Can be useful if the aliases aren't known at compile time. The ",Object(i.b)("inlineCode",{parentName:"p"},"@Alias")," annotation will be ignored if ",Object(i.b)("inlineCode",{parentName:"p"},"aliases()")," is overriden, unless it calls the super implementation."))),Object(i.b)("p",null,"There are many default methods in the ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," interface that you can override to customize different aspects of the command, such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"documentation(Translator)"),": allows you to attach a documentation to the command. Useful if you want to make a help command or generate a user manual. The ",Object(i.b)("inlineCode",{parentName:"li"},"Translator")," parameter allows you to adapt the documentation to the language of the user. Details on how to implement this method is documented ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/command-extension/documenting-commands"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"privilege()"),": defines a privilege, in other words a requirement that must be fulfilled in order to be allowed to execute the command. Details on how to implement this method is documented ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/command-extension/privileges"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scope()"),": defines where the command can be used. The possible values are: ",Object(i.b)("inlineCode",{parentName:"li"},"Scope.ANYWHERE")," (the command can be used anywhere), ",Object(i.b)("inlineCode",{parentName:"li"},"Scope.DM_ONLY")," (the command only works in private messages), ",Object(i.b)("inlineCode",{parentName:"li"},"Scope.GUILD_ONLY")," (the command only works inside a guild). A command ran outside of its scope will be ignored."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"subcommands()"),": defines subcommands for the command. More details about subcommands can be found ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/command-extension/subcommands"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"errorHandler()"),": defines a command-specific error handler, overriding the global error handler if it exists. More details about error handlers can be found ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/command-extension/handling-errors"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cooldown()"),": defines a cooldown for the command, that is the maximum number of times a command can be used per user within a specific timeframe. More details about cooldowns can be found ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/command-extension/cooldowns"}),"here"),".")),Object(i.b)("h3",{id:"inline-commands"},"Inline commands"),Object(i.b)("p",null,'Another way to create commands is to create them "inline", via the static factory methods of ',Object(i.b)("inlineCode",{parentName:"p"},"Command"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'var ping = Command.of("ping", ctx -> ctx.channel().createMessage("Pong!").then());\n\nvar hello = Command.builder("hello",\n        ctx -> ctx.channel()\n                .createMessage("Hello!")\n                .then())\n        .setScope(Scope.DM_ONLY)\n        .setCooldown(Cooldown.of(2, Duration.ofSeconds(5)))\n        .build();\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"builder")," allows to access the same features as the default interface methods of ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," (privilege, scope, cooldown...)."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Even though ",Object(i.b)("inlineCode",{parentName:"p"},"Command")," is technically a functional interface, implementing it as a lambda will not work, because it won't be possible to specify an alias for the command. You need to use either ",Object(i.b)("inlineCode",{parentName:"p"},"Command.of")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Command.builder"),", both accepting an argument for aliases."))),Object(i.b)("h2",{id:"registering-commands"},"Registering commands"),Object(i.b)("p",null,"In order for your commands to be recognized, you need to ",Object(i.b)("strong",{parentName:"p"},"register")," them. Here again, there are different ways to proceed."),Object(i.b)("h3",{id:"the-toplevelcommand-annotation"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"@TopLevelCommand")," annotation"),Object(i.b)("p",null,"This approach is the most straightforward, but is only relevant for top-level commands (so not for subcommands), and only if you make the command by implementing the interface (so not for inline commands)."),Object(i.b)("p",null,"To use it, simply add the ",Object(i.b)("inlineCode",{parentName:"p"},"@TopLevelCommand")," annotation on the implementation class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.example.myproject;\n\nimport botrino.command.Command;\nimport botrino.command.CommandContext;\nimport botrino.command.annotation.Alias;\nimport botrino.command.annotation.TopLevelCommand;\nimport reactor.core.publisher.Mono;\n\nimport java.util.Set;\n\n@TopLevelCommand\n@Alias("ping")\npublic final class PingCommand implements Command {\n\n    @Override\n    public Mono<Void> run(CommandContext ctx) {\n        return ctx.channel().createMessage("Pong!").then();\n    }\n}\n')),Object(i.b)("p",null,"That's it! You can run your bot, the ",Object(i.b)("inlineCode",{parentName:"p"},"ping")," command above is fully functional!"),Object(i.b)("h3",{id:"manual-registration-on-the-command-service"},"Manual registration on the command service"),Object(i.b)("p",null,"In some cases you might want to register your commands manually, for example if you choose to make them inline. To achieve this, you need to inject the ",Object(i.b)("inlineCode",{parentName:"p"},"CommandService")," and call the ",Object(i.b)("inlineCode",{parentName:"p"},"addTopLevelCommand")," method on it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.example.myproject;\n\nimport botrino.command.Command;\nimport botrino.command.CommandService;\nimport com.github.alex1304.rdi.finder.annotation.RdiFactory;\nimport com.github.alex1304.rdi.finder.annotation.RdiService;\n\nimport java.util.Set;\n\n@RdiService\npublic final class SampleService {\n\n    @RdiFactory\n    public SampleService(CommandService commandService) {\n        var command = Command.of("ping", ctx -> ctx.channel()\n                .createMessage("Pong!")\n                .then());\n        commandService.addTopLevelCommand(command);\n    }\n}\n')),Object(i.b)("p",null,"The code above is 100% functional just like the previous one, now you have an example for both approaches. Feel free to use either approach according to your preferences. The interface approach might be preferred for complex or stateful commands, while the inline approach might be preferred for simple and stateless commands."),Object(i.b)("h2",{id:"commands-as-a-service"},"Commands as a service"),Object(i.b)("p",null,"Classes implementing commands can themselves be declared as services without any issues. For example if you need to access the ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigContainer")," in your command, you can do this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.example.myproject;\n\nimport botrino.api.config.ConfigContainer;\nimport botrino.command.Command;\nimport botrino.command.CommandContext;\nimport botrino.command.annotation.Alias;\nimport botrino.command.annotation.TopLevelCommand;\nimport botrino.command.config.CommandConfig;\nimport com.github.alex1304.rdi.finder.annotation.RdiFactory;\nimport com.github.alex1304.rdi.finder.annotation.RdiService;\nimport reactor.core.publisher.Mono;\n\n@RdiService\n@TopLevelCommand\n@Alias("prefix")\npublic final class PrefixCommand implements Command {\n\n    private final String prefix;\n\n    @RdiFactory\n    public PrefixCommand(ConfigContainer configContainer) {\n        this.prefix = configContainer.get(CommandConfig.class).prefix();\n    }\n\n    @Override\n    public Mono<Void> run(CommandContext ctx) {\n        return ctx.channel()\n                .createMessage("The default prefix is " + prefix)\n                .then();\n    }\n}\n')),Object(i.b)("p",null,"The command above accesses the configuration to get the default prefix of the bot. You can notice the use of ",Object(i.b)("inlineCode",{parentName:"p"},"@RdiService")," on top of the two other annotations, this works totally fine! Don't forget the ",Object(i.b)("inlineCode",{parentName:"p"},"@RdiFactory")," to inject the configuration container, and you're ready to run the bot and try out this command. Ideally, the string inside ",Object(i.b)("inlineCode",{parentName:"p"},"createMessage")," should be externalized, but it would needlessly complicate the documentation for this very simple example."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you declare a command as a service this way, you are allowed to do anything with it like any other service, for example inject it in other services, or set up ",Object(i.b)("inlineCode",{parentName:"p"},"@RdiFactory")," to be a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/working-with-services#injecting-a-service-in-a-reactive-static-factory"}),"reactive static method")," in case the command needs to perform a reactive task in order to be initialized."))))}s.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),s=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),l=s(t),p=a,h=l["".concat(r,".").concat(p)]||l[p]||b[p]||i;return t?o.a.createElement(h,c(c({ref:n},d),{},{components:t})):o.a.createElement(h,c({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var d=2;d<i;d++)r[d]=t[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);