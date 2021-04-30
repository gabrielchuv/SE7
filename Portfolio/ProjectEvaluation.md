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

Unit testing / Functional testing.

User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications

Reflective discussion of the success of the project. How well did your project fulfil the brief? Were all of your own objectives met

### Reflection on Working Practices
Reflect on the working practices of your group, how well they did or did not work, e.g, management of issues, communication, Agile (etc)

## Industry review

## Problem defintion

Food loss and waste is a global issue across various dimensions: financial, environmental, and ethical. Financially, it is estimated that the total cost associated with food lost or wasted is 2.6 trillion dollars annually (REF: http://www.fao.org/3/i3991e/i3991e.pdf). Out of this amount, around 700 billion dollars can be linked with environmental waste (REF: http://www.fao.org/nr/sustainability/food-loss-and-waste/en/). 

However, the environmental cost is not solely financial. The carbon footprint caused by food wastage is estimated at 3.3 billion tonnes of CO2 yearly (REF: http://www.fao.org/news/story/en/item/196402/icode/) or 6% of global greenhouse gas emissions (REF: https://ourworldindata.org/food-waste-emissions). Moreover, the volume of water associated with wasted or lost food is approximately 250km3 or three times the size of lake Geneva. Viewing this from a smaller-scale perspective reveals similarly shocking numbers. For instance, one kilogram of wasted apples or beef is associated with 822 and a whopping 15415 litres of water wasted respectively(REF: http://www.fao.org/news/story/en/item/196402/icode/).

The human population is predicted to grow up to 9.8 billion by 2050 (REF: https://www.un.org/development/desa/en/news/population/world-population-prospects-2017.html) and, unless action is taken, the aforementioned consequences of food waste will only worsen, engendering potentially irreversible implications for our planet. This is enough to take a strong negative utilitarian stance against the issue (REF: "Utilitarianism resources," [Online]. Available: https://www.utilitarianism.com/karl-popper.html. [Accessed 05 01 2021].). Additionally, already today, if it were possible to redistribute wasted food, we would be able to feed all the undernourished population (815 million people (REF: https://www.worldhunger.org/world-hunger-and-poverty-facts-and-statistics/)) at least twice (REF: https://www.wfpusa.org/articles/8-facts-to-know-about-food-waste-and-hunger/#:~:text=Right%20now%2C%20the%20world%20produces,before%20it%20can%20be%20consumed.&text=Along%20with%20chronic%20poverty%2C%20conflict,root%20causes%20of%20hunger%20worldwide.). This mismatch between the existence yet unavailability of resources further highlights our ethical responsibility towards minimizing the extent of this issue


Given the magnitude of the problem, it is not surprising the the United Nations has chosen the reduction of food waste as one of its 2030 sustainable development goals: “By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses” (REF: http://www.fao.org/sustainable-development-goals/indicators/1231/en/).

To start tackling this complex global issue, we will first make a distinction between food loss and food waste. The former generally signifies food lost in the earlier stages of production (i.e. food suppliers excluding retailers and consumers) whereas the latter refers to food that is fit for human consumption that is not used (REF: https://en.reset.org/knowledge/global-food-waste-and-its-environmental-impact-09122018#:~:text=An%20estimated%201.3%20billion%20tonnes,FAO)%20of%20the%20United%20Nations). Perhaps unsurprisingly, the proportion of food lost or wasted during later stages of the supply chain (i.e. by consumers) is greater in developed economies like the UK than in developing ones. (GRAPH) (REF: http://www.fao.org/3/mb060e/mb060e02.pdf). For this reason, and due to our proximity and access to UK end-consumers (i.e. students), this project will focus on reducing UK end-consumers’ food waste. 

If we zoom into the UK context, we find that, in 2018, 9.5 billion tonnes of food were wasted, out of which, 70% (or 6.6 billion tonnes) were edible. This is equivalent to 19 billion pounds a year or 25 million tonnes of greenhouse gases. Moreover, 70% of this waste comes from households. This is 6.6 million tonnes wasted (or 4.5 million edible tonnes) (REF: https://wrap.org.uk/sites/default/files/2020-11/Food-surplus-and-waste-in-the-UK-key-facts-Jan-2020.pdf). Only 28% comes from the manufacturing and HaFS sectors combined.

Being the group that contributes the most with wastage, and because most current tools are targeted towards businesses (according to our industry review) we will be focusing on households as our target segment.

If we zoom in even further to understand what causes this food waste, we encounter that 41% of food (by weight) was wasted because it was not used in time, 28% due to personal preference, and 25% because people cooked too much (REF:wrap). These are all reasons upon which consumers have agency and could potentially change if properly motivated. Therefore, we have decided to focus on increasing consumers’ motivation to waste less.

Finally, as conveyed by our industry review (link), other alternatives have been unsuccessfully trying to balance solutions that offer both convenience and accuracy. Thus, our final definition of the problem is:

<b>We will focus on motivating UK studnets to waste less in order to contribute towards the reduction of food wastage coming from UK households. At a lower-level, we will attempt to solve the problems of inconvenience and accuracy simultaneously in order to aid with our overlying goal of motivating students.</b>


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
