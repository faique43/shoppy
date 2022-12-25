const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/dashboardApp", (err) => {
  if (err) {
    console.log("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});

module.exports = mongoose;
