# Basics 101 - The DEBTS Daemon

So, you've made the decision to embark on a career in Computer Science, with a specific focus on software engineering.
This is an excellent choice—investing in your education is always a valuable pursuit, as knowledge is an asset that
cannot be taken away. Software Engineers have the opportunity to create incredible things, tackle complex problems,
enjoy lucrative careers, and stay abreast of evolving technologies. Whether you're already a seasoned Software Developer
looking to advance or someone seeking a refresher on existing knowledge, the world of Software Engineering offers
continuous learning.

If you find yourself new to the field, with no prior experience or knowledge of software development, you're facing a
significant challenge. The realm of software encompasses nearly a century of history and a multitude of techniques;
where does one even begin? While attending college is a solid choice for gaining a comprehensive understanding of
computer science—covering history, theory, and techniques—it comes with the potential drawback of accumulating
substantial student debt, taking years or even decades to repay. Alternatively, coding boot camps provide a quicker and
more cost-effective option, typically spanning just three months, yet they may offer limited coverage and focus
primarily on securing employment.

This brings us to Zthunworks University (not an actual institution), which is designed to equip you with the skills
needed to become a proficient developer. While I do recommend pursuing a college education for the unique interpersonal
and social skills it imparts, I understand that financial constraints or other factors may make it impractical at the
moment. In such cases, temporary reliance on online resources, such as YouTube videos and guides, can serve as a viable
substitute.

With two decades of software development experience, I've observed a recurring pattern when transitioning between
organizations. Integrating into a new system is no trivial task, and more often than not, the expectation is for a
developer to become proficient within three months to a year. This time frame can be likened to hiring an electrician to
fix your wiring, only to find out you must pay them for an extended period before witnessing potentially effective
results. In the software development landscape, this is unfortunately commonplace. In this introductory lesson, I aim to
share insights into what I call the _debts daemon_ or _debts.d_ for short. This acronym stands for **Deployment**,
**Environment**, **Build**, **Test**, **Share**, and **Debug**. By comprehending these six pillars each time you embark
on a new project or engage with a new software system, you can significantly reduce your ramp-up time—from months to as
little as a single week.

## Deployment

We always begin with the **deployment pillar**, a crucial phase that requires a foundational understanding even before
embarking on your project—whether during a company interview or at the project's inception. Questions like "What product
are you building?" and "How will it solve a problem?" should be addressed early on. Envision how your creation, whether
a digital artifact or a physical product, will reach end users. Is it a website, a desktop application, a tangible item,
or a mobile app distributed through an app store? Consider the user's journey, from installation to receiving updated
revisions. This forms the vision of your project—imagine if you could instantly see the final result, what would it look
like?

Arguably the most crucial aspect, this falls under the umbrella of accessibility. Easy accessibility determines how much
it enhances the lives of end users. If accessibility is minimized, making it harder for users to perform a task, your
creation risks becoming a forgotten project. Even if you're developing something solely for personal use, maintaining
clarity in your vision and goals is essential. Lack of clear goals increases the likelihood of abandoning the project
before it sees the light of day.

In organizational settings, goals may be predefined by high-level executives, aligning with the company's direction and
problem-solving objectives. Understanding the "what" and "why" is crucial in these scenarios—why are we deploying in a
particular manner, and what problem are we solving for our end users?

For personal projects, it's imperative to consider these aspects early on to chart a clear path forward.

A final consideration is not only to make your creation convenient for users but also to streamline the process of
putting it in their hands. If building becomes a laborious and cumbersome task, the project may languish and eventually
fade away. Keep the concept of "automation" in mind, aiming to minimize redundant tasks in the process from build to
release. This approach ensures the longevity and vitality of your project.

## Environment

The second **pillar, environment**, revolves around tooling—a critical component of setting yourself up for successfully
working in a complex system. Consider the tools and external software necessary for your success. Will you opt for the
Linux operating system and code in a basic text editor, or are you leaning towards Windows, developing a C# application
using Visual Studio, NuGet, and Azure? Company standards may dictate these choices initially, but over time, you'll
observe a trend where organizations grant developers the freedom to make their own selections.

As your software development career progresses, you'll inevitably develop preferences for specific tools. When it comes
to tooling, consider your teammates and fellow engineers and the tools they use. You may find yourself utilizing one
tool while your desk mate prefers another. However, keep in mind that the infrastructure supporting each tool may
differ. While team unity in tool selection is valuable, prioritize what makes you most productive, and don't be afraid
to try new things to see if they solve any problems for.

This is an ongoing process, not a one-time decision. Your toolkit can evolve over time, with new tools complementing the
array you already have. Embracing and adapting to various utilities enhances your prowess as a developer in the long
run, as your efficiency may hinge on your familiarity with the chosen tool set. Stay agile, as the dynamic nature of
software development continually introduces new tools and methodologies. This not only ensures the system stays current
but also acts as a preventive measure against potential software decay.

## Build

The **build pillar** stands as the cornerstone where developers invest a significant portion of their time, shaping the
very essence of software development—an art as much as it is a science. This pillar encompasses the language, design,
and architecture that define the system you are working on.

The choice of a development language marks the initial focal point of the build pillar, and its significance resonates
throughout the system you are working on. Understanding that each language possesses distinct strengths is crucial. For
example, C excels in firmware development for physical devices, while Python is more apt for constructing an AI platform
due to its robust ecosystem. If your focus lies in data analytics and analysis, considering R is prudent. On the other
hand, general-purpose languages like C# and Java find widespread utility across diverse organizational contexts. The key
takeaway is that a system should not be confined to a single language; you'll likely navigate through the nuances of
more than one, each serving a unique purpose. The use of each language should align with the type of system you are
trying to build, and it's important to use languages that respect a projects requirements.

The deployment and environment pillars intersect with the build pillar, particularly in the process of compilation—the
transformation of raw source code into machine-readable executables. Each language has its dedicated compiler or
interpreter; for instance, C relies on the gcc compiler, while TypeScript employs tsc to transpile code into JavaScript
to be interpreted by an engine. The choice of language influences the tools required to automate the journey from source
code to executable, marking the inception of the development pipeline.

Beyond language and tooling, the build pillar delves into system design, algorithms, and architecture patterns. While an
in-depth discussion on software patterns and algorithms is reserved for a later module, understanding the technologies
and techniques employed in the system provides a foundational insight into how an application is functioning. Is it a
monolithic application, consolidating all source code into a single entity, or a collection of small, collaborative
applications with distinct responsibilities? Does it rely on public REST services, sharable libraries, or a combination
of both? Grasping these concepts aids in navigating through the system forest, whether you're building from scratch or
joining midway.

For newcomers with control over the system they want to build, I recommend starting with monolithic applications for
their simplicity and educational value. However, be prepared to confront the industry trend toward small microservices,
where discrete units collectively form a comprehensive application.

## Test

The **test pillar** is not what one might traditionally envision. In modern development, quality is a collective
responsibility; it extends beyond the confines of a QA department to include everyone involved. As developers, our
commitment to quality goes beyond merely producing functional code; it entails ensuring that the code is maintainable
and adaptable over time. When we discuss testing in a development context, we are not referring to manually executing an
exhaustive list of test steps from a cumbersome encyclopedia. This outdated and labor-intensive process is a significant
time sink. Instead, this pillar encourages you to contemplate how to automate your testing workflow, enabling confident
modifications and refactoring as the codebase evolves. This is typically achieved through various testing styles, such
as unit testing, integration testing, and end-to-end testing.

In the past decade, there has been a notable shift towards a test-first structure, where test cases and test automation
are crafted before any feature code is written. This approach is known as test-driven development or behavior-driven
development, depending on its application, and has become a standard practice in most organizations. The guidelines for
testing boundaries are well-documented in the modern
[test pyramid](https://martinfowler.com/articles/practical-test-pyramid.html).

When working with a system, keep in mind the testing frameworks you plan to use, as these vary across different
languages. For instance, Java employs JUnit, JavaScript offers options like Jasmine, Jest, and Vitest, C# provides NUnit
and XUnit, and Python relies on PyTest. Even terminal-based scripting languages like PowerShell in Windows have tools
like Pester for testing scripts. Test frameworks are deeply integrated into modern development, and staying informed
about them is crucial.

While the realm of testing can be an extensive field of study with dedicated subsections in computer science, as a
developer, it's essential to at least consider how and why you plan to test. Test automation is not merely a managerial
mandate; it's a practice embraced by professional developers. It streamlines the development process, boosts team
confidence, and enhances the overall quality of code. Mastering the art of automated testing for your written code
results in higher quality outputs, facilitates easier refactoring, and aligns with good software design principles.

## Share

In the **share pillar** of software development, the emphasis is on sharing code efficiently among developers. As the
system you are working on grows, you'll inevitably create code that others may find valuable. The DRY principle,
standing for "Don't Repeat Yourself," discourages the amateur practice of copying and pasting code. While this was
common two decades ago, the advent of package management has transformed the landscape, forming the foundation of the
share pillar. The question becomes, how can you share your code for other developers to easily consume, while working on
different areas of the system?

Navigating this challenge involves being aware of available technologies and establishing effective application
boundaries for splitting code in a logical manner. Additionally, determining where the split code should be deployed is
crucial. Much like compilers and testing frameworks, the choice of a code sharing repository depends on the programming
language you are using. For example, Java relies on [Maven](https://central.sonatype.com/), C# utilizes
[NuGet](https://www.nuget.org/), JavaScript and TypeScript leverage [NPM](https://www.npmjs.com/), and Python turns to
[PIP](https://pypi.org/).

Once you understand the package management system relevant to your language, you gain the necessary tools to seamlessly
share code across teams and applications. The primary challenge then shifts to determining "what" precisely needs to be
shared and what are the cross cutting concerns that a system requires.

## Debug

The concluding **pillar, debug**, assumes a distinct role as the smallest yet most focused element among the pillars. At
its core, it revolves around a fundamental question: "How do I interrupt the execution of this application and
strategically set breakpoints to scrutinize its inner workings?" Surprisingly, many developers navigate their entire
careers without delving into the realm of debuggers, relying instead on log dumps to stumble towards a resolution. This
reluctance is a missed opportunity, as the debugger for a language is as an invaluable tool, not only for issue
resolution but also for comprehending the architecture and structure of the codebase. Unfortunately, this aspect is
often overlooked in code bootcamps, which may neglect the crucial skill of utilizing debuggers for the specific language
being learned and utilized.

In contrast to the broader concepts and collaborative nature emphasized in most pillars, debug is a profoundly personal
endeavor. The methodology and tools employed for debugging are left to individual preference. Unlike other pillars that
address "what" and "why," debug starts with a "how." Its primary objective is to cultivate you into an effective
developer. It represents the tangible demon within the debts daemon, a crucial aspect that demands attention.
Acknowledging that it's acceptable not to discern code issues at first glance is pivotal; that's precisely the role
debuggers are designed to play. Embracing the debugger not only aids in issue resolution but is also a pathway to
becoming intimately acquainted with the intricacies of the codebase.

## Conclusion

Congratulations, you've made it! In this introductory module, you gained insights into the debts daemon and the six
pillars that constitute a software developer's introduction into a new or existing software system. Moving forward,
we'll delve into training sessions that focus on techniques, tools, languages, and methodologies, with the aim of
transforming you into the most adept developer possible. Get ready to "git gud!" — your journey into excellence has just
begun.
