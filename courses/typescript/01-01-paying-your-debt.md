# Paying your DEBT

Hello, and welcome to TypeScript. Well, that's a bit of a lie. We are not only going to be discussing TypeScript, but we will be using it as the superset of what the core of this learning experience is, which is Javascript. You probably have heard of Javascript; it's the general language of websites everywhere. It [has a very interesting and rich history of how it originated](https://www.springboard.com/blog/history-of-javascript/#:~:text=In%20September%201995%2C%20a%20Netscape,LiveScript%20and%2C%20later%2C%20JavaScript.). It's popularity exploded once [Node](https://nodejs.org/en/) came on the scene and since then, it's a language that is not only for web sites and front end development, but great for back end development and tooling.

TypeScript is just JavaScript with type safety built in. You may not fully know JavaScript yet, but consider the following:

```js
/**
 * This is a function that supports languages features of javascript.
 *
 * @param {number} value The value to do something with.
 *
 * @returns {string} A string from value.
 */
export function doSomething(value) {
  return `${value}`;
}
```

```ts
/**
 * This is a function that supports languages features of typescript.
 *
 * @param value The value to do something with.
 *
 * @returns A string from value.
 */
export function doSomething(value: number): string {
  return `${value}`;
}
```

You see that **: number** and **: string**? Congratulations, you now know TypeScript; this language and its transpiler only adds the type safety and necessary features to support type safety from other object oriented languages.

> There are many JavaScript developers who feel that TypeScript is a cop out (the author used to be one of them), but it adds a level of sophistication and helps you maintain large scale applications. Often, you may need to refactor or rename things, and this is where TypeScript shines since it will basically help you do this, and for the most part, will simply do it for you.

A lot of times, when developers talk about the features of TypeScript that JavaScript doesn't have, what they are really talking about is the [language features that current JavaScript engines](https://tc39.es/ecma262/) do not yet support. You can think of TypeScript as **a superset of the bleeding edge version of ECMAScript**. Thus, for the rest of this course, we will just be referring to TypeScript, but understand that we are truly talking about a fully featured JavaScript language under the hood.

## Deployment

Thanks to [Node](https://nodejs.org/en/), TypeScript can basically output almost any type of project you want:

<dl>
  <dt>Web sites</dt>
  <dd>Combined with HTML and CSS, TypeScript can output full fledged websites that can become fully fledged SPAs (Single Page Applications).</dd>
  <dt>Backend Servers</dt>
  <dd>When Node came on the scene, it gave developers a platform for writing their own custom server hosts for their backend.  Combined with ExpressJS, you can have a full REST based API with TypeScript alone.</dd>
  <dt>Command line tools</dt>
  <dd>While node is popularly known for servers, node apps can also output a lot of command line tools which MANY developers use for developing TypeScript applications.  Hows that for some inception.  Fun fact:  The Typescript transpiler is actually a node application.</dd>
  <dt>JavaScript Library</dt>
  <dd>A library module where shared code lives.  Useful as building blocks for other applications.</dd>
  <dt>Desktop applications</dt>
  <dd>It is possible to output desktop applications using something like <a href="https://www.electronjs.org">Electron</a>.</dd>
</dl>

Deployment of these kinds of applications is often tricky to hobbyist and lone wolf developers.

For command line tooling and libraries, developers exclusively live in [NPM](https://www.npmjs.com/) (Node package manager). This is the most basic form of deployment and other users of your tools would just install them from the command line;

```sh
# Application that implements rm -rf on any operating system.
sudo npm install -g rimraf
Password: ********
# Custom tool is installed
mkdir folder-to-be-deleted
rimraf folder-to-be-deleted
```

And that's it. Chances are, you will be forced into the NPM ecosystem if you want to be a TypeScript developer so this will be the defacto way to deploy command line tools and libraries.

> NPM is the simplest of the bunch. There's other methods of distribution such as chocolatey, brew, apt-get, and yum, but most of the others are operating system specific. Using NPM works on all platforms so you can just focus on development. Companies often require private packages as well, and setting up a private NPM repository used just for your company is not too difficult to do and many cloud providers provide it as well. It becomes the tool of choice.

Web sites and web servers are a different beast all together. This is where users are accessing a web site in the browser and interacting with your back end services through it. In the modern eco system, we want these kinds of apps to scale so you will usually find them deployed to something like a [kubernetes](https://kubernetes.io/) cluster in a cloud platform such as [Microsoft Azure](https://azure.microsoft.com/en-us/), [Google Cloud](https://cloud.google.com/), or [Amazon AWS](https://aws.amazon.com/). They also have databases attached to them often. You see this advertised as full stack development which is a short way of saying front end, back end, and database development.

This can get very expensive for companies and hobbyist as these platforms charge by usage. When your website application gets popular, you find yourself possibility spending $100 or more per month for a very small website, and upwards to $1,000,000 for large enterprise applications. If you want to do this kind of development for fun, you will definitely have to take the time to research what platform works for your needs and your budget. If you are just learning and aren't actually deploying anything out to the wild, then we can just use something on our local environments called [Docker Desktop](https://www.docker.com/products/docker-desktop) to meet a similar need.

For the scope of this course, we will focus mostly on writing node apps to teach you TypeScript and what the language can do for you.

> We want to be free of as many distractions as possible. There's a lot more scope to writing web applications than just knowing TypeScript and some rendering framework like Angular, React, or Vue. There's deployment issues to work out, tons of tooling, debugging issues, security concerns, and a slew of other things to thing about. Rather than overwhelm you with technology, we can simply just stick with the most basic of application types for your development.

## Environment

Here is the best, and worst part of TypeScript. When it comes to choosing your environment, the sky is the limit here. One major thing to remember, though, is we will make heavy use of the command line. Regardless of what type of project you are creating, you will very heavily use command line tools and scripts to build, deploy, and test your applications.

> Using the command line enables automation and doesn't tie you to an individual operating system. While clicking on buttons is more comfortable in a UI, when it comes to actually automating your application pipeline, you will be using the command line. It is a good idea to become familiar with it.

For developers who are working locally, the following IDEs available to you. There are a lot more, but these are the most popular.

1. [Visual Studio Code](https://code.visualstudio.com/)
1. [Atom](https://atom.io/) (Atom-Typescript plugin required)
1. [WebStorm](https://www.jetbrains.com/webstorm/) ($$$)

Most of these are available on the command line based app stores. If you are on windows, we can install this with [chocolatey](https://chocolatey.org/). On OSX, we can use [brew](https://brew.sh/).

```powershell
# Visual Studio Code
choco install vscode -y
# Atom
choco install atom
# WebStorm
choco install webstorm -y
```

```sh
# Visual Studio Code
brew install --cask visual-studio-code
# Atom
brew install--cask atom
# WebStorm
brew install --case webstorm
```

You will also want to use some other tools It is highly recommended to create an account at [GitHub](https://github.com) as there are some templates there that you can fork to get started in your own repositories. You will need the [git](https://git-scm.com/) and the Node engine. For the Node engine, we will be using the LTS (long term support) version, but feel free to use the latest and greatest if you want to use the bleeding edge features.

```powershell
# Installs git source control
choco install git -y
# Installs the node v8 command line engine.
choco install choco install nodejs-lts
```

```sh
# Installs git source control
brew install git
# Installs the node v8 command line engine.
brew install node@14
```

For developers who like ODEs, you can use any of these:

1. [Replit](https://repl.it/)
1. [Cloud 9](https://aws.amazon.com/cloud9/)
1. [Code Anywhere](https://codeanywhere.com/pricing)

## Build and Debug

This is where things generally get a bit tricky. You see, TypeScript can't be run out of box like JavaScript can. We will actually be running a node application called tsc, which is short for the TypeScript compiler. However, tsc is not a true compiler in that it doesn't directly compile your scripts down to machine code that can be ran natively. But let's back up a bit here.

Do you remember the script above?

```ts
/**
 * This is a function that supports languages features of typescript.
 *
 * @param value The value to do something with.
 *
 * @returns A string from value.
 */
export function doSomething(value: number): string {
  return `${value}`;
}
```

You can't give that directly to your computer and tell it to run; it won't know what to do with it. Instead, your computer will need to take that code and translate it to something that the system can actually read and execute. This is a process normally known as _Compiling_; in earlier languages, there was a secondary step called _Linking_, but we don't really worry about that much anymore.

With JavaScript however, it doesn't actually compile. Yes, we meant to say JavaScript. JavaScript actually runs through a JavaScript engine and the script itself is interpreted and converted to something your computer can actually understand. With JavaScript, you don't have to worry about the compilation process at all and instead, you have to only worry about which engine you are running through. What engines are available?

Here is the list of engines that most developers are used to.

1. V8 (Chrome, Edge Chromium, Node, Deno)
1. SpiderMonkey (Firefox)
1. JavaScriptCore (Safari)
1. Chakra (IE and Edge Legacy)

Now, when we talk about compiling TypeScript, we are actually doing something called Transpiling. Transpiling is the **process by which we convert one language into another**. TypeScript transpiles down to JavaScript, and it is configurable what version of JavaScript to transpile down to. For the most compatibility across browsers, you will almost always want to transpile down to ES5.

> Compatibility is key here. Browsers add more and more native support for modern JavaScript features, but it is inconsistent across browsers. [ES5](https://madasamy.medium.com/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4) is still the king of compatibility and to cast the widest net, an application written with ES5 will garnish the most support. Since all TypeScript features can be compiled down to ES5, there is no reason not to. Even Node has full support for all ES5 features.

There is a way around this and we will be using a package called [ts-node](https://www.npmjs.com/package/ts-node) in order to run our TypeScript directly in some cases. However, you should never expect anyone to have ts-node on their system and releasing an application built in TypeScript, whether command line, library, web application, desktop, or back end, should always be transpiled into native Javascript.

> Same reason as above. Compatibility is key. When users download node applications, they expect them to just run. If you force them to have more than one way to run a node application, it creates a poor experience on the users part. Imagine downloading a python based application and, in order to get it running, you have to compile it from the source. This means, you have to install all of the libraries and dependencies to get it to work. It is not a very good experience and is generally a very bad practice to release your raw TypeScript code without any JavaScript compilation.

When it comes to debugging, we are going to use Visual Studio Code as the debugger for simplicity, but this can be a challenge on its own. We will need to write a launch.json in the .vscode directory (more on this in later chapters), but this only works for command line apps. With backend apps, we have to again use Visual Studio Code, but we will be attaching to an already running process.

For web apps, we will actually use the browser itself, and it is recommended to start with Google Chrome. Node's backing javascript engine is the V8 engine which is what Chrome uses so you will get a consistent experience.

## Testing

Testing can be a bit goofy in TypeScript as well, as there are several tools required to make it run.

For command line tools and back end applications, most people just use [jest](https://jestjs.io/). It's easy to set up and works great. You can use it for front end tools as well and it's the runner and framework of choice for React based applications. You can debug jest tests directly in visual studio and code coverage comes out of box. The only downside to jest is that it runs through node, thus, you will only be able to test using the V8 engine.

If you are testing the front end and using something like Angular, you may also find yourself using [karma](https://karma-runner.github.io/latest/index.html) as the test runner with [jasmine](https://jasmine.github.io/) as the test framework. To make this a bit more complex, you can also forgo jasmine and use [mocha](https://mochajs.org/) if you prefer. Both of these frameworks have the same signatures so it doesn't really matter which one you choose. Jasmine tends to be the more popular one.

If you have the ability to make a choice between jest and karma+jasmine, it is highly recommended you choose **jest**.

> One of the main advantages you get from unit tests is the ability to set debug breakpoints on specific code blocks that you may be seeing issues with. With karma-jasmine, this is harder to do since you have to set up a third party plugin to run them in the browser and use the browser as the debugger. If you are using Visual Studio Code, you can actually debug your jest tests directly in the IDE which makes for a fantastic unit test experience. Jest is also way less complicated for beginners, and you will actually find that most companies just use the chrome engine to run unit tests anyway, completely negating the main benefit you get from using karma-jasmine.

End to end frameworks are a bit tricker as there aren't a lot that make debugging easy. Most people will immediately jump to [protractor](https://www.protractortest.org/#/) which is selenium based. The debugging experience here is horrible and trying to target an individual test is slow and painful. There are several actors in this space and I recommend you play with all of them before you make your choice. If none of the TypeScript based frameworks will work for you, you may want to invest in using a Java or C# project for your e2e tests, but that will be outside the scope of this course.

## Putting it Together

At this point we're ready to start writing our first application with TypeScript. To prepare, I recommend you clone [this template:

```sh
git clone https://github.com/zthun/interviews
```

If you wish to fork the project on GitHub so you can make changes and add it to your own account, use the fork button at the top right so you can setup for practice.
