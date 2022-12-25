const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const mongoose = require("./db");
const ordersController = require("./controllers/ordersController");
const employeesController = require("./controllers/employeesController");
const customersController = require("./controllers/customersController");
const scheduleController = require("./controllers/schedulesController");
const kanbanController = require("./controllers/kanbansController");
const lineController = require("./controllers/linesController");

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.listen(3001, () => {
  console.log("Server started at port 3001");
});

app.use("/orders", ordersController);
app.use("/employees", employeesController);
app.use("/customers", customersController);
app.use("/schedules", scheduleController);
app.use("/kanbans", kanbanController);
app.use("/lines", lineController);
