# Variable Types

Now declaring variables is a great thing to know and when it comes to understanding the JavaScript language, but just knowing how variables are scoped and how to declare them only puts you at about 10%ish of the language mastery. So once we have variables, what can we do with them?

Before we discuss exactly what we can do with variables, we have to understand something called variable types.

When we talk about variable types, we are really talking about what kind of value is stored in a variable. JavaScript is a "duck type" language. That means, if it looks like a duck, and walks like a duck, it must be a duck. When you create a variable in raw JavaScript, you can put whatever you want into it.

```ts
// Variable is now the number 4
let variable = 4;
// Variable is now the boolean false
variable = false;
// Variable is now the string 'hello world'
variable = 'hello world';
```

Of course, this comes at a cost. Different value types have different **operations** that can be performed on them, so if you attempt to perform something on a boolean value when the value is actually a string, you may get very different results then you were expecting. That is where TypeScript comes in. TypeScript only brings two major features to the table.

1. Type checking
1. Variable access checks

> Generally, most developers agree that shoving multiple value types into a variable can cause a lot of confusion, so it is often better to just create new variables for different value types to prevent that. The main reason for using TypeScript, as the name implies, is to keep track of variable types and stop you from actually putting values where they shouldn't go. TypeScript will stop you from trying to shove a number in as a string unless you are explicitly expecting and handling both variable types; so even though this is all that TypeScript really brings to the table, it's very valuable for catching errors before they occur.

For now, we are only going to discuss type checking that TypeScript supports. TypeScript divides variable types into categories, and there are over 20 different categories. However, most of these are composites of the following three base categories.

1. Literal Types
1. Intrinsic Types
1. Reference Types

When you understand what each of those three categories are, then you will understand the remaining categories in TypeScript.

## Literal Types

A literal type is a variable type that can only be a single value.

```ts
let variable: 4;

// Allowed
variable = 4;

// Will cause a TypeScript error.
variable = 3;
```

You might think to yourself how these types of variables seem useless and unhelpful, but believe it or not, you will actually use these quite a bit.

```ts
// Sample A
const title = 'Zthunworks Claszroom';
console.log(title);
```

Event though the TypeScript type is omitted there, if you were to write this out as a long hand, it would write out as this:

```ts
// Sample A Expanded
const title: 'Zthunworks Claszroom' = 'Zthunworks Claszroom';
console.log(title);
```

In fact, give it a try. Create a quick TypeScript project and an empty TypeScript file. Add **Sample A** to your file. Hover over the title variable and what do you see? Unless TypeScript has changed it's underlying transpiler, you will see something similar to Sample A Expanded.

Literal Types are most useful when they are combined with TypeScripts **union** types. What is a union type? It's simply a list of possible types that the variable can be.

```ts
let variable: 1 | 2 | 3 | 4 = 1;

// OK
variable = 2;
variable = 3;
variable = 4;
// Not OK
variable = 0;
```

## Intrinsic Types

Intrinsic types are the JavaScript built in types. There is a great list and explanation of the intrinsic types [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures), but to paraphrase:

### Undefined

When you have a value that's undefined, it means that the variable has been declared but is not defined. Remember what the keyword **var** does. At the point that the JavaScript engine sets up a named variable section but doesn't give it anything.

```ts
// This variable would currently register as undefined in the debugger or it
// may not even show up. It's declared and the memory is available for it,
// but it doesn't have anything in it.
let variable: any;
```

Any variable of any type can be undefined. There is also an undefined keyword and this can be assigned to a variable that makes it act like it is undefined, but the variable will show up in memory as undefined.

### String

A string is just a sequence of 0 or more characters. If you have a string that has 0 characters, this is called the **empty string**. If you need representation of a single character, then you will use a string with only one character in it.

```ts
// A string of 9 characters (including the space).  Considered a truthy value.
let variable: string = 'my string';
// Empty string - Considered a falsy value
variable = '';
```

For those in the know, each character in a JavaScript string by default is encoded in UTF-16.

> [Character encoding](https://en.wikipedia.org/wiki/Character_encoding) is very important since it represents how big our alphabet can be. If we are using ASCII encoding, which uses 1 byte per character, then we have a limit of 256 possible characters in our alphabet. This is a problem for asian based alphabets because languages like Kanji have thousands of possible characters. Thus, most modern languages use UTF-16 which is 2 byte character set, which gives us a possible alphabet of 65536 possible characters, enough to represent multiple languages in one single character set.

### Boolean

You learned by in the introduction to logic about George Boole. The type, boolean, is named after him and a boolean type can only have two possible values, true, false.

```ts
let variable: boolean = null;
variable = true;
variable = false;
```

### Number

Number types are limited precision types that can be expressed as _integers_, _decimals_, or _scientific expressions_.

```ts
let variable: number = 5;
variable = 700.25333333333333;
variable = 2e10;
```

There is a word of warning when using numbers. Numbers are not precise. Under the hood, numbers use [floating point precision](https://en.wikipedia.org/wiki/Floating-point_arithmetic) in the engine. **Do not use numbers when working with data that cannot have error margins.**

> Imagine writing banking software. Imagine that you are storing numbers in javascript and you get up to an integer that cannot be stored safely and every one of your calculations is off by .01. Now think about how many transactions a bank does in a day. If several banks are using your software and there are hundreds of millions of transactions a day, then the bank may be losing or overcharging millions. That's a big deal.

There is also a special type of number, named NaN, or **Not a Number**. You will see this value a lot when you try to _coerce_ the wrong types for a number. We will see more examples on this later.

### BigInt

In counterpart to a number, a BigInt supports very precise numeric values. There, however, are some key differences. The biggest one, is that you can represent any arbitrary precision number using strings to create them. They use the BigInt function for construction and can only operate with other BigInt types.

So that begs the question, why use number when you can use BigInt?

> The main reason is support. Bigint was not introduce into JavaScript until 2020; thus, if you need to support Internet Explorer, you're out of luck. You can avoid this pitfall with a polyfill, but given that there are several out there in the wild, you have to choose one and they can have their own pitfalls and bugs(do be careful when using polyfills). You also have to be careful when it comes to serialization. If you do serialization of numbers across the internet, the type coming back will always be a number or string. JSON does not support bigint, so you have to make sure all precise numbers must come to you as a string and not a number, and must then be cast to a bigint.

### Symbol

The next type is a Symbol. These types are a bit confusing since there's not a ton of use for them and you don't see these too often. A symbol is basically a value that is unique.

Where these become useful is when interacting with objects and having a hard guarantee that a key will be unique. There will be more on these later. Defining a symbol looks similar to how you define a bigint.

```ts
let variable = Symbol();
// The name here is only for debugging and serves no other purpose.
variable = Symbol('name');
```

Like bigint, you have to be careful when using Symbol types as well.

> Like bigint, symbol is not supported for Internet Explorer, so if you have to support that browser, then you shouldn't use it. JSON serialization is also a problem as well since keys of objects will not serialize unless they are strings or numbers. More on this later.

### Objects

OK, now we're into the mother of all types in JavaScript. An object is basically a value that contains multiple values. Under the hood, all objects in JavaScripts are [hash tables](https://en.wikipedia.org/wiki/Hash_table) that are made up of multiple keys. A key in an object can be a string, a number, or a symbol, but be wary of using a symbol as a key for the reasons described above. You can declare an object by assigning a variable a scoped list of comma separated values.

```ts
let variable = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  heroName: 'Batman',
  author: 'Kane, Bob',
  firstRelease: 1939,
  hasSuperPowers: false,
  0: 2000000
};

// firstName is a key of variable and you can access keys by using the dot, ., operator.
let name = variable.firstName;
let surname = variable.lastName;
// You can also access key values by using brackets.
let id = variables[0];
let isSuper = variables['hasSuperPowers'];
```

There's a lot that we're going to delve into later, but for now, note that every final value is an object. Even the absolute basic types are considered objects, but this gets into an advanced concept. For now, think of objects as a grouping of related values that describe a real world structure. Also, using a type check of object is discouraged in TypeScript.

> Later on in this chapter, we will learn about TypeScript interfaces. Interfaces describe an object and what kind of keys it has and what the types of those keys should be. If you just use 'object' instead of checking against an interface, you lose the TypeScript feature to check against the key types. Always use an interface or an inline object declaration to check object types.

### Functions

Finally, we have function types. Believe it or not, you can assign a variable to a function. In fact, this is one of the most powerful features of JavaScript.

```ts
function identity(val: any) {
  return val;
}

function noop() {}

let func = identity;

// Prints 'hello'
console.log(func('hello'));

func = noop;

// Prints undefined
console.log(func('hello'));
```

> You'll understand this more clearly when we get to constructor functions and the **this** pointer. But for now, you may have guessed that this comes up when you have a key in an object and it points to a function. This is completely valid to do in JavaScript and is a part of how JavaScript supports some [object oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) ideas. By assigning a function to a key in an object, you essentially make an object that has specific responsibilities and those responsibilities can change depending on the object you create.

Much like the object structure, you will avoid declaring things as **function** and will instead use a more TypeScript explicit.

> The reasons are the same as objects. If you use the keyword function to describe a variable, you lose the actual type checking of arguments and return values. Use a reference type instead.

### Null

This is actually not a variable type, but is instead a special value that is similar to undefined. For now, just understand that null and undefined behave similarly, but instead of meaning that a variable is not defined the variable has the value of no value.

```ts
let variable: any = null;
```

> It's not obvious now, but you will start to see the difference between null and undefined when dealing with objects. Objects may or may not have specific keys in them. A missing key in an object is undefined, while an object that has a key with a null value is considered defined. Think of null as the next level up from undefined.

Like undefined, any variable of any type can be assigned the value of **null**. Unlike undefined though, the value of null is stored in memory.

## Reference Types

The final category is reference types. Basically, this refers to types in TypeScript that you declare and reuse in other places. You haven't seen this yet, but it was mentioned in the object section of **Intrinsic Types**.

```ts
interface IHero {
  firstName: string;
  lastName: string;
  heroName: string;
  author: string;
  firstRelease: number;
  hasSuperPowers: boolean;
  0?: any;
}

let variable: IHero = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  heroName: 'Batman',
  author: 'Kane, Bob',
  firstRelease: 1939,
  hasSuperPowers: false,
  0: 2000000
};
```

Above, variable is a reference type. It is a custom type that is not built into the JavaScript ecosystem and is defined by a TypeScript interface or inline object type. Functions are also generally reference types, but defining those is much more complex and requires knowledge that we will get into in a later chapter.

## Conclusion

In this section, you learned about the three main categories of types that TypeScript supports. You learned what the built in types to JavaScript are, and you got a preview of how to declare an interface structure. In the next section, we are going to delve in deeper with interfaces and enums before we tackle our final journey into variables which will be variable operators.
