const mongoose = require("mongoose");

const Line = mongoose.model("Line", {
  datasource: [{ x: { type: Number }, y: { type: Number } }],
  xname: { type: String },
  yname: { type: String },
  name: { type: String },
  type: { type: String },
  width: { type: String },
  marker: {
    visible: { type: Boolean },
    width: { type: Number },
    height: { type: Number },
  },
});

module.exports = { Line };