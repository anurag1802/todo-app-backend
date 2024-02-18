const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const todoRoute = require("./routes/todo.routes.js");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/todos", todoRoute);

const port = process.env.PORT;
const mongodbConnectionString = process.env.MONGODB_CONNECTION_STRING;

app.get("/", (req, res) => {
  res.send("Welcome to todo list");
});

//once database is connected successfully then start the server
mongoose
  .connect(mongodbConnectionString)
  .then(() => {
    console.log("database connection successfull");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    res.status(500).json({ message: error.message });
  });
