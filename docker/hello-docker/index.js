
const express = require('express');

// Constants

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Docker');
});

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);