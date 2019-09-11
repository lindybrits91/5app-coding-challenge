/* EXTERNAL PACKAGES */
const express = require('express');
const bodyParser = require('body-parser');

/* INTERNAL */
const filter = require('./filter');

/* VARIABLES */
const app = express();
const port = process.env.PORT || 3000;

/* MIDDLEWARE */
app.use(bodyParser.json());

/* API */
app.post('/', (req, res) => {
    const data = req.body;
    const filteredData = filter(data);
    res.json(filteredData);
});

/* CREATE WEBSERVER */
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

