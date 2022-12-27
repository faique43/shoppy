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

router.post("/", (req, res) => {
  const schedule = new Schedule({
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
  });
  schedule.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in saving schedule:" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});


module.exports = router;