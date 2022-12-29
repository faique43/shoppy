const express = require("express");
const router = express.Router();

const { Customer } = require("../models/customer");

router.get("/", (req, res) => {
  Customer.find()
    .then((customers) => res.send(customers))
    .catch((err) => res.status(400).send(err));
});

router.delete("/:id", (req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then((customer) => res.send(customer))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;