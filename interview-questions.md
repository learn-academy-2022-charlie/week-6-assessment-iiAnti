# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: so we would need to generate a controller. This will allow us to connect the two with the foreign key. To the cohort model we as the has_many students adn to the students we add the, excuse me I forgot the name but we add another key in there tp link it to the cohort so we could add students.

  Researched answer: I completely remembered when I read online. The foriegn key is what we use to link two different data tables together. So if I had a data table with teams and then one with players, the team commns would have thier own keys. We then would use a foriegn key to link the correct players to thte correct team. But the key must be the same as the parent table in order to link to the child table..



2. Which RESTful routes must always be passed params? Why?

  Your answer:

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer:

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          

action: "POST"   location: /students       

action: "GET"    location: /students/new

action: "GET"    location: /students/2  

action: "GET"    location: /students/2/edit    

action: "PATCH"  location: /students/2      

action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
