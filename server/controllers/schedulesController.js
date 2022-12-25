const express = require("express");
const router = express.Router();

const { Schedule } = require("../models/schedule");

router.get("/", (req, res) => {
  Schedule.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in retrieving schedules list:" +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;