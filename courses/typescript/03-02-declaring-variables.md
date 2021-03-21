# Declaring Variables

We can't continue with any language without talking about how variables work and how the language handles them. JavaScript is no different. In fact, if you can't be bothered going through this whole course, the entire variable structure in JavaScript is defined as such.

```ts
// Functional scoped variable
// Not really used much anymore.
var varVariable = 10;
// Properly scoped variable.
let letVariable = 10;
// Same as let, but the value can't change.
const constVariable = 10;
```

There you go. Class over. See you next week. Well, if only it were so simple.

## What Is a Variable

Algebra comes back to haunt us here again. In your algebra class, you may have seen something like y = 2x. When x is equal to 10, then y would be 20. Variables are basically **storage for values that can change**. We can also solve for x in this case by dividing both sides of the equation by 2 and we get x = y / 2. Thus, when y is 20, we substitute 20 for y and we get x = 20 / 2, and finally, x = 10. This is the foundation of algebra.

In programming, we normally have to define variables to tell our system to allocate a memory space for it in RAM (Random Access Memory). JavaScript has this same mechanism and you have to tell the engine what your variables are in order to allocate them. However, in JavaScript, there are some gotchas and while you can probably learn how to declare variables in about 22 seconds, what actually happens behind the scenes is not so obvious.

## How Do I Define JavaScript Variables

Variables in JavaScript are defined as follows.

{_variableScopeType_} {_variableName_} = {_variableValue_};

Note here that "= {_variableValue_}" is actually optional. If you don't specify the initial value, it registers as _undefined_.

### Var Variable Scope

Using var is somewhat deprecated and most programmers in JavaScript in modern times don't use it anymore. Let and const are the official replacements, but every now and then you will see this in the wild. Before es6 in 2015 was introduced, var was all we had and it had some unique behaviors.

> Why bother learning this then? Basically, you will see this in the wild every now and then and while you might think you can just blindly change var to let to bring it up to modern standards, it's not that simple because of how var behaves.

You're going to hear the word "hoisting" a lot when it comes to JavaScript. Before modern modular based JavaScript came along, this was a pretty standard interview question about what is hoisting and how does it relate to variables and functions. Basically, when you define a variable with the **var** keyword, the engine works like this.

1. When the engine receives your JavaScript code, it makes a first pass and looks at all of your defined functions and your actual file.
2. For each variable defined with var that it finds, it allocates some memory for that specific function for that specific var.
3. At this point, your variable gets the value undefined.
4. Assigning a value to the variable with the **assignment operator**, _=_, then just puts the value into that memory space.

Run this script in Node.

```js
function test() {
  foo = 10;
  var foo;
  return foo;
}
console.log(test());
```

Notice the output value.

```sh
10
```

Even though we declared our variable foo after we assigned it, it still got the correct value and did not error out. _Where you define a variable with var does not matter._ It just has to be declared somewhere in the function to be assigned to that function. In fact, we can do this:

```js
function test() {
  foo = 10;
  return foo;
  var foo;
}

console.log(test());
```

Notice that it still outputs 10. So the book definition of hoisting is that variables _and_ functions are moved to the top of the functional scope. Technically, this is correct, but in reality, that's by accident, not because that was the intended behavior. Because of how JavaScript engines allocate the memory, it acts like it has been hoisted and moved to the top.

What happens if we don't actually declare a variable marker in our function?

```js
function test() {
  bar = 10;
  return bar;
}

console.log(test());
```

Hey, wait a minute.

```sh
10
```

What happened? It still worked? Shouldn't it have failed, or told us that we forgot to allocate local memory for the function? Well, our JavaScript engine has a deep desire to be loved.

Besides your standard JavaScript scopes that are between opening brackets and closing brackets, there is a special scope called **global** scope which is at the root of the application. In node, you can simply type global into the interpreter and it will give you a list of everything that is defined in global scope. If you are in a browser, you can type **window** on the console and that is the name for the global scope. Either way that you check it, the way that the JavaScript engine handles variable assignment and retrieval is as follows.

1. The engine first checks your function scope of where the variable is being accessed or assigned.
1. The engine then moves to the outer functional scope of where the variable is being accessed or assigned.
1. The engine continues to do this until there is no more function scopes.
1. The engine then checks global scope to see if there is a named variable that was requested and assigns or retrieves the value to or from that.
1. If no such variable exists in any scope up the chain, then the engine creates that variable right there in global scope. It's so helpful; you're welcome!

> This is an endless source of bugs and is one of the main reasons why most developers don't use var anymore. It's very easy to pollute global scope with this mechanism. Remember the definition of function side effects? Since you are actually creating a variable in global scope, that's a huge side effect; especially since there may be other functions accessing that variable and it may have a different meaning in the context of which it is accessed. Be careful, and make sure you have a very well defined intention before changing something in global scope.

There's one more important fact about how the engine handles this that you may have been noticing. The memory is allocated at the _function_ scope. What do you think happens if we do this?

```js
function test() {
  foo = 10;
  // Note that in JavaScript, you can define
  // a scope anywhere you want between a {}.
  // It's not super useful in most cases and you will
  // rarely see anyone use this, but it's great for this
  // sample and there's a few other times where you may see
  // this used based on the developer.
  {
    var foo;
  }
  return foo;
}
```

Did you try it? Guess what? It works, and it allocates the variable foo to the function test. Using var is only allocated at the functional scope level.

### Let Variable Scope

Let's switch gears and talk about **let**. Let is different than var in that it is not allocated on a pass. It is allocated at runtime and it's life is dedicated to the scope that it lives in. This is best shown by example. Let's take our previous examples and change all the vars to lets.

```js
function test() {
  let foo = 10;
  return foo;
}

function test2() {
  foo = 10;
  let foo;
  return foo;
}

function test3() {
  {
    let foo = 100;
  }
  return foo;
}
```

What happens when you log the output of each one of these.

```sh
> console.log(test());
10
```

```sh
> console.log(test2());
foo = 10;
    ^

ReferenceError: Cannot access 'foo' before initialization
```

```sh
> console.log(test3());
return foo;
^

ReferenceError: foo is not defined
```

Those three results pretty much tell you just about everything you need to know about the difference between let and var and why you can't just replace var with let without some thought. Let has different rules in the engine then var, and has many more restricts to safeguard your application from polluting global scope. The general rules of let are as follows:

1. A let variable is scoped to the block scope that it is declared in.
1. A let variable cannot be used until it is declared. It is not just a marker to allocate some memory.
1. A let variable can only be declared once.
1. It is impossible for a let variable to pollute global scope.

### Const Variable Scope

A variable declared as const is identically to a variable declared as let. The only difference is that it must be immediately assigned and it cannot be assigned later.

```js
function foo() {
  const num = 10;

  // You can't do this with a const variable.
  // num = 100;

  return num;
}
```

If you're looking at hard and fast rules on whether or not to use const or let, then you will be disappointed to learn that there isn't one. You could always start with let and move to const if you want to, or always start with const and use let when needed. You could just be inconsistent as possible and just randomly use them depending on the day and your mood. Honestly, do whatever your team feels comfortable with.

> Honestly, if you do want a hard and fast rule and aren't really sure which to pick, we recommend you just start with const and change it to let when you need to reassign. This comes from the security principle of least privilege. You're less likely to make mistakes if you use const instead of let and when you do reassign something, you have to think about why it needs to be reassigned vs just creating another variable.

## Summary

In this section, we learned how to define a variable in JavaScript and how variables are stored by the engine. We also learned about the differences between var, let, and const, and how scoping affects them. The next chapter will will continue on with these principles and learn more about variable types, function arguments, and how to get input from the user.
