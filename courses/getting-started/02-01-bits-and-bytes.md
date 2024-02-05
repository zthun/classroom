# Bits and Bytes

When working with any kind of computational systems, you are most surely going to come across the concept of a bit,
which is short for a binary digit. You can think of a bit as the most basic unit of information in computing. A bit
value is either 1 or 0, on or off, true or false, + or -, respectively. How you represent the value does not matter. The
most important understanding is that a bit is simply one of two possible values.

Every piece of information you have on your computer is represented by a series of bits. Your hard drive is just a
collection of large _base 2_ numbers. Your processor understands commands given by _base 2_ codes.

Even the applications you write, regardless of whether they are written in assembly, C++, C#, Java, Javascript, Pascal,
Go, Basic, or any other number of languages that you can think of, at some point down the pipe, they get translated into
a series of bit codes that your processor can understand and execute. **Bits are the language of computers** and they
are used everywhere, from your PC, to your laundry machine, to your television, to anything that runs computational
state math.

## Base X

So you may have caught the reference to _base 2_. Unless you've never heard of mathematics before, or have never seen a
number, chances are, you know _base 10_ very well. You use it in every day life.

When we talk about Base #, the end # just describes the total number of characters in the alphabet. In base 10, the
alphabet should feel very familiar.

```md
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

Does that alphabet look familiar? Now assume that you were told that a number is base 6? What would the alphabet look
like for that?

```md
0, 1, 2, 3, 4, 5
```

The maximum number of base x is x - 1.

So when we talk about _base 2_ what would the alphabet look like for that? Simply put, the entire alphabet is 2
characters.

```md
0, 1
```

Hold on. What if we did something that was beyond _base 10_? How about _base 16_, which is actually commonly used in
programming. In the latin alphabet, we only have 10 digits, so what do we do in this case? The simple answer is we start
using letters instead.

```md
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f
```

So when you see numbers written like 22FE702A, you can almost always assume they are written in _base 16_ as they
include the necessary alphabet. Characters are case insensitive; 22AF is the same as 22af, and if you are ever writing
base 16, prepend the number with 0x.

> You will see the notation 0x a lot. Some languages will use # to denote base 16 as well, especially in css and
> graphics applications regarding colors. Generally though, the standard way of telling people that a number is base 16
> is to put a 0x in front of the number. This will remove any confusion as to what base the number is; 0x1234 is a
> different number from 1234. In math, the number would be written as 1234<sub>16</sub> but when you are writing
> applications, you don't have subscript keys on your keyboard so we use different notations to specify what base the
> number is in. You will only ever use base 10 and base 16 in almost all languages.

## Base X Translations

For an easy way to calculate the value of a base X number, you can use a conversion
[calculator](https://www.rapidtables.com/convert/number/base-converter.html). Any of them will do. You can find apps for
your phone that will do it for you. Math teachers in the 90s used to tell us that we wouldn't have a calculator with us
at all times; guess the joke was on them. However, for educational purposes, here is the manual steps to convert any
base X number to base 10.

Let's look at how we would convert the number 1101<sub>2</sub> to base 10.

| 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| ------------- | ------------- | ------------- | ------------- |
| 1             | 1             | 0             | 1             |

When you are converting any number, you are going to be looking at the position of the digit from the right. **Always
start at 0**. So for this table, multiple the top and the bottom, then add all of the numbers together. So in this case,
it looks like

(2<sup>3</sup> x 1) + (2<sup>2</sup> x 1) + (2<sup>1</sup> x 0) + (2<sup>0</sup> x 1) =

(8 x 1) + (4 x 1) + (2 x 0) + (1 x 1) =

8 + 4 + 0 + 1 =

13<sub>10</sub>

Now, assume for a second we were doing this in base 16. Let's convert the number 52FB

You may be wondering what to add when the character goes beyond 9. Take a guess at this point. What do you think A
represents by itself if converted to base 10?

| Letter | Value |
| ------ | ----- |
| A      | 10    |
| B      | 11    |
| C      | 12    |
| D      | 13    |
| E      | 14    |
| F      | 15    |

So given the knowledge of what the letters represent in base 10 by themselves, let's do our math?

| 16<sup>3</sup> | 16<sup>2</sup> | 16<sup>1</sup> | 16<sup>0</sup> |
| -------------- | -------------- | -------------- | -------------- |
| 5              | 2              | F              | B              |

(16<sup>3</sup> x 5) + (16<sup>2</sup> x 2) + (16<sup>1</sup> x 15) + (16<sup>0</sup> x 11) =

(4096 x 5) + (256 x 2) + (16 x 15) + (1 x 11) =

20480 + 512 + 240 + 11 =

21243<sub>10</sub>

So given this algorithm, for any generic number written in base b with y digits, you can use the following table and
equation to translate to base 10:

| b<sup>y</sup> | b<sup>y-1</sup> | b<sup>y-2</sup> | ... | b<sup>0</sup> |
| ------------- | --------------- | --------------- | --- | ------------- |
| d<sub>y</sup> | d<sub>y-1</sup> | d<sub>y-2</sub> | ... | d<sub>0</sub> |

(b<sup>y</sup> x d<sub>y</sub>) + (b<sup>y-1</sup> x d<sub>y-1</sub>) + (b<sup>y-2</sup> x d<sub>y-1</sub>) + ... + (1 +
d<sub>0</sub>)

| Variable | Meaning                             |
| -------- | ----------------------------------- |
| b        | The base that the number is in.     |
| y        | The total number of digits/letters. |
| d        | The character number at position y. |

<hr>

Honestly, while it's an awesome skill to be able to do all of those calculations in your head, if you have a calculator
that can do the conversion, just use that. Why use a pot to cook rice when you have a rice cooker that will cook it
perfectly with less mistakes. You will almost never need to make these kinds of conversions for yourself on the fly in
the real world.

## Bytes

To conclude this, while all of the information above is a nice to know, you will almost never refer to numbers in
programming as bit strings. Instead, you will use a byte. What is a byte? It's 8 bits.

> Why 8, and not 4 or 2, or even 11? Honestly, the
> [history](https://en.wikipedia.org/wiki/Bit#cite_note-Abramson_1963-6) is pretty extensive and spans many years.
> There's many reasons, but the most common accepted one is that 8 is a really nice power of 2. There is a term for 4
> bits call a **nibble** but nobody uses that, sans those who want to be impressive at nerdy parties. Most processors
> operate on octets which is also 8 bits so it lines up nicely.

You may have heard a lot of terms ending with bytes.

| Unit     | Is         | Short |
| -------- | ---------- | ----- |
| Byte     | 8 bits     | None  |
| KiloByte | 1000 Bytes | KB    |
| MegaByte | 1000 KB    | MB    |
| GigaByte | 1000 MB    | GB    |
| TeraByte | 1000 GB    | TB    |
| PetaByte | 1000 TB    | PB    |
| KibiByte | 1024 Bytes | KiB   |
| MebiByte | 1024 KiB   | MiB   |
| GibiByte | 1024 MiB   | GiB   |
| TebiByte | 1024 GiB   | TiB   |
| PebiByte | 1024 TiB   | PiB   |

Ever wonder why your hard drive, when marketed as 128 Gigabytes doesn't show up as 128 in your operating system? Where
does the rest of those bytes go? They haven't gone anywhere. The problem is that your computer is calculating the total
amount of space in the Kibi, Mebi, Gibi, Tebi, Pebi notation. So when market people sell you a 1 TB hard drive, you are
actually getting a 931 GiB hard drive. Does that number look familiar?

Most people won't care too much and are now accustomed to getting close to what they asked for. However, this becomes
extremely important when making calculations in programming. **You will always use 1024 when running calculations on
file sizes, space sizes, and anything where you need to know the byte size.**

> Your computer and processor thinks in bits which is base 2; _NOT_ base 10. So when you convert from something like a
> KB to the total number of bytes, you must multiply by 1024 to get the exact amount that your computer will see. Don't
> be fooled. Dividing by 1000 is great to get nice rounded numbers in marketing, but when getting the total number of
> bytes available, you will have severe rounding errors if you simply multiply by 1000.
