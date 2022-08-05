# Exercise 11.1: Warming up

## CI/CD Pipeline

We have a hypothetical situation where we have an application being worked on by a team of about 6 people. The application is in active development and will be released soon. The application is coded with **Java**. The following reflections and considerations are based on that situation.

### Tools

#### Linting
Linting is a great way to catch possible bugs and errors before compiling or running the program itself. In Java there are many good linting tools. The most popular ones are Checkstyle, PMD and Error Prone. For example Checkstyle has regular updates, is available as plugin for a wide variety of IDE's and has premade config files with configurability. So linter tools are quite simple to use and atleast the most popular ones have good documentations.

#### Testing
Testing is needed to make sure that code works correctly. While the code may pass linting, it still could do wrong things. There are many testing tools for Java. JUnit is the most popular unit testing framework for Java. It's quite simple tool to create unit tests can be easily automated. Other popular testing tools for Java are for example Selenium and Serenity. With Selenium testing is emphasized more to interface side and web browsers.

#### Building
In Java language builder is responsible for compiling the java source code and generating classes. Most common Java building tools/frameworks are Maven, Gradle and Ant. Maven is more like a build management tool though, and Ant is mainly just for building. Most of the building tools can be automated.

### Alternatives to set up the CI besides Jenkins and GitHub Actions
Alternative tools for setting up CI are for example Bamboo, GitLab CI, Buddy and Circle CI. These tools offer both cloud or on-premise hosted CI.

### Self-hosted or Cloud-based environment
In this case, as we have a small 6 people team, I think cloud-based environment would be a better choice. Cloud-based environment doesn't need that many resources to build and maintain the services. Team can focus on application and cloud service is taking care of CI/CD side. If the project has more specific needs, team has already hardware suitable for hosting that kind of service and team has peoples with proper skills for that side, I would consider self-hosted option. And of course costs are one big factor for that decision.
