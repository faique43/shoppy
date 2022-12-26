const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const databaseString =
  "mongodb+srv://faique3543:fxLux5IgXtsuTFLA@dashboardcluster.97xahct.mongodb.net/dashboardApp";

mongoose.connect(databaseString, (err) => {
  if (err) {
    console.log("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});

module.exports = mongoose;
