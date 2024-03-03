## Task Manager Web App

This is a simple Task Manager web application built using Node.js and MongoDB. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks.

**Features:**

* **Create:** Add new tasks with names and optional completion status.
* **Read:** View all tasks or retrieve specific ones by their ID.
* **Update:** Modify task names or completion status.
* **Delete:** Remove tasks by their ID.

**Technologies:**

* **Backend:** Node.js provides the JavaScript runtime environment.
* **Framework:** Express.js simplifies API creation and HTTP request handling.
* **Database:** MongoDB offers a flexible and scalable NoSQL database for storing tasks.
* **ODM:** Mongoose provides a schema-based approach to model task data efficiently.
* **Environment Variables:** The dotenv module securely manages sensitive information like database URIs.
* **Logging:** Morgan logs HTTP requests for better monitoring.
* **API Design:** RESTful principles ensure a clear and predictable API for interacting with tasks.

**Getting Started:**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/FaheemOnHub/Task-Manager-MongoDB-Node.JS
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add:
   ```
   MONGO_URI=your_mongodb_uri
   ```
4. **Start the Server:**
   ```bash
   npm start
   ```
5. **Access the Application:** Visit http://localhost:3000 in your browser.

**API Endpoints:**

* **GET /api/v1/tasks:** Get all tasks.
* **POST /api/v1/tasks:** Create a new task.
* **GET /api/v1/tasks/:id:** Get a specific task by ID.
* **PATCH /api/v1/tasks/:id:** Update a task by ID.
* **DELETE /api/v1/tasks/:id:** Delete a task by ID.

**Contributing:**

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

**License:**

This project is licensed under the MIT License. See the LICENSE file for details.
