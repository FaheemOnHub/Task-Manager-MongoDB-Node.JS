**Task Manager Web App**

This is a simple Task Manager web application built using Node.js and MongoDB. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks.
Features

    Create: Users can create new tasks with a name and optional completion status.
    Read: Users can view all tasks or retrieve a specific task by its ID.
    Update: Users can update the name or completion status of a task.
    Delete: Users can delete a task by its ID.

Technologies Used

    Node.js: The backend of the application is built using Node.js, which provides the runtime environment for JavaScript.
    Express.js: Express.js is used as the web application framework for Node.js, simplifying the creation of APIs and handling HTTP requests.
    MongoDB: MongoDB is used as the database to store tasks. It's a NoSQL database, providing flexibility and scalability.
    Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data.
    dotenv: The dotenv module is used to load environment variables from a .env file into process.env, facilitating the management of sensitive information like database URIs.
    morgan: Morgan is used as a middleware for logging HTTP requests.
    RESTful API: The application follows RESTful principles to provide a clear and predictable API for interacting with tasks.

Installation
Clone the repository:
git clone https://github.com/FaheemOnHub/Task-Manager-MongoDB-Node.JS

Install dependencies:

bash

npm install

Set up environment variables:

Create a .env file in the root directory and add the following variables:

MONGO_URI=your_mongodb_uri

Start the server:

bash

    npm start

    Access the application at http://localhost:3000 in your browser.

API Endpoints

    GET /api/v1/tasks: Retrieves all tasks.
    POST /api/v1/tasks: Creates a new task.
    GET /api/v1/tasks/:id: Retrieves a specific task by its ID.
    PATCH /api/v1/tasks/:id: Updates a task by its ID.
    DELETE /api/v1/tasks/:id: Deletes a task by its ID.

Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for details.
