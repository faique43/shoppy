const mongoose = require("mongoose");

const User = mongoose.model("User", {
  Name: { type: String },
  Email: { type: String },
  Password: { type: String },
  Role: { type: String },
});

module.exports = { User };
