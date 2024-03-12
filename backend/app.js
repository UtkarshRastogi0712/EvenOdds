const express = require("express");
const createError = require("http-errors");
require("dotenv").config();
require("./utils/db");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  res.send("It works!");
});

app.use(async (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use(async (error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
