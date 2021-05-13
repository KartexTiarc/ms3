<h2 align="center"><img src="/static/assets/images/mockup.png">

[Recipe Gather](http://recipes-to-community.herokuapp.com/)

[GitHub](https://github.com/KartexTiarc/ms3)

## About

This site is for making it more easier to gather recipes for write a book by making people around the world to contribute to this site. It is easy to add categories and can ask anyone 
to contribute to the site with recipe that the world can enjoy. 

## User Experince (UX)

### User Stories

 ### How can I easliy share and try new recipes

 * I want to be able gain access to site where I can share my recipes ideas.
 * A site where you can find ordinary peoples own recipes. 
 
 ### A site is managable when I at home and on the fly

 * I want a simple site that I can access on my computer or on my phone. 
 * A site that is easy to search for recipes and show to freinds. 

### Design

- ### Colours
    * The color used was amber for lighten up the screen. 

- ### Typography
    * Mitr was used on the Header for the site for the simplicity and the fine design with more curves it to make it smother. 
    * Arima Madurai was used for the info text. More for style and the feeling for aesthetic feeling with the text. 

- ### Imagery

- ### Wireframes

## Features

 * Register ones username witha a email.
 * Most featrues on the site is refered to the app.py file.
 * The recipe site is able to search after a recipe and look all the recipes there is. 
 * You can add a recipe if you want with the categories that the admin have added. 
 * User can edit their own recipes. 

 ## Future Features

 * Pagination for the site.
 * Category names change on recipes when category is changed by admin.

### Header

 - The header for the name on the left site.
 - The navbar is in the right corner for all the site is aviable when you are logout and login. 

## Technologies used

 - JSON
 - Materalize

### Languages used

 - HTML5
 - CSS3
 - Python
 - Javascript

## Testing

 - [HTML Validator] (https://validator.w3.org/nu/)
 - [CSS Validator] (https://jigsaw.w3.org/css-validator/)
 - [WebpageTest] (https://www.webpagetest.org/) 
 - <img src="/static/assets/images/testing.png">
 

### Testing User Stories

  ### How can I easliy share and try new recipes

 * I want to be able gain access to site where I can share my recipes ideas.
 1. The site is design be able to easy to add any sort of recipe that you want. 
 * A site where you can find ordinary peoples own recipes. 
 1. The site is more for ordinary and those who love to make food. 
 
 ### A site is managable when I at home and on the fly

 * I want a simple site that I can access on my computer or on my phone.
 1. The site is design to work any platform to make it easier to be used.  
 * A site that is easy to search for recipes and show to freinds. 
 1. The site search function make it be able to search after the creater or the recipe name. 

## Deployment

### GitHub Pages

This site was publiched with [GitHub Pages](https://pages.github.com/). How to create a GitHub page is below. 

1. Go to the GitHub website and create a log in. 
2. On the left you will see your repositories (if you have created one), select the one you want to set up a page for. 
3. Above the repositories you will see a menu. To the right you will find one that say "Settings". 
4. Then go down to GitHub pages.
5. Choose master as source and then you click save. 
6. Refresh the site and scroll back to GitHub pages and there is your link. 

### Forking the GitHub Repository

By forking the GitHub repository it will make a copy of the original repository on the GitHub 
account to view and/or make changes without affecting the original.

1. Log in to GitHub and locate the GitHub repository.
2. At the top to the right of the page is the "Fork" Button.
3. Press it and now it should copy the original repository to your GitHub account

### Gitpod

When you have a Github you need to connect it to [Gitpod](https://www.gitpod.io/docs/getting-started). 

1. Go to Github website and go to Browser extensions.
2. Choose between for Google Chrome or Firefox.
3. A user can then see the extension in the toolbar. 

### Heroku

Connect to Heroku. 

1. In Heroku create a app. It need to be unique name to be able to function.
2. Link the app to your Github repository by going under "Deply".
3. Choice your "Deployment method" to Github.
4. Then go to "Settings tab" and then add the corresponding "Config Variables" that is 
MONGO_URI mongodb+srv://...
IP 0.0.0.0
PORT 5000
SECRET_KEY secretkey 
5. You will need to create a "procfile" in your Gitpod with the command
echo web: python app.py > Procfile.

### MongoDB

MongoDB connect [MongoDB](https://www.mongodb.com/)

1. Create a MongoDB account. 
2. Create a "Cluster" and use the free cluster.
3. Use cloud server "aws" and then wich reagion you are in. 
4. Create then a cluster.
5. Add a new "Database". 
6. Add then IP adress and "allow access from anywhere".
7. Click on "Collection" and then click "Add My Own Data".
8. Click on "Insert Documents". Now you can create what kind of data you want. 
9. Click on "Connect" and then on Connect with mongo shell where the command line to able to connect to the database. 


### Publishing

### Know Bugs

- When deleting categories it deleting wrong category. 

## Credits

 - Credit to my mentor Maranatha Ilesanmi for his guidance. 
 - Code Institute tutors
 - Picture for index site Becca Tapert [Kitchen] (https://unsplash.com/photos/mDOGXiuVb4M)

### Code

 - Materalize library was used to create the responsive design, navbar, form and the header.

### Content

- All the code was written by - Christoffer Nyh.
- To get the right colour schemes Balsamiq Wireframes was used. 
- The README file was formed after the Code Institute Sample Read. 