# Your First Console Application Quiz

<details>
  <summary>What is the purpose of a "Hello World!" application?</summary>

It's to pinpoint the applications entry and exit point. It also shows how to display output to the user.

</details>

<details>
  <summary>What is the name of the case convention for naming projects, namespaces, classes, interfaces, and methods?</summary>

Pascal Case

</details>

<details>
  <summary>Why do we include our domain for our projects</summary>

It avoids naming conflicts.

</details>

```cs
using System;

namespace Domain.HelloWorld
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

<details>
  <summary>What is the using statement for?</summary>

It imports shared code from other DLL files.

</details>

<details>
  <summary>What is the namespace for?  What is this similar to on a file system?</summary>

It creates an organization structure for our classes and objects. It's like a directory on a file system.

</details>

<details>
  <summary>What is special about that Main method?  Why should there only be one of these in an executable application?</summary>

It is the entry point of a .Net application. You can only have one Main method upon compilation time and any others
would just be noise and dead code.

</details>

<details>
  <summary>What is the point called in the debugger where program execution halts?</summary>

A breakpoint.

</details>

<details>
  <summary>When debugging, what is the difference between Step Over and Continue?</summary>

Step over continues the execution of the program until the next line. Continue continues the execution of the program
until the next breakpoint.

</details>
