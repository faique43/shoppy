const mongoose = require("mongoose");

const Kanban = mongoose.model("Kanban", {
  Id: { type: String },
  Ttile: { type: String },
  Status: { type: String },
  Summary: { type: String },
  Type: { type: String },
  Priority: { type: String },
  Tags: { type: String },
  Estimate: { type: Number },
  Assignee: { type: String },
  RankId: { type: Number },
  Color: { type: String },
  ClassName: { type: String },
});

module.exports = { Kanban };