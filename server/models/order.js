const mongoose = require("mongoose");

const Order = mongoose.model("Order", {
  OrderID: { type: Number },
  CustomerName: { type: String },
  TotalAmount: { type: Number },
  OrderItems: { type: String },
  Location: { type: String },
  Status: { type: String },
  StatusBg: { type: String },
  ProductImage: { type: String },
});

module.exports = { Order };