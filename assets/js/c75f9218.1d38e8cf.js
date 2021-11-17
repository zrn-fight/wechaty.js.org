"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6913],{3905:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return k}});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=r.createContext({}),h=function(t){var e=r.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=h(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),c=h(o),k=n,d=c["".concat(l,".").concat(k)]||c[k]||s[k]||a;return o?r.createElement(d,i(i({ref:e},p),{},{components:o})):r.createElement(d,i({ref:e},p))}));function k(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,i=new Array(a);i[0]=c;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var h=2;h<a;h++)i[h]=o[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},90209:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return p},default:function(){return c}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),i=["components"],u={title:"Deploying a Wechaty bot with Heroku"},l=void 0,h={unversionedId:"howto/heroku",id:"howto/heroku",isDocsHomePage:!1,title:"Deploying a Wechaty bot with Heroku",description:"Powered by Wechaty",source:"@site/docs/howto/heroku.md",sourceDirName:"howto",slug:"/howto/heroku",permalink:"/docs/howto/heroku",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/howto/heroku.md",tags:[],version:"current",lastUpdatedBy:"vasvi-sood",lastUpdatedAt:1626879653,formattedLastUpdatedAt:"7/21/2021",frontMatter:{title:"Deploying a Wechaty bot with Heroku"}},p=[{value:"Using the &quot;Deploy to Heroku&quot; Button",id:"using-the-deploy-to-heroku-button",children:[{value:"Setting up a Deploy to Heroku Button",id:"setting-up-a-deploy-to-heroku-button",children:[]}]},{value:"Deploying with Heroku",id:"deploying-with-heroku",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Creating a Heroku Remote",id:"creating-a-heroku-remote",children:[]},{value:"Running the bot",id:"running-the-bot",children:[]}]},{value:"Use Cases",id:"use-cases",children:[]}],s={toc:p};function c(t){var e=t.components,u=(0,n.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,u,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg",alt:"Powered by Wechaty"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started"},(0,a.kt)("img",{parentName:"a",src:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started.svg?branch=master",alt:"Build Status"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://greenkeeper.io/"},(0,a.kt)("img",{parentName:"a",src:"https://badges.greenkeeper.io/wechaty/heroku-wechaty-getting-started.svg",alt:"Greenkeeper badge"}))),(0,a.kt)("h2",{id:"using-the-deploy-to-heroku-button"},'Using the "Deploy to Heroku" Button'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The \u2018Deploy to Heroku\u2019 button enables users to deploy apps to Heroku without leaving the web browser, and with little or no configuration. The button is ideal for customers, open-source project maintainers or add-on providers who wish to provide their customers with a quick and easy way to deploy and configure a Heroku app.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://heroku.com/deploy?template=https://github.com/wechaty/heroku-wechaty-getting-started"},(0,a.kt)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy to Heroku for Wechaty Starter Project Repository"}))),(0,a.kt)("p",null,"This is a sample deploy with Heroku button for the Wechaty Heroku starter project."),(0,a.kt)("h3",{id:"setting-up-a-deploy-to-heroku-button"},"Setting up a Deploy to Heroku Button"),(0,a.kt)("p",null,"This guide demonstrates setting up a Deploy to Heroku Button with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Starter Repository"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",null," Fork the ",(0,a.kt)("a",{href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Starter Repositor"),"."),(0,a.kt)("li",null," Create a branch ",(0,a.kt)("b",null,"feature")," in the forked repository."),(0,a.kt)("li",null,"On branch feature, create an app.json file in the root directory. Add items including name, description, logo in the fields. If you want to know how an app.json file looks like, check out ",(0,a.kt)("a",{href:"https://github.com/wechaty/heroku-wechaty-getting-started/blob/master/app.json"},"this template"),"."),(0,a.kt)("li",null,"In the Readme.md file, add the following code snippet:",(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)"))),(0,a.kt)("li",null," The deploy with heroku button is now set up.",(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Heroku button",src:o(70625).Z})))),(0,a.kt)("h2",{id:"deploying-with-heroku"},"Deploying with Heroku"),(0,a.kt)("p",null,"This guide demonstrates running the ding-dong bot with Heroku CLI. However you can choose to run any custom bot, with similar steps."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",null," Fork the ",(0,a.kt)("a",{href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Starter Repositor"),"."),(0,a.kt)("li",null,"Clone the Starter repository.",(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/wechaty/wechaty-getting-started"))),(0,a.kt)("li",null," Download the ",(0,a.kt)("a",{href:"https://devcenter.heroku.com/articles/heroku-cli"},"Heroku Cli"),".")),(0,a.kt)("h3",{id:"getting-started"},"Getting Started"),(0,a.kt)("ol",null,(0,a.kt)("li",null,"On branch feature, create an app.json file in the root directory.Add in fields such as name, description, logo, etc. If you want to know how an app.js file looks like check ",(0,a.kt)("a",{href:"https://github.com/wechaty/heroku-wechaty-getting-started/blob/master/app.json"},"this link"),"."),(0,a.kt)("li",null,"On branch feature, create a file  named `Procfile` in the root directory.Note that this file has no extension. Write the following code in the file:",(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"web:WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-whatsapp node examples/ding-dong-bot.js"))),(0,a.kt)("li",null,"Commit the changes in the feature branch.")),(0,a.kt)("h3",{id:"creating-a-heroku-remote"},"Creating a Heroku Remote"),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Open the following link in your browser:",(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://heroku.com/deploy?template=https://github.com/user-name/wechaty-getting-started/tree/feature")),(0,a.kt)("p",null,"Remember to replace user-name with your Github username.")),(0,a.kt)("li",null,"Add the necessary details and click on deploy app button."),(0,a.kt)("img",{src:"../../static/img/howto/heroku/heroku1.webp"}),(0,a.kt)("img",{src:"../../static/img/howto/heroku/heroku2.webp"}),(0,a.kt)("li",null,"After the app has been successfully created, open the terminal and add the heroku remote to your local github repository.",(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"heroku git:remote -a wechaty-test-123")),(0,a.kt)("p",null,"Here wechaty-test-123 is the name of the app, created in the previous step. You have to write your own app name.")),(0,a.kt)("li",null,"Push the feature branch of your local repository to the main branch of heroku using the following command:",(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git push heroku feature:main")))),(0,a.kt)("h3",{id:"running-the-bot"},"Running the bot"),(0,a.kt)("p",null,"To run the Bot on the Heroku CLI use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"heroku local web")," on your terminal. The ding-dong starter bot  is now successfully running.\n",(0,a.kt)("img",{alt:"Heroku button",src:o(80659).Z})),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday"},"Friday BOT")," - ",(0,a.kt)("a",{parentName:"li",href:"https://bot-friday.herokuapp.com/"},"https://bot-friday.herokuapp.com/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kaiyuanshe/OSS-bot"},"OSSBot")," - ",(0,a.kt)("a",{parentName:"li",href:"https://oss-bot-dev.herokuapp.com/"},"https://oss-bot-dev.herokuapp.com/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/huan/mike-bo"},"Mike BO")," - ",(0,a.kt)("a",{parentName:"li",href:"http://mike-bo.herokuapp.com/"},"http://mike-bo.herokuapp.com/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/juzibot/qijibot"},"QiJi BOT")," - ",(0,a.kt)("a",{parentName:"li",href:"https://qiji-bot.herokuapp.com/"},"https://qiji-bot.herokuapp.com/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/juzibot/botops"},"Bot Ops")," - ",(0,a.kt)("a",{parentName:"li",href:"https://bot-ops.herokuapp.com/"},"https://bot-ops.herokuapp.com/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/juzibot/rui-bot"},"Rui Assistant BOT")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/juzibot/juzi-bot"},"Juzi.BOT"))))}c.isMDXComponent=!0},70625:function(t,e,o){e.Z=o.p+"assets/images/heroku-4c56b67ccad2a69f1a9a6040874289b9.webp"},80659:function(t,e,o){e.Z=o.p+"assets/images/heroku3-d8f9d2f737d68dbd9e1eb87698be36e0.webp"}}]);