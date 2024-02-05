# Paying your DEBT

Welcome to a newbie's guide for C# development. Pronounced as _see sharp_, it is an object oriented language that was
developed by Microsoft in the year 2000 as part of its .Net initiative. For the ultimate series of guides and updated
information on the language, check out the main [Visual Studio](https://visualstudio.microsoft.com/) website for tools,
news, and updates.

As of 2021, C# is still one of the
[more popular and widely used programming languages](https://pypl.github.io/PYPL.html) of the day, so if you are looking
to gain skills in a language that has a large community of support, has major backing by Microsoft, and has more
features and niceties than Java, then C# may be the language for you.

Given its popularity, you will be somewhat limited on the tooling that is available to you. Unlike languages, such as
Java, TypeScript, and Python, wanting to do development in C# is a guaranteed to put you into the
[Visual Studio](https://visualstudio.microsoft.com) ecosystem. There are other integrated development environments that
can be used, but they don't have the backing, and some of the alternatives have been abandoned.

> Note that most of the installer tutorials here use [chocolatey for Windows](https://chocolatey.org/) and
> [brew for OSX](https://brew.sh/). Like an app store, installing through these means have the advantage of allowing
> batch updates when new features and versions arrive. If you are not able to install any applications, due to being on
> a computer that is not yours, then you can essentially skip the installation steps here and just use something like
> [Replit](https://repl.it/) for the activities.

## Deployment

How are .Net and C# apps deployed and consumed by users? Depending on what you kind of application you're developing,
the basic output from an overwhelming majority of C# projects will either be an _executable_, .exe, file, or a _dynamic
linking library_, .dll, file.

Common deployments for dlls use the [NuGet](https://www.nuget.org/) package manager, which helps you build code that
other developers can consume and use across multiple applications. Desktop applications will normally be installed using
something like [chocolatey](https://chocolatey.org) or an actual installer that takes the user through a wizard which
puts files where they need to go.

When you start a project in .Net, you will generally apply the following rules for deployment.

| Project Type        | Final Output To User      |
| ------------------- | ------------------------- |
| Desktop Application | Executable with Installer |
| Anything Else       | Dynamic Linking Library   |

> It is possible to distribute a desktop application through a compressed zip file and have the end user extract the
> application wherever they want. However, the experience of this is more advanced for an average user and most everyday
> people are used to running through installer wizards if they know how to install software at all. Also note that once
> you learn to build DLL files, remember that with great power comes great responsibility. You will often see
> applications with thousands of DLL files for no other reason other than "it was just built that way." DLLs can become
> a cancer in an application and too many of them become an unmanageable nightmare. The ultimate question of "why"
> becomes incredibly important here. If you have no reason to build a DLL into your final executable, then don't do it.
> You aren't going to need it and you will thank yourself later.

## Environment

Setting up your environment for development is fairly straight forward. For this course, if you do not have your own
system, you can simply skip these installation steps and just use [Replit](https://repl.it/) .

At the core of everything C# is [Visual Studio](https://visualstudio.microsoft.com/). Visual Studio is a fully
integrated development environment (IDE) and is the core choice for most C# developers. With Microsoft finally starting
to release many of their tools in the open source space, there is a nice a community edition of Visual Studio that is
free for students, open source projects, and individual developers. For the sake of simplicity, we will be using Visual
Studio for the remainder of our tutorials.

> Due to Visual Studio not being able to easily run in an ODE (Online development environment), you may eventually want
> to invest in a cheap pc if you don't currently have your own system and can afford it. It can be the cheapest thing
> you find at a Walmart and while it won't be the best developer experience, it will get you started and you will able
> to develop and learn the necessary skills to become a fully fledged C# developer. There are some other tools that you
> may be interested in [here](https://stackify.com/best-csharp-tools/#IDEs), but be aware that you most often find
> organizations just use Visual Studio for the most comprehensive C# .Net development environments. Replit also does not
> use the official .Net Frameworks provided by Microsoft but instead uses Mono, a third party developed framework which
> emulates the .Net Framework for cross platform support.

```sh
# Windows
choco install visualstudio2019community -y

# Mac
brew install --cask visual-studio
```

If you haven't already, you will probably also want some kind of source control to host your activities and projects. A
good idea is to host your source code for your solutions at [GitHub](https://github.com) where you can essentially share
and get tips from the community.

```sh
# Windows
choco install git -y

# Mac
brew install git
```

## Build and Debug

Though most of the time you will be building through Visual Studio, underneath the hood it uses
[MSBuild](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=vs-2019) to output your project. If you are
unfamiliar with languages compilation, remember from getting started that the language of your computer is a series of
binary digits. While we haven't even discussed what C# code looks like yet, take a quick look at the example below.
You'll see this exact snippet in the next chapter.

```C#
public class Program
{
  public static void Main(string[] args)
  {
    Console.log("Hello World!")
  }
}
```

You can't give that directly to your computer and tell it to run; it won't know what to do with it. Instead, your
computer will need to take that code and translate it to something that the system can actually read and execute. This
process is called _Compiling_; in earlier languages, there was a secondary step called _Linking_, but you don't have to
worry about it at all in C# as that process is handled behind the scenes. MSBuild is the compiler and it takes, as an
input, a .sln file, a .csproj file, or a list of .cs files to translate to a binary executable understood by your
system.

An entire C# solution will always look something like this.

- Solution File (.sln)
  - Project File (.csproj)
    - Dependencies (.nupkg)
    - Source Files (.cs)
    - Resource Files (.resx)
  - Project File (.csproj)
    - Dependencies (.nupkg)
    - Source Files (.cs)
    - Resource Files (.resx)
  - etc.

At the root of the tree, your solution (.sln) file is a collection of everything that makes up the application. By it's
very nature, all C# source repositories are [monorepo](https://en.wikipedia.org/wiki/Monorepo) based, meaning that they
can output multiple .dll and .exe files. A solution is then made up of various individual C# projects, (.csproj) files.
Each project will output an .exe file or a .dll file. Going further into the tree, each project is then made up of three
general parts. The first is its dependencies, which are generally [NuGet](https://www.nuget.org/) packages with shared
code in them, other .net assemblies (dll files) that come included with the .net framework, or external dlls that you
have written yourself. The second are resource files which are generally used for string dictionaries. These are needed
for localization of your applications and allow it to appear in different languages. The final type of files that make
up a project are the source code files which have the .cs extension. For most of the course, we are going to be working
with dependencies and source files. When you give MSBuild the solution file, it will compile everything and output every
file needed by each project.

When it comes to debugging, we are going to simply use Visual Studio as the debugger. It has everything we need to step
through our code. More instruction on this will be given in the first major lesson.

## Testing

Testing is always something that should be done up front and not as an afterthought and given the crazy amount of
testing frameworks available across all languages, C# is no exception.

There are generally two major frameworks that most people use. The most common ones you will hear are XUnit, NUnit, and
MSTest. MSTest comes built into visual studio but it isn't used as much as NUnit and XUnit. As of 2021, XUnit is
currently the most popular framework and, when we get to adding unit tests to our code, will be the framework of choice.
This framework will be used when launching any area of our testing pyramid.

Do remember that XUnit is actually divided into 2 separate entities. The first is a runner which is an actual executable
(.exe) used to run the tests that you write. The second is a framework library (.dll) that you have as a dependency on a
test project. This framework library provides you with the building blocks you will need in order to build your tests.
Your actual testing project should output a .dll file.

## Putting it Together

At this point you are ready to start writing your very first application.
