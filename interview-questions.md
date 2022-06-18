# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: so we would need to generate a controller. This will allow us to connect the two with the foreign key. To the cohort model we as the has_many students adn to the students we add the, excuse me I forgot the name but we add another key in there tp link it to the cohort so we could add students.

  Researched answer: I completely remembered when I read online. The foriegn key is what we use to link two different data tables together. So if I had a data table with teams and then one with players, the team commns would have thier own keys. We then would use a foriegn key to link the correct players to thte correct team. But the key must be the same as the parent table in order to link to the child table..



2. Which RESTful routes must always be passed params? Why?

  Your answer: The restful routs that always need a params are basically all of them. show, create, edit, update, and destroy. They need the params so that depending on what we are trying to do, we can call i the key values for the id that we are trying to change, update, destroy and all.

  Researched answer: I mixed up my verbs with the CRUD  actions. restful routes provide a connection to the the crud actions, but the only that wouldn't require a params form the restful routes is the index. The rest are connected with a corresponding CRUD action which then allow us to put, patch, update, or destroy what we need in our db. This is a way being able to dynamically change things without being constrained to one thing.  also 



3. Name three rails generator commands. What is created by each?

  Your answer: Three of the rails generators I have used are are model, controller, and resource. The model created the model for my db. So basically you give it an app name and the based onn what you name it, lets say book, you vill have a title with a string an author with a string and a bio with text. The controller creates a routing controller so that we can link our methods to to the view and the routes of the app. When we generate a resource, we create both the model and the controller in one go, so it saves us time .

  Researched answer: so I was right, but to add to the question there are other g commands like migration, which  is what allows us to use add_colum and such commands withing the app to be able to add to our table.  An interesting one I found was the g scaffold. Apparently this one creates many files inn the db and is only for intensive editing and modifying. Also said to give headaches. And I already get plenty of those so i hope I don't have to use it any time soon. I also found that ever g command are built with thir which allows for changing files in the API and what also allows for parsing



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform? 
action: "GET"    location: /students          

action: "POST"   location: /students       

action: "GET"    location: /students/new

action: "GET"    location: /students/2  

action: "GET"    location: /students/2/edit    

action: "PATCH"  location: /students/2      

action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
