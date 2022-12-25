const express = require("express");
const router = express.Router();

const { Kanban } = require("../models/kanban");

router.get("/", (req, res) => {
  Kanban.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in retrieving Kanban list:" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
