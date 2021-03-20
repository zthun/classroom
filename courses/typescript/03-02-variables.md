# Variables

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

If you are new to programming, there is an assumption that you are familiar with basic algebra. If you've ever had an algebra class, you may have seen something like y = 2x. When x is equal to 10, then y would be 20. Variables are basically **storage for values that can change**. We can also solve for x in this case by dividing both sides of the equation by 2 and we get x = y / 2. Thus, when y is 20, we substitute 20 for y and we get x = 20 / 2, and finally, x = 10. This is the foundation of algebra.

In programming, it's no different. The real lesson when it comes to programming is as follows:

1. How do I assign variables?
2. What are the different types of variables I can create?

Once you have the answers to those three questions, you will have pretty much everything you need to know about a language.

## How Do I Define JavaScript Variables

You've seen this already above, but each of the keywords has a different meaning in how the variable is actually **scoped**. Later on, when we get to conditionals, functions, and loops, we will see scoping in action.

### Var

Using var is somewhat deprecated and most programmers in JavaScript in modern times don't use it anymore. Let and const are the official replacements, but every now and then you will see this in the wild. Before es6 in 2015 was introduced, var was all we had and it had a very unique property that a lot of interviewers would ask. What is **hoisting**?
