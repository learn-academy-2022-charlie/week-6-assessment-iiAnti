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

  Researched answer: so I was right, but to add to the question there are other g commands like migration, which  is what allows us to use add_colum and such commands withing the app to be able to add to our table.  An interesting one I found was the g scaffold. Apparently this one creates many files inn the db and is only for intensive editing and modifying. Also said to give headaches. And I already get plenty of those so i hope I don't have to use it any time soon. I also found that ever g command are built with thir which allows for changing files in the API and what also allows for parsing.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform? 


action: "GET"    location: /students   
- This one links to the index of the methods. It allows for us to see all the info or a table, or if we wanted to, just a certain row as in an ID. For that you would have to call upon and id.      

action: "POST"   location: /students    
- This links with Create. This allows us to create a new row or content in the data base. You can add as many as you would like, but remember this method will require you to have a params to be able to take in the values for the new id or else you could receive nill.   

action: "GET"    location: /students/new
-This is requesting a new form, which connects to the edit. This will allows us to accuire a form for editin gor creating a new id.

action: "GET"    location: /students/2 
-This action correlates to what I sai before, since we have a 2 at the end of wha we are requesting, it is telling the system to give us the row with the id of 2. This part connects to the show method since we are only asking for one thing. 

action: "GET"    location: /students/2/edit
-this one connects with the edit method which gives us a form to be able to edit the content we choose. Remember, this is just to edit, but not to update, update is in patch. This one as well requires params.  

action: "PATCH"  location: /students/2 
-this follows after what I said in the qs before, this comes after the edit form, adn connects with the method, update. when wanting to edit a key value in the db for an ID, in this case, 2. this also needs a params.

action: "DELETE" location: /students/2 
-this action connects with the destroy method. When using this, we also need a params, to be able to give it value. So in this case we are telling it to delete the row with the id of 2.  



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


1. As a user I can create a new list to separate different areas of need
2. As a user I can activate dark mode to have an ease on my eyes
3. As a user can add a new item to the to do list 
4. as a user I can delete something from the to do list
5. As a user I can order my list of importance first 
6. As a user I can check when a item as been completed 
7. As a user I can share my list with a friend/worker/group and have it all linked(when one person checks an item complete, it checks it for everyone else)
8. As a user I can add a date to each/all items(in case they want to complete them on certain days)
9. As a user I can have my app notify me about items on the list the day day before, day of , or day after. (they can choose when and what days to get notified.)
10. As a user I can save the to do list to use again another time 
