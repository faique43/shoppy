const express = require("express");
const router = express.Router();

const { Line } = require("../models/line");

router.get("/", (req, res) => {
  Line.find()
    .then((lines) => {
      // lines.forEach((line) => {
      //   line.dataSource = line.dataSource.map((data) => ({
      //     x: new Date(data.x, 0, 1),
      //     y: data.y,
      //   }));
      // });
      res.send(lines);
      // console.log(lines[1].datasource[1].x);
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
