# Your First Console Application Activity

## Printing Your Domain In Ascii Art

For this project, you are going to be creating a new project and outputting your domain in ascii art fashion.

> The overall goal of this activity is to see if you can take what you learned from the current chapter and create your own project from scratch. It will also challenge you to figure out how to do something which WASN'T covered in the material and you must figure out yourself what to do.

You can use [this tool](https://www.patorjk.com/software/taag/#p=display&f=Big&t=Type%20Something%20) to output your domain art. **Use the Big font for this activity.**

The following are the requirements:

```gherkin
Given An empty directory
When I create the new project
Then the project name is in the format (Domain).(Project)

Given that I have an ascii art version of my domain
When I attempt to build the application
Then it compiles successfully even when special characters are encountered.

Given the project compiles and builds correctly
When I run the application
Then my domain name prints in the Big font to the console cleanly with ascii art.
```

The following is an example output that would display to the screen if you choose Zthunworks as your domain.

```sh
~ ./Zthunworks.DomainPrinter.exe
```

```output
  _______   _                                   _
 |___  / | | |                                 | |
    / /| |_| |__  _   _ _ ____      _____  _ __| | _____
   / / | __| '_ \| | | | '_ \ \ /\ / / _ \| '__| |/ / __|
  / /__| |_| | | | |_| | | | \ V  V / (_) | |  |   <\__ \
 /_____|\__|_| |_|\__,_|_| |_|\_/\_/ \___/|_|  |_|\_\___/
```

For the scope of this project, we won't worry about wrapping or screen sizes. Just assume that this will run on a standard 1920x1080 monitor.

## Hints

<details>

  <summary>I'm getting errors when trying to print a backslash (\)</summary>

What are some tools that you can use to figure out how to print these special characters? Where can you look for answers? If only there was some way to **search** for this on the internet.

</details>

<details>
  <summary>I figured out how to print those special characters, but while my output is beautiful and meets the requirements, my code is a bit messy and doesn't line up properly.  Am I doomed to the internal mess for clean output?</summary>

If only there was **some way to print special characters as _literals_ in C#**.

</details>
