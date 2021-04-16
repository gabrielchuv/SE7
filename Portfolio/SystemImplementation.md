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
A short introduction to the stack we used. Include class diagrams, sequence diagrams

## Back End
Explanation of what we used for the backend and why.

### MongoDB

### Database Implementation
The data model that we developed our back end from (e.g. entity relationship diagrams)

## Middle Tier
Explanation of what we used for the middle tier and why.

### Express
Express made routing and connecting the frontend to the node server really easy. It meant when running the site we only needed to start the node server and the frontend was automatically loaded in. It also meant building and using the api was simple... (TODO)

### Node
Node was used to host the backend server, and building the API in an appropriate way to get the data from the database. (TODO)

### RESTful API
The API was built based on restful design. (TODO)

## Front End
Explanation of what we used for the front end and why. (Angular + node modules e.g. bootstrap)

### Angular
Details of implementation. ?(this is basically the above)

## Deployment Details
Following the guidelines atlassian recomment when it comes to continuous integration, them team layed out the github folder into a several branches (main, develop). The main branch wasnt really touched until the team could be sure the site was in a secure, stable and 'ready' state that we would be happy to show off to the world, the first instance of updating main was to push the MVP site which had all the main features we wanted to show off. The develop branch was where most of the work happened and was the default branch, the workflow was something like each feature was branched off of develop, the team programmed for the day then at the end of the day we pushed our changes back into develop as long as the specific feature branch was in an acceptable state. Because pair programming was utilised heavily only two to three features were being working on concurrently which meant the amount of conflicts there were from merging back into develop each day was limited and normally easy to sort.

Agile management software, Jira was used to help plan out the features. During the sprints the features being worked on would be moved to 'in-progress' status and when finished 'done' status which meant the team was notified often and minimised confusion (although we were in meetings more or less every day and all calls with each other which would have also minimised any confusion that could have happened).

### Implementation of Docker
Docker was a (shite) way to get the same environment working across the whole team for development. Through github we could share the same code and run the site through node (& express) on each machine, but having the same data populating our local instance of the database was a problem. Using a Dockerfile to build a image of the website and then running a docker-compose script to start up and connect the image built, with a containerised instance of mongoDB that prepopulated itself with our needed data (food items).