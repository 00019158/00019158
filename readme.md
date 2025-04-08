# Book Review Web App

This is a simple Book Review Web Application developed using Node.js and Express.js.  
The app allows users to create, read, update, and delete (CRUD) reviews of books.  
Each review includes the book title, author, genre, rating, and a written review.

---

##  How to Run the App Locally

Follow these steps to install and run the application on your computer:

Open the terminal and  install dependencies
1) npm install

Next step Run Application:
2) node app.js

Open the Browser:
http://localhost:3000




## All Dependencies
I have used the following npm packages:

express - Web framework for Node.js

ejs - Templating engine

body-parser - Middleware for parsing form data

fs (built-in) - For reading/writing data to JSON file

path (built-in) - Utility for handling file paths

! To Install all dependencies using "npm install" in terminal !



## Project Structure
book-review-app
│
├── app.js                # Main application file
├── package.json          # App metadata and dependencies
│
├── /routes
│   └── reviews.js        # Route logic for CRUD operations
│
├── /views
│   ├── index.ejs         # Main page (list of reviews)
│   └── form.ejs          # Form for adding/editing reviews
│
├── /public               # Static files (CSS, images, etc.)
│    ├── styles.css        # Main page (list of reviews)
│    └── style2.css
├── /data
│   └── reviews.json      # JSON file to store review data
│
└── README.md             # Project documentation
