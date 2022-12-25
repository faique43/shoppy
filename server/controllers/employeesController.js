const express = require('express');
const router = express.Router();

const { Employee } = require('../models/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in retrieving employee list: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
