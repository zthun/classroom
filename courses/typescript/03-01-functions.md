# Functions

So at this point, we're going to do something that may seem a bit out of order when it comes to learning languages. Instead of learning about basic keywords, variables, conditionals and loops, we're going to jump ahead a bit and learn about functions. Functions are essentially the foundation of JavaScript, as it is considered a **functional language**. You may hear the term _Object Oriented Programming_ in the developer scene, and while JavaScript does borrow a lot of principles from _OOP_, at the heart is a very solid **functional language** that is based completely on writing functions to achieve the goal.

> There's a lot of situational knowledge that deals with functions that we need to discuss in order to understand things around variables, conditionals, and loops. Normally, you will learn about variables and conditionals first before you learn about functions, but in JavaScript, it's too important to know to avoid skipping it. So we teaching you functions up front so you are aware of their syntax and semantics; this will give you some solid foundational knowledge for later chapters.

## What is a Function

There is one assumption when you are doing programming, and that is a bit of knowledge about basic algebra. You may have see expressions in algebra that are similar to f(x) = x + 5;. What happens when you plug the number 20 into the function? It outputs 25. Functions in JavaScript are similar to this, but they have the power to output more than just numbers. They can output all kinds of different data types such as strings, booleans (remember what these are from the intro to logic course), and big objects that define real world things. In it's most basic definition, a function **is an expression that takes 0 or more inputs and produces 0 or 1 output**. Yes, that is correct, a function can have no input, and no output. In fact, there is a name for such a function, and its called a **noop** function, pronounced no-op. Then again, pronouncing it as it is spelled, or calling it _nope_ can be funny.

> While it may seem useless, the purpose of the noop function is for stubbing. There are times when you actually want to turn off pieces of functionality and instead of having complicated logic, you can substitute a noop function instead which cuts down on the number of checks you need to perform. Having a function that does nothing, in this case, is mighty handy. Functions in general promote code reuse. This is the main reason for writing functions. Do you remember the principle of DRY (Don't Repeat Yourself)? It is through good functional design that we can achieve this goal.

## How Do I Create a Function

In JavaScript, and in TypeScript, there are actually multiple ways to create functions but for the scope of this course, we are going to be sticking to one way to start. More ways to construct functions will come in later lessons, but to give you a solid ground here, we're going to be sticking to **0 argument functions** that may produce 1 output.

To create a function in JavaScript, we use the **function** keyword.

```ts
function noop() {}
```

The structure of all functions is the same. You have the function keyword, followed by the name of the function, followed by an argument list between parenthesis, followed by what's called a **scope block**. A scope block is a block of code held between and opening bracket, {, and a closing bracket, }.

That function above is essentially an implementation of the noop function. It takes no input and produces no output, and has no **side effects**. Side effects of a function will be discussed later.

## How Do I Invoke a Function

Invoking, or calling, a function is done somewhat similar to actually declaring the function, but you omit the function keyword and the function code block.

```ts
// Invokes the function noop.
noop();
```

A quick note here. Notice the semicolon at the end. The semicolon specifies the end of a JavaScript expression. You can actually omit this, but it's generally best to be explicit about when you want your statements to end.

> The reason for this is that the engine will guess at what you're trying to do if you don't have semicolons. Remember that computers are stupid; they only do what they're told to do, and if they have to interpret what you're trying to do, they will often times get it wrong. So, to help with stopping errors and unwanted behaviors, it's best to be explicit about ending your expressions.

## So Putting It Together

So let's put this together. Remember our hello-world application? What would that look like if we tuned it using functions? Well, maybe it could look like this.

```ts
function sayHello() {
  console.log('Hello World');
}

sayHello();
```

This is a definite possibility, but you may also hold back a bit and realize that we've turned a 1 line application into 5 lines. This is here just for illustration. In a real application, don't do this. As a general rule _the less code you write to solve a problem is generally the best solution._

> If you can accomplish something in 1000 lines of code in 10 lines, the 10 lines will almost always be better. This makes it easier to debug, makes it easier to understand and follow, and reduces the amount of obvious noise in your application.

So how can we change this to make this a bit more useful. Well, what if I told you that the function that we just wrote doesn't have a real output? You might argue that console.log is a form of user output. While this is true, that console.log is actually outputting to the console and is not an actual **return** from the function. Let's demonstrate.

```ts
function sayHello() {
  console.log('Hello World');
}

console.log(sayHello());
```

<details>
<summary>What do you think the actual console log from the above is?</summary>

Hello World<br>
undefined

</details>

Notice the output here. The 2nd line prints undefined. A method in JavaScript that outputs _undefined_ is consider a function that has 0 output. It has no **return** value. How do we change this? Introducing the **return** keyword.

```ts
function sayHello() {
  return 'Hello World';
}

console.log(sayHello());
```

```sh
Hello World
```

Now we have the same output. Remember that the definition of a function is that it can only have no output or one real output. In the first case, the output from the function was undefined. Another way to say this is that **the return value from the function was undefined**. Since the output of the function was undefined, the actual output to the console is considered a **side effect**. A side effect of a function is something that the function does in addition to processing the inputs and returning an output. Imagine for a second that when we called sayHello() it returned 'Hello World', but also sent the signal for our computer to shut down. That's a pretty big side effect. That that signal is a form of output, it is not related to the output return value of the function. Thus, it is a side effect.

> While the above may be considered negative side effects of a function, there will be times when you write functions that do nothing but side effects. Remember that the main point of functions is to keep your application DRY. If you have blocks of code that are duplicated, then it is probably appropriate to create a function for those blocks.

On a final note, a function that has no side effects is called a **pure** function.

## Conclusion

This section is short, but we will definitely be returning to more information about functions in later chapters. But for this section, you have learned how to create a function and invoke a function. You also learned about scope blocks and that they are blocks of code between an opening bracket and a closing bracket. You also learned what side effects are and what it means to have a real output, or return value, from a function. In the next section, we will be learning about variables and how to pass arguments to functions using variables.
