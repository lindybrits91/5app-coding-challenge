/* EXTERNAL PACKAGES */
const express = require('express');

/* VARIABLES */
const app = express();
const port = 3000;

/* API */
app.get('/', (req, res) => {
    res.json({ message: 'Hello!' });
});

/* CREATE WEBSERVER */
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

