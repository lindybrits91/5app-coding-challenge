/* EXTERNAL PACKAGES */
const express = require('express');

/* VARIABLES */
const app = express();
const port = process.env.PORT;

/* API */
app.get('/', (req, res) => {
    res.json({ message: 'Hello!' });
});

/* CREATE WEBSERVER */
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

