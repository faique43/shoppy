const mongoose = require("mongoose");

const Employee = mongoose.model("Employee", {
  EmpployeeID: { type: Number },
  Name: { type: String },
  Title: { type: String },
  HireDate: { type: String },
  Country: { type: String },
  ReportsTo: { type: String },
  EmployeeImage: { type: String },
});

module.exports = { Employee };