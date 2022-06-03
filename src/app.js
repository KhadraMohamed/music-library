const express = require ('express');

const app = express();

app.use(express.json());

app.get('/', (request, respond) => {
    respond.send('Hello World!')
});

module.exports = app;