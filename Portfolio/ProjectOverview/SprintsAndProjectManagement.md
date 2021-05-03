# Sprints and Project Management

A brief description of what this section is about.

## Table of Contents
- [The Team's Working Methods](#the-team's-working-methods)
- [Summary of Individual Contributions](#summary-of-individual-contributions)
- [Documentation of Sprints](#documentation-of-sprints)
- [The Team's Workflow](#the-team's-workflow)

## The Team's Working Methods
### Scrum

#### Rationale
We found Scrum to be the appropriate methodology to follow because it implements several key components and principles thath helped us during the development process:

1. User stories: it is key for an MVP to provide the product’s core value with the minimal amount of resources. User stories allowed us to focus on the value provided to users.
2. Defined roles: the allocation of defined roles allowed us to make decisions quicker. In particular, the role of product owner allowed us to swiftly decide what to build and the role of scrum master to keep things on track during sprints. was helpful because of the short period of time we had to work on the project.
3. Transparency: scrum encourages transparency in the communication of issues through the standup meetings. We are all new to web development so this was very useful in order to share knowledge among ourselves.
4. Sprints: as we developed the application, gathered feedback from users, and aligned the project with the brief we had to make frequent changes to the application. Scrum's sprint-based process was helpful to change priorities flexibly

#### Implementation

At the start of the week a sprint planning meeting would be held to discuss the product backlog with the whole group. It was the product owner's responsibility to create or add new items to the backlog by defining a set of user stories and ranking them in order of priority. We would then discuss among ourselves to assign story points to each story (each point was worth 2 hours) and reorganize the stories by breaking them apart or combining several. In this meeting it was decided what stories from the product backlog would be included in the next sprint and who would be assigned to it.

The backlog tasks were added to the task management software Jira, so everyone could access it and see what was: to be done, in progress and done. The sprint was then started the same day the plan was drafted with standup meetings happening every day/every other day (changing as appropriately decided in the scrum meetings) to discuss two things: **What was a member working on?**, **Are there any problems?**. These two questions enabled everyone to gain understanding on how the site was progressing and identified quickly if a task needed someone elses input/group discussion. 

The end of the week normally marked the end of the sprint where the scrum meeting that day would be to do an informal discussion of how the sprint had gone, if any tasks needed continuing in the next sprint, and vaguely looked at what should be done for the next sprint. A formal review was also conducted by the scrum master to analyse and put into action things discussed in the informal review to help with planning the next sprint.

As well as the scrum meetings, the team engaged in heavy pair programming throughout the development cycle which meant members were normally in constant communication with another member. Often there was someone working alone but Microsoft Teams was used throughout the day and daily to provide a communication channel to the rest of the group if needed.

## Summary of Individual Contributions
Each member acted as a full-stack developer with specialties in particular areas. 

Alex Digpal-Race : scrum-master, backend designer and implementer, frontend logic coder and service creator, site rhymer

Zain Kassam :

Anita Nguyen :

Jessica Sung specialized in UX design and front-end. She has led design sessions and created the designs of the MVP and high-fidentity product. She has guided the direction of the project from a reminder service for expiring foods to a food waste calculator based on user feedback and considered the elements of serious play. Jessica has contributed to the usability and value of the product to users. (didnt do anything) - put yourself as the lead designer :)

Gabriel Chu was involved in all parts of the project to different extents and adopting different roles:

-Project manager: he managed the project as a whole and contributed significantly to defining the problem to be solved. He made sure we were fulfilling the project's brief and going beyond it in certain areas. He kept things on track by setting our progress meetings' agendas.

-Product owner: he led the sprint planning sessions by prioritizing user stories and defining what the MVP should include. He maintained the product backlog and made sure user stories were value-focused. He worked with the lead designer to iterate over our designs.

-UX designer: he led some of the design thinking sessions. He co-created and distributed the surveys used to gain a better understanding of the problem and target audience. His participation in design meetings always aimed at maximizing usability and making sure the application transmits its value to users.

-Developer: he contributed to the frontend and hosted our application on AWS to share it with users.


## Rationale behind MVP


## Documentation of Sprints


### High-level overview

Criteria: we used 3 criteria to decide what to include in our first iteration of the MVP. 
  1. The lean methodology which promotes the identification and testing of the riskiest assumptions.
  2. A risk/difficulty assessment to focus our efforts on high risk assumptions that are relatively easy to test.
  3. Data from our user survey to focus our efforts on the assumption that is most likely to be true according to potential users.

We ranked our assumptions by order of risk and framed them as testable hypotheses. We selected the "problem" and "target segment" assumptions from our Lean Canvas (insert link) because they are the ones that can "make or break" our project. Moreover, we did not select the first (riskiest) assumption because it is dependent on the other ones and, hence, more difficult to test from the start. From the remaining assumptions, we chose number 2 because, according to our surveys, 33% of surveyees cared about food wastage due to the money associated with it. This was the largest group.

   1. We believe postgraduate students at the University of Bristol will reduce their food wastage after seeing how much they would have wasted in a year.
   2. We believe postgraduate students at the University of Bristol will input their wasted food because they care about knowing how much money they are wasting due to wasted food.
   3. We believe postgraduate students at the University of Bristol will input their wasted food because they care about knowing how much food they are wasting.
   4. We believe postgraduate students at the University of Bristol will input their wasted food because they care about knowing how much pollution they are contribution with due to wasted food.

Creation of epic ...... goal of testing hypotehsis as efficiently as possible so user stories stem from this


### Sprint 0: Working on dependencies
- Timeline: 29/03 - 02/03
- Goal: finish off dependencies and get used to the scrum methodology and Jira
- User stories completed: 
  - As a designer, I want to design the high fidelity landing page so that users understand the value of the application as quick as possible
  - As a designer, I want to design the high fidelity main page so that users can search for items and add them to their list as easy as possible
  - As a designer, I want to design the high fidelity statistics page so that user can absorb and process the value of the application as eas as possible
  - As a backend engineer, I want create the food item entity structure so that 
  - As a backend engineer, I want to create the food item entity structure so that...
  - As a backend engineer, I want to....search functionality... so that...
  - ANYTHING ELSE????

#### What was accomplished in sprint 0
This sprint was used as a starting point for the team to get used to the Scrum methodology. We identified the dependencies that needed to be completed before starting to build the application, tracked them with the help of Jira and finished them by the end of the week. The dependencies mainly had to do with increasing the fidelity of our previous wireframes in order to clarify and speed up the development in subsequent sprints. The basic backend's infrastructure was also put in place.... ALEX FINISH THIS

### Sprint 1: MVP's frontend

#### Plan

- Timeline: 05/04 - 11/04
- Goal: Create the MVP's frontend
- Rationale for user stories
  -  Most of the stories in this sprint are necessary for users to understand the application and be able to navigate and orient themselves in it.
  -  Going into sprint 1, high priority (must-have) features were selected from the design phase. More specifically, most of the stories in this sprint are necessary for
- User stories completed: 
   - As a user, when I navigate to the landing page I expect to see the title and subtitle so that I understand if the site is relevant for me 
   - As a user, I can click on the "Calculate" button in the landing page so that I can navigate to the page where I can track my food waste
   - As a user, when I navigate to the main page I expect to see the search bar, my receipt of "binned" items, and a "calculate" button 
   - As a user, I want to search for a food item so that I can add it to my list of tracked items
   - As a user, I want to navigate to the stats page from the main page so that I can see the result of how much money I'm wasting due to food waste
   - As a user, when I navigate to the stats page I expect to see the forecasted yearly amount of money wasted due to how much food I waste 
   - ANYTHING ELSE???
   - DID WE DO ANY RESPONSIVENESS HERE?

#### Highlights

- Users are able to navigate through the entire app and understand what each page is about
- highlight 2??
- highlight 3??

#### Implementation
Sprint 1 was where the design phase of the project ended and the implementation phase began. User story points were assigned to each story after having quick group discussions. We knew these scores would vary in practice but they were used to get a rough sense of the complexity of the features and to help share the load evenly throughout the group. 

Pair programming for the sprint was favoured to accelerate learning and debugging, with 2 pods (with two members in each) starting/implementing the more complex features. The one-person pod was given a lesser scored feature to complete.

#### What was accomplished in sprint 1
We already had a base site from the technical workshops where the frontend and backend were linked and the api was set up to interact with the food items in a database. 

To start off with an easy initiation to the project, each pod was assigned a web page each of the site, an angular component was generated for each page, and the CSS style and HTML was coded to get the look of each page matching the MVP design.

As a side objective to the whole group, a draft for searching foods in the frontend and getting the correct response from the backend was attempted successfully. A problem did arise that food items were being stored on a local instance of mongoDb so other team members couldn’t access it. This meant the project need implementing with docker in order to automate the seeding of data into the database.

Doing so did mean the project was harder to test/visualise changes quickly as docker-compose had to be built and run each time a change was made. To get round this, for changes in the frontend ng build & serve were used to see the ‘shell’ of the web page quickly. 

Learnings from sprint 1
The aim for sprint 1 was to get the MVP (consisting of three different pages) design fully realised visually (without any functionality) was successful. We overestimated (knowing a lot of people under-estimate) time for most of the tasks, although this was partly because we had already got a head start in the project from the technical workshops. 

The additional feature of searching originally took less time than its assigned 8-hours but also introduced a problem that only one person was able to do it locally. This meant the task of integrating docker with the project was added and ended up taking double the time to get it sorted.


### Sprint 2: Finish MVP's functionality
- Timeline: 12/04 - 18/04
- Goal: Add missing key functionality to the MVP and prepare for release
- Rationale for user stories
  - The second sprint served us to complete most of the key functionality for the MVP. 
  - We made sure it worked responsively in different devices because we were planning on releasing it to Bristol University students later on.
  - We also implemented a cookie banner and a privacy policy page since we were planning to release it online and we were going to use third-party apps to track behaviour.
  - Despite it not being essential, we took care of some usability details (i.e. scrollable lists) in order to discard a reason like poor usability when assessing why people went or did not go through the whole user flow.
- User stories completed:
   - As a user, when I click on a food item I've searched for I want it to be added to my "binned" receipt so that it gets tracked when calculating how much I'm wasting
   - As a user, I want to navigate back to the landing page once I've viewed the statistics page so that I can start the process again or have another user do it
   - These were 3 stories: As a user, when I navigate to the landing page, main, and stats pages from a mobile device, I want to continue understanding the application and be able to calculate how much money I'm wating yearly
   - As a user, when I get many results from a food item search, I want to be able to view them as a scrollable vertical list so that I can easily pick the one I am trying to find.
   - As a user, I want to add and subtract the number of items associated with a specific food item so that I match how much food I have wasted more accurately (plus and minus buttons)
   - As a user, when I navigate to the application, I want to have the option to deny cookies so that I have greater control of my private data
   - As a user, I want to know what is the applicaiton's privacy policy and what third-party applications are being used to track my data, so that I know that it is a trustworthy site

#### Highlights

- Amost all core functionality implemented
- Made the application responsive
- highlight 3????

#### Implementation
Sprint 2 was where the features left out of the MVP were implemented, a user could search for a food item from the database but nothing would happened when it was clicked, similarly once a food item had been added to the 'binned' receipt based off of the design each food needed a plus and minus button to change the quantity. Clicking the calculate button needed to (as well as navigating to the stats page) send the 'binned' food items out to the database. Site responsiveness for all pages needed to be debugged to get the site working on many different displays (not just monitors). Some team members were having deployment issues with docker and not being able to access food items which also needed to be fixed.

#### What was accomplished in sprint 2
Sprint 2 worked a lot like sprint 1 in the fact that the team pair programmed together, the first thing completed was the docker issue as it was effecting the teams ability to work. The problem was due to the fact the dockerfile copied the wait-for.sh into the docker image without changing its permission. This was fine when the docker file was run on a windows computer as the script copied in a executable automatically. However two of the linux systems the team used had the script as read only so it was copied in to the docker image like this.

Because all three of the user story features involved the main page component in some way a team of three (one team member assigned to each) work as one 'pod' which involved one person streaming their system to the other two with everyone contributing. Although this may have created a small bottleneck, it meant there were no merge/conflicts on the main page and the work for all three was done quicker as there were three minds solving the tasks together.

Responsiveness of the site was assigned a high priority as the team wanted a whole range of devices, not just desktops/laptops to be able to use the site. This was because it was identified early in the user feedback that the site would be troublesome/unneeded effort to use constantly on big screen non-portable products, this would therefore make it more appropriate for portable devices that user's could use on-the-go. So whilst three members worked on the main page the other team members worked on the responsiveness of the two pages not being worked on (landing page and stats page). 

It was also identified half way through the sprint (15/04) that it would make sense to add some place holder data into the stats page so whoever coded the logic into the stats page in the next sprint wouldn't have to mess with the CSS or HTML, so this was also completed in sprint 2.


### Sprint 3: MVP release & Second Design Implementation
- Timeline: 19/04 - 02/05
- Goal: Finish off implentation of the First design
- Rationale for user stories:
  -  Finished all key functionality and started tracking using Google analytics because we released the app at the en of the first week of this 2-week sprint
  -  We added a few nice-to-have features like an About page and the ability to delete food items from the user's list because we thought this would enhance the app's clarity and usability respectively.
- User stories completed:
   - As a user, I want to visualise the yearly forecasted cost of the food I've 'binned' for the week so that I gain perspective on the implications of my food consumption habits
   - As a user, I want to delete food items from my "binned" receipt so that I am able to fix any mistakes
   - As a user, I want to navigate to "less important" pages in the application such as the "About Us" and "Privacy Policy" pages (footer)
   - As a user, I want to share the app via social media or by copying the site's link so that I can show it to my friends
   - As a user, I want to learn more about app so that I understand the application's purpose (about page)
   - As a user, I want to be able to access the application from any browser so that I need little effort to access it
   - As a user, if I waste more/less (yearly) than the average person I want to know by how much so that I get a better idea of how am I doing compared to the general UK population
   - As a product owner, I want to understand how people are using the application so that the team can prioritize features and user stories.


#### Highlights
- Key functionality such as calculating the forecasted yearly money wasted and comparing it with the average UK consumer was implemented
- Hosted the site on AWS EC2 to be able to share it with people easily

#### Implementation
Going into sprint 3 the team knew semester two units were back on so there would be less time to work on the website. With this in mind sprint 3 was given an initial duration of two weeks instead of one and the scrum meetings would move to every other day occurrence. It was planned that by the end of sprint 3 the release version of the site would be done, so any nice-to-have features that the team wanted needed implementing. An about page, site footer, alternative navigation, getting the site hosted online, populating the db with more food items, bug fixes for the bin, a cookie notice, T&C's and calulating the yearly cost were all planned for the sprint.

#### What was accomplished in sprint 3
Sprint 3 consisted of lots of small tasks that needed completing compared to the previous sprints. As the team, by this time, was well familiar with web dev, all of the tasks were completed by the 23/04 (the end of the first week). In hindsight, it would have been fine to have had sprint 3's duration as a week, with the develop branch in an acceptable, stable state the site was pushed into the release branch. This was then used with AWS to have host the website online and meant it could be sent out for user feedback. The second week of sprint 3, started by coming up with ideas to make the site more clear, playful and an overall better user experience. The site's colour scheme and some of its layout was redesigned and a new interactive entity named 'sally' was ideated. 

Sally was needed on all three (main, landing and stats) pages, because she did a different things on every page, a component of her was not created. This provided 3 new tasks to be completed as well as the redesign (colour change and some layout). All four tasks were completed by the 29/04 and had yielded the second design of the site in a releasable state. To finish off the develop branch was pulled into the release branch.

## The team's workflow
This is discussed in the system implementation.
