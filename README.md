# README

* How the app works: 
    * At the home page, you click 'Users' or 'UsersJSON' to be directed to their respective pages. On the 'Users' page, you can view all existing users in individuals cards/tiles. You can also add a new user, edit an existing user's first name, last name, and title, and delete a user. With the edit and delete functions, you have to refresh the page afterwards in order to see the changes rendered on the page. 
    * On the 'UsersJSON' page, you can view the JSON representation of all the users and their data. I used an npm package called react-json-pretty to make it more readable.
    * With what I have so far, I was unable to show a nested organizational structure. I think I would have to run a new migration to add a direct_reports column to the database, and then see if I could somehow add users to that array using their manager_id key property.

* **Note: I did have to create a super user role and a password during my installation of postgreSQL and setting up the database, so I'm not sure how that will impact someone else trying to clone the repository and run the server on their local computer. 

* Ruby version '2.6.3'

* Rails version '6.0.2.1'

* System dependencies:

    * axios '0.19.2'
    * react '16.13.0'
    * react-dom '16.13.0'
    * react-router-dom '5.1.2'
    * react-json-pretty '2.2.0'

* Tutorial I followed for setting up the database with postgreSQL and also using React with Rails:

    https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend

    https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-ruby-on-rails-application-on-ubuntu-18-04

* Simple homepage:

![Homepage screenshot](/app/assets/images/rails-homepage.png)

* Users:

![Users page screenshot](/app/assets/images/rails-users.png)

* Add new user form:

![Add new user screenshot](/app/assets/images/rails-add-user.png)

* Edit user form:

![Edit user form screenshot](/app/assets/images/rails-edit-user.png)

* JSON data display:

![JSON data display page](/app/assets/images/rails-json.png)