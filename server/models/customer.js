const mongoose = require("mongoose");

const Customer = mongoose.model("Customer", {
  CustomerID: { type: Number },
  CustomerName: { type: String },
  CustomerEmail: { type: String },
  ProjectName: { type: String },
  Weeks: { type: String },
  Budget: { type: String },
  Status: { type: String },
  StatusBg: { type: String },
  CustomerImage: { type: String },
  Location: { type: String },
});

module.exports = { Customer };