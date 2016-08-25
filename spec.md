# Specifications for the Angular Assessment

Specs:
- [X] Use Angular to build the app
  Done. Using Bower to manage components
- [X] Use ActiveRecord for storing information in a database
  User, Post, Review using rails api
- [X] Include more than one model class (list of model class names)
  User, Post, Reviews
- [X] Include at least one has_many relationship (x has_many y)
  User has_many posts, posts has_many review)
- [X] Include user accounts
  Devise Users
- [X] Ensure that users can't modify content created by other users
  Post controller checks author id againstg current users
- [X] Include user input validations
  User creation and login, post creation/edit
- [X] Display validation failures to user with error message (example form URL)
  Post title, content, and category required
- [X] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code

Project Goals:
- [X] Must use an Angular Front-End that includes at least 5 pages
  Home, new post, edit post, author, post
- [X] Must contain some sort of nested views
  Views are nested under home. using ui-router
- [X] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due
  Searchable by keyword or category via checkbox
- [X] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart
  Review star rating
- [X] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product
- [X] Data should be validated in Angular before submission
  User creation and login, post creation/edit
- [X] Must talk to the Rails backend using $http and Services.
  Users, Posts, Reviews talk to backend with respective services
