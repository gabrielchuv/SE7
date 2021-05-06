# Project Evaluation And Reflections

## Table of Contents
- [Design Evaluation & User Acceptance Testing](#design-evaluation-and-user-acceptance-testing)
- [Unit testing / functional testing](#unit-testing-/-functional-testing)
- [Reflective Discussion of The Success of The Project](#reflective-discussion-of-the-success-of-the-project)
	- [Reflection on Working Practices](#reflection-on-working-practices)
	- [Reflection on The Impact of COVID-19](#reflection-on-the-impact-of-COVID-19)
- [Social and Ethical Implications](#social-and-ethical-implications)
- [Discussion of Future Work](#discussion-of-future-work)

## Design evaluation and user acceptance testing
The contents of this section are embedded in the [UX Design](https://github.com/gabrielchuv/SE7/blob/develop/Portfolio/UXDesign.md) section within the "Design evaluation" sub-sections. We thought it was clearer to include them there because they help explain the iterative design process we followed.

## Unit testing / Functional testing.
Testing of the site, as a whole, was a weak point of the development process. All testing was done as functional testing, as this was quicker and simpler than unit testing. The testing typically followed a certain work flow carried out by the developer. On implementing a task, the developer would be regularly building the site with Docker and viewing the updates in their browser to ensure the correct layout or logic was being built and to spot noticeable bugs. After the task was finished, the group would be notified and the implementation would be pushed on to the remote repository and merged into the develop branch. Any conflicts would then be dealt with and the developer would begin site-wide function testing normally with one other (for minor features/changes an extra person wasn't needed) to check there were no notable bugs in the workings of the components, pages and site. Because the site only consisted of three (main) pages, the amount of tasks a user could do on the pages was limited so testing the whole site after a change only took a couple of minutes.

The work flow of the functional test scripts a developer would generally follow are below. For most of the testing, it was an iterative process, building on smaller components and integrating with other features accordingly. For example, the image of the test plan for changing quantities of food items shows the total quantity of food items being tested for (Test C). However, this was originally not done by the developers. The increment and decrement buttons were implemented and functionally tested that they worked for each food item on the list. It was then demo-ed in the stand up meeting where bugs were pointed out and fixed afterwards. Then, the calculated total was tested alongside the increment/decrement buttons to check they were all working together as they should.

![Changing food quantities test plan](Images/ProjectEvaluation/food_quantity_test_plan.png)
![Money estimate/Sally test plan](Images/ProjectEvaluation/money_estimate_test_plan.png)

For testing the interactions of the site as a whole (with more pages, components etc), unit testing would have had to have been used, as constantly loading the site and testing it would have taken too long. Unit testing may have also sped up the development as the tests could be set to run upon each build of the site with docker and bugs would have been instantly spotted as opposed to having the developer go through each page looking for bugs manually.

## Reflective Discussion of The Success of The Project
Because of the scrum/agile work practices, the project stayed on track
with the most current release being a site that although basic, was completely made from scratch
and is in a usable proof-of-concept/MVP state that has many avenues for extensions to make it a real
product.

Our main high-level long-term objective was to raise awareness about food waste and change behaviour. Thanks to the qualitative feedback gathered and the engagement chart from Google Analytics, we are able to tell that we are in the process of creating and engaging application which is the goal we were hoping to achieve during this project. The biggest hurdle before knowing for certain if we have created an application that can change behaviour has not been achieved yet but it looks like we are moving in the right direction.

Compared to the alternatives available online, we were able to build a tool that is more convenient and accurate to use due to the importance we gave to users throughout our process. As proposed in the "Future Work" section, there are still steps that can be taken to improve these dimensions, however, we are pleased to have met our objectives for this project.

The design was regularly being checked by external target users to gain feedback. We did various early design
sessions to engage in divergent
and convergent thinking. We put the user at the center of our design. We interviewed and surveyed our
target audience to further understand them and the problem at hand. We considered design heuristics and
iterated on our design to move from low-fi to high-fi ones.
The feedback we received was used to change the core idea of the site a few times, which was a little
frustrating but ensured that the site was sensible.

In terms of the real-world issue part of the brief, we defined the importance of a complex global issue (food waste) and broke it down
 to make it addressable, taking into consideration our location, access to users, and where our
efforts would generate the most value (i.e. changing household’s behaviors).

The team decided to focus more on the serious than playful elements in early stages of the project.
A discussion was had and a decision was made to develop a working, practical application regarding food waste and incorporate the playful elements in later sprints.
Taking into account existing features, Sally was added on the final sprint which did add a bit of playfulness within the core of the application, e.g. interacting with her
on the landing page incremented a money estimate. More of
this type of interaction with the site could have been used (e.g. better ways of adding food than search
and clicking).

With that said, we have achieved our objectives within the time space that we had. Our objectives and
what we wanted to accomplish with the web application was met and executed well.
***

### Reflection on Working Practices
The scrum framework (based on agile) used, fitted the group really well. However, the separation of roles between
the scrum master and product owner was a bit blurry at the beginning. The product owner tried to tell the team how to
organize the tech work at the start (which he shouldn’t have done). We quickly learned from our mistakes, and
the PO organized the sprint planning meetings while, the SM planned the stand up meetings.

In the design stage, different sections of the site were visualized/prototyped so the whole
team had a clear vision and agreed on what the site should look like and how it should function. Features
were extracted from the prototype and given an assigned priority level that defined the different states of the project (MVP, version 2 etc). As we knew what features needed doing first (higher priority ones) from the start, our backlog was mostly made-up without too much discussion/planning. In addition, it was good that everyone was willing (and open) to give honest feedback and criticize each other’s ideas.

The stand-up meetings were a bit of a formality, the team was in constant communication on Microsoft Teams
nearly everyday so any issues/ideas were instantly posted to the group.
The stand-ups did give the team an agreed upon meeting point to discuss whole group decisions,
and helped organise as the team worked in different time-zones for most of the development cycle. In addition,
most of the team were almost always available during the week and often during weekends,
which was useful to solve any important issues (i.e. when we redesigned the app to
include playful elements).

Github proved essential, not only for sharing the source code between devs but to manage releases and versions.
Because of the way the team used git (as per continuous integration) any merge conflicts that arose were minor,
and bugs could be spotted early as the whole team had access to everything.

Overall, everyone has contributed and taken ownership of their parts of the project. Everyone had
clear roles while helping each other and learning from each other. With that said, there were clear
work preferences among the teammates, and it would have been beneficial to take more advantage of them
by allocating or deallocating work accordingly.
***

### Reflection on The Impact of COVID-19
Remote working had both positives and negatives. Working from home rather than in a lab at university
meant that we could focus better and work more efficiently. We ensured to use Microsoft Teams everyday and communicate
with each other about any issues or challenges that arose. In addition, remote working allowed everyone
to work independently and at their own pace.

With that said, remote working also made some aspects of this project difficult. The ideation
and design process would have been a lot more efficient in-person, as it would have been easier to
sketch and move ideas around (although Miro worked it’s not the same experience). In addition, pair programming
was proven to be more difficult as one could often feel isolated. Another aspect which was also
a bit challenging was user interviews. It
would have been better to conduct these interviews in-person, as it usually results in greater insights
about the underlying motivations and reactions (i.e. non verbal cues).
***

## Discussion of Future Work
As an advanced prototype, Money Bin could be further developed to provide actionable tips for behavior change, increase the accuracy of the statistics for individual food waste and improve the rigor and generalizability of evaluations.

### Design for Action
During semi-structured interviews and prototype walk-throughs, users suggested providing actionable tips regarding the issue of individual food waste. Some users suggested tackling the causes of the issue like over-spending on grocery shopping or visibility of spoiled food in the fridge. One user suggested tips for what can be done after food went to waste, for example, by using coffee beans as facial/body scrubs.

After bringing awareness to the issue, the results page can conclude with actionable goals and links to resources. For example, if most of the money lost comes from oranges, the application can set a personal goal for the user to buy less oranges and consequently lose less money from food waste: “Looks like you’re wasting most on oranges. The next time you go grocery shopping, buy less oranges and save!” It can also link to helpful resources like how to turn coffee beans into scrubs or how to score vegetables properly to last longer.

### Develop for Accuracy
Currently, the database for food items and cost for each food is populated manually, limiting the number of searchable items. There is only one option (quantity) to indicate the amount of food wasted but it may be difficult to define 1 quantity of an item (e.g., 1 grape or 2 chickens). These options limit the accuracy of the exact foods that went to waste.

One solution may be to use an external API for food items and cost. APIs from major grocery chains can be explored to include a diversity of foods and their current costs. If there are limits to using external APIs due to costs or other development constraints, data can be crowd-sourced from users. Additional features can be developed for users to create new food items and add it to the database. Finally, more options can be introduced for the quantity of foods such as in grams, cups or by a fraction of a plate.

Developing for accuracy is important as this is what differentiates our product from competitors.  Market analysis revealed that competitors like Lovefoodhatewaste.co.nz and Savingfood.eu are good at providing convenience or accuracy but not both. Our product could provide both, providing a novelty in service.


### Evaluate with Rigor   
Test users were limited socially to people within the team’s social network. To reduce bias and recruit wider personalities of users, the product could be evaluated with users in other universities or through wider channels like Facebook groups or email listservs.

Due to the time constraint and speed of agile development, the time set for evaluation was limited. For example, the evaluation of a prototype from one sprint was concurrent with the development of the next sprint. As user feedback was processed and translated into technical requirements, the next sprint may be underway and be tweaked to include new requirements. Ideally, there will be a clear separation between sprints for one sprint to inform the next. Moreover, with more time, different techniques for evaluation may be explored like affinity diagramming and thematic analysis. These techniques help remove biases so that feedback is used more to inform than validate an idea.


## Social and Ethical Implications
The following sections will address the social and ethical implications of our project.
We followed [the nine UNICEF principles](https://ssir.org/articles/entry/the_ethics_of_innovation)
in developing our web application to ensure that we have achieved ethical innovation.

### 1. Design with the user
Throughout the development of our prototype, we have ensured to involve the user at every stage
(more details can be found [here](/UXDesign.md)).
We sent out surveys to understand who our users are, and we conducted interviews to better understand
our design decisions.

### 2. Understand the existing ecosystem
Our aim for this project was to raise awareness about food waste. We have therefore,
conducted extensive research about the issue (with the focus on the UK specifically) to
better understand the causes of food wastage. In addition, we reviewed current solutions
available which addresses the issue (for more details [here](/BackgroundAndMotivation.md).
With this research in mind, we started designing our web application.

### 3. Design for scale
We have used the MEAN stack in developing our web application, which means that it is flexible and scalable.

### 4. Build for sustainability
Because of the nature of our project, we have not conducted extensive code analysis or similar to
better understand the power consumption of our web application, however, we have done several things
to avoid technical debt; (1) We have removed all code deemed unnecessary and ensured that the code we do
produce is simple and maintainable. (2) We have divided our project structure into two parts,
frontend and backend, which helped us in distinguishing the two and thus, created less confusion
in the development process. (3) Finally, we divided our web applications into components, this makes
the web application more testable and easy to maintain, because each component can be targeted directly.

### 5. Be data driven
Throughout development, we have continuously collected data from our users in order to better
understand our design decisions. At the very beginning of our design process, we sent out two surveys
to better understand our users and their thoughts about food waste (more details [here](/UXDesign.md)).
In addition, various interviews were conducted at each stage of the design process. We collected feedback
from each interview and modified our design accordingly.

### 6. Use open standards, open data, open source, and open innovation
We have used [the MEAN stack](/SystemImplementation.md) to develop our web application.
All of these tools are open-source, and we have ensured to use tools in which are already
available to make the development process as efficient as possible. In addition, all documentation
for the current project is hosted on Github on a public repository. All users have therefore access
to this repository and the source code.

### 7. Reuse and improve
As mentioned in section 6, we have used the MEAN stack, which is open source to develop our web application.
In addition, we have used Bootstrap and Angular materials which we have customised (and modified)
to fit the requirements of our project.

### 8. Do no harm
We designed a web application with the intention of raising awareness about food waste.
We wanted to create something that is simple, yet effective.
The application put emphasis on money. This is something we
purposely designed because we hoped that by showing the user how much money they have wasted, it will
encourage them to waste less because it is impacting them on a personal level.

This web application sole purpose is to encourage users to waste less and raise awareness about
the impact of food wastage. To our knowledge, we do not believe that it will cause any harm or distress.

Furthermore, we have ensured to include a cookies notice, which users can opt out of if they wish to.
In addition, a privacy notice is included on our web application to address any privacy concern our
users may have.

### 9. Be collaborative
As mentioned in section 1 and 5, we have involved the user at every stage of development.
The users we have spoken to did not all have a background in Software Development, which meant
that we were able to get a lot of different perspectives on our design.
<br></br>

<br><br>
Go back to [README](https://github.com/gabrielchuv/SE7/blob/develop/README.md)
