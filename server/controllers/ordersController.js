const express = require("express");
const router = express.Router();

const { Order } = require("../models/order");

router.get("/", (req, res) => {
  Order.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in retrieving orders list: " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
