const mongoose = require("mongoose");

const Schedule = mongoose.model("Schedule", {
  ID: { type: Number },
  Subject: { type: String },
  StartTime: { type: Number },
  EndTime: { type: String },
  Location: { type: String },
  CategoryColor: { type: String },
});

module.exports = { Schedule };
