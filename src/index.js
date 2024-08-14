
require('dotenv').config(); // Load environment variables from .env file

const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("./db/mongoose"); // Ensure your database setup file is correct
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

/* SETUP NEW EXPRESS APP */
const app = express();

/* SETUP EXPRESS ROUTERS */
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(taskRouter);

/* LISTEN AND SERVE ON CHOSEN PORT */
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
app.listen(port, () => {
    console.log("Server is up on port " + port);
});
