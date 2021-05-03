# Project Evaluation

A brief description of what this section is about.

## Table of Contents
- [Reflective Discussion of The Success of The Project](#reflective-discussion-of-the-success-of-the-project)
	- [Reflection on Working Practices](#reflection-on-working-practices)
- [Industry and Academic Reviewk](#industry-and-academic-review)
	- [Academic Review](#academic-review)
- [Discussion of Future Work](#discussion-of-future-work)
- [Social and Ethical Implications](#social-and-ethical-implications)
- [Bibliography](#bibliography)

## Reflective Discussion of The Success of The Project
Details of how you evaluated your designs (techniques used & awareness of their limitations). Description of techniques suitable for your particular design. A timeline of evaluation of your design

### Unit testing / Functional testing.
Testing of the site, as a whole, was a weak/forgotten point of the development. All testing was done in a functional testing format as this was quicker and simpler than unit testing. The testing normally followed a certain work flow carried out by the developer. On implementation of a task, the developer would be constantly building the site with docker and viewing it in their browser to ensure either the right look/layout or logic was being built. After the task was finished the group would be notified and the implementation would be pushed on to the remote repo and merged into develop. Any conflicts would then be dealt with by the merger and then site function testing would happen by the developer and normally one other (for minor features/changes an extra person wasn't needed) would check there were no obvious bugs in the workings of the components, pages and site. Luckily the site only consisted of three (main) pages and each task you can do on the pages is limited so testing the whole site after a change only took a couple of minutes. 

Examples of the final functional test scripts a developer would generally follow have been screenshotted below, however these were created after most of the testing had actually done. For most of the testing it was an iterative process, for example belows image of the changing food quantities test plan shows the total quantity of food items being tested for (Test C). However this was originally not done by the developers, the increment and decrement buttons were implemented and functionally tested that they worked for each food item on the list. It was then shown in the stand up meeting where the bug was pointed out and fixed after. Then the total was tested alongside the increment/decrement buttons to check they were all working together as they should.

![Changing food quantities test plan](https://github.com/gabrielchuv/SE7/blob/develop/Portfolio/Images/food_quantity_test_plan.png)
![Money estimate/Sally test plan](https://github.com/gabrielchuv/SE7/blob/develop/Portfolio/Images/money_estimate_test_plan.png)

For a bigger site (with more pages, components etc) unit testing would have had to have been used, as constantly loading the site and testing it would have taken too long. Unit testing may have also sped up the development as the tests could be set to run upon each build of the site with docker and bugs would have been instantly spotted as opposed to having the developer go through each page looking for bugs. For layout/design of the site, unit tests aren't really relevant so the only area that was potentially slowed down by not doing them was the business logic of the site.

User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications

Reflective discussion of the success of the project. How well did your project fulfil the brief? Were all of your own objectives met

### Reflection on Working Practices
Reflect on the working practices of your group, how well they did or did not work, e.g, management of issues, communication, Agile (etc)


## Discussion of Future Work
Discussion of future work (in terms of design, development and evaluation)

## Social and Ethical Implications
The following sections will address the social and ethical implications of our project. We followed [the nine UNICEF principles](https://ssir.org/articles/entry/the_ethics_of_innovation) in developing our web application to ensure that we have achieved ethical innovation.

### 1. Design with the user 
Throughout the development of our prototype, we have ensured to involve the user at every stage (more details can be found [here](/UXDesign.md)). We sent out surveys to understand who our users are, and we conducted interviews to better understand our design decisions.

### 2. Understand the existing ecosystem
Our aim for this project was to raise awareness about food waste. We have therefore, conducted extensive research about the issue (with the focus on the UK specifically) to better understand the causes of food wastage. In addition, we reviewed current solutions available which addresses the issue (for more details [here](#industry-and-academic-review)). With this research in mind, we started designing our web application.

### 3. Design for scale
We have used the MEAN stack in developing our web application, which means that it is flexible and scalable. 

### 4. Build for sustainability
Because of the nature of our project, we have not conducted extensive code analysis or similar to better understand the power consumption of our web application, however, we have done several things to avoid technical debt; (1) We have removed all code deemed unnecessary and ensured that the code we produce is simple and maintainable. (2) We have divided our project structure into two parts, frontend and backend, which helped us in distinguishing the two and thus, created less confusion in the developing process. (3) Finally, we divided our web applications into components, this makes the web application more testable and easy to maintain, because each component can be targeted directly.

### 5. Be data driven
Throughout development, we have continuously collected data from our users in order to better understand our design decisions. At the very beginning of our design process, we sent out two surveys to better understand our users and their thoughts about food waste (more details [here](/UXDesign.md)). In addition, various interviews were conducted at each stage of the design process. We collected feedback from each interview and modified our design accordingly. 

### 6. Use open standards, open data, open source, and open innovation
We have used [the MEAN stack](/SystemImplementation.md) to develop our web application. All of these tools are open-source, and we have to ensured to use tools in which are already available to make the development process as efficient as possible. In addition, all documentation for the current project is hosted on Github on a public repository. All users have therefore access to this repository and the source code.

### 7. Reuse and improve
As mentioned in section 6, we have used the MEAN stack to develop our web application. In addition, we have used Bootstrap and Angular materials which we have customised (and modified) to fit the requirements of our project. 

### 8. Do no harm
We designed a web application with the intention of raising awareness about food waste and the impact it has on the environment. We wanted to create something that is simple but effective. The application put emphasis on money, food waste, and environmental impacts. This is something we purposely designed because we hoped that by showing the user how much money they have wasted, it will encourage them to waste less because it is impacting them on a personal level. In addition, the environmental statistics further spread awareness about the wider impact food waste has on the environment.

This web application sole purpose is to encourage users to waste less and raise awareness about the impact food wastage. To our knowledge, we do not believe that it will cause any harm or distress.

Furthermore, we have ensure to include a cookies notice, which users can opt out of if they wish to. In addition, a privacy notice is included in our web application to address any privacy concern our users may have.

### 9. Be collaborative
As mentioned in section 1 and 5, we have involved the user at every stage of development. The users we have spoken to did not all have a background in Software Development, which meant that we were able to get a lot of different perspectives on our design.
<br></br>


## Bibliography
