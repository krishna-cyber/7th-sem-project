/** @format */

const mongoose = require("mongoose");

// database connection with error handling

mongoose
  .connect("mongodb://localhost:27017/employee", {})
  .then(() => {
    console.log("Database connection is successful");
  })
  .catch((e) => {
    console.log("Error: ", e.message);
  });

module.exports = mongoose;
