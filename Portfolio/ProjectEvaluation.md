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

## Industry and Academic Review

### Academic Review

The primary goal of our application was to increase awareness of individual food waste and secondarily nudge behavior change. 

The transtheoretical model (TTM), a psychosocial model for behavior change, was applied to better understand the stages from contemplation of an issue to long-term maintenance of intended behavior. TTM has been applied in preventing ill behavior or creating new behavior in a number of contexts including smoking cessions <sup>1</sup> and exercise <sup>2</sup>.  In the context of food waste, there are 5 stages for behavior change: (1) pre-contemplation where the individual has no thought for change, (2) contemplation where the individual is awareness of the issue, (3) preparation where the individual considers or plans for behavior change, (4) action where the individual carries out the behavior and (5) maintenance where the individual adheres to the behavior for 6 months or longer <sup>3</sup>. 

Our application focuses on pre-contemplation and contemplation stages, specifically the act of weighing the pros and cons of a behavior. We apply the language of internal reconciliation to help individuals internalize the issue in their own behavior <sup>3</sup>. For example, users are asked, “Where has your money gone?” to convey the cons of money lost for them then asked, “What foods have you wasted this week?” to convey their individual contribution to the issue.  This approach is further supported by research that showed that awareness of their own behavior is needed to nudge behavior change <sup>4, 5</sup>. To push individuals towards action, we framed our messaging with social norming. For example, on the results page, the reported cost of individual food waste is compared to the average cost of food waste per individual in the UK: “That’s more waste than that of the majority of people in the UK.” We chose social norming as research has shown that this approach may nudge individuals towards reducing waste <sup>6</sup>


## Discussion of Future Work
Discussion of future work (in terms of design, development and evaluation)

## Social and Ethical Implications
The following sections will address the social and ethical implications of our project. We followed [the nine UNICEF principles](https://ssir.org/articles/entry/the_ethics_of_innovation) in developing our web application to ensure that we have achieved ethical innovation.

### 1. Design with the user 
Throughout the development of our prototype, we have ensured to involve the user at every stage (more details can be found [here](/UXDesign.md)). We sent out surveys to understand who our users are, and we conducted interviews to better understand our design decisions.

### 2. Understand the existing ecosystem
Our aim for this project was to raise awareness about food waste. We have therefore, conducted extensive research about the issue (with the focus on the UK specifically) to better understand the causes of food wastage. In addition, we reviewed current solutions available which addresses the issue (for more details [here](#academic-review)). With this research in mind, we started designing our web application.

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

## Bibliography

1. Prochaska, J., & Norcross, J. (2001). Stages of change. Psychotherapy: Theory, Research, Practice, Training, 38, 443–448. https://doi.org/10.1037/0033-3204.38.4.443
2. Hellsten, L., Nigg, C., Norman, G., Burbank, P., Braun, L., Breger, R., Coday, M., Elliot, D., Garber, C., Greaney, M., Lees, F., Matthews, C., Moe, E., Resnick, B., Riebe, D., Rossi, J., Toobert, D., & Wang, T. (2008). Accumulation of Behavioral Validation Evidence for Physical Activity Stage of Change. Health Psychology : Official Journal of the Division of Health Psychology, American Psychological Association, 27, S43-53. https://doi.org/10.1037/0278-6133.27.1(Suppl.).S43
3. Applying Behaviour Change Methods to Food Waste. (2020). In Routledge Handbook of Food Waste (pp. 293–310). Routledge. https://doi.org/10.4324/9780429462795-23
4. Bamberg, S., & Moser, G. (n.d.). Twenty years after Hines, Hungerford, and Tomera: A new meta-analysis of psycho-social determinants of pro-environmental behaviour—ScienceDirect. Retrieved April 26, 2021, from https://www.sciencedirect.com/science/article/abs/pii/S0272494406000909
5. Klöckner, C., & Blöbaum, A. (2010). A comprehensive action determination model—Toward a broader understanding of ecological behaviour using the example of travel mode choice. 574-586. https://doi.org/10.1016/j.jenvp.2010.03.001
6. Quantified consumer insights on food waste | REFRESH. (n.d.). Retrieved April 26, 2021, from https://eu-refresh.org/quantified-consumer-insights-food-waste
