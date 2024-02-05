# Back to Functions

So now that we understand how variables are scoped and how to declare them, we can complete the full lesson on
functions. Since functions make up the bulk of JavaScript, we are going to be them to make sure you understand them
fully. This won't be the last chapter on functions as we will need to discuss them a bit more when we get to objects and
when we talk about the **this** pointer. For now, we are going to learn how to send input to functions, how to deal with
invoking functions using call and apply, and how to create new functions using bind.

## A More Complex Example

So do you remember our function of say hello? Let's say we wanted to transform that msg to sentence case. What is
sentence case? Basically, the first character of a string is upper case and the rest are lower case. There are obvious
exceptions, such as proper nouns, but for now, let's just not worry about proper nouns yet and lets

```ts
/**
 * Takes a single input string and outputs it as sentence case.
 *
 * @param msg The message to transform.
 *
 * @returns The message in sentence case.
 */
function toSentenceCase(msg: string): string {
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
```

Now that function is a mouthful and we have introduced some new concepts here. We're going to break this down piece by
piece.
