# Basics 101 - The DEBTS Daemon

So, you've made the decision to embark on a career in Computer Science, with a specific focus on Software Engineering. This is an excellent choice—investing in your education is always a valuable pursuit, as knowledge is an asset that cannot be taken away. Software Engineers have the opportunity to create incredible things, tackle complex problems, enjoy lucrative careers, and stay abreast of evolving technologies. Whether you're already a seasoned Software Developer looking to advance or someone seeking a refresher on existing knowledge, the world of Software Engineering offers continuous learning.

If you find yourself new to the field, with no prior experience or knowledge of a software compiler, you're facing a significant challenge. The realm of software encompasses nearly a century of history and a multitude of techniques; where does one even begin? While attending college is a solid choice for gaining a comprehensive understanding of computer science—covering history, theory, and techniques—it comes with the potential drawback of accumulating substantial student debt, taking years or even decades to repay. Alternatively, coding boot camps provide a quicker and more cost-effective option, typically spanning just three months, yet they may offer limited coverage and focus primarily on securing employment.

This brings us to Zthunworks University (not an actual institution), which is designed to equip you with the skills needed to become a proficient developer. While I do recommend pursuing a college education for the unique interpersonal and social skills it imparts, I understand that financial constraints or other factors may make it impractical at the moment. In such cases, temporary reliance on online resources, such as YouTube videos and guides, can serve as a viable substitute.

With two decades of software development experience, I've observed a recurring pattern when transitioning between organizations. Integrating into a new system is no trivial task, and more often than not, the expectation is for a developer to become proficient within three months to a year. This time frame can be likened to hiring an electrician to fix your wiring, only to find out you must pay them for an extended period before witnessing potentially effective results. In the software development landscape, this is unfortunately commonplace. In this introductory lesson, I aim to share insights into what I call the _debts daemon_ or _debts.d_ for short. This acronym stands for **Deployment**, **Environment**, **Build**, **Test**, **Share**, and **Debug**. By comprehending these six pillars each time you embark on a new project or engage with a new software system, you can significantly reduce your ramp-up time—from months to as little as a single week.

## Deployment

We always begin with the deployment pillar, a crucial phase that requires a foundational understanding even before embarking on your project—whether during a company interview or at the project's inception. Questions like "What product are you building?" and "How will it solve a problem?" should be addressed early on. Envision how your creation, whether a digital artifact or a physical product, will reach end users. Is it a website, a desktop application, a tangible item, or a mobile app distributed through an app store? Consider the user's journey, from installation to receiving updated revisions. This forms the vision of your project—imagine if you could instantly see the final result, what would it look like?

Arguably the most pivotal aspect, this falls under the umbrella of accessibility. Easy accessibility determines how much it enhances the lives of end users. If accessibility is minimized, making it harder for users to perform a task, your creation risks becoming a forgotten project. Even if you're developing something solely for personal use, maintaining clarity in your vision and goals is essential. Lack of clear goals increases the likelihood of abandoning the project before it sees the light of day.

In organizational settings, goals may be predefined by high-level executives, aligning with the company's direction and problem-solving objectives. Understanding the "what" and "why" is crucial in these scenarios—why are we deploying in a particular manner, and what problem are we solving for our end users?

For personal projects, it's imperative to consider these aspects early on to chart a clear path forward.

A final consideration is not only to make your creation convenient for users but also to streamline the process of putting it in their hands. If building becomes a laborious and cumbersome task, the project may languish and eventually fade away. Keep the concept of "automation" in mind, aiming to minimize redundant tasks in the process from build to release. This approach ensures the longevity and vitality of your project.

## Environment

The second pillar, environment, revolves around tooling—a critical component of your development journey. Consider the tools and external software necessary for your success. Will you opt for the Linux operating system and code in a basic text editor, or are you leaning towards Windows, developing a C# application using Visual Studio, NuGet, and Azure? Company standards may dictate these choices initially, but over time, you'll observe a trend where organizations grant developers the freedom to make their own selections. This phase is a gathering stage, marked by flexibility.

As your software development career progresses, you'll inevitably develop preferences for specific tools. When it comes to tooling, consider your teammates and fellow engineers and the tools they use. You may find yourself utilizing one tool while your desk mate prefers another. However, keep in mind that the infrastructure supporting each tool may differ. While team unity in tool selection is valuable, prioritize what makes you most productive.

This is an ongoing process, not a one-time decision. Your toolkit can evolve over time, with new tools complementing the array you already have. Embracing and adapting to various utilities enhances your prowess as a developer in the long run, as your efficiency may hinge on your familiarity with the chosen toolset. Stay agile, as the dynamic nature of software development continually introduces new tools and methodologies.

## Build

The B stands for build. This can also be called the design of the system. How does the system come together. Is it one giant hodgepodge of source code or is it broken up into little pieces that all communicate with each other - tightly integrated and loosely coupled. Software developers spend most of their time doing this and solving problems that eventually lead to this step.

An easy first step into this is what language you're building with. This sets the foundation for how the system is being built and how different things come together cause the system language has a major influence on its design.

| Language   | Compiler Tools                                                                                                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C          | [gcc](https://gcc.gnu.org/), [make](https://www.gnu.org/software/make/)                                                                                                                            |
| C++        | [g++](https://gcc.gnu.org/), [make](https://www.gnu.org/software/make/)                                                                                                                            |
| C#         | [msbuild](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=vs-2019)                                                                                                              |
| Java       | [javac](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javac.html), [maven](https://maven.apache.org/), [gradle](https://gradle.org/), [ant](https://ant.apache.org/)               |
| TypeScript | [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html), [yarn](https://yarnpkg.com/), [npm](https://www.npmjs.com/), [gulp](https://gulpjs.com/), [grunt](https://gruntjs.com/) |

You will almost always want the command line name of the compiler you're using.

> A lot of IDE's, or Integrated Development Environments, will abstract away the command line tooling for you so you don't have to worry about memorizing a lot of commands and arguments. We'll have a course later on how the terminal works, but for now, it's most likely you'll take care of this in the Environment step of the debts daemon.

## Test

The T stands for testing, and how you will be assuring that what you produce is of high quality. You may be familiar with the quality triangle. Faster, cheaper, or better, pick two. If you choose quality, you will have to have more resources or develop it at a much slower pace than you would like. If you choose fast and cheap, then your quality will suffer. If you have gone the fast and cheap route, then this portion of DEBT will not apply to you, but do be aware that you may be sacrificing the quality to move at a very rapid, unreasonable pace. If, on the other hand, you decide that quality is very important to you, you are going to have to have some form of testing in order to verify that what you build meets those standards.

In order to do this, you must decide not only what to test, but how you are going to test?

![Testing Pyramid](../../media/png/testing-pyramid-256x256.png)

The above testing pyramid describes the general levels of testing that are often found in the industry. Everything inside the pyramid is a level of _testing automation_. What level you choose to test at is mostly going to be up to you and your organization. How deep you are going to go depends on your needs and the needs of the product you're building. At the least, you will want some form of manual testing.

### Unit Testing

This form of testing is not only for quality, but is mostly for developers. At this level, individual units of behavior are tested throughout the code, and there is no outside requirements or resources needed. It is mostly used for refactoring, team coordination, debug access, and code cleanup. It is a form of a quality gate, but it should not be your only form as this level of testing is primarily targeted at developers to keep their code fresh, clean, and maintainable.

> Sometimes you'll see management dictating that this must be done and that you will also be mandated to provide the code coverage to how much you've tested. While this is annoying, and it displays a lack of understanding of what this is truly for, you don't have to balk at it or fight it very much. Once you mature as a developer, you'll find that you actually want to write unit tests regardless of being asked for it or not. It simply becomes a part of the task you are working on and, if you plan on becoming a rock star developer, will be something you provide out of box without even having to be asked.

The following are some unit testing frameworks that you can use for different languages.

| Language   | Frameworks                                                                                                                                                  |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C#         | [NUnit](https://nunit.org/), [XUnit](https://xunit.net/)                                                                                                    |
| Java       | [Junit](https://junit.org/)                                                                                                                                 |
| TypeScript | [Karma](https://karma-runner.github.io/latest/index.html) + [Jasmine](https://jasmine.github.io/)/[Mocha](https://mochajs.org/), [Jest](https://jestjs.io/) |

### Integration Testing

Integration testing is similar process to unit testing, and the task is generally shared between both developers and dedicated QA. Sometimes it moves more in one direction than the other. This form of testing actual is similar to unit testing, but it uses real outside resources such as databases and file systems rather than mocking out those layers.

> If you're a developer, you will want to work closely with QA engineers on this level of testing to make sure that you can run these tests yourself. This way, you will have a deeper understanding of the big picture of what is being developed and how it all integrates. By having a big picture mentality, you will more than likely be more engaged in what is being written.

When choosing to write integration tests, you will normally just use the same framework that you use for writing unit tests as this form of testing is performed in the same manner.

### E2E Testing

E2E testing stands for _end to end_ testing and it is the level below a human opening your application and "clicking all the things." You can think of this layer as a developer who is creating a robot that mimics a QA person. They are actually opening your application, clicking buttons, providing input, and checking the output in an automated fashion. It's a full test that represents how an actual end user is going to be using your product. This is often owned by dedicated QA automation engineers.

> The main reason to invest in this is cost. Generally, it is much cheaper to invest in writing end to end testing and paying a larger cost up front to have the ability to do a full application test by clicking a button and getting back a report of what is working and what is broken. These are generally very valuable in freeing up time from manual testing which can be lengthy and very expensive.

The following are some e2e testing frameworks for various application types. Note that e2e testing is not often dictated by the language, but instead by the type of product being developed.

| Framework                                                                                                       | Used For |
| --------------------------------------------------------------------------------------------------------------- | -------- |
| [Selenium](https://www.selenium.dev/)                                                                           | Web Apps |
| [Protractor](https://www.protractortest.org/#/)                                                                 | Web Apps |
| [Coded UI](https://docs.microsoft.com/en-us/visualstudio/test/use-ui-automation-to-test-your-code?view=vs-2019) | Desktop  |

### Manual Testing

This is what the industry has done for many years before automation became a thing. This is one or more dedicated people sitting behind the desk using the software against many test cases that must pass before a release.

Once you choose how deep you want to go down the pyramid, you will need to decide on the frameworks and tools to use when doing testing.

### Debug

It can be fairly easy to identify what tools are being used to build your software by doing a simple google search. You'll find a lot of references to each tool and how to use them on the command line. However, the more important piece here is how to _debug_ your application. It's inevitable. Your software and creation will most likely not be perfect and you will have to go back through and step through your implementation. It's amazing how many developers you will meet that will refuse to use any form of debugger or have no idea what a debugger is. By choosing to become an expert in the debugger of your chosen technology, you will be a step up at squashing bugs and fast response times. The following are common debuggers for different languages.

| Language   | Debugger                                                                                                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C          | [gdb](https://www.gnu.org/software/gdb/), [Visual Studio](https://visualstudio.microsoft.com/)                                                                                     |
| C++        | [gdb](https://www.gnu.org/software/gdb/), [Visual Studio](https://visualstudio.microsoft.com/)                                                                                     |
| C#         | [Visual Studio](https://visualstudio.microsoft.com/)                                                                                                                               |
| Java       | [Eclipse](https://www.eclipse.org/downloads/), [NetBeans](https://netbeans.apache.org/), [IntelliJ](https://www.jetbrains.com/idea/)                                               |
| TypeScript | [Google Chrome](https://www.google.com/chrome/), [Firefox](https://www.mozilla.org/en-US/firefox/), [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/) |

Notice that the debugger tools often overlap with the environment tools. A good integrated development environment will often have a debugger with it. It is highly recommended to become very familiar with the debugger of the tool you've chosen.

> Another big reason to know you're debugger is that it also acts as a learning tool. If you are brand new to a piece of software, but doing step by step debugging, you can interactively see what is happening on each line of your code base. If you are unsure of where things are happening in an application, simply run the debugger and run though the steps to get to the point your at. Sometimes the bazooka approach is the fastest and most efficient way for knowing what is actually happening.

## Recommendations

At this point, you are ready to dive into the technology of your choice. Before you start, I would recommend you create an account at [Github](https://github.com). Just about all of the courses will be using [Git](https://git-scm.com/) as well for source control so it is recommended to install that as well.

> Github is influential for experienced and new developers. It is one of the main source hubs on the internet for open source projects and is a fantastic place to engage the community and learn new things. If you aren't interested in starting your own projects, there are a lot of projects that you can dive deep into and contribute to.
