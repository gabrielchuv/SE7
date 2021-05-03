# Sprints and Project Management

A brief description of what this section is about.

## Table of Contents
- [The Team's Working Methods](#the-team's-working-methods)
- [Summary of Individual Contributions](#summary-of-individual-contributions)
- [Documentation of Sprints](#documentation-of-sprints)
- [The Team's Workflow](#the-team's-workflow)

## The Team's Working Methods
### Scrum
The scrum framework was utilised to enchance the productivity and synnergy of the team. At the start of the week a sprint planning meeting would be held to discuss with the whole group, what needed doing and who would be assigned to it (the sprint backlog). The backlog tasks were added to the task management software Jira, so everyone could access it and see what was: to be done, in progress and done. The sprint was then started the same day the plan was drafted with scrum meetings happening every day/every other day (changing as appropriately decided in the scrum meetings) to discuss two things: **What was a member working on?**, **Are there any problems?**. These two questions enabled everyone to gain understanding on how the site was progressing and identified quickly if a task needed someone elses input/group discussion. 

The end of the week normally marked the end of the sprint where the scrum meeting that day would be to do an informal discussion of how the sprint had gone, if any tasks needed continuing in the next sprint, and vaguely looked at what should be done for the next sprint. A formal review was also conducted by the scrum master to analyse and put into action things discussed in the informal review to help with planning the next sprint.

As well as the scrum meetings, the team engaged in heavy pair programming throughout the development cycle which meant members were normally in constant communication with another member. Often there was someone working alone but Microsoft Teams was used throughout the day and daily to provide a communication channel to the rest of the group if needed.

- Rationale behind using Scrum
- Ceremonies we engaged in - sprint planning, standups, reviews etc. - TODO
- Use of Jira: product backlog, sprint backlog, progress tracking - TODO


## Summary of Individual Contributions
Each member acted as a full-stack developer with specialties in particular areas. 

Alex Digpal-Race : scrum-master, backend designer and implementer, frontend logic coder and service creator, site rhymer

Zain Kassam :

Anita Nguyen was involved in various aspects of the project. These aspects includes:
- UX desgin: co-created and distributed surveys to better understand the target audience. Was involved in
some design sessions and co-led initial ideation sessions. 
- Developer: worked on various aspects of the front-end (these aspects include 'About us' page, footer, and calculator page).

Jessica Sung specialized in UX design and front-end. She has led design sessions and created the designs of the MVP and high-fidentity product. She has guided the direction of the project from a reminder service for expiring foods to a food waste calculator based on user feedback and considered the elements of serious play. Jessica has contributed to the usability and value of the product to users. (didnt do anything) - put yourself as the lead designer :)

Gabriel Chu was involved in all parts of the project to different extents and adopting different roles:
- Project manager: he managed the project as a whole and contributed significantly to defining the problem to be solved. He made sure we were fulfilling the project's brief and going beyond it in certain areas. He kept things on track by setting our progress meetings' agendas.
- Product owner: he led the sprint planning sessions by prioritizing user stories and defining what the MVP should include. He maintained the product backlog and made sure user stories were value-focused. He worked with the lead designer to iterate over our designs.
- UX designer: he led some of the design thinking sessions. He co-created and distributed the surveys used to gain a better understanding of the problem and target audience. His participation in design meetings always aimed at maximizing usability and making sure the application transmits its value to users.
- Developer: he contributed to the frontend and hosted our application on AWS to share it with users.

## Documentation of Sprints
### Sprint timeline

#### Sprint 0: Test sprint
- Timeline: 29/03 - 02/03
- Goal: Work on dependencies and get used to the scrum methodology and to Jira
- User stories completed: 
  - Landing page high fidelity design
  - Main page high fidelity design
  - Statistics page high fidelity design
  - Food item entity structure
  - Food item search
- Notes: 

#### Sprint 1: MVP
- Timeline: 05/04 - 11/04
- Goal: Create our MVP's first iteration
- User stories completed: 
   - As a user I want to navigate from the landing page to track my waste
   - As a user I want to search for a food item
   - As a user I want to navigate to the stats page from the main page
- Criteria: we used 3 criteria to decide what to include in our first iteration of the MVP. 
  1. The lean methodology which promotes the identification and testing of the riskiest assumptions.
  2. A risk/difficulty assessment to focus our efforts on high risk assumptions that are relatively easy to test.
  3. Data from our user survey to focus on the assumption that is most likely to be true.

We ranked our assumptions by order of risk and framed them as testable hypotheses. We selected the "problem" and "target segment" assumptions from our Lean Canvas (insert link) because they are the ones that can "make or break" our project. Moreover, we did not select the first (riskiest) assumption because it is dependent on the other ones and, hence, more difficult to test from the start. From the remaining assumptions, we chose number 2 because, according to our surveys, 33% of surveyees cared about food wastage due to the money associated with it. This was the largest group.

   1. We believe postgraduate students at the University of Bristol will reduce their food wastage after seeing how much they would have wasted in a year.
   2. We believe postgraduate students at the University of Bristol will input their wasted food because they care about knowing how much money they are wasting due to wasted food.
   3. We believe postgraduate students at the University of Bristol will input their wasted food because they care about knowing how much food they are wasting.
   4. We believe postgraduate students at the University of Bristol will input their wasted food because they care about knowing how much pollution they are contribution with due to wasted food.

#### Summary of plan for sprint 1
Sprint 1 was where the design phase of the project ended and the implementation phase began. Going into sprint 1, high priority (must-have) features were selected from the design phase and given estimated time-to-complete scores. We knew these scores would vary in practice but they were used to get a rough sense of the complexity of the features and to help share the load evenly throughout the group.

Pair programming for the sprint was favoured to accelerate learning and debugging, with 2 pods (with two members in each) starting/implementing the more complex features. The one-person pod was given a lesser scored feature to complete.

#### What was accomplished in sprint 1
We already had a base site from the technical workshops where the frontend and backend were linked and the api was set up to interact with the food items in a database. 

To start off with an easy initiation to the project, each pod was assigned a web page each of the site, an angular component was generated for each page, and the CSS style and HTML was coded to get the look of each page matching the MVP design.

As a side objective to the whole group, a draft for searching foods in the frontend and getting the correct response from the backend was attempted successfully. A problem did arise that food items were being stored on a local instance of mongoDb so other team members couldn’t access it. This meant the project need implementing with docker in order to automate the seeding of data into the database.

Doing so did mean the project was harder to test/visualise changes quickly as docker-compose had to be built and run each time a change was made. To get round this, for changes in the frontend ng build & serve were used to see the ‘shell’ of the web page quickly. 

Learnings from sprint 1
The aim for sprint 1 was to get the MVP (consisting of three different pages) design fully realised visually (without any functionality) was successful. We overestimated (knowing a lot of people under-estimate) time for most of the tasks, although this was partly because we had already got a head start in the project from the technical workshops. 

The additional feature of searching originally took less time than its assigned 8-hours but also introduced a problem that only one person was able to do it locally. This meant the task of integrating docker with the project was added and ended up taking double the time to get it sorted.


### Sprint 2: First Design Implementation
- Timeline: 12/04 - 18/04
- Goal: Add to the MVP all missing features from the design
- User stories completed:
   - As a user I would like to click on a food item I've searched for and add it to my 'binned' receipt
   - As a user I would like to visualise the yearly forecasted cost of the food I've 'binned' for the week
   - As a user I would like to go back to the landing page once I viewed the yearly forecast

#### Summary of plan for sprint 2
Sprint 2 was where the features left out of the MVP were implemented, a user could search for a food item from the database but nothing would happened when it was clicked, similarly once a food item had been added to the 'binned' receipt based off of the design each food needed a plus and minus button to change the quantity. Clicking the calculate button needed to (as well as navigating to the stats page) send the 'binned' food items out to the database. Site responsiveness for all pages needed to be debugged to get the site working on many different displays (not just monitors). Some team members were having deployment issues with docker and not being able to access food items which also needed to be fixed.

#### What was accomplished in sprint 2
Sprint 2 worked a lot like sprint 1 in the fact that the team pair programmed together, the first thing completed was the docker issue as it was effecting the teams ability to work. The problem was due to the fact the dockerfile copied the wait-for.sh into the docker image without changing its permission. This was fine when the docker file was run on a windows computer as the script copied in a executable automatically. However two of the linux systems the team used had the script as read only so it was copied in to the docker image like this.

Because all three of the user story features involved the main page component in some way a team of three (one team member assigned to each) work as one 'pod' which involved one person streaming their system to the other two with everyone contributing. Although this may have created a small bottleneck, it meant there were no merge/conflicts on the main page and the work for all three was done quicker as there were three minds solving the tasks together.

Responsiveness of the site was assigned a high priority as the team wanted a whole range of devices, not just desktops/laptops to be able to use the site. This was because it was identified early in the user feedback that the site would be troublesome/unneeded effort to use constantly on big screen non-portable products, this would therefore make it more appropriate for portable devices that user's could use on-the-go. So whilst three members worked on the main page the other team members worked on the responsiveness of the two pages not being worked on (landing page and stats page). 

It was also identified half way through the sprint (15/04) that it would make sense to add some place holder data into the stats page so whoever coded the logic into the stats page in the next sprint wouldn't have to mess with the CSS or HTML, so this was also completed in sprint 2.


### Sprint 3: First Design completion & Second Design Implementation
- Timeline: 19/04 - 02/05
- Goal: Finish off implentation of the First design
- User stories completed:
   - As a user I want to see my yearly forecasted cost of food waste in the stats page

#### Summary of plan for sprint 3
Going into sprint 3 the team knew semester two units were back on so there would be less time to work on the website. With this in mind sprint 3 was given an initial duration of two weeks instead of one and the scrum meetings would move to every other day occurrence. It was planned that by the end of sprint 3 the release version of the site would be done, so any nice-to-have features that the team wanted needed implementing. An about page, site footer, alternative navigation, getting the site hosted online, populating the db with more food items, bug fixes for the bin, a cookie notice, T&C's and calulating the yearly cost were all planned for the sprint.

#### What was accomplished in sprint 3
Sprint 3 consisted of lots of small tasks that needed completing compared to the previous sprints. As the team, by this time, was well familiar with web dev, all of the tasks were completed by the 23/04 (the end of the first week). In hindsight, it would have been fine to have had sprint 3's duration as a week, with the develop branch in an acceptable, stable state the site was pushed into the release branch. This was then used with AWS to have host the website online and meant it could be sent out for user feedback. The second week of sprint 3, started by coming up with ideas to make the site more clear, playful and an overall better user experience. The site's colour scheme and some of its layout was redesigned and a new interactive entity named 'sally' was ideated. 

Sally was needed on all three (main, landing and stats) pages, because she did a different things on every page, a component of her was not created. This provided 3 new tasks to be completed as well as the redesign (colour change and some layout). All four tasks were completed by the 29/04 and had yielded the second design of the site in a releasable state. To finish off the develop branch was pulled into the release branch.

## The team's workflow
This is discussed in the system implementation.
