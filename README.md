# task-management-system
Task Manager
Task Manager is a full-stack application built with Node.js, Express, and MongoDB. It allows users to manage their tasks, with features for user registration, authentication, and task management.

Table of Contents
Features
Technologies
Setup
Usage
API Endpoints
Contribution
License
Features
User registration and authentication
Task creation, update, and deletion
Password hashing
JWT-based authentication
Email notifications for user actions (e.g., welcome, cancellation)
Technologies
Node.js: JavaScript runtime for server-side scripting
Express: Web framework for Node.js
MongoDB: NoSQL database for storing user and task data
Mongoose: ODM (Object Data Modeling) library for MongoDB
SendGrid: Service for sending emails
JWT (JSON Web Token): For secure authentication
Bcrypt: Library for hashing passwords
Validator: Library for input validation
Setup
Prerequisites
Node.js (v14 or later)
MongoDB instance (local or remote)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/task-manager.git
Navigate to the project directory:

bash
Copy code
cd task-manager
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

plaintext
Copy code
MONGODB_URL=mongodb://localhost:27017/task-manager
JWT_SECRET=your_jwt_secret
SENDGRID_API_KEY=your_sendgrid_api_key
SGMAIL_EMAIL=your_sendgrid_verified_email
Start the application:

bash
Copy code
npm start
The server will start on http://localhost:3000.

Usage
Register a new user:

POST /users with JSON body containing name, email, and password.

Log in:

POST /users/login with JSON body containing email and password.

Create a task:

POST /tasks with JSON body containing description and completed status (authentication required).

Get tasks:

GET /tasks (authentication required).

Update a task:

PATCH /tasks/:id with JSON body containing updates (authentication required).

Delete a task:

DELETE /tasks/:id (authentication required).

Log out:

POST /users/logout (authentication required).

Log out from all sessions:

POST /users/logoutAll (authentication required).

API Endpoints
Refer to the API Documentation for a detailed list of endpoints and request/response examples.

Contribution
Fork the repository

Create a feature branch:

bash
Copy code
git checkout -b feature/your-feature
Commit your changes:

bash
Copy code
git commit -am 'Add new feature'
Push to the branch:

bash
Copy code
git push origin feature/your-feature
Create a new Pull Request

Provide a clear description of your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.
