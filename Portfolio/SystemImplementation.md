# System Implementation

A brief description of what this section is about.

## Table of Contents
- [Stack Architecture](#stack-architecture)
- [Back End](#back-end)
	- [MongoDB](#mongodb)
	- [Database Implementation](#database-implementation)
- [Middle Tier](#middle-tier)
	- [Express](#express)
	- [Node](#node)
	- [RESTful API](restful-api)
- [Front End](#front-end)
	- [Angular](#angular)
- [Deployment Details](#deployment-details)
	- [Implementation of Docker](#implementation-of-docker)

## Stack Architecture
The MEAN (MongoDB, Express, Angular, Node) stack was chosen to build and run the SPA website. The stack has several benefits to why it was chosen:
* Its widely used and so widely supported (one of the top three stacks for web dev)
* MEAN is written in one language, Javascript (/Typescript), across both server and client ends, so makes team work and co-ordination much simpler
* NoSQL database is a lot easier to design, run and use compared to SQL, also able to scale well both vertically and horizontally

TODO: Include class diagrams, sequence diagrams

## Back End
The backend consisted of the API, server and the database detailed below?. 

### MongoDB
MongoDB was the database host chosen for this website, its a noSQL db so there was no messing around with relationships and making sure tables abided to normal form rules. It allowed the team to hit the ground running, as soon as we had got a high fidelity mock up, we could immediately visulise and design the data model needed to save into Mongo. The data model was fairly simplistic and only consisted of two collections.

* **Fooditems collection**: This was where all the food items a user could pick from (or create) were stored, it had four properties required for each document (food item) name, mass, cost, category (also mongoDB gave it a few automaticaly e.g. each one had a unique _id). It was debated whether the food item should have a volume property, and have it XOR'd with the mass property, so any liquid based food items could be easily quantified (not many people will know how much there milk weighs). From the start it was agreed to just have mass to keep it simple and that volume would be a nice to have feature to be added if there was time.

* **Bins collection**: This was where any entries of food (wasted) the user had chosen to be tracked ended up, it also had four properties (as well as the default mongo ones) usrID, food, quantity, date_added. The food and quanitity added properties were the only ones adjustable to the user where as date_added was added by mongoDB based on the time it was added and the usrID was planned to be added by the site to distinguish entries in the bins collection by user. The end aim would have been to have a cloud based database where the user's food wasted entries would have been sent, which would have meant the documents in the collection needed to have an identifier of who had tracked (sent) that data. This was another nice-to-have feature (extension) that although planned for was never realised. Because user accounts weren't implemented and each user using the site would have had a local copy of the bins collection (so nother other user data would have been on it), the usrID = "1" was hardcoded for each new bin entry

### Database Implementation
![Data Model](https://github.com/gabrielchuv/SE7/blob/main/Portfolio/Images/datamodel.png)

Above is the picture of the data model, as mentioned above, user accounts were planned for which would have meant saving information for each user however was never implemented. MongoDB was not used directly (no use of the mongo console used). The mongoose js library was used to easily implement the design above onto the website, two schema files matching the diagram above were coded and can be found in the backend/models directory.

All properties in the two schemas were selected to be String datatypes (except date_added which was a Date). This was because mongoose js does not allow floating point datatypes (even though mongoDB does) it was easier to parse the string data into ints or floats in the frontend typescript.

Important to note that the food property of the Bins collection is a foreign key which links it to the Fooditem property name. So for example if a user had chosen "carrot" as the 'food' property to be tracked, the site could link that to the unique fooditem with the name of "carrot" and so extract cost or mass for statistics or further manipulation. The 'usrID' property of the Bins collection was also planned to be the foreign key of the Users collection that was never implemented.

## Middle Tier

### Express
Part of the MEAN stack, express is a Node.js framework that makes building an API, to interact with the backend db, really easy. One of the first tasks done with express was to link the frontend (localhost:4200) being served by angular to the server (localhost:3000). It meant the team could use nodemon (detailed below) to continuously track changes to the website and made doing anything to the site much quicker. Building the API that the frontend interacted with was also made vastly simpler (compared to trying to do it without express), express has routing methods so whenever a request (get, post etc) was sent from the frontend, we could code a method to tell the backend exactly what data to retrieve from/send into the db using the mongoose models.

### Node
Node was used to host the backend server. Nodemon was used in extension to Node to continuously serve any changes on the frontend which made the design/responsiveness phase of the site development much quicker and more intuitive.

### RESTful API
The API was built based on the RESTful design. There were only two collections of data we needed to interact with, CRUD (Create, Read, Update, Delete) methods were written for each with two read methods for each collection, to read all or read specific entries. It was decided all methods should be accessible to the user, especially as for this build, the user would only be affecting their local DB and not a shared one. Express handled what method should be triggered based on the request type and the URL and then the method would have a corresponding mongoose command which would be carried out, the response would then be sent back from the db and then send back to the frontend by the api.

## Front End

### Angular
At first the implementation of the design to angular was to generate a component for each distinct web page (landing, main, stats pages for the MVP), with two pairs of the team doing the two complex web pages whilst the other member did a simpler one. HTML & Css only was done by the 3 pairs inititially as an easy introduction to Angular development. After the web pages were in a draft state the team (as detailed in sprint 1) split off into different tasks, some working on fine-tuning the responsiveness/layout and structure of the web pages whilst others focussed on coding the typescript to define the logic of each web page.

 Half-way through sprint 1 (MVP) the team quickly discovered the power of angular components and nesting relevant components for easy data communication. For example the main page originally had the search bar coded into it, it was pointed out that in future releases the search bar may be needed else where in the site and copying from one page to another would be needlessly complex. Instead a component was created for the search bar and then nested into the main page as a child component. Nesting the component meant that data e.g. a food item being clicked on by the user could easily be outputted to the parent main page component using directives and the Event Emitter class but it also meant whole search bar component could easily be put somewhere else if needed in the future.

 Angular services were also used, a search service was created for interacting with the backend API to fetch the relevant data. CRUD methods were used for the API which were mirrored in the search service for sending appropriate data and receiving the JSON responses back and casting them to the appropriate frontend models. A message service was also created for instances where data needed to be communincated between components not nested e.g. the main page needed to send the stats page the bin entries so the stats page could calculate the yearly forecasted waste if the user kept wasting what they had just entered.

## Deployment Details
Following the guidelines atlassian recommends when it comes to continuous integration, the team split the github repo into several branches (main, develop, release). The main branch wasn't really touched it was originally planned to be the branch where stable and ready versions of the site would be pushed into at major milestones of the development cycle (e.g. implementation of MVP, implementation of first design etc), however in practice it ended up only being used for updating the report/portfolio. This was due to the fact that the site (after the major milestones) was normally streamed to our test users via software like Microsoft Teams to get feedback and so we didn't really need it to be in main (which is where we ould have asked the TEST user's to clone from).

The develop branch was where most of the work happened and was the default branch, the workflow went something like:

* each feature was branched off of develop 
* the team programmed for the day then at the end of the day we pushed our changes back into develop as long as the specific feature branch was in an acceptable state

Because pair programming was utilised heavily at the start only two - three features were being worked on concurrently which meant the amount of conflicts there were from merging back into develop each day was limited and normally easy to sort.

Agile management software, Jira was used to help plan out the features. During the sprints the features being worked on would be moved to 'in-progress' status and when finished 'done' status which meant the team was notified often and minimised confusion (although for most of the sprints we were in meetings more or less every day and on calls with each other which would have also minimised any confusion that could have happened).

The release branch, similar to main, was used for saving the site when it was in an appropriate state for the general public. It was only created during the middle of sprint 3 when we had got the first design of the food wastage calculator site implemented. This was then hosted in the internet via AWS and could be sent out/visited to anyone as opposed to a select few of our test users. Because this branch was for 'release' states only the branch was only pushed twice, once for the first design implementation and once for the second design implentation which is the most current version of the site.

### Implementation of Docker
Docker was a way to get the same environment working across the whole team for development. Through github we could share the same code and run the site through node (& express) on each machine, but having the same data populating our local instance of the database was a problem. Using a Dockerfile to build an image of the website and then running a docker-compose script to start up and connect the image built, with a containerised instance of mongoDB that prepopulated itself with our needed data (food items).

We could then run/use the site and any data created (bin entries) during runtime were saved into the mongoDB container for use later on.