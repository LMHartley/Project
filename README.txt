
Introduction 
-----------
This is a simple web application that is capable of connecting to a database, uploading to a database, retrieving information from a database and deleting from a database. This system is built with the following technologies:

-   [Spring boot](https://spring.io/projects/spring-boot) [server side services]

-   [Vanilla JavaScript](https://www.javascript.com/[client side components]

-   [MySQL](https://www.mysql.com/) [relational data]

Project Management
---------------
This project uses an agile methodology. Please see Trello board at the following link: 
https://trello.com/b/hUgE6PKq/image-hosting-application

Running the application
-----
Step 1: 
Launch Eclipse and start the backend application. This will launch Springboot and will set up the DB in the background.
Step 2:
Launch the homepage.html file in any browser.
Step 3:
From the homepage.html you have access to the recentuploads.html, carshows.html, contact.html and upload.html.
Step 4:
If you select the recentuploads.html, this page will onload GET any data from the MySQL database. If there isn't any data in in MySQL fields then the page will not show anything.
Step 5:
To insert into the database, you'll need to go to upload.html (which can be accessed from any html page). On the upload.html page you'll find a form with 4 input fields. Name, file, title and description. When you submit this form, the data will be sent to the MySQL DB using a POST request. 
Step 6: 
Return to the recentupload.html page and you'll see the upload you've made. You'll also see a delete button has been generated which is linked to the specific upload. When you click 'delete' it'll will send a DELETE request to the DB and remove the entry from the DB.
Step 7:
Other features of the project include multiple social media links that will take you to their websites.
