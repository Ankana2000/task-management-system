# Task Manager

Task Manager is a full-stack application built with Node.js, Express, and MongoDB. It allows users to manage their tasks, including creating, updating, and deleting tasks. Users can register, authenticate, and receive email notifications for various actions.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contribution](#contribution)
- [License](#license)

## Features

- **User Registration and Authentication**: Users can sign up, log in, and manage their authentication tokens.
- **Task Management**: Users can create, update, delete, and view their tasks.
- **Password Hashing**: Passwords are securely hashed using bcrypt.
- **JWT-Based Authentication**: JSON Web Tokens are used for secure authentication.
- **Email Notifications**: Users receive emails for registration and account cancellation.
- **File Upload**: Users can upload avatars (images) associated with their accounts.

## Technologies

- **Node.js**: JavaScript runtime for server-side scripting.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and task data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **SendGrid**: Service for sending emails.
- **JWT (JSON Web Token)**: For secure authentication.
- **Bcrypt**: Library for hashing passwords.
- **Validator**: Library for input validation.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) instance (local or remote)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/task-manager.git

2. **Navigate to the project directory:**

    ```bash
    cd task-manager
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file in the root directory and add the following environment variables:**

    ```plaintext
    MONGODB_URL=mongodb://localhost:27017/task-manager
    JWT_SECRET=your_jwt_secret
    SENDGRID_API_KEY=your_sendgrid_api_key
    SGMAIL_EMAIL=your_sendgrid_verified_email
    ```

    - `MONGODB_URL`: URL of your MongoDB database.
    - `JWT_SECRET`: Secret key for JWT signing and verification.
    - `SENDGRID_API_KEY`: Your SendGrid API key for sending emails.
    - `SGMAIL_EMAIL`: Your SendGrid verified email address.

5. **Start the application:**

    ```bash
    npm start
    ```

## Features

- **User Authentication:**
  - Users can register and log in using their email and password.
  - JWT tokens are used for securing routes.

- **Task Management:**
  - Users can create, read, update, and delete tasks.
  - Each task is associated with the user who created it.

- **Email Notifications:**
  - SendGrid is used for sending welcome and cancellation emails.

## API Endpoints

### User Endpoints

- **POST** `/users`  
  Register a new user.

- **POST** `/users/login`  
  Log in a user.

- **POST** `/users/logout`  
  Log out the user.

- **POST** `/users/logoutAll`  
  Log out the user from all sessions.

- **GET** `/users/me`  
  Get the authenticated user's profile.

- **PATCH** `/users/me`  
  Update the authenticated user's profile.

- **DELETE** `/users/me`  
  Delete the authenticated user.

### Task Endpoints

- **POST** `/tasks`  
  Create a new task.

- **GET** `/tasks`  
  Get all tasks.

- **GET** `/tasks/:id`  
  Get a task by ID.

- **PATCH** `/tasks/:id`  
  Update a task by ID.

- **DELETE** `/tasks/:id`  
  Delete a task by ID.

## Development

- **Running Tests**

  - Run unit tests:

    ```bash
    npm test
    ```

  - Run tests with coverage:

    ```bash
    npm run test:coverage
    ```

- **Code Style**

  This project uses ESLint for code linting. To check code style, run:

  ```bash
  npm run lint
  ## Contributing

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature

3. **Make your changes and commit them:**

    ```bash
    git commit -am 'Add new feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/your-feature
    ```

5. **Create a new Pull Request.**

